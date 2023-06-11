import type { User } from "../../actions/core/types";

export type CoreState = {
  token: string | null;
  isLoaded: boolean;
  authError?: string;
  registerError?: string;
  user?: User;
};
