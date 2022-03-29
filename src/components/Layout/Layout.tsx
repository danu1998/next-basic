import React, { ReactNode } from "react";
import Header from "../Header/Header";
import styles from "../../../styles/Layout.module.css";
import Head from "next/head";
interface layoutProps {
  children: ReactNode;
  pageTitle: string;
}
const Layout = (props: layoutProps) => {
  const { children, pageTitle } = props;
  return (
    <div>
      <Head>
        <title>Next Basic || {pageTitle}</title>
        <meta name="description" content="Website Next Basic" />
      </Head>
      <Header />
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default Layout;
