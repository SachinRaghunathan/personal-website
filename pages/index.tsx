import { Container } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";

export default function Home() {
  return (
    <Container maxW="container.2xl" maxH="100%" p={6}>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </Layout>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
