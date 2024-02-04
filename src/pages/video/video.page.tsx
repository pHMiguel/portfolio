import { useEffect, useState } from "react";

import styles from "./video.module.scss";

const Video = () => {
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
          <div className={styles.videoTitle}>
            <h1>Video Projects</h1>
          </div>
          <div className={styles.contentArea}>
            <div className={styles.videoArea}>
              <iframe
                width="90%"
                height="90%"
                src="https://www.youtube.com/embed/z9lJh5dzzxI?si=PEKjTRHt_0JlKwbQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className={styles.videoArea}>
              <iframe
                width="90%"
                height="90%"
                src="https://www.youtube.com/embed/Jc1lr0EC6Rk?si=RtaYXCNVW-TUSlVv"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;
