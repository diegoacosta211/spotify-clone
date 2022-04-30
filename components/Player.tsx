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
import { useStoreActions } from "easy-peasy";
import {
  MdShuffle,
  MdSkipPrevious,
  MdSkipNext,
  MdOutlinePlayCircleFilled,
  MdOutlinePauseCircleFilled,
  MdOutlineRepeat,
} from "react-icons/md";
import { formatTime } from "@/lib/utils";
import { Song, StoreModel } from "../types";

const Player = ({ songs, activeSong }) => {
  const [playing, setPlaying] = useState(true);
  const [index, setIndex] = useState(
    songs.findIndex((s) => s.id == activeSong.id)
  );
  const [seek, setSeek] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [duration, setDuration] = useState(0);
  const soundRef = useRef(null);
  const repeatRef = useRef(repeat);
  const setActiveSong = useStoreActions<StoreModel>(
    (actions) => actions.changeActiveSong
  );

  useEffect(() => {
    let timerId;
    if (playing && !isSeeking) {
      const f = () => {
        setSeek(soundRef.current.seek());
        timerId = requestAnimationFrame(f);
      };

      timerId = requestAnimationFrame(f);

      return () => cancelAnimationFrame(timerId);
    }
    cancelAnimationFrame(timerId);
  }, [playing, isSeeking]);

  useEffect(() => {
    setActiveSong(songs[index]);
  }, [index, setActiveSong, songs]);

  useEffect(() => {
    repeatRef.current = repeat;
  }, [repeat]);

  const handlePlay = () => setPlaying((state) => !state);
  const handleShuffle = () => setShuffle((state) => !state);
  const handleRepeat = () => setRepeat((state) => !state);

  const prevSong = () => {
    setIndex((state) => (state ? state - 1 : songs.length - 1));
  };

  const nextSong = () => {
    setIndex((state) => {
      if (shuffle) {
        // shuffle logic
        const next = Math.floor(Math.random() * songs.length);
        if (next === state) {
          nextSong();
        }

        return next;
      }
      return state === songs.length - 1 ? 0 : state + 1;
    });
  };

  const onEnd = () => {
    if (repeatRef.current) {
      setSeek(0);
      soundRef.current.seek(0);
    } else {
      nextSong();
    }
  };

  const onLoad = () => {
    const songDuration = soundRef.current.duration();
    setDuration(songDuration);
  };

  const onSeek = (ev) => {
    setSeek(parseFloat(ev[0]));
    soundRef.current.seek(ev[0]);
  };

  return (
    <>
      <ReactHowler
        playing={playing}
        src={activeSong?.url}
        ref={soundRef}
        onLoad={onLoad}
        onEnd={onEnd}
      />
      <Stack spacing={2}>
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
              onClick={prevSong}
              fontSize="xl"
              aria-label="Previous"
              icon={<MdSkipPrevious />}
            />
            {!playing ? (
              <IconButton
                aria-label="Play"
                fontSize="4xl"
                color="gray.200"
                icon={<MdOutlinePlayCircleFilled />}
                onClick={handlePlay}
              />
            ) : (
              <IconButton
                aria-label="Pause"
                color="gray.200"
                fontSize="4xl"
                onClick={handlePlay}
                icon={<MdOutlinePauseCircleFilled />}
              />
            )}
            <IconButton
              onClick={nextSong}
              fontSize="xl"
              aria-label="Next"
              icon={<MdSkipNext />}
            />
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
            {formatTime(seek)}
          </Text>
          <RangeSlider
            id="player-range"
            // eslint-disable-next-line jsx-a11y/aria-proptypes
            aria-label={["min", "max"]}
            colorScheme="pink"
            step={0.1}
            min={0}
            max={duration ? +duration.toFixed(2) : 0}
            onChange={onSeek}
            onChangeStart={() => setIsSeeking(true)}
            onChangeEnd={() => setIsSeeking(false)}
            value={[seek]}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack bgColor="green" />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
          </RangeSlider>
          <Text color="gray.600" fontSize="xs">
            {formatTime(duration)}
          </Text>
        </Stack>
      </Stack>
    </>
  );
};

export default Player;
