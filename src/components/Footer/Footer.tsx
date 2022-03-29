import Link from "next/link";
import React from "react";
import styles from "../../../styles/Footer.module.css";

const Footer = () => {
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
          <li className={styles.item}>
            <Link href="/blog/blogdetail">Detail</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Footer;
