import React, { FC } from "react";
<<<<<<< HEAD
import styles from "./UiModal.module.css";
=======
import styles from "./index.module.css";
>>>>>>> main
import { Portal } from "../Portal/Portal";

export type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
};

export const Modal: FC<ModalProps> = ({ children, onClose }) => (
  <Portal>
<<<<<<< HEAD
    <div className={styles.uiModalOverlay}>
      <div className={styles.uiModalContent}>
        <button className={styles.uiModalCloseButton} onClick={onClose}>
=======
    <div className={styles.overlay}>
      <div className={styles.content}>
        <button className={styles.closeButton} onClick={onClose}>
>>>>>>> main
          X
        </button>
        {children}
      </div>
    </div>
  </Portal>
);
