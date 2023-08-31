"use client";
import { Dispatch, FC, SetStateAction, useState } from "react";
import styles from "./Folders.module.scss";
import FoldersItem from "./folder-item/FoldersItem";
import { foldersData } from "./data/folders.data";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FileService } from "@/services/file/file.services";

interface IFolders {
    activeFolder: number;
    setActiveFolder: Dispatch<SetStateAction<number>>;
}
export interface IDirectory {
    name: string;
    _count: { file: number };
}

const Folders: FC<IFolders> = ({ activeFolder, setActiveFolder }) => {
    const { data: directories } = useQuery(
        ["directories"],
        () => FileService.getAllDirectories(),
        { select: ({ data }) => data },
    );
    return (
        <div className={styles.foldersSection}>
            <div className={styles.title}>Folders</div>
            <div className={styles.folders}>
                {directories &&
                    directories.map((folder, index) => (
                        <button
                            key={folder.name}
                            onClick={() => {
                                if (activeFolder === index + 1) {
                                    setActiveFolder(-1);
                                } else setActiveFolder(index + 1);
                            }}
                        >
                            <FoldersItem
                                name={folder.name}
                                files={folder._count?.file}
                                isActive={activeFolder === index + 1}
                            />
                        </button>
                    ))}
            </div>
        </div>
    );
};
export default Folders;
