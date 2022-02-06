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
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
