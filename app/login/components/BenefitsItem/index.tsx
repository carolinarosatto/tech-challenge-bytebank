import React from "react";
import styles from "./styles.module.scss";

type BenefitsItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function BenefitsItem({
  icon,
  title,
  description,
}: BenefitsItemProps) {
  return (
    <div className={styles.benefitsItem}>
      <div className={styles.icon}>{icon}</div>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
