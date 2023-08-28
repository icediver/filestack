"use client";
import { FC, useState, MouseEvent } from "react";
import styles from "./Files.module.scss";
import FilesTable from "./files-table/FilesTable";
import TableItem from "./files-table/table-item/TableItem";
import { dataFiles } from "./files-table/data/data-files";
import clsx from "clsx";

const Files: FC = () => {
  const [activeFileIndex, setActiveFileIndex] = useState<number>(-1);
  return (
    <div className={styles.filesSection}>
      <div className={styles.title}>Files</div>
      <FilesTable />
      {dataFiles.map((file, index) => (
        <button
          key={file.name}
          onClick={(event) => {
            setActiveFileIndex(index);
          }}
          className={clsx(styles.file, {
            [styles.active]: index === activeFileIndex,
          })}
        >
          <TableItem
            Icon={file.Icon}
            name={file.name}
            type={file.type}
            size={file.size}
            date={file.date}
            isActive={index === activeFileIndex}
          />
        </button>
      ))}
    </div>
  );
};
export default Files;
