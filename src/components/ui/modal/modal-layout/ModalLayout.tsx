import { FC, PropsWithChildren, useEffect, useRef, useState } from "react";

import { ANIMATION_TIME } from "./const";
import styles from "./ModalLayout.module.scss";
import clsx from "clsx";

export const ModalLayout: FC<
  PropsWithChildren<{ onClose: () => void; isOpen: boolean }>
> = ({ onClose, children, isOpen }) => {
  const [animationIn, setAnimationIn] = useState(false);

  useEffect(() => setAnimationIn(isOpen), [isOpen]);

  return (
    <div className={styles.container}>
      <div
        className={clsx(styles.overlay, {
          [styles.animationIn]: animationIn,
          [styles.animationOverlayOut]: !animationIn,
        })}
        onClick={() => {
          setAnimationIn(false);
          onClose();
        }}
      />
      <div
        className={clsx(styles.content, {
          [styles.animationIn]: animationIn,
          [styles.animationOut]: !animationIn,
        })}
      >
        {children}
      </div>
    </div>
  );
};
