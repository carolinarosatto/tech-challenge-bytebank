export type TransactionDirection = "income" | "outcome";
export type TransactionType =
  | "depósito"
  | "saque"
  | "investimento"
  | "pagamento"
  | "transferência"
  | "outro";

export class Transaction {
  id: string;
  clientId: string;
  amount: number;
  date: string;
  direction: TransactionDirection;
  type: TransactionType;

  constructor(
    id: string,
    clientId: string,
    amount: number,
    date: string,
    direction: TransactionDirection,
    type: TransactionType
  ) {
    this.id = id;
    this.clientId = clientId;
    this.amount = amount;
    this.date = date;
    this.direction = direction;
    this.type = type;
  }

  static typeToDirectionMap: Record<TransactionType, TransactionDirection> = {
    depósito: "income",
    saque: "outcome",
    investimento: "income",
    pagamento: "outcome",
    transferência: "outcome",
    outro: "outcome",
  };

  formattedAmount(): string {
    const sign = this.direction === "income" ? "+" : "-";
    return `${sign} R$${this.amount.toFixed(2).replace(".", ",")}`;
  }

  formattedDate(): string {
    return new Date(this.date).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }

  static getDirectionFromType(type: TransactionType): TransactionDirection {
    return this.typeToDirectionMap[type];
  }
}
