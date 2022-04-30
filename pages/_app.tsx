import { Global, css } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";
import { StoreProvider } from "easy-peasy";
import type { AppProps } from "next/app";
import theme from "@/styles/theme";
import { NextComponentType } from "next/types";
import { store } from "@/lib/store";
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
          --playerHeight: 90px;
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
      <StoreProvider store={store}>
        {Component.authPage ? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </StoreProvider>
    </ChakraProvider>
  );
};

export default MyApp;
