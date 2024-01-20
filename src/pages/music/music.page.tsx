import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import styles from "./music.module.scss";
import ReactPlayer from "react-player";

import { Navbar } from "@/components";

const Music = () => {
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
          <Col className={styles.playlistArea}>
            <h1>A e s t a s</h1>
            <p>Conta Principal</p>
            <ReactPlayer
              className={styles.player}
              url="https://soundcloud.com/ph_miguel/tracks"
              width={"30vw"}
              height={"65vh"}
            />
          </Col>

          <Col className={styles.playlistArea}>
            <h1>pH</h1>
            <p>Conta Secundária</p>
            <ReactPlayer
              className={styles.player}
              url="https://soundcloud.com/miguel_ph/tracks"
              width={"30vw"}
              height={"65vh"}
            />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Music;
