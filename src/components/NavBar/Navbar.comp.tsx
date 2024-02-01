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
          Discografia.
        </Link>
        <div className={styles.categorySelector}>
          Fotografia.
          <span className={styles.span}>Página em Desenvolvimento</span>
        </div>
        <Link href="/video" className={styles.categorySelector}>
          Vídeografia.
        </Link>
        <div className={styles.categorySelector}>
          Desenvolvimento.
          <span className={styles.span}>Página em Desenvolvimento</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
