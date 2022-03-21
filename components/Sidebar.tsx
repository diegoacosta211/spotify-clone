import {
  Link,
  Stack,
  VStack,
  List,
  ListItem,
  Divider,
  Box,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import NextLink from "next/link";
import { NextComponentType } from "next";
import { mainMenu, musicMenu } from "menus/index.js";
import { Logo } from "../icons/index.js";
import MenuItem from "./MenuItem";

const Sidebar: NextComponentType = () => (
  <Box
    as="header"
    position="absolute"
    height="calc(100% - var(--playerHeight))"
    width="var(--sidebarWidth)"
    backgroundColor="#000"
    pt="5"
    ps="5"
    pe="5"
    pb="2"
  >
    <NextLink href="/" passHref>
      <Link display="block" href="/" mb="8">
        <Logo
          w="100%"
          maxW="140px"
          height="auto"
          color="red"
          sx={{
            "&:hover path": {
              fill: "green.300",
              transition: "all .3s",
            },
          }}
        />
      </Link>
    </NextLink>

    <VStack as="nav" alignItems="initial" spacing={9}>
      <List spacing={4}>
        {mainMenu.map((item) => (
          <ListItem>
            <MenuItem item={item} />
          </ListItem>
        ))}
      </List>
      <List spacing={4}>
        {musicMenu.map((item) => (
          <ListItem>
            <MenuItem item={item} />
          </ListItem>
        ))}
      </List>
    </VStack>
    <Divider borderColor="gray.800" my="4" />
    <Box height="50%" overflowY="auto">
      <List>
        {new Array(50).fill(1).map((_, idx) => (
          <ListItem color="gray.400" key={_}>
            <LinkBox>
              <NextLink href="/" passHref>
                <LinkOverlay>Playlist {idx + 1}</LinkOverlay>
              </NextLink>
            </LinkBox>
          </ListItem>
        ))}
      </List>
    </Box>
  </Box>
);

export default Sidebar;
