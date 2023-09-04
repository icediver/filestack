"use client";
import { FC, useEffect, useRef, useState } from "react";
import styles from "./Folders.module.scss";
import FoldersItem from "./folder-item/FoldersItem";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import { IActiveFolders, IDirectory } from "./folder-item/directory.interface";
type DirectionType = "right" | "left";
const Folders: FC<IActiveFolders & { directories: IDirectory[] }> = ({
  activeFolder,
  setActiveFolder,
  directories,
}) => {
  const containerRef = useRef<null | HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState<number>(0);

  function scroll(direction: DirectionType) {
    switch (direction) {
      case "left":
        if (scrollX >= 296) setScrollX((prevState) => prevState - 296);
        // }
        break;
      case "right":
        if (scrollX < (directories.length - 4) * 296)
          setScrollX((prevState) => prevState + 296);
        break;
      default:
        break;
    }
  }
  useEffect(() => {
    containerRef.current?.scrollTo({
      top: 0,
      left: scrollX,
      behavior: "smooth",
    });
  }, [scrollX]);
  return (
    <div className={styles.foldersSection}>
      <div className={styles.title}>
        <span>Folders</span>
        <div className={styles.pagination}>
          <button
            onClick={() => scroll("left")}
            className={scrollX === 0 ? "opacity-20" : "opacity-100"}
          >
            <AiOutlineCaretLeft />
          </button>

          <button
            onClick={() => {
              scroll("right");
            }}
            className={
              scrollX === (directories.length - 4) * 296
                ? "opacity-20"
                : "opacity-100"
            }
          >
            <AiOutlineCaretRight />
          </button>
        </div>
      </div>
      <div className={styles.folders} ref={containerRef}>
        {directories &&
          directories.map((folder, index) => {
            return (
              <button
                key={folder.name}
                onClick={() => {
                  if (activeFolder === index + 1) {
                    setActiveFolder(-1);
                  } else setActiveFolder(index + 1);
                }}
              >
                <FoldersItem
                  name={folder.name}
                  files={folder._count?.file}
                  isActive={activeFolder === index + 1}
                />
              </button>
            );
          })}
      </div>
    </div>
  );
};
export default Folders;
