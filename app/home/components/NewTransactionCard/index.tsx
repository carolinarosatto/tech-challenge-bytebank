"use client";

import Card from "@/components/Card";
import Image from "next/image";
import styles from "./styles.module.scss";
import InputSelect from "@/components/InputSelect";
import InputText from "@/components/InputText";
import Button from "@/components/Button";
import { Transaction, TransactionType } from "@/models/Transaction";
import { useState } from "react";
import { formatCurrency } from "@/utils";

interface NewTransactionCardProps {
  onAdd: (transaction: Transaction) => void;
}

export default function NewTransactionCard({ onAdd }: NewTransactionCardProps) {
  const [type, setType] = useState<TransactionType>("depósito");
  const [amount, setAmount] = useState<number>(0);

  const handleSubmit = () => {
    const direction = Transaction.getDirectionFromType(type);

    const newTransaction = new Transaction(
      crypto.randomUUID(),
      "123",
      amount,
      new Date().toISOString(),
      direction,
      type
    );

    onAdd(newTransaction);

    setAmount(0);
    setType("depósito");
  };

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
            value={type}
            labelText="Selecione o tipo de transação"
            placeholder="Selecione o tipo de transação"
            onChange={(e) => setType(e.target.value as TransactionType)}
            options={[
              { value: "depósito", label: "Depósito" },
              { value: "saque", label: "Saque" },
              { value: "investimento", label: "Investimento" },
              { value: "pagamento", label: "Pagamento" },
              { value: "transferência", label: "Transferência" },
              { value: "outro", label: "Outro" },
            ]}
          />
          <div style={{ height: "1.5rem" }}></div>
          <InputText
            value={formatCurrency(amount).toString()}
            onChange={(e) => {
              const rawValue = e.target.value;
              const numericString = rawValue.replace(/\D/g, "");
              const parsed = parseFloat(numericString) / 100 || 0;
              setAmount(parsed);
            }}
            labelText="Valor"
            placeholder="Digite o valor"
          />
          <div style={{ height: "2em" }}></div>
          <Button label="Confirmar" size="large" onClick={handleSubmit} />
        </div>
      </Card>
    </div>
  );
}
