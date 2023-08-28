import { IconType } from "react-icons";
import {
  RiDeleteBinLine,
  RiEdit2Line,
  RiFileCopyLine,
  RiFolderSharedLine,
  RiUserAddLine,
} from "react-icons/ri";

export interface IContextMenuItem {
  Icon: IconType;
  title: string;
}

export const ContextMenuData: IContextMenuItem[] = [
  {
    Icon: RiEdit2Line,
    title: "Rename",
  },
  {
    Icon: RiFileCopyLine,
    title: "Copy",
  },
  {
    Icon: RiFolderSharedLine,
    title: "Rename",
  },
  {
    Icon: RiEdit2Line,
    title: "Move",
  },
  {
    Icon: RiUserAddLine,
    title: "Share",
  },
  {
    Icon: RiDeleteBinLine,
    title: "Delete",
  },
];
