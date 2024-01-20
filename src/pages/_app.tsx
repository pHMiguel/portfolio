import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Raleway } from "next/font/google";
import Head from "next/head";
import { StrictMode } from "react";

const raleway = Raleway({
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={raleway.className}>
      <Head>
        <title>{"Aphonso Portfolio"}</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
