import Card from "@/components/Card";
import TransactionItem from "../TransactionItem";
import styles from "./styles.module.scss";

export default function StatementList() {
  return (
    <div className={styles.container}>
      <Card title="Extrato">
        <div className={styles.cardBox}>
          <TransactionItem />
          <TransactionItem isCashWithdrawal />
          <TransactionItem />
          <TransactionItem />
          <TransactionItem />
          <TransactionItem />
          <TransactionItem />
        </div>
      </Card>
    </div>
  );
}
