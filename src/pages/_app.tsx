import { useState } from "react";
import { Navbar, BackgroundSelector } from "@/components";
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
      </Head>
      <main>
        <Navbar />
        <Component {...pageProps} />
        {selectedBackground === "1" && (
          <video
            src="../assets/videos/bg_video_01.mp4"
            autoPlay
            loop
            muted
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100%",
              objectFit: "cover",
              zIndex: -1,
            }}
          />
        )}
        {selectedBackground === "2" && (
          <video
            src="../assets/videos/bg_video_02.mp4"
            autoPlay
            loop
            muted
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100%",
              objectFit: "cover",
              zIndex: -1,
            }}
          />
        )}
        {selectedBackground === "3" && (
          <video
            src="../assets/videos/bg_video_03.mp4"
            autoPlay
            loop
            muted
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100%",
              objectFit: "cover",
              zIndex: -1,
            }}
          />
        )}
        <BackgroundSelector onBackgroundChange={handleBackgroundChange} />
      </main>
    </div>
  );
}
