import Link from "next/link";
import styles from "../../../styles/Header.module.css";
const Header = () => {
  return (
    <div>
      <header className={styles.nav}>
        <h2>Next Basic</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
