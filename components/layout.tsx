import { Container } from "@chakra-ui/react";
import Head from "next/head";
import { Footer } from "./Footer/Footer";
import Header from "./Header/Header";

export const siteTitle = "Sachin Raghunathan";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <Container maxW="container.2xl" maxH="100%" p={6}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
}
