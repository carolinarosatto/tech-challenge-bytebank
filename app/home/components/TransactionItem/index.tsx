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
  onUpdate: (updated: Transaction) => void;
  onDelete: (deleted: Transaction) => void;
};

export default function TransactionItem({
  id,
  transaction,
  hasDivider = true,
  onUpdate,
  onDelete,
}: TransactionItemProps) {
  const [isOpen, setisOpen] = useState(false);

  const handleModal = () => {
    setisOpen((prev) => !prev);
  };

  const handleSave = (updatedData: Partial<Transaction>) => {
    setisOpen((prev) => !prev);
    const updated = new Transaction(
      transaction.id,
      updatedData.clientId ?? transaction.clientId,
      updatedData.amount ?? transaction.amount,
      updatedData.date ?? transaction.date,
      updatedData.direction ?? transaction.direction,
      updatedData.type ?? transaction.type
    );
    onUpdate(updated);
    setisOpen(false);
  };

  const isCashWithdrawal = transaction.direction === "outcome";

  return (
    <>
      <div id={id}>
        <div className={styles.container}>
          <div className={styles.leftColumn}>
            <p className={styles.title}>{capitalize(transaction.type)}</p>
            <p className={styles.date}>{formatDate(transaction.date)}</p>
            <div className={styles.buttons}>
              <IconButton
                priority="tertiary"
                size="small"
                icon={<EditIcon />}
                onClick={() => {
                  handleModal();
                }}
              />
              <IconButton
                priority="tertiary"
                size="small"
                icon={<DeleteIcon />}
                onClick={() => onDelete(transaction)}
              />
            </div>
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
        <Modal
          isOpened={isOpen}
          handleModal={handleModal}
          onSave={handleSave}
          initialData={transaction}
        />
      </div>
    </>
  );
}
