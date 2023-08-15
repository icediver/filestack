"use client";

import { FC, useState } from "react";
import Logo from "./logo/Logo";
import styles from "./Sidebar.module.scss";
import { FaArrowUp, FaFolderOpen } from "react-icons/fa";
import clsx from "clsx";
import { menuData } from "./menu-data/menu.data";
import Link from "next/link";

const Sidebar: FC = () => {
  const [activeItem, setActiveItem] = useState<number>(1);
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <Logo /> <span>Filestack.</span>
      </div>
      <div>
        <div className={styles.menu}>
          {menuData.map((menuItem, index) => {
            if (menuItem.section) {
              return (
                <div key={menuItem.section} className={styles.title}>
                  {menuItem.section}
                </div>
              );
            } else if (menuItem.item) {
              return (
                <Link
                  key={menuItem.item.title}
                  href={menuItem.item.path}
                  className={clsx(styles.menuItem, {
                    [styles.active]: activeItem === index,
                  })}
                  onClick={() => setActiveItem(index)}
                >
                  <menuItem.item.Icon color="fff" size={22} />
                  <span>{menuItem.item.title}</span>
                </Link>
              );
            }
          })}
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.folder}>
          <FaFolderOpen size={48} />
          <div className={styles.arrowUp}>
            <FaArrowUp size={10} />
          </div>
        </div>
        <div className={styles.sizeContainer}>
          <div className={styles.storage}>Available Storage</div>
          <div className={styles.size}>
            85,29 <span className={"text-white/40"}>/ 128 GB</span>
          </div>
          <div className={styles.bar}>
            <div className={styles.whiteBar}></div>
          </div>
        </div>
        <button className={styles.button}>Buy Storage</button>
      </div>
    </div>
  );
};
export default Sidebar;
