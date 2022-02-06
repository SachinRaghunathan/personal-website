import { ChakraProvider, extendTheme, ThemeConfig } from "@chakra-ui/react";
import { AppProps } from "next/app";
import "../styles/global.css";

const colors: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ colors });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
