"use client";

import Button from "@/components/Button";
import styles from "./styles.module.scss";
import HomeIcon from "@mui/icons-material/Home";

export default function Menu() {
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <Button
          label="Início"
          priority="tertiary"
          reverse
          size="large"
          iconLeft={<HomeIcon />}
        />
        <Button
          label="Transferências"
          priority="tertiary"
          reverse
          size="large"
        />
        <Button
          label="Investimentos"
          priority="tertiary"
          reverse
          size="large"
        />
        <Button
          label="Outros serviços"
          priority="tertiary"
          reverse
          size="large"
        />
      </div>
    </div>
  );
}
