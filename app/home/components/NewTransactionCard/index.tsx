"use client";

import Card from "@/components/Card";
import Image from "next/image";
import styles from "./styles.module.scss";
import InputSelect from "@/components/InputSelect";
import InputText from "@/components/InputText";
import Button from "@/components/Button";

export default function NewTransactionCard() {
  return (
    <div className={styles.container}>
      <Card>
        <div className={styles.content}>
          <Image
            src="/dashboard_img.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "26rem",
              height: "auto",
              display: "flex",
              alignSelf: "center",
            }}
            alt=""
          />
          <h3 className={styles.title}>Nova transação</h3>
          <InputSelect
            value=""
            labelText="Selecione o tipo de transação"
            placeholder="Selecione o tipo de transação"
            onChange={() => {}}
            options={[
              { value: "opcao1", label: "Opção 1" },
              { value: "opcao2", label: "Opção 2" },
              { value: "opcao3", label: "Opção 3" },
            ]}
          />
          <div style={{ height: "1.5rem" }}></div>
          <InputText
            value={""}
            onChange={() => {}}
            labelText="Valor"
            placeholder="Digite o valor"
          />
          <div style={{ height: "2em" }}></div>
          <Button label="Confirmar" size="large" />
        </div>
      </Card>
    </div>
  );
}
