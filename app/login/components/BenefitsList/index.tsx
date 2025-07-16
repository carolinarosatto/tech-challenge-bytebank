import React from "react";
import BenefitsItem from "../BenefitsItem";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import DevicesIcon from "@mui/icons-material/Devices";
import styles from "./styles.module.scss";

const BenefitsList = () => {
  return (
    <div className={styles.benefitsList}>
      <BenefitsItem
        title="Conta e cartão gratuitos"
        description="Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção."
        icon={<CardGiftcardIcon />}
      />
      <BenefitsItem
        title="Saques sem custo"
        description="Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h."
        icon={<LocalAtmIcon />}
      />
      <BenefitsItem
        title="Programa de pontos"
        description="Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!"
        icon={<StarOutlineIcon />}
      />
      <BenefitsItem
        title="Seguro Dispositivos"
        description="Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica."
        icon={<DevicesIcon />}
      />
    </div>
  );
};

export default BenefitsList;
