/* eslint-disable react/jsx-props-no-spreading */

import { Fragment, useEffect } from "react";
import { Provider as AuthProvider } from "next-auth/client";
import Head from "next/head";
import { useRouter } from "next/router";
import * as Fathom from "fathom-client";
import { SWRConfig } from "swr";
import NotificationsContainer from "../admin/components/notifications/NotificationsContainer";
import "tailwindcss/tailwind.css";

async function fetcher(...args) {
  const response = await fetch(...args);
  const data = await response.json();

  if (!response.ok) {
    const error = new Error("Error Fetching Data");
    error.status = response.status;

    if (data?.errors?.length === 1) {
      error.name = data.errors[0].name;
      error.message = data.errors[0].message;
    } else {
      error.name = "Encountered Errors";
      error.entries = data.errors;
    }

    throw error;
  }

  return data;
}

function AdminConditionalWrapper({ pageProps, children }) {
  const router = useRouter();

  if (router.pathname.startsWith("/admin")) {
    return (
      <AuthProvider session={pageProps.session}>
        <NotificationsContainer>
          <SWRConfig value={{ fetcher }}>{children}</SWRConfig>
        </NotificationsContainer>
      </AuthProvider>
    );
  }

  return children;
}

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
      <AdminConditionalWrapper pageProps={pageProps}>
        <Component {...pageProps} />
      </AdminConditionalWrapper>
    </Fragment>
  );
}
