import { ReactElement } from "react";
import { Action } from "easy-peasy";

export type Mode = "signin" | "signup";
export type MutationBody = {
  name?: string;
  lastName?: string;
  email: string;
  password: string;
};

export type GradientLayoutType = {
  color: string;
  image?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  roundImage?: boolean;
  isLoading?: boolean;
  children: ReactElement;
};

export interface ArtistType {
  id: string;
  name: string;
  lastName: string;
  playlistCount: number;
}

export interface HomeProps {
  data: ArtistType[];
}

export interface Song {
  id: number;
  name: string;
  createdAt: Date;
  duration: number;
}
export interface PlaylistType {
  id: string;
  name: string;
  songs: Song[];
}

export interface PlaylistProps {
  data: PlaylistType;
}

export interface StoreModel {
  activeSongs: Song[];
  activeSong: Song;
  changeActiveSongs: Action<StoreModel, Song[]>;
  changeActiveSong: Action<StoreModel, Song>;
}
