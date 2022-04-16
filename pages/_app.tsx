import { Global, css } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import theme from "@/styles/theme";
import { NextComponentType } from "next/types";
import Layout from "../components/Layout";

// Add custom appProp type with using union in type
type CustomAppProps = AppProps & {
  Component: NextComponentType & { authPage?: boolean };
};

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        :root {
          --sidebarWidth: 242px;
          --playerHeight: 100px;
          --darkBg: #181818;
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

const MyApp = ({ Component, pageProps }: CustomAppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      {Component.authPage ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </ChakraProvider>
  );
};

export default MyApp;
