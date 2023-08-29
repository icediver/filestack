"use client";
import { FC } from "react";
import styles from "./Properties.module.scss";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import { useSession } from "next-auth/react";
import tmpImage from "../../../../../public/images/filestack.png";

const Properties: FC = () => {
  const { data } = useSession();
  return (
    <div className={styles.properties}>
      <div className={styles.header}>
        <div className={styles.title}>
          File Properties
          <RxCross2 size={24} />
        </div>
        <div className={styles.preview}>
          <div className={styles.frame}>
            <Image src={tmpImage} alt={""} />
          </div>
        </div>
        <div className={styles.fileName}>Preview_Dribbble.png</div>
      </div>

      <div className={styles.description}>
        <div className={styles.property}>Property</div>
        <div className={styles.key}>Format file</div>
        <div className={styles.value}>PNG</div>
        <div className={styles.key}>Size</div>
        <div className={styles.value}>12.4Mb</div>{" "}
        <div className={styles.key}>Created at</div>
        <div className={styles.value}>24/02/2023</div>
      </div>

      <div className={styles.footer}>
        <div className={styles.footerTitle}>Access Owner</div>
        {data?.user && (
          <div className={styles.owner}>
            <div className={styles.avatar}>
              <Image
                src={data.user.image || ""}
                alt="avatar"
                width={32}
                height={32}
              />
            </div>
            <div className={styles.name}>{data.user.name}</div>
          </div>
        )}
        <button className={styles.access}>Manage Access</button>
      </div>
    </div>
  );
};
export default Properties;
