import { createStore, action } from "easy-peasy";
import { StoreModel } from "@/types/index";

export const store = createStore<StoreModel>({
  activePlaylist: [],
  activeSong: null,
  changeActiveSongs: action((state, payload) => {
    state.activePlaylist = payload;
  }),
  changeActiveSong: action((state, payload) => {
    state.activeSong = payload;
  }),
});
