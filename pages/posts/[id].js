import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  console.log(paths);
  return {
    paths: [{ params: { id: "pre-rendering" } }, { params: { id: "ssg-ssr" } }],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const { params } = context;
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
}
