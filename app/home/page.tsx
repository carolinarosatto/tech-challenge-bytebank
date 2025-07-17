import BalanceCard from "./components/BalanceCard";
import Menu from "./components/Menu";
import styles from "./styles.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Menu />
      <section className={styles.content}>
        <BalanceCard />
      </section>
    </div>
  );
}
