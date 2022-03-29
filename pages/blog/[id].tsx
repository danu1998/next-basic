import { useRouter } from "next/router";
import Layout from "../../src/components/Layout/Layout";

interface getStaticProps {
  params: {
    id: string;
  };
}

interface Blog {
  id: number;
  name: string;
  email: string;
  username: string;
}

interface blogDetail {
  blog: Blog;
}

const blogdetail = (props: blogDetail) => {
  const { blog } = props;
  // const router = useRouter();
  // const { id } = router.query;
  return (
    <div>
      <Layout pageTitle="Detail Blog Page">
        <h1>blog detail page</h1>
        <p>{blog.name}</p>
        <p>{blog.email}</p>
        <p>{blog.username}</p>
      </Layout>
    </div>
  );
};

export default blogdetail;

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataBlogs = await res.json();
  const paths = dataBlogs.map((blog: Blog) => {
    return {
      params: {
        id: `${blog.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: getStaticProps) => {
  const { id } = context.params;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const blog = await res.json();

  return {
    props: {
      blog,
    },
  };
};
