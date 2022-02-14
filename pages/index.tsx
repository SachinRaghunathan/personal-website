import { Center, Container, Wrap, WrapItem } from "@chakra-ui/react";
import Head from "next/head";
import { Feature } from "../components/Feature";
import Layout, { siteTitle } from "../components/layout";

const Home = () => {
  return (
    <Container maxW="container.2xl" maxH="100%" p={6}>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <Center>
          <Wrap width="80%" spacing="30px" justify="center">
            <WrapItem>
              <Feature title="About me" text="Oh hello!" />
            </WrapItem>
            <WrapItem>
              <Feature
                title="Credit Cards 💳"
                text="Business class, everytime 😎"
              />
            </WrapItem>
            <WrapItem>
              <Feature title="Blog" text="Random thoughts" link="/blog" />
            </WrapItem>
            <WrapItem>
              <Feature title="Resume" link="/sachin-raghunathan-resume.pdf" />
            </WrapItem>
          </Wrap>
        </Center>
      </Layout>
    </Container>
  );
};

export default Home;
