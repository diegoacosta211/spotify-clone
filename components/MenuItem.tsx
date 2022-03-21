import NextLink from "next/link";
import { LinkBox, LinkOverlay, ListIcon } from "@chakra-ui/layout";

const MenuItem = ({ item }) => (
  <LinkBox>
    <NextLink key={item.name} href={item.url} passHref>
      <LinkOverlay
        color="gray.400"
        _hover={{ color: "gray.100" }}
        display="flex"
        alignItems="center"
      >
        <ListIcon w={6} h={6} as={item.icon} me={3} />
        {item.name}
      </LinkOverlay>
    </NextLink>
  </LinkBox>
);

export default MenuItem;
