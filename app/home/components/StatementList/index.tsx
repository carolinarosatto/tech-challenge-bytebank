"use client";
import Card from "@/components/Card";
import TransactionItem from "../TransactionItem";
import styles from "./styles.module.scss";
import { clients } from "@/data";

export default function StatementList() {
  const client = clients[0];
  return (
    <div className={styles.container}>
      <Card title="Extrato">
        <div className={styles.cardBox}>
          {client.transactions.map((transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))}
        </div>
      </Card>
    </div>
  );
}
