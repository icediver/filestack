import { Dispatch, SetStateAction } from "react";
export interface IUser {
  id: number;
  name: string;
  email: string;
  avatarPath: string;
}

export interface IAuthResponse {
  user: IUser;
  accessToken: string;
}
export type TypeUserState = IUser | null;

export interface IContext {
  user: TypeUserState;
  setUser: Dispatch<SetStateAction<TypeUserState>>;
}
