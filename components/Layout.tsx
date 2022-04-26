import { Stack } from "@chakra-ui/layout";
import { NextComponentType } from "next";
import Player from "./PlayerBar";
import Sidebar from "./Sidebar";

const Layout: NextComponentType = ({ children }) => {
  return (
    <>
      <Stack direction="row" height="100%" position="relative" spacing="0">
        <Sidebar />
        <Stack
          as="main"
          pb="var(--playerHeight)"
          ps="var(--sidebarWidth)"
          flexGrow="1"
        >
          {children}
        </Stack>
      </Stack>
      <Player />
    </>
  );
};

export default Layout;
