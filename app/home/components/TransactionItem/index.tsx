import Divider from "@/components/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import styles from "./styles.module.scss";
import Modal from "../Modal";
import { useState } from "react";
import IconButton from "@/components/IconButton";
import { Transaction } from "@/models/Transaction";
import { capitalize, formatDate } from "@/utils";

type TransactionItemProps = {
  id?: string;
  transaction: Transaction;
  hasDivider?: boolean;
  isOpened?: boolean;
};

export default function TransactionItem({
  id,
  transaction,
  hasDivider = true,
}: TransactionItemProps) {
  const [isOpen, setisOpen] = useState(false);

  const handleModal = () => {
    setisOpen((prev) => !prev);
  };

  const isCashWithdrawal = transaction.direction === "outcome";

  return (
    <>
      <div id={id}>
        <div className={styles.container}>
          <div className={styles.leftColumn}>
            <p className={styles.title}>{capitalize(transaction.type)}</p>
            <p className={styles.date}>{formatDate(transaction.date)}</p>
            <IconButton
              priority="tertiary"
              size="small"
              icon={<EditIcon />}
              onClick={() => {
                console.log("Abriu um modal" + transaction.id);
                handleModal();
              }}
            />
            <IconButton
              priority="tertiary"
              size="small"
              icon={<DeleteIcon />}
            />
          </div>
          <div className={styles.rightColumn}>
            <p
              className={` ${isCashWithdrawal ? styles.isCashWithdrawal : ""} ${
                styles.value
              }`}
            >
              {transaction.formattedAmount()}
            </p>
          </div>
        </div>
        {hasDivider ? <Divider weight="bold" /> : null}
        <Modal isOpened={isOpen} handleModal={handleModal} />
      </div>
    </>
  );
}
