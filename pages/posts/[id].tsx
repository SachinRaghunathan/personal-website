import { Container, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import Date from "../../components/date";
import { Footer } from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { getAllPostIds, getPostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    fileContents: string;
  };
}) {
  return (
    <>
      <Header />
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Container maxW="container.md">
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <Text color="gray" paddingBottom={3}>
          <Date dateString={postData.date} />
        </Text>
        <ReactMarkdown children={postData.fileContents} />
      </Container>
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};
