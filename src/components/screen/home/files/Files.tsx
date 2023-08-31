"use client";
import { FC, useState, useEffect } from "react";
import styles from "./Files.module.scss";
import FilesTable from "./files-table/FilesTable";
import TableItem from "./files-table/table-item/TableItem";
import { FormatIcon, dataFiles } from "./files-table/data/data-files";
import clsx from "clsx";
import { IFileProperties } from "./file-properties.interface";
import { RiFilmLine } from "react-icons/ri";
import FilesPagination from "@/components/ui/files-pagination/FilesPagination";
import { ITableFiles } from "./files-table/types/table-files.interface";

const Files: FC<ITableFiles> = ({
    files,
    activeFile,
    setActiveFile,
    pages,
    currentPage,
    setCurrentPage,
}) => {
    return (
        <div className={styles.filesSection}>
            <FilesTable
                activeFile={activeFile}
                setActiveFile={setActiveFile}
                files={files}
                pages={pages}
            />
            <FilesPagination
                pages={pages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};
export default Files;
