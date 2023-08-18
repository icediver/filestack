"use client";
import { FC } from "react";
import styles from "./Header.module.scss";
import { PiBell } from "react-icons/pi";
import { SlSettings } from "react-icons/sl";
import Image from "next/image";
import { LuSearch } from "react-icons/lu";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Header: FC = () => {
  const session = useSession();
  console.log(session);
  return (
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
        {session.data?.user ? (
          <div className={styles.auth}>
            <button onClick={() => signOut()} className={styles.avatar}>
              <Image
                src={session.data.user.image || ""}
                alt="avatar"
                width={50}
                height={50}
              />
            </button>
            {session.data.user.name}
          </div>
        ) : (
          <Link href={"/api/auth/signin"}>Signin</Link>
        )}
      </div>
    </div>
  );
};
export default Header;
