import dynamic from "next/dynamic";
import { Provider } from "react-redux";
// import MainLayout from "../component/layout/MainLayout";
const MainLayout = dynamic(() => import("../component/layout/MainLayout"), {
  ssr: false,
});

import store from "../store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />{" "}
      </MainLayout>
    </Provider>
  );
}

export default MyApp;
