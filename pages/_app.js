/* eslint-disable react/jsx-props-no-spreading */
import { Fragment, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import * as Fathom from "fathom-client";
import AdminAppWrapper from "../admin/AppWrapper";
import "tailwindcss/tailwind.css";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Initialize Fathom when the app loads
    Fathom.load("FZCFZQRR", {
      includedDomains: ["ramble.pub"],
      url: "https://wildcat.ramble.pub/script.js",
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on("routeChangeComplete", onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, [router.events]);

  return (
    <Fragment>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <AdminAppWrapper pageProps={pageProps}>
        <Component {...pageProps} />
      </AdminAppWrapper>
    </Fragment>
  );
}
