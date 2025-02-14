import { useEffect, useState } from "react";

import styles from "./music.module.scss";
import ReactPlayer from "react-player";

const Music = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const delay = 1000;
    const timeoutId = setTimeout(() => {
      setShowContent(true);
    }, delay);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={styles.container}>
      {showContent && (
        <div className={styles.wrapper}>
          <div className={styles.contentArea}>
            <div className={styles.playlistArea}>
              <h1 style={{ fontSize: " 2rem" }}>A e s t a s</h1>
              <p style={{ fontSize: " 1rem", opacity: "0.5" }}>Main Profile</p>
              <ReactPlayer
                url="https://soundcloud.com/ph_miguel/tracks"
                width={"90%"}
                height={"27rem"}
              />
            </div>
            <div className={styles.playlistArea}>
              <h1 style={{ fontSize: " 2rem" }}>pH</h1>
              <p style={{ fontSize: " 1rem", opacity: "0.5" }}>
                Secondary Profile
              </p>
              <ReactPlayer
                url="https://soundcloud.com/miguel_ph/tracks"
                width={"90%"}
                height={"27rem"}
              />
            </div>
            </div>
          </div>
      )}
    </div>
  );
};

export default Music;
