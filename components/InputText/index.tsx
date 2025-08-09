import React from "react";
import styles from "./styles.module.scss";

type InputTextProps = {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  errorMessage?: string;
  isError?: boolean;
  labelText?: string;
};

export default function InputText({
  name = "",
  value,
  onChange,
  placeholder = "",
  disabled = false,
  errorMessage = "",
  isError = false,
  labelText = "",
}: InputTextProps) {
  return (
    <div className={styles.inputContainer}>
      {labelText && <label className={styles.label}>{labelText}</label>}
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`${styles.input} ${isError ? styles.error : ""}`}
      />
      {isError && <span className={styles.errorMessage}>{errorMessage}</span>}
    </div>
  );
}
