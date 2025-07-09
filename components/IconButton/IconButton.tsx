import React from "react";
import styles from "./IconButton.module.scss";

type IconButtonProps = {
  icon: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  priority?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
};

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  priority = "primary",
  disabled = false,
  size = "medium",
}) => {
  return (
    <button
      className={`${styles.iconButton} ${styles[priority]} ${styles[size]} ${
        disabled ? styles.disabled : ""
      }`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {icon}
    </button>
  );
};

export default IconButton;
