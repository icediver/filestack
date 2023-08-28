import { FC } from "react";
import styles from "./FoldersItem.module.scss";
import { LuFolder } from "react-icons/lu";
import { IFolderItem } from "./folder-item.interface";

const FoldersItem: FC<IFolderItem> = ({ name, files }) => {
  return (
    <div className={styles.folder}>
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
