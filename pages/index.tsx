import { Center, Wrap, WrapItem } from "@chakra-ui/react";
import { Feature } from "../components/Feature";
import Layout from "../components/layout";

const Home = () => {
  return (
    <Layout home>
      <Center>
        <Wrap width="80%" spacing="30px" justify="center">
          <WrapItem>
            <Feature title="About me" text="Start here!" link="/intro" />
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
            <Feature title="Resume" link="/Sachin_Raghunathan_27Aug2024.pdf" />
          </WrapItem>
        </Wrap>
      </Center>
    </Layout>
  );
};

export default Home;
