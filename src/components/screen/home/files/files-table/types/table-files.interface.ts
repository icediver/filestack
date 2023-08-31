import { Dispatch, SetStateAction } from "react";
import { IFileProperties } from "../../file-properties.interface";

export interface ITableFiles {
    files: IFileProperties[];
    activeFile: IFileProperties;
    setActiveFile: Dispatch<SetStateAction<IFileProperties>>;
    pages: number;
    setCurrentPage: Dispatch<SetStateAction<number>>;
    currentPage: number;
}
