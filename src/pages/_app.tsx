import { useState } from "react";
import { Navbar, BackgroundSelector, BackgroundComponent } from "@/components";
import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { Raleway } from "next/font/google";
import Head from "next/head";
const raleway = Raleway({
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  const [selectedBackground, setSelectedBackground] = useState("1");

  const handleBackgroundChange = (selectedBackground: any) => {
    setSelectedBackground(selectedBackground);
  };

  return (
    <div className={raleway.className}>
      <Head>
        <title>{"Aphonso Portfolio"}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <main>
        {selectedBackground === "1" && (
          <BackgroundComponent videoSrc="../assets/videos/bg_video_01.mp4" />
        )}
        {selectedBackground === "2" && (
          <BackgroundComponent videoSrc="../assets/videos/bg_video_02.mp4" />
        )}
        {selectedBackground === "3" && (
          <BackgroundComponent videoSrc="../assets/videos/bg_video_03.mp4" />
        )}

        <Navbar />
        <Component {...pageProps} />
        <BackgroundSelector onBackgroundChange={handleBackgroundChange} />
      </main>
    </div>
  );
}
