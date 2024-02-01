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
        <Link href="/photo" className={styles.categorySelector}>
          Fotografia.
        </Link>
        <Link href="/video" className={styles.categorySelector}>
          Vídeografia.
        </Link>
        <Link href="/dev" className={styles.categorySelector}>
          Desenvolvimento.
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
