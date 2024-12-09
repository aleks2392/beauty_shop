import React, { FC } from "react";
import cn from "classnames";
import styles from "./button.module.css";

type Props = {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
};

export const Button: FC<Props> = ({ children, onClick, className }) => {
  return (
    <button className={cn(styles.button, className)} onClick={onClick}>
      {children}
    </button>
  );
};
