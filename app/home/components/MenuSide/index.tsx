"use client";

import Button from "@/components/Button";
import styles from "./styles.module.scss";
import { items } from "@/utils";

export default function MenuSide() {
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        {items.map(({ icon, label }) => {
          const IconComponent = icon;
          return (
            <Button
              key={label}
              label={label}
              priority="tertiary"
              reverse
              size="large"
              iconLeft={<IconComponent />}
              onClick={() => {}}
            />
          );
        })}
      </div>
    </div>
  );
}
