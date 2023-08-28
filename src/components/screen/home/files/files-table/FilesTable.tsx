import { FC } from "react";
import styles from "./FilesTable.module.scss";
import TableHeader from "./table-header/TableHeader";

const FilesTable: FC = () => {
  return (
    <div className={styles.table}>
      <TableHeader />
    </div>
  );
};
export default FilesTable;
