import React, { FC } from "react";
import cn from "classnames";
import styles from "./button.module.css";

type Props = {
  label?: string;
  disabled?: boolean;
  variant?: "pink" | "transparent" | "";
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<Props> = ({
  children,
  onClick,
  className,
  label,
  disabled = false,
  variant = "pink",
  ...inputAttributes
}) => {
  const buttonClass = cn(styles.btn, styles[`btn-${variant}`], className);

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      {...inputAttributes}
    >
      {label && <span>{label}</span>}
      {children && <span className={styles.icon}>{children}</span>}
    </button>
  );
};
