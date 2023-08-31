import { FiImage } from "react-icons/fi";
import {
  RiAppStoreLine,
  RiFileTextLine,
  RiFilmLine,
  RiFontSize2,
  RiMusic2Fill,
} from "react-icons/ri";
import { SiAppstore } from "react-icons/si";
import { IFilesTableItem } from "../table-item/types/table-item.interface";
import { IoDocumentOutline } from "react-icons/io5";
import { IFileProperties } from "../../file-properties.interface";
import { IconType } from "react-icons";

export interface IFormatIcon {
  [key: string]: IconType;
}

export const FormatIcon: IFormatIcon = {
  image: FiImage,
  application: SiAppstore,
  document: IoDocumentOutline,
  video: RiFilmLine,
  music: RiMusic2Fill,
  font: RiFontSize2,
  text: RiFileTextLine,
};

export const dataFiles: IFileProperties[] = [
  {
    id: 101,
    preview: "",
    folderId: -1,
    updatedAt: "",
    name: "Preview_Dribble.png",
    format: "image",
    size: "12.9",
    createdAt: "2023-03-23T11:34:57.432Z",
  },
  {
    id: 102,
    preview: "",
    folderId: -1,
    updatedAt: "",
    name: "Archivevalue_Semester3.pdf",
    format: "document",
    size: "8.1",
    createdAt: "2023-08-03T17:34:57.432Z",
  },
  {
    id: 103,
    preview: "",
    folderId: -1,
    updatedAt: "",
    name: "vid_948395.mov",
    format: "video",
    size: "58.9",
    createdAt: "2023-01-30T17:34:57.432Z",
  },
  {
    id: 104,
    preview: "",
    folderId: -1,
    updatedAt: "",
    name: "vid_948395.mov",
    format: "application",
    size: "58.9",
    createdAt: "2021-01-30T17:34:57.432Z",
  },
  {
    id: 105,
    preview: "",
    folderId: -1,
    updatedAt: "",
    name: "vid_948395.mov",
    format: "music",
    size: "58.9",
    createdAt: "2022-01-11T17:34:57.432Z",
  },
];
