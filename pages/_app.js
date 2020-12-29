import { Fragment, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import * as Fathom from 'fathom-client';
import { SWRConfig } from 'swr';
import 'tailwindcss/tailwind.css';

async function fetcher(...args) {
  const response = await fetch(...args);
  const data = await response.json();

  if (!response.ok) {
    const error = new Error('Error Fetching Data');
    error.status = response.status;

    if (data?.errors?.length === 1) {
      error.name = data.errors[0].name;
      error.message = data.errors[0].message;
    } else {
      error.name = 'Encountered Errors';
      error.entries = data.errors;
    }

    throw error;
  }

  return data;
}

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Initialize Fathom when the app loads
    Fathom.load('FZCFZQRR', {
      includedDomains: ['ramble.pub'],
      url: 'https://wildcat.ramble.pub/script.js',
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, []);

  return (
    <Fragment>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
    </Fragment>
  );
}
