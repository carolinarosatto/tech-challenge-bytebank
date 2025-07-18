import React from "react";
import styles from "./styles.module.scss";
import { ExpandMore } from "@mui/icons-material";

export interface InputSelectProps {
  labelText?: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  disabled?: boolean;
}

export default function InputSelect({
  labelText,
  value,
  onChange,
  options,
  placeholder,
  disabled = false,
}: InputSelectProps) {
  return (
    <div className={styles.inputSelectContainer}>
      {labelText && <label className={styles.label}>{labelText}</label>}
      <div className={styles.selectWrapper}>
        <select
          className={styles.select}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ExpandMore className={styles.icon} />
      </div>
    </div>
  );
}
