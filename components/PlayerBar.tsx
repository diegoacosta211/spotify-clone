import { Stack, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { NextComponentType } from "next";
import { useStoreState } from "easy-peasy";
import Player from "./Player";
import { StoreModel } from "../types";

const PlayerBar: NextComponentType = () => {
  const activePlaylist = useStoreState<StoreModel>(
    (state) => state.activePlaylist
  );
  const activeSong = useStoreState<StoreModel>((state) => state.activeSong);
  return (
    <Stack
      as="aside"
      position="fixed"
      left="0"
      bottom="0"
      width="100%"
      px={4}
      py={3}
      height="var(--playerHeight)"
      backgroundColor="var(--darkBg)"
      direction="row"
      alignItems="center"
      transform={`translateY(${!activeSong ? "100%" : 0})`}
      transition="transform .2s"
    >
      {activeSong ? (
        <Stack direction="row" justifyContent="space-between" flexGrow="1">
          <Stack direction="row" alignItems="center" flexBasis="30%">
            <Image src="https://picsum.photos/150" boxSize="60px" />
            <Stack spacing="0">
              <Text color="gray.400" fontWeight="600" mb="0">
                {activeSong?.name}
              </Text>
              <Text fontSize="sm" color="gray.500">
                {activeSong?.artist.name}
              </Text>
            </Stack>
          </Stack>
          <Stack flexBasis="40%">
            <Player songs={activePlaylist} activeSong={activeSong} />
          </Stack>
          <Stack flexBasis="30%">Col Three</Stack>
        </Stack>
      ) : null}
    </Stack>
  );
};

export default PlayerBar;
