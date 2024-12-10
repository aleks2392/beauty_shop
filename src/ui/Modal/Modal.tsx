import React, { FC } from "react";
import styles from "./UiModal.module.css";
import { Portal } from "../Portal/Portal";

export type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
};

export const Modal: FC<ModalProps> = ({ children, onClose }) => (
  <Portal>
    <div className={styles.uiModalOverlay}>
      <div className={styles.uiModalContent}>
        <button className={styles.uiModalCloseButton} onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  </Portal>
);
