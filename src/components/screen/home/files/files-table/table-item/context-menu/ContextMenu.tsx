import { FC, MouseEvent, useState } from "react";
import styles from "./ContextMenu.module.scss";
import { RiEdit2Line } from "react-icons/ri";
import { ContextMenuData } from "./data-context-menu/dataContextMenu";

const ContextMenu: FC<{ mouseCoordinates: { x: number; y: number } }> = ({
  mouseCoordinates,
}) => {
  function eneventHandler(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
  }
  return (
    <div style={{ left: mouseCoordinates.x }} className={styles.menu}>
      {ContextMenuData.map((item) => (
        <button className={styles.item} onClick={eneventHandler}>
          <item.Icon />
          {item.title}
        </button>
      ))}{" "}
    </div>
  );
};
export default ContextMenu;
