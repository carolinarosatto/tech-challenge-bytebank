import React from "react";
import styles from "./styles.module.scss";

type DividerProps = {
  orientation?: "horizontal" | "vertical";
  weight?: "thin" | "bold";
};

export default function Divider({
  orientation = "horizontal",
  weight = "thin",
}: DividerProps) {
  return (
    <div
      className={`${styles.divider} ${styles[orientation]} ${styles[weight]}`}
    />
  );
}
