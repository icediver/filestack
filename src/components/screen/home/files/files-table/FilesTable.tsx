import { FC, useEffect, useState } from "react";
import styles from "./FilesTable.module.scss";
import TableHeader from "./table-header/TableHeader";
import { IFileProperties } from "../file-properties.interface";
import { ITableFiles } from "./types/table-files.interface";
import { FormatIcon, dataFiles } from "./data/data-files";
import TableItem from "./table-item/TableItem";
import { RiFilmLine } from "react-icons/ri";
import clsx from "clsx";

const FilesTable: FC<Omit<ITableFiles, "currentPage" | "setCurrentPage">> = ({
    pages,
    files,
    setActiveFile,
    activeFile,
}) => {
    const [directoryFiles, setDirectoryFiles] = useState<IFileProperties[]>([]);
    useEffect(() => {
        console.log(pages);
        if (!files.length) {
            setDirectoryFiles([...dataFiles]);
        } else {
            setDirectoryFiles([...files]);
        }
    }, [files]);

    return (
        <div className={styles.table}>
            <div className={styles.title}>Files</div>

            <TableHeader />
            {directoryFiles.map((file, index) => (
                //dataFiles.map((file, index) => (
                <button
                    key={file.id}
                    onClick={(event) => {
                        setActiveFile(file);
                    }}
                    className={clsx(styles.file, {
                        [styles.active]: file.id === +activeFile.id,
                    })}
                >
                    <TableItem
                        Icon={FormatIcon[file.format] || RiFilmLine}
                        name={file.name}
                        type={file.format}
                        size={file.size}
                        date={
                            new Date(file.createdAt).toLocaleString("en-Gb").split(",")[0]
                        }
                        isActive={file.id === +activeFile.id}
                    />
                </button>
            ))}
        </div>
    );
};
export default FilesTable;
