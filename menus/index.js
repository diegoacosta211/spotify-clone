import { BiHomeCircle, BiSearch, BiLibrary } from "react-icons/bi";
import { MdAddBox, MdFavorite } from "react-icons/md";

export const mainMenu = [
  {
    name: "Home",
    url: "/",
    icon: BiHomeCircle,
  },
  {
    name: "Search",
    url: "/search",
    icon: BiSearch,
  },
  {
    name: "Your Library",
    url: "/library",
    icon: BiLibrary,
  },
];

export const musicMenu = [
  {
    name: "Create playlist",
    url: "/",
    icon: MdAddBox,
  },
  {
    name: "Liked songs",
    url: "/",
    icon: MdFavorite,
  },
];
