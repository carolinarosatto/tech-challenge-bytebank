import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";

export default function MainContent() {
  return (
    <section className={styles.mainContent}>
      <div className={styles.container}>
        <h1 className={styles.title}>Crie sua conta com a gente!</h1>
        <p className={styles.text}>
          Experimente mais liberdade no controle da sua vida financeira.
        </p>
      </div>
      <div className={styles.imageBox}>
        <Image
          className={styles.image}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "28rem", height: "auto" }}
          src="/lp_img.png"
          alt=""
        />
      </div>
    </section>
  );
}
