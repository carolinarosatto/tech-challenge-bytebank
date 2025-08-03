import clients from "./clients.json";
import transactions from "./transactions.json";
import { Client } from "@/models/Client";
import { Transaction } from "@/models/Transaction";

export const getClients = async (): Promise<Client[]> => {
  return clients;
};

export const getTransactions = async (): Promise<Transaction[]> => {
  return transactions.map((t) => ({
    ...t,
    direction: t.direction as Transaction["direction"],
    type: t.direction as Transaction["type"],
  }));
};
