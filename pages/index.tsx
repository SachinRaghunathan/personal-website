import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Container, IconButton, useColorMode } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW="container.xl" p={6}>
      <IconButton
        aria-label="Dark"
        icon={colorMode == "light" ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
      />
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
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
