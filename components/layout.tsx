import { Stack } from "@chakra-ui/react";
import Link from "next/link";
import { Footer } from "./Footer/Footer";
import Header from "./Header/Header";
import styles from "./layout.module.css";

const name = "Sachin Raghunathan";
export const siteTitle = "Sachin Raghunathan";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <>
      {/* {home ? (
          <VStack spacing={8}>
            <Avatar
              name="Sachin Raghunathan"
              src="/images/profile.jpg"
              size="2xl"
            />
            <Heading>Sachin Raghunathan</Heading>
          </VStack>
        ) : (
          <>
            <Link href="/">
              <a>
                <Avatar
                  name="Sachin Raghunathan"
                  src="/images/profile.jpg"
                  size="xl"
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )} */}
      <Header />
      <Stack direction="column" spacing={8} justify="space-between">
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </Stack>

      <Footer />
    </>
  );
}
