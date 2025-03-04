import { useEffect, useState } from "react";

import styles from "./home.module.scss";

import "react-lazy-load-image-component/src/effects/blur.css";

import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Music from "../music";
import Video from "../video";

const Home = () => {
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
          <h1 className={styles.title}>About Me.</h1>
          <div className={styles.contentAreaIntroduction}>
            <div className={styles.aboutTextWrapper}>
              <div className={styles.aboutText}>
                <p
                  style={{
                    marginTop: "0",
                    marginBottom: "0.5rem",
                    fontSize: " 2rem",
                  }}
                >
                  Name: "Aphonso Miguel da Silva Oliveira Silva";
                </p>
                <p
                  style={{
                    marginTop: "0",
                    marginBottom: "1rem",
                    marginLeft: "1rem",
                    fontSize: " 1rem",
                    opacity: "0.5",
                  }}
                >
                  {"//"}AKA: "pH.";
                </p>
                <p
                  style={{
                    marginTop: "0",
                    marginBottom: "0.5rem",
                    fontSize: " 2rem",
                  }}
                >
                  Role: "Support Analyst Jr ";
                </p>
                <p
                  style={{
                    marginTop: "0",
                    marginBottom: "0.5rem",
                    marginLeft: "1rem",
                    fontSize: " 1rem",
                    opacity: "0.5",
                  }}
                >
                  {"//"}Enterprise-Name: V2 Saúde;
                </p>
                <p
                  style={{
                    marginTop: "0",
                    marginBottom: "1rem",
                    marginLeft: "1rem",
                    fontSize: " 1rem",
                    opacity: "0.5",
                  }}
                >
                  {"//"}University-Name: FATEC Mogi das Cruzes - System Analysis & Development;
                </p>
                <p
                  style={{
                    marginTop: "1rem",
                    marginBottom: "1rem",
                    fontSize: " 2rem",
                  }}
                >
                  Short-Term-Objectives: "Dev Intern";
                </p>
                <p
                  style={{
                    marginTop: "1rem",
                    marginBottom: "1rem",
                    fontSize: " 2rem",
                  }}
                >
                  Long-Term-Objectives: "CyberSecurity Specialist";
                </p>
                <p
                  style={{
                    marginTop: "0",
                    marginBottom: "1rem",
                    marginLeft: "1rem",
                    fontSize: " 1rem",
                    opacity: "0.5",
                  }}
                >
                  {"//"}My goal with this portfolio is to encapsulate all my
                  qualities, 
                  <br/> showcasing my experiences and habilities in a simple and intuitive way.
                </p>
              </div>
            </div>
            <div className={styles.profileCard}>
              <picture>
                <img
                  className={styles.profilePicture}
                  src="https://avatars.githubusercontent.com/u/88747428?v=4"
                  alt="Profile Picture"
                />
              </picture>

              <div className={styles.buttonArea}>
                <a
                  href="https://www.instagram.com/_ph_miguel/"
                  className={styles.social}
                  target="_blank"
                >
                  <InstagramIcon fontSize="large" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aphonso-m-067a24189/"
                  className={styles.social}
                  target="_blank"
                >
                  <LinkedInIcon fontSize="large" />
                </a>
                <a
                  href="https://github.com/pHMiguel"
                  className={styles.social}
                  target="_blank"
                >
                  <GitHubIcon fontSize="large" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UC8bbopPs56dDW0iBoqOqaVg"
                  className={styles.social}
                  target="_blank"
                >
                  <YouTubeIcon fontSize="large" />
                </a>
                <a
                  href="mailto:aphonso99@gmail.com"
                  className={styles.social}
                  target="_blank"
                >
                  <MailOutlineIcon fontSize="large" />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.contentAreaMobile}>
            <Music>
            </Music>
            <Video>
            </Video>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
