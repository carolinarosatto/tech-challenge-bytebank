"use client";
import Card from "@/components/Card";
import TransactionItem from "../TransactionItem";
import styles from "./styles.module.scss";
// import { clients } from "@/data";
import { Transaction } from "@/models/Transaction";

interface StatementListProps {
  transactions: Transaction[];
}

export default function StatementList({ transactions }: StatementListProps) {
  if (transactions.length === 0) {
    return <p>Nenhuma transação encontrada.</p>;
  }
  return (
    <div className={styles.container}>
      <Card title="Extrato">
        <div className={styles.cardBox}>
          {transactions.map((transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))}
        </div>
      </Card>
    </div>
  );
}
