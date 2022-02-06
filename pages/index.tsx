import { MoonIcon } from "@chakra-ui/icons";
import {
  Center,
  Container,
  useColorModeValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
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
        <Container width="100%">
          <Wrap spacing="20px" justify="center">
            <WrapItem>
              <Center
                bg={useColorModeValue("gray.100", "gray.700")}
                w="310px"
                h="175px"
                rounded={{ md: "lg" }}
              >
                <Feature
                  title="About me"
                  icon={<MoonIcon />}
                  text="Let's get to know each other"
                ></Feature>
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w="310px" h="175px" bg="green.200">
                Box 2
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w="310px" h="175px" bg="tomato">
                Box 3
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w="310px" h="175px" bg="blue.200">
                Box 4
              </Center>
            </WrapItem>
          </Wrap>
        </Container>
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
