import { axiosClassic, instance } from "@/api/api.interceptors";
import { IResponseSearch, ISearch } from "./search.interface";
import { IDirectory } from "@/components/screen/home/folders/folder-item/directory.interface";
import { IUpdateFile } from "./update-file.interface";

const FILES = "/files";
const FOLDERS = "/folders";

export const FileService = {
  async getBySearchTerm(searchParam: ISearch) {
    const { data } = await axiosClassic.get<IResponseSearch>(
      `${FILES}/search`,
      {
        params: { ...searchParam },
      },
    );

    return data;
  },
  getAllDirectories(searchTerm?: string) {
    return axiosClassic.get<IDirectory[]>(`${FOLDERS}/search`, {
      params: { searchTerm },
    });
  },
  getDirectoryById(id: number) {
    return axiosClassic.get<IDirectory[]>(`${FOLDERS}/by-id/${id}`);
  },
  updateFile(id: number, data: IUpdateFile) {
    return axiosClassic.patch(`${FILES}/update/${id}`, data);
  },
};
