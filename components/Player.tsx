import { Stack, Text } from "@chakra-ui/layout";
import { NextComponentType } from "next";

const Player: NextComponentType = () => (
  <Stack
    as="aside"
    position="fixed"
    left="0"
    bottom="0"
    width="100%"
    height="var(--playerHeight)"
    backgroundColor="var(--playerBg)"
  >
    <Text>Player</Text>
  </Stack>
);

export default Player;
