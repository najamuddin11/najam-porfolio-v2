import dynamic from "next/dynamic";
import { Provider } from "react-redux";
const MainLayout = dynamic(() => import("../component/layout/MainLayout"), {
  ssr: false,
});

import store from "../store";

import "../styles/globals.css";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Head from "next/head";
import axios from "axios";
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_PATH;
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Najam Uddin</title>
      </Head>
      <MainLayout>
        <Component {...pageProps} />{" "}
      </MainLayout>
    </Provider>
  );
}

export default MyApp;
