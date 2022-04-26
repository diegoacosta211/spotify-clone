import { useEffect, useRef, useState } from "react";
import {
  ButtonGroup,
  IconButton,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderTrack,
  RangeSliderThumb,
  Text,
  Stack,
} from "@chakra-ui/react";
import ReactHowler from "react-howler";
import {
  MdShuffle,
  MdSkipPrevious,
  MdSkipNext,
  MdOutlinePlayCircleFilled,
  MdOutlinePauseCircleFilled,
  MdOutlineRepeat,
} from "react-icons/md";
import { useStoreActions } from "easy-peasy";

const Player = ({ songs, activeSong }) => {
  const [playing, setPlaying] = useState(true);
  const [index, setIndex] = useState(0);
  const [seek, setSeek] = useState(0.0);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [duration, setDuration] = useState(0.0);

  const handlePlay = () => setPlaying((state) => !state);
  const handleShuffle = () => setShuffle((state) => !state);
  const handleRepeat = () => setRepeat((state) => !state);

  return (
    <Stack spacing={4}>
      <ReactHowler playing={playing} src={activeSong?.url} />
      <Stack justifyContent="center" direction="row">
        <ButtonGroup variant="link">
          <IconButton
            onClick={handleShuffle}
            color={shuffle ? "gray.200" : "gray.600"}
            fontSize="xl"
            aria-label="Shuffle"
            icon={<MdShuffle />}
          />
          <IconButton
            fontSize="xl"
            aria-label="Previous"
            icon={<MdSkipPrevious />}
          />
          {!playing ? (
            <IconButton
              aria-label="Play"
              fontSize="5xl"
              color="gray.200"
              icon={<MdOutlinePlayCircleFilled />}
              onClick={handlePlay}
            />
          ) : (
            <IconButton
              aria-label="Pause"
              color="gray.200"
              fontSize="5xl"
              onClick={handlePlay}
              icon={<MdOutlinePauseCircleFilled />}
            />
          )}
          <IconButton fontSize="xl" aria-label="Next" icon={<MdSkipNext />} />
          <IconButton
            fontSize="xl"
            onClick={handleRepeat}
            color={repeat ? "gray.200" : "gray.600"}
            aria-label="Repeat"
            icon={<MdOutlineRepeat />}
          />
        </ButtonGroup>
      </Stack>
      <Stack direction="row" spacing={4}>
        <Text color="gray.600" fontSize="xs">
          1:25
        </Text>
        <RangeSlider
          id="player-range"
          // eslint-disable-next-line jsx-a11y/aria-proptypes
          aria-label={["min", "max"]}
          step={0.1}
          min={0}
          max={300}
          colorScheme="pink"
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack bgColor="green" />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
        </RangeSlider>
        <Text color="gray.600" fontSize="xs">
          3:55
        </Text>
      </Stack>
    </Stack>
  );
};

export default Player;
