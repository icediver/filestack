"use client";
import { FC, useEffect, useState } from "react";
import styles from "./Home.module.scss";
import Folders from "./folders/Folders";
import Properties from "./properties/Properties";
import Files from "./files/Files";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IFileProperties } from "./files/file-properties.interface";
import { FileService } from "@/services/file/file.services";
import { useSearch } from "@/hooks/useSearch";
import Header from "@/components/layout/header/Header";
const Home: FC = () => {
    const [activeFile, setActiveFile] = useState<IFileProperties>(
        {} as IFileProperties,
    );
    // const [activeFolder, setActiveFolder] = useState<number>(-1);
    // const { data: directory } = useQuery(
    //   ["active directory", activeFolder],
    //   () => FileService.getDirectoryById(activeFolder + 1),
    //   { select: ({ data }) => data },
    // );
    //
    const {
        data,
        activeFolder,
        setActiveFolder,
        handleSearch,
        setCurrentPage,
        currentPage,
    } = useSearch();

    useEffect(() => {
        setActiveFile({} as IFileProperties);
    }, [data]);

    return (
        <>
            <Header handleSearch={handleSearch} />
            <div className={styles.home}>
                <div className={styles.content}>
                    <Folders
                        activeFolder={activeFolder}
                        setActiveFolder={setActiveFolder}
                    />
                    <Files
                        files={data?.files || []}
                        activeFile={activeFile}
                        setActiveFile={setActiveFile}
                        pages={data?.pages || 0}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                    />
                </div>
                <div className={styles.properties}>
                    <Properties activeFile={activeFile} setActiveFile={setActiveFile} />
                </div>
            </div>
        </>
    );
};
export default Home;
