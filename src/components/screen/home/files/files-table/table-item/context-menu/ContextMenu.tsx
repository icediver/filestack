import { FC, MouseEvent, forwardRef } from "react";
import styles from "./ContextMenu.module.scss";
import { ContextMenuData } from "./data-context-menu/dataContextMenu";

interface IContextFileMenu {
  mouseCoordinates: { x: number; y: number };
  menuHandler: (event: MouseEvent) => void;
}

export const ContextMenu = forwardRef<HTMLUListElement, IContextFileMenu>(
  ({ mouseCoordinates, menuHandler }, ref) => {
    return (
      <ul
        style={{ left: mouseCoordinates.x }}
        className={styles.menu}
        ref={ref}
      >
        {ContextMenuData.map((item) => (
          <li className={styles.item} key={item.title} onClick={menuHandler}>
            <item.Icon />
            {item.title}
          </li>
        ))}
      </ul>
    );
  },
);

ContextMenu.displayName = "ContextMenu";
