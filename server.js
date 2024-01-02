const express = require("express");
var cors = require("cors");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const PORT = process.env.PORT || 3000;

const app = next({ dir: ".", dev });

const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    const whitelist = [
      "http://localhost:3000",
      "http://127.0.0.1:3000",
      "https://najam.in",
      "https://najamuddin11.github.io/najam-porfolio-v2/",
    ];

    server.use(cors());

    server.use(express.text({ limit: "200mb" }));

    server.use(express.json({ limit: "200mb" }));

    server.use(
      express.urlencoded({
        extended: false,
        parameterLimit: 90000000,
        limit: "200mb",
      })
    );
    server.use(cookieParser());

    server.use((req, res, next) => {
      if (whitelist.includes(req.headers.origin)) {
        res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
      }
      // Set to true if you need the website to include cookies in the requests sent

      // Request methods you wish to allow
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
      );
      // Request headers you wish to allow
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,content-type,set-cookie,x-xsrf-token,x-csrf-token,CSRF-Token,XSRF-TOKEN,Accept,Access-Control-Allow-Origin"
      );

      // to the API (e.g. in case you use sessions)
      res.setHeader("Access-Control-Allow-Credentials", true);

      // Pass to next layer of middleware
      next();
    });

    var csrfProtection = csrf({ cookie: true });

    server.use((req, res, next) => {
      csrfProtection(req, res, next);
    });
    server.use((req, res, next) => {
      res.cookie("XSRF-TOKEN", req.csrfToken(), {
        sameSite: "Strict",
        secure: true,
      });
      next();
    });
    const main = require("./server/routes/main/main");

    server.use("/api", main);

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, (err) => {
      if (err) throw err;

      console.log(`Ready on ${PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
