export type TransactionDirection = "income" | "outcome";

export type TransactionType =
  | "deposit"
  | "withdrawal"
  | "investment"
  | "payment"
  | "transfer"
  | "other";

export interface Transaction {
  id: string;
  clientId: string;
  amount: number;
  date: string;
  direction: TransactionDirection;
  type: TransactionType;
}
