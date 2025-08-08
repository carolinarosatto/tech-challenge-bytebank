"use client";

import { Transaction } from "@/models/Transaction";
import BalanceCard from "./components/BalanceCard";
import Header from "./components/Header";
import MenuResponsive from "./components/MenuResponsive";
import NewTransactionCard from "./components/NewTransactionCard";
import StatementList from "./components/StatementList";
import styles from "./styles.module.scss";
import { useState } from "react";
import { transactions as mockTransactions } from "@/data/index";

export default function Home() {
  const [transactions, setTransactions] =
    useState<Transaction[]>(mockTransactions);

  const handleAddTransaction = (tx: Transaction) => {
    setTransactions((prev) => [tx, ...prev]);
  };

  return (
    <div className={styles.container}>
      <MenuResponsive />
      <div className={styles.main}>
        <div className={styles.layout}>
          <Header />
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <BalanceCard transactions={transactions} />
            <StatementList transactions={transactions} />
          </div>
          <div className={styles.right}>
            <NewTransactionCard onAdd={handleAddTransaction} />
          </div>
        </div>
      </div>
    </div>
  );
}
