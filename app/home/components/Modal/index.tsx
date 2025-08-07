"use client";

import InputText from "@/components/InputText";
import styles from "./styles.module.scss";
import InputSelect from "@/components/InputSelect";
import Button from "@/components/Button";
import { createPortal } from "react-dom";
import { useMounted } from "../../hooks";

type ModalProps = {
  isOpened: boolean;
  handleModal: () => void;
};

export default function Modal({ isOpened, handleModal }: ModalProps) {
  const mounted = useMounted();

  if (!mounted || !isOpened) return null;

  const doc = document.body;

  return (
    <>
      {createPortal(
        <div onClick={handleModal} className={styles.overlay}>
          <dialog
            className={styles.dialog}
            onClick={(e) => e.stopPropagation()}
          >
            <p className={styles.title}>Editar transação</p>
            <div className={styles.inputs}>
              <InputSelect
                value=""
                labelText="Selecione o tipo de transação"
                placeholder="Selecione o tipo de transação"
                onChange={() => {}}
                options={[
                  { value: "depósito", label: "Depósito" },
                  { value: "saque", label: "Saque" },
                  { value: "investimento", label: "Investimento" },
                  { value: "pagamento", label: "Pagamento" },
                  { value: "transferência", label: "Transferência" },
                  { value: "outro", label: "Outro" },
                ]}
              />
              <InputText
                labelText="Insira o valor"
                value=""
                onChange={() => {}}
              />
            </div>
            <div className={styles.buttons}>
              <Button
                label="Cancelar"
                priority="secondary"
                size="large"
                onClick={handleModal}
              />
              <Button label="Confirmar" size="large" />
            </div>
          </dialog>
        </div>,
        doc
      )}
    </>
  );
}
