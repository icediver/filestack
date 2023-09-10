import { FC, useRef, useState, MouseEvent } from "react";
import styles from "./TableItem.module.scss";
import { IFilesTableItem } from "./types/table-item.interface";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import clsx from "clsx";
import { useOutside } from "@/hooks/useOutside";
import PopupAction from "./context-menu/popup-action/PopupAction";
import { PopupType } from "./types/popup.type";
import Portal from "@/components/ui/portal/Portal";
import { Modal } from "@/components/ui/modal/Modal";
import { ContextMenu } from "./context-menu/ContextMenu";

const TableItem: FC<IFilesTableItem & { isActive: boolean }> = ({
  name,
  Icon,
  type,
  size,
  date,
  isActive,
  id,
}) => {
  const offsetRef = useRef<HTMLDivElement>(null);
  const [mouseCoordinates, setMouseCoordinates] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });
  const [popupType, setPopupType] = useState<PopupType | null>("Copy");

  const { ref, isShow, setIsShow } = useOutside(false);
  const {
    ref: popupRef,
    isShow: isPopupShow,
    setIsShow: setIsPopupShow,
  } = useOutside(false);
  function menuHandler(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();

    setPopupType(event.currentTarget.textContent as PopupType);
    setIsPopupShow(true);

    setIsShow(false);
  }

  return (
    <>
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
        <div className={styles.size}>{size}Mb</div>
        <div className={styles.date}>{date}</div>
        <div className={styles.dots}>
          <PiDotsThreeOutlineVerticalFill />
        </div>
        {isShow && (
          <ContextMenu
            mouseCoordinates={mouseCoordinates}
            menuHandler={menuHandler}
            ref={ref}
          />
        )}
      </div>
      <Portal>
        <Modal
          isOpen={isPopupShow}
          onClose={() => {
            setIsPopupShow(false);
          }}
        >
          <PopupAction
            id={id}
            popupType={popupType}
            name={name}
            type={type}
            size={size}
            onClose={() => setIsPopupShow(false)}
          />
        </Modal>
      </Portal>
    </>
  );
};
export default TableItem;
