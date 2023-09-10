import { IFileProperties } from "@/components/screen/home/files/file-properties.interface";
import { IDirectory } from "@/components/screen/home/folders/folder-item/directory.interface";

export interface ISearch {
  searchTerm?: string;
  activeFolder?: number;
  page?: number;
  perPage?: number;
}

export interface IResponseSearch {
  files: IFileProperties[];
  folders: IDirectory[];
  pages: number;
}
