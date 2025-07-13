import React from "react";
import BenefitsItem from "../BenefitsItem";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
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
        title="Conta e cartão gratuitos"
        description="Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção."
        icon={<CardGiftcardIcon />}
      />
      <BenefitsItem
        title="Conta e cartão gratuitos"
        description="Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção."
        icon={<CardGiftcardIcon />}
      />
      <BenefitsItem
        title="Conta e cartão gratuitos"
        description="Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção."
        icon={<CardGiftcardIcon />}
      />
    </div>
  );
};

export default BenefitsList;
