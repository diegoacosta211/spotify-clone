import { Mode, MutationBody } from "@/types/index";
import fetcher from "./fetcher";

export const auth = (mode: Mode, body: MutationBody) => {
  return fetcher(`${mode}`, body);
};
