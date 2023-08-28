import { FC } from "react";
import styles from "./Folders.module.scss";
import FoldersItem from "./folder-item/FoldersItem";
import { foldersData } from "./data/folders.data";

const Folders: FC = () => {
  return (
    <div className={styles.foldersSection}>
      <div className={styles.title}>Folders</div>
      <div className={styles.folders}>
        {foldersData.map((folder) => (
          <FoldersItem
            name={folder.name}
            files={folder.files}
            key={folder.name}
          />
        ))}
      </div>
    </div>
  );
};
export default Folders;
