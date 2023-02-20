import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@master/css";
import { Analytics } from "@vercel/analytics/react";
import { Helmet } from "react-helmet";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Helmet>
        <meta
          name="facebook-domain-verification"
          content="48u1i5mrzdka54tpxve8kcpceme65a"
        />
      </Helmet>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
