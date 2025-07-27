import Divider from "@/components/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import styles from "./styles.module.scss";
import Modal from "../Modal";
import { useState } from "react";
import IconButton from "@/components/IconButton";

type TransactionItemProps = {
  hasDivider?: boolean;
  isCashWithdrawal?: boolean;
  isOpened?: boolean;
};

export default function TransactionItem({
  hasDivider = true,
  isCashWithdrawal = false,
}: TransactionItemProps) {
  const [isOpen, setisOpen] = useState(false);

  const handleModal = () => {
    setisOpen((prev) => !prev);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <p className={styles.title}>Tipo de transação</p>
          <p className={styles.date}>12 de abril de 2025</p>
          <IconButton
            priority="tertiary"
            size="small"
            icon={<EditIcon />}
            onClick={() => {
              console.log("Abriu um modal");
              handleModal();
            }}
          />
          <IconButton priority="tertiary" size="small" icon={<DeleteIcon />} />
        </div>
        <div className={styles.rightColumn}>
          <p
            className={` ${isCashWithdrawal ? styles.isCashWithdrawal : ""} ${
              styles.value
            }`}
          >
            + R$50,00
          </p>
        </div>
      </div>
      {hasDivider ? <Divider weight="bold" /> : null}
      <Modal isOpened={isOpen} handleModal={handleModal} />
    </>
  );
}
