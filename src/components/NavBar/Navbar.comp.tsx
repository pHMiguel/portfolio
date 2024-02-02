import styles from "./Navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/home" className={styles.name}>
        Aphonso Miguel.
      </Link>

      <div className={styles.header}>
        <Link href="/music" className={styles.categorySelector}>
          Discography.
        </Link>
        <div className={styles.categorySelector}>
          Photo Album.
          <span className={styles.span}>Em Desenvolvimento</span>
        </div>
        <Link href="/video" className={styles.categorySelector}>
          Videography.
        </Link>
        <div className={styles.categorySelector}>
          Dev Projects.
          <span className={styles.span}>Em Desenvolvimento</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
