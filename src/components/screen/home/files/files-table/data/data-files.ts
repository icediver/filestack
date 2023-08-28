import { FiImage } from "react-icons/fi";
import { RiFilmLine } from "react-icons/ri";
import { IFilesTableItem } from "../table-item/types/table-item.interface";
import { IoDocumentOutline } from "react-icons/io5";

export const dataFiles: IFilesTableItem[] = [
  {
    Icon: FiImage,
    name: "Preview_Dribble.png",
    type: "image",
    size: "12.9Mb",
    date: "24/02/2023",
  },
  {
    Icon: IoDocumentOutline,
    name: "Archivevalue_Semester3.pdf",
    type: "image",
    size: "8.1Mb",
    date: "14/01/2023",
  },
  {
    Icon: RiFilmLine,
    name: "vid_948395.mov",
    type: "image",
    size: "58.9Mb",
    date: "11/02/2023",
  },
];
