import styles from "./Navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/home" className={styles.name} replace>
        Aphonso Miguel.
      </Link>

      <div className={styles.headerLinks}>
        <Link href="/music" className={styles.categorySelector} replace>
          Discography.
        </Link>
        <div className={styles.categorySelector}>
          Photo Album.
          <span className={styles.span}>Under Development</span>
        </div>
        <Link href="/video" className={styles.categorySelector} replace>
          Videography.
        </Link>
        <div className={styles.categorySelector}>
          Dev Projects.
          <span className={styles.span}>Under Development</span>
        </div>
      </div>

      
    </div>
  );
};

export default Navbar;
