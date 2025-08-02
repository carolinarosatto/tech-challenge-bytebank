import BalanceCard from "./components/BalanceCard";
import Header from "./components/Header";
import Menu from "./components/Menu";
import NewTransactionCard from "./components/NewTransactionCard";
import StatementList from "./components/StatementList";
import styles from "./styles.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Menu />
      <div className={styles.main}>
        <div className={styles.layout}>
          <Header />
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <BalanceCard />
            <StatementList />
          </div>
          <div className={styles.right}>
            <NewTransactionCard />
          </div>
        </div>
      </div>
    </div>
  );
}
