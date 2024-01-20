import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import styles from "./video.module.scss";

import { Navbar } from "@/components";

const Video = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const delay = 500;
    const timeoutId = setTimeout(() => {
      setShowContent(true);
    }, delay);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Container className={styles.container} fluid>
      <Navbar />
      <video
        src="../assets/videos/bg_video.mp4"
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      {showContent && (
        <Row className={styles.contentArea}>
          <h2> Edições de Vídeo</h2>
          <Row className={styles.videoArea}>
            <Col>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/z9lJh5dzzxI?si=PEKjTRHt_0JlKwbQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </Col>
            <Col>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Jc1lr0EC6Rk?si=RtaYXCNVW-TUSlVv"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </Col>
          </Row>
        </Row>
      )}
    </Container>
  );
};

export default Video;
