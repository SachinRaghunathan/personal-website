import { Container, Stack, Text } from "@chakra-ui/react";
import Layout from "../components/layout";
const Intro = () => {
  return (
    <Layout>
      <Container maxW="container.xl" fontFamily={"monospace"}>
        <Stack spacing={5}>
          <Text>
            Welcome to my Website! I'm Sachin, a software engineer at Oracle.
            But wait, there's more!
          </Text>
          <Text>I play soccer ⚽️ </Text>
          <Text>I play table tennis 🏓 </Text>
          <Text>
            I can dance 🕺🏽! yes, really! well, specifically two forms of partner
            social dance - Bachata and Kizomba!
          </Text>
          <Text>I can play the drums 🥁</Text>
          <Text>
            I have more than 15 active credit cards and I use the points to fly
            business class (not so humble brag, i know)
          </Text>
          <Text>My favorite YouTuber is Veritasium</Text>
          <Text>Feel free to connect using any of the links below!</Text>
        </Stack>
      </Container>
    </Layout>
  );
};

export default Intro;
