import React from "react";
import styles from "./styles.module.scss";

type BenefitsItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const BenefitsItem: React.FC<BenefitsItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className={styles.benefitsItem}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default BenefitsItem;
