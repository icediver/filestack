"use client";
import { FC, useState } from "react";
import styles from "./FoldersItem.module.scss";
import { LuFolder } from "react-icons/lu";
import { IFolderItem } from "./folder-item.interface";
import clsx from "clsx";

const FoldersItem: FC<IFolderItem & { isActive: boolean }> = ({
  name,
  files,
  isActive,
}) => {
  return (
    <div
      className={clsx(styles.folder, {
        [styles.active]: isActive,
        [styles.notActive]: !isActive,
      })}
    >
      <div className={styles.icon}>
        <LuFolder />
      </div>
      <div className={styles.information}>
        <div className={styles.folderName}>{name}</div>
        <div className={styles.info}>{files} File</div>
      </div>
    </div>
  );
};
export default FoldersItem;
