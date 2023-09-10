import { Dispatch, FC, PropsWithChildren } from "react";
import Portal from "../portal/Portal";
import { ModalLayout } from "./modal-layout/ModalLayout";
import { useMount } from "./useMount";

interface IModal {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: FC<PropsWithChildren<IModal>> = ({
  isOpen,
  onClose,
  children,
}) => {
  const { mounted } = useMount({ isOpen });

  if (!mounted) {
    return null;
  }

  return (
    <Portal>
      <ModalLayout onClose={onClose} isOpen={isOpen}>
        {children}
      </ModalLayout>
    </Portal>
  );
};
