import { FC, useRef, useState } from "react";
import styles from "./TableItem.module.scss";
import { IFilesTableItem } from "./types/table-item.interface";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import clsx from "clsx";
import ContextMenu from "./context-menu/ContextMenu";
import { useOutside } from "@/hooks/useOutside";

const TableItem: FC<IFilesTableItem & { isActive: boolean }> = ({
  name,
  Icon,
  type,
  size,
  date,
  isActive,
}) => {
  const offsetRef = useRef<HTMLDivElement>(null);
  const [mouseCoordinates, setMouseCoordinates] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  const { ref, isShow, setIsShow } = useOutside(false);
  return (
    <div
      ref={offsetRef}
      className={clsx(styles.tableItem)}
      onClick={(event) => {
        const offset = offsetRef.current?.offsetLeft || 0;
        if (isActive) setIsShow(!isShow);
        setMouseCoordinates({
          x: event.clientX - offset,
          y: event.clientY,
        });
      }}
    >
      <div className={styles.filename}>
        <div className={styles.icon}>
          <Icon />
        </div>
        <div className={styles.name}>{name}</div>
      </div>

      <div className={styles.type}>{type}</div>
      <div className={styles.size}>{size}</div>
      <div className={styles.date}>{date}</div>
      <div className="flex justify-end text-xl text-black-inactive mr-8">
        <PiDotsThreeOutlineVerticalFill />
      </div>
      {isShow && (
        <div ref={ref}>
          <ContextMenu mouseCoordinates={mouseCoordinates} />
        </div>
      )}
    </div>
  );
};
export default TableItem;
