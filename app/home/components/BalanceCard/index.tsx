import Card from "@/components/Card";
import styles from "./styles.module.scss";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function BalanceCard() {
  return (
    <div className={styles.container}>
      <Card title="Saldo">
        <Card color="secondary">
          <div className={styles.innerCard}>
            <p className={styles.text}>{"R$ " + "90,00"}</p>
            <VisibilityOffIcon />
          </div>
        </Card>
      </Card>
    </div>
  );
}
