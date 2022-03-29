import { useRouter } from "next/router";
import Layout from "../../src/components/Layout/Layout";
import styles from "../../styles/Blog.module.css";
interface userProps {
  dataBlogs: Array<any>;
}

const blog = (props: userProps) => {
  const { dataBlogs } = props;
  console.log(dataBlogs);
  const router = useRouter();

  return (
    <div>
      <Layout pageTitle="Blog Page">
        <h1>Blog Page</h1>
        <div className={styles.row}>
          {dataBlogs.map((blog) => {
            return (
              <div
                className={styles.card}
                key={blog.id}
                onClick={() => router.push(`/blog/${blog.id}`)}
              >
                <p>Full Name : {blog.name}</p>
                <p>Email : {blog.email}</p>
              </div>
            );
          })}
        </div>
      </Layout>
    </div>
  );
};

export default blog;

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataBlogs = await res.json();
  return {
    props: {
      dataBlogs: dataBlogs,
    },
  };
};
