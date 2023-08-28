import { FC } from "react";
import styles from "./TableHeader.module.scss";

const TableHeader: FC = () => {
  return (
    <div className={styles.tableHeader}>
      <div className="col-span-3">Name</div>
      <div>Format</div>
      <div className="text-center">Size</div>
      <div className="text-end">Date</div>
      <div></div>
    </div>
  );
};
export default TableHeader;
