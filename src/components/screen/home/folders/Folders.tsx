"use client";
import { FC, useState } from "react";
import styles from "./Folders.module.scss";
import FoldersItem from "./folder-item/FoldersItem";
import { foldersData } from "./data/folders.data";

const Folders: FC = () => {
  const [activeFolder, setActiveFolder] = useState(-1);
  return (
    <div className={styles.foldersSection}>
      <div className={styles.title}>Folders</div>
      <div className={styles.folders}>
        {foldersData.map((folder, index) => (
          <button
            key={folder.name}
            onClick={() => {
              console.log(activeFolder, index);
              if (activeFolder === index) {
                setActiveFolder(-1);
              } else setActiveFolder(index);
            }}
          >
            <FoldersItem
              name={folder.name}
              files={folder.files}
              isActive={activeFolder === index}
            />
          </button>
        ))}
      </div>
    </div>
  );
};
export default Folders;
