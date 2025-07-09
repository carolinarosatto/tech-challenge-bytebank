import React from "react";
import styles from "./Divider.module.scss";

type DividerProps = {
  orientation?: "horizontal" | "vertical";
  weight?: "thin" | "bold";
};

const Divider: React.FC<DividerProps> = ({
  orientation = "horizontal",
  weight = "medium",
}) => {
  return (
    <div
      className={`${styles.divider} ${styles[orientation]} ${styles[weight]}`}
    />
  );
};
export default Divider;
