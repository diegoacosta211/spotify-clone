import { Global, css } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import theme from "@/styles/theme";
import Layout from "../components/Layout";

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        :root {
          --sidebarWidth: 242px;
          --playerHeight: 100px;
          --playerBg: #181818;
        }

        html,
        body {
          height: 100%;
        }

        #__next {
          width: 100vw;
          height: 100vh;
        }
      `}
    />
  );
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default MyApp;
