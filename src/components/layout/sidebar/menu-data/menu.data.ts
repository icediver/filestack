import { IconType } from "react-icons";
import { BsSpeedometer2 } from "react-icons/bs";
import { FaArrowUp, FaFolderOpen } from "react-icons/fa";
import { TbDeviceImac } from "react-icons/tb";
import { PiTrashSimple, PiUsers } from "react-icons/pi";
import {
  AiOutlineArrowUp,
  AiOutlineFolderOpen,
  AiOutlineStar,
} from "react-icons/ai";
import { LuClock3 } from "react-icons/lu";

export interface IMenuData {
  item?: {
    Icon: IconType;
    title: string;
    path: string;
  };
  section?: string;
}

export const menuData: IMenuData[] = [
  { section: "General" },
  { item: { Icon: BsSpeedometer2, title: "Home", path: "/" } },
  { item: { Icon: TbDeviceImac, title: "Computer", path: "/computer" } },
  { item: { Icon: PiUsers, title: "Shared", path: "/shared" } },
  { section: "Files" },
  { item: { Icon: AiOutlineFolderOpen, title: "Folders", path: "/folders" } },
  { item: { Icon: AiOutlineStar, title: "Favorites", path: "/favorites" } },
  { item: { Icon: LuClock3, title: "Newest", path: "/newest" } },
  { item: { Icon: PiTrashSimple, title: "Trash", path: "/trash" } },
];
