import styles from "./Divider.module.css";
import React, { FC } from "react";

type Props = {
  text: string;
};

export const Divider: FC<Props> = ({ text }) => (
  <div className={styles.modalDivider}>
    <span className={styles.dividerLine}></span>
    <span className={styles.dividerText}>OR</span>
    <span className={styles.dividerLine}></span>
  </div>
);
