import {
  Link,
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
import { mainMenu, musicMenu } from "menus";
import { usePlaylist } from "@/lib/hooks";
import { Logo } from "../icons/Index.js";
import MenuItem from "./MenuItem";

const Sidebar: NextComponentType = () => {
  const { playlist, isLoading } = usePlaylist();
  return (
    <Box>
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
            <ListItem key={item.name}>
              <MenuItem item={item} />
            </ListItem>
          ))}
        </List>
        <List spacing={4}>
          {musicMenu.map((item) => (
            <ListItem key={item.name}>
              <MenuItem item={item} />
            </ListItem>
          ))}
        </List>
      </VStack>
      <Divider borderColor="gray.800" my="4" />
      <Box height="50%" overflowY="auto">
        <List>
          {isLoading ? (
            <Box>Loading...</Box>
          ) : (
            playlist.length &&
            playlist.map((item) => (
              <ListItem color="gray.400" key={item.id}>
                <LinkBox>
                  <NextLink
                    href={{
                      pathname: "/playlist/[id]",
                      query: { id: item.id },
                    }}
                    passHref
                  >
                    <LinkOverlay>{item.name}</LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))
          )}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
