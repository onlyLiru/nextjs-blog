import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";
import Alert from "../../components/alert.tsx";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>first post</title>
      </Head>
      <h1 className="myH2">First Post</h1>
      <h2>
        <Link href="/">
          <a className="backToHome">Back to home</a>
        </Link>
      </h2>
      <Alert type="success">success Alert</Alert>
      <Alert type="error">error Alert</Alert>
      <style jsx>{`
          h1 {
            color:#f90
          }
          .myH2 {
            color:#f00
          }
        `}</style>
    </Layout>
  );
}
