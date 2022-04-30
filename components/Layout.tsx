import { Box, Stack } from "@chakra-ui/layout";
import { useStoreState } from "easy-peasy";
import { NextComponentType } from "next";
import { StoreModel } from "../types";
import Player from "./PlayerBar";
import Sidebar from "./Sidebar";

const Layout: NextComponentType = ({ children }) => {
  const activeSong = useStoreState<StoreModel>((state) => state.activeSong);
  return (
    <>
      <Stack direction="row" height="100%" position="relative" spacing="0">
        <Box
          as="header"
          position="fixed"
          overflowY="auto"
          height={`calc(100% - ${activeSong ? "var(--playerHeight)" : "0px"})`}
          width="var(--sidebarWidth)"
          backgroundColor="#000"
          pt="5"
          px="5"
          pb="2"
          transition="height .2s"
        >
          <Sidebar />
        </Box>
        <Stack
          as="main"
          pb={`${activeSong ? "var(--playerHeight)" : "0"}`}
          ps="var(--sidebarWidth)"
          flexGrow="1"
          transition="padding .2s"
        >
          {children}
        </Stack>
      </Stack>
      <Player />
    </>
  );
};

export default Layout;
