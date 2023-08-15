import { FC } from "react";
import styles from "./Header.module.scss";
import { PiBell } from "react-icons/pi";
import { SlSettings } from "react-icons/sl";
import Image from "next/image";
import { LuSearch } from "react-icons/lu";

const Header: FC = () => (
  <div className={styles.header}>
    <div className={styles.search}>
      <input type="text" placeholder="Search files, directories or other" />
      <LuSearch size={28} />
    </div>
    <div className={styles.rightSide}>
      <div className={styles.options}>
        <button className={styles.bell}>
          <PiBell size={25} />
          <div className={styles.notification} />
        </button>
        <button>
          <SlSettings size={25} />
        </button>
      </div>
      <div className={styles.auth}>
        <button className={styles.avatar}>
          <Image
            src={
              "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/257.jpg"
            }
            alt="avatar"
            width={50}
            height={50}
          />
        </button>
        Lerry Kurniadi
      </div>
    </div>
  </div>
);
export default Header;
