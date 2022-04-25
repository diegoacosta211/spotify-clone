import { createStore, action } from "easy-peasy";
import { StoreModel } from "@/types/index";

export const store = createStore<StoreModel>({
  activeSongs: [],
  activeSong: null,
  changeActiveSongs: action((state, payload) => {
    state.activeSongs = payload;
    console.log(payload);
  }),
  changeActiveSong: action((state, payload) => {
    state.activeSong = payload;
    console.log(payload);
  }),
});
