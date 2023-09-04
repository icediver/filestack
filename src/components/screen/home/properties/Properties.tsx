"use client";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import styles from "./Properties.module.scss";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import { useSession } from "next-auth/react";
import tmpImage from "../../../../../public/images/filestack.png";
import { IFileProperties } from "../files/file-properties.interface";
import clsx from "clsx";

const Properties: FC<{
  activeFile: IFileProperties;
  setActiveFile: Dispatch<SetStateAction<IFileProperties>>;
}> = ({ activeFile, setActiveFile }) => {
  const [isFadeIn, setIsFadeIn] = useState<boolean>(false);
  useEffect(() => {
    setIsFadeIn(true);
    const timeout = setTimeout(() => setIsFadeIn(false), 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [activeFile]);
  const { data } = useSession();
  return (
    <div className={styles.properties}>
      <div className={styles.header}>
        <div className={styles.title}>
          File Properties
          <button onClick={() => setActiveFile({} as IFileProperties)}>
            <RxCross2 size={24} />
          </button>
        </div>
        <div className={styles.preview}>
          <div
            className={clsx(styles.frame, { ["animate-scaleIn"]: isFadeIn })}
          >
            <Image
              src={
                activeFile.preview === "" || activeFile.preview === undefined
                  ? tmpImage
                  : activeFile.preview
              }
              alt={""}
              width={300}
              height={270}
            />
          </div>
        </div>
        <div className={styles.fileName}>{activeFile.name || "???"}</div>
      </div>

      <div className={styles.description}>
        <div className={styles.property}>Property</div>
        <div className={styles.key}>Format file</div>
        <div className={styles.value}>
          {activeFile.name?.split(".").at(-1) || "---"}
        </div>
        <div className={styles.key}>Size</div>
        <div className={styles.value}>{activeFile.size}Mb</div>
        {"---"}
        <div className={styles.key}>Created at</div>
        <div className={styles.value}>
          {activeFile.createdAt
            ? new Date(activeFile.createdAt)
                .toLocaleString("en-En")
                .split(",")[0]
            : "---"}
        </div>
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
