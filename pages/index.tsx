import { Box, Center, Container, SimpleGrid } from "@chakra-ui/react";
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
        <Center>
          <SimpleGrid w="60%" columns={2} spacingX="40px" spacingY="20px">
            <Box bg="tomato" height="160px"></Box>
            <Box bg="tomato" height="160px"></Box>
            <Box bg="tomato" height="160px"></Box>
            <Box bg="tomato" height="160px"></Box>
          </SimpleGrid>
        </Center>
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
