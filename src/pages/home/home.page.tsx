import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import styles from "./home.module.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import { Navbar } from "@/components";

const Home = () => {
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
          height: "100vh",
          objectFit: "cover",
        }}
      />
      {showContent && (
        <Row className={styles.contentArea} xs={1} md={2}>
          <Col className={styles.about}>
            <h1 style={{ marginBottom: "40px", fontSize: " 4vw" }}>
              About Me.
            </h1>
            <p style={{ marginBottom: "3px", fontSize: " 1.8vw" }}>
              Name: "Aphonso Miguel da Silva Oliveira Silva";
            </p>

            <p
              style={{
                marginBottom: "15px",
                fontSize: " 1vw",
                opacity: "0.5",
              }}
            >
              //AKA: "pH.";
            </p>
            <p style={{ marginBottom: "3px", fontSize: " 1.8vw" }}>
              Role: "Developer Front-End";
            </p>
            <p
              style={{
                marginBottom: "15px",
                fontSize: " 1vw",
                opacity: "0.5",
              }}
            >
              //FATEC Mogi das Cruzes - Análise e Desenvolvimento de Sistemas
            </p>
            <p style={{ marginBottom: "15px", fontSize: " 1.8vw" }}>
              Short-Term-Objectives: "Estágio como Desenvolvedor";
            </p>
            <p style={{ marginBottom: "40px", fontSize: " 1.8vw" }}>
              Long-Term-Objectives: "CyberSecurity Specialist";
            </p>
            <p style={{ fontSize: " 1vw", opacity: "0.5" }}>
              //Meu objetivo com esse portifólio é encapsular todas as minhas
              qualidades,
              <br /> sendo produtor musical, fotógrafo ou desenvolvedor de uma
              maneira simples e intuitiva.
            </p>
          </Col>
          <Col className={styles.profileCard} xs md="auto">
            <img
              className={styles.profilePicture}
              src="/assets/images/profile_pic.jpg"
              alt="Profile Picture"
            />
            <Row className={styles.buttonArea}>
              <Col>
                <a
                  href="https://www.instagram.com/_ph_miguel/"
                  className={styles.social}
                  target="_blank"
                >
                  <InstagramIcon fontSize="large" />
                </a>
              </Col>
              <Col>
                <a
                  href="https://www.linkedin.com/in/aphonso-m-067a24189/"
                  className={styles.social}
                  target="_blank"
                >
                  <LinkedInIcon fontSize="large" />
                </a>
              </Col>
              <Col>
                <a
                  href="https://github.com/pHMiguel"
                  className={styles.social}
                  target="_blank"
                >
                  <GitHubIcon fontSize="large" />
                </a>
              </Col>
              <Col>
                <a
                  href="https://www.youtube.com/channel/UC8bbopPs56dDW0iBoqOqaVg"
                  className={styles.social}
                  target="_blank"
                >
                  <YouTubeIcon fontSize="large" />
                </a>
              </Col>
              <Col>
                <a
                  href="mailto:aphonso99@gmail.com"
                  className={styles.social}
                  target="_blank"
                >
                  <MailOutlineIcon fontSize="large" />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Home;
