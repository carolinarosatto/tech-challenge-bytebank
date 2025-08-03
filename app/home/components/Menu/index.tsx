"use client";

import Button from "@/components/Button";
import styles from "./styles.module.scss";
import HomeIcon from "@mui/icons-material/Home";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PaidIcon from "@mui/icons-material/Paid";

const items = [
  { icon: HomeIcon, label: "Início" },
  { icon: CurrencyExchangeIcon, label: "Transferências" },
  { icon: PaidIcon, label: "Investimentos" },
  { icon: AccountBalanceIcon, label: "Outros serviços" },
];

export default function Menu() {
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        {items.map(({ icon, label }) => {
          const IconComponent = icon;
          return (
            <Button
              key={label}
              label={label}
              priority="tertiary"
              reverse
              size="large"
              iconLeft={<IconComponent />}
              onClick={() => {}}
            />
          );
        })}
      </div>
    </div>
  );
}
