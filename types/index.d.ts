export type Mode = "signin" | "signup";
export type MutationBody = {
  name?: string;
  lastName?: string;
  email: string;
  password: string;
};
