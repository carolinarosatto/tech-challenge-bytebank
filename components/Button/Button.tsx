import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  label: string;
  priority?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  label,
  priority = "primary",
  size = "medium",
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={`${styles.button} ${styles[priority]} ${
        disabled ? styles.disabled : ""
      } ${styles[size]}`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
