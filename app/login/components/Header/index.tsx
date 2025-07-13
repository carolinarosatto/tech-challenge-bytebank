import React from "react";
import styles from "./styles.module.scss";
import Button from "@/components/Button";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftContainer}>
        <p className={styles.logo}>bytebank</p>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="" className={styles.navLink}>
                Sobre
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="" className={styles.navLink}>
                Serviços
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.buttons}>
        <Button label="Abrir minha conta" />
        <Button label="Já tenho conta" priority="secondary" />
      </div>
    </header>
  );
};

export default Header;
