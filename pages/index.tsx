import type { NextPage } from "next";
import Layout from "../src/components/Layout/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Layout pageTitle="Home Page">
        <h1>Home Page</h1>
      </Layout>
    </div>
  );
};

export default Home;
