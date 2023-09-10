import { IconType } from "react-icons";

export interface IFilesTableItem {
  id: number;
  Icon: IconType;
  name: string;
  type: string;
  size: string;
  date: string;
}
