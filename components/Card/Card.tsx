import React from "react";
import styles from "./Card.module.scss";

type CardProps = {
  title?: string;
  children?: React.ReactNode;
  color?: "primary" | "secondary";
};

const Card: React.FC<CardProps> = ({ title, children, color = "primary" }) => {
  return (
    <div className={`${styles.card} ${styles[color]}`}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.content}>{children}</div>
    </div>
  );
};
export default Card;
