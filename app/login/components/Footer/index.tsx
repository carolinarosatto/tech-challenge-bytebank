import React from "react";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.title}>Serviços</p>
        <ul className={styles.links}>
          <li className={styles.linkItem}>
            <a href="">Conta corrente</a>
          </li>
          <li className={styles.linkItem}>
            <a href="">Conta PJ</a>
          </li>
          <li className={styles.linkItem}>
            <a href="">Cartão de crédito</a>
          </li>
        </ul>
      </div>
      <div className={styles.container}>
        <p className={styles.title}>Contato</p>
        <ul className={styles.links}>
          <li className={styles.linkItem}>
            <a href="">0800 004 250 08</a>
          </li>
          <li className={styles.linkItem}>
            <a href="">meajuda@bytebank.com.br</a>
          </li>
          <li className={styles.linkItem}>
            <a href="">ouvidoria@bytebank.com.br</a>
          </li>
        </ul>
      </div>
      <div className={styles.container}>
        <p className={styles.title}>Redes sociais</p>
        <ul className={styles.links}>
          <li className={styles.linkItem}>
            <a href="">Facebook</a>
          </li>
          <li className={styles.linkItem}>
            <a href="">Instagram</a>
          </li>
          <li className={styles.linkItem}>
            <a href="">LinkedIn</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
