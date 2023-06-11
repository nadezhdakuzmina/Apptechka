import { User } from "../../actions/core/types";

export type DirtyUserAuthData = {
  token: string;
  user: User;
};

export type DirtyUserCheckAuthData = {
  message: string;
  user: User;
};
