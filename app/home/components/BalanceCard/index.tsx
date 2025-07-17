import Card from "@/components/Card";
import styles from "./styles.module.scss";

const BalanceCard = () => {
  return (
    <div className={styles.container}>
      <Card title="Saldo">
        <Card title="R$ 900,00" color="secondary"></Card>
      </Card>
    </div>
  );
};

export default BalanceCard;
