"use client";
import { FC, useEffect, useMemo, useState } from "react";
import styles from "./Home.module.scss";
import Folders, { IDirectory } from "./folders/Folders";
import Properties from "./properties/Properties";
import Files from "./files/Files";
import { IFileProperties } from "./files/file-properties.interface";
import { useSearch } from "@/hooks/useSearch";
import Header from "@/components/layout/header/Header";
const Home: FC = () => {
  const [activeFile, setActiveFile] = useState<IFileProperties>(
    {} as IFileProperties,
  );
  const {
    data,
    activeFolder,
    setActiveFolder,
    handleSearch,
    setCurrentPage,
    currentPage,
    directories,
  } = useSearch();

  useEffect(() => {
    if (activeFile.name) setActiveFile({} as IFileProperties);
  }, [data]);
  useEffect(() => console.log(activeFolder), [activeFolder]);
  return (
    <>
      <Header handleSearch={handleSearch} />
      <div className={styles.home}>
        <div className={styles.content}>
          <Folders
            activeFolder={activeFolder}
            setActiveFolder={setActiveFolder}
            directories={directories || []}
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
