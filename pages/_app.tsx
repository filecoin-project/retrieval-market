import "tailwindcss/tailwind.css";
import { useEffect } from "react";
import Router from "next/router";
import Layout from "../components/Layout";
import countly from "../lib/countly";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    countly.init();
    Router.events.on("routeChangeComplete", (route) => {
      countly.trackPageView(route);
    });
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
