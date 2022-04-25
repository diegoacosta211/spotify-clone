import { Box, Stack, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { NextComponentType } from "next";

const Player: NextComponentType = () => {
  const song = {
    name: "Sarasa",
    artist: "Sarasa Artist",
  };
  return (
    <Stack
      as="aside"
      position="fixed"
      left="0"
      bottom="0"
      width="100%"
      p={4}
      height="var(--playerHeight)"
      backgroundColor="var(--darkBg)"
      direction="row"
      alignItems="center"
    >
      <Stack direction="row" justifyContent="space-between" flexGrow="1">
        <Stack direction="row" alignItems="center" flexBasis="30%">
          <Image src="https://picsum.photos/150" boxSize="60px" />
          <Stack spacing="0">
            <Text color="gray.400" fontWeight="600" mb="0">
              {song.name}
            </Text>
            <Text fontSize="sm" color="gray.500">
              {song.artist}
            </Text>
          </Stack>
        </Stack>
        <Stack flexBasis="40%">Col two</Stack>
        <Stack flexBasis="30%">Col Three</Stack>
      </Stack>
    </Stack>
  );
};

export default Player;
