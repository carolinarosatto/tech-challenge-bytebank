import Card from "@/components/Card";
import styles from "./styles.module.scss";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { clients } from "@/data";
import { formatCurrency } from "@/utils";

export default function BalanceCard() {
  const client = clients[0];
  const isNegativeBalance = client.calculateBalance() < 0;

  return (
    <div className={styles.container}>
      <Card title="Saldo">
        <Card color="secondary">
          <div className={styles.innerCard}>
            <p
              className={`${styles.text} ${
                isNegativeBalance ? styles.isNegativeBalance : ""
              }`}
            >
              R$ {formatCurrency(client.calculateBalance())}
            </p>
            <VisibilityOffIcon />
          </div>
        </Card>
      </Card>
    </div>
  );
}
