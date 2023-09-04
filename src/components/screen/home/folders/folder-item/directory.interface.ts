import { Dispatch, SetStateAction } from "react";

export interface IDirectory {
  id: number;
  name: string;
  _count: { file: number };
}
export interface IActiveFolders {
  activeFolder: number;
  setActiveFolder: Dispatch<SetStateAction<number>>;
}
