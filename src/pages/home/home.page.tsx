import { useEffect, useState } from "react";

import styles from "./home.module.scss";

import { LazyLoadImage } from "react-lazy-load-image-component";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Home = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const delay = 700;
    const timeoutId = setTimeout(() => {
      setShowContent(true);
    }, delay);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={styles.container}>
      {showContent && (
        <div className={styles.wrapper}>
          <div className={styles.aboutTitle}>
            <h1 style={{ fontSize: " 4rem" }}>About Me.</h1>
          </div>
          <div className={styles.contentArea}>
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
                  Role: "Developer Front-End";
                </p>
                <p
                  style={{
                    marginTop: "0",
                    marginBottom: "1rem",
                    fontSize: " 1rem",
                    opacity: "0.5",
                  }}
                >
                  {"//"}FATEC Mogi das Cruzes - System Analysis & Development
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
                    fontSize: " 1rem",
                    opacity: "0.5",
                  }}
                >
                  {"//"}My goal with this portfolio is to encapsulate all my
                  qualities,
                  <br /> like being a music producer, photographer or a software
                  developer in a simple and intuitive way. More on the Future.
                </p>
              </div>
            </div>
            <div className={styles.profileCard}>
              <LazyLoadImage
                className={styles.profilePicture}
                src="/assets/images/profile_pic.jpg"
                alt="Profile Picture"
                effect="blur"
                visibleByDefault={true}
              />

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
        </div>
      )}
    </div>
  );
};

export default Home;
