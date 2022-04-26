import { Box, Stack } from "@chakra-ui/layout";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  IconButton,
  Icon,
} from "@chakra-ui/react";

import {
  BsFillPlayFill,
  BsFillHeartFill,
  BsThreeDots,
  BsHash,
} from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { formatDate, formatTime } from "@/lib/utils";
import { useStoreActions } from "easy-peasy";
import { StoreModel } from "@/types/index";

const SongTable = ({ songs }) => {
  const playSongs = useStoreActions<StoreModel>(
    (actions) => actions.changeActiveSongs
  );

  const playSong = useStoreActions<StoreModel>(
    (actions) => actions.changeActiveSong
  );

  const handlePlay = (activeSong?) => {
    playSong(activeSong || songs[0]);
    playSongs(songs);
  };

  return (
    <Box bg="transparent" p={8}>
      <Stack direction="row" alignItems="center" mb="6">
        <IconButton
          colorScheme="green"
          size="lg"
          icon={<BsFillPlayFill fontSize="24px" />}
          isRound
          onClick={() => handlePlay()}
          aria-label="Play"
        />
        <IconButton
          colorScheme="green"
          display="flex"
          icon={<BsFillHeartFill color="green" />}
          variant="unstyled"
          aria-label="Like it"
        />
        <IconButton
          colorScheme="green"
          display="flex"
          icon={<BsThreeDots color="white" />}
          variant="unstyled"
          aria-label="Like it"
        />
      </Stack>
      <Box>
        <TableContainer>
          <Table variant="unstyled">
            <Thead
              borderBottom="1px solid"
              borderColor="whiteAlpha.200"
              color="gray.400"
            >
              <Tr>
                <Th fontWeight="normal">
                  <Icon as={BsHash} />
                </Th>
                <Th fontWeight="normal">Title</Th>
                <Th fontWeight="normal">Date Added</Th>
                <Th fontWeight="normal">
                  <Icon as={AiOutlineClockCircle} />
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {songs.map((song, i) => (
                <Tr
                  key={song.id}
                  color="gray.400"
                  cursor="pointer"
                  transition="all .3s"
                  _hover={{
                    backgroundColor: "whiteAlpha.200",
                  }}
                  onClick={() => handlePlay(song)}
                >
                  <Td>{i + 1}</Td>
                  <Td>{song.name}</Td>
                  <Td>{formatDate(song.createdAt)}</Td>
                  <Td>{formatTime(song.duration)}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default SongTable;
