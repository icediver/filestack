import { axiosClassic } from "@/api/api.interceptors";
import { IFileProperties } from "@/components/screen/home/files/file-properties.interface";
import { IDirectory } from "@/components/screen/home/folders/Folders";
import { IResponseSearch, ISearch } from "./search.interface";

const FILES = "/files";
const FOLDERS = "/folders";

export const FileService = {
    async getBySearchTerm(searchParam: ISearch) {
        console.log(searchParam);
        const { data } = await axiosClassic.get<IResponseSearch>(
            `${FILES}/search`,
            {
                params: { ...searchParam },
            },
        );

        return data;
    },
    getAllDirectories() {
        return axiosClassic.get<IDirectory[]>(FOLDERS);
    },
    getDirectoryById(id: number) {
        return axiosClassic.get<IDirectory[]>(`${FOLDERS}/by-id/${id}`);
    },
};
