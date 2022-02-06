import { Footer } from "./Footer/Footer";
import Header from "./Header/Header";

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
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
