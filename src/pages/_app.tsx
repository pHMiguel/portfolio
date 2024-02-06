import { Navbar } from "@/components";
import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { Raleway } from "next/font/google";
import Head from "next/head";
import LazyLoad from "react-lazy-load";

const raleway = Raleway({
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={raleway.className}>
      <Head>
        <title>{"Aphonso Portfolio"}</title>
      </Head>
      <main>
        <LazyLoad offset={50}>
          <video
            src="../assets/videos/bg_video_01TESTE.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              objectFit: "cover",
              zIndex: -1,
            }}
          />
        </LazyLoad>
        <Navbar />
        <Component {...pageProps} />
      </main>
    </div>
  );
}
