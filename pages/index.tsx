import { MoonIcon } from "@chakra-ui/icons";
import { Center, Container, Wrap, WrapItem } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Feature } from "../components/Feature";
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
          <Wrap width="80%" spacing="30px" justify="center">
            <WrapItem>
              <Feature
                title="About me"
                icon={<MoonIcon />}
                text="Oh hello!"
              ></Feature>
            </WrapItem>
            <WrapItem>
              <Feature
                title="Credit Cards 💳"
                icon={<MoonIcon />}
                text="Business class, everytime 😎"
              ></Feature>
            </WrapItem>
            <WrapItem>
              <Feature
                title="Blog"
                icon={<MoonIcon />}
                text="Random thoughts"
              ></Feature>
            </WrapItem>
            <WrapItem>
              <Feature title="Resume" icon={<MoonIcon />}></Feature>
            </WrapItem>
          </Wrap>
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
