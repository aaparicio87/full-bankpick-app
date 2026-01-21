import { TRANSACTION_STATUS, TRANSACTION_TYPES } from "@utils/constants";

export type TransactionType =
  (typeof TRANSACTION_TYPES)[keyof typeof TRANSACTION_TYPES];

export type TransactionStatus =
  (typeof TRANSACTION_STATUS)[keyof typeof TRANSACTION_STATUS];

export type TransactionDirection = "IN" | "OUT";

export interface Transaction {
  id: string;
  title: string;
  subtitle: string;
  amount: number;
  currency: string;
  type: TransactionType;
  status: TransactionStatus;
  direction: TransactionDirection;
  icon: string;
  createdAt: number;
  updatedAt: number;
}

export interface TransactionsResponse {
  transactions: Transaction[];
  pagination?: {
    page: number;
    pageSize: number;
    total: number;
  };
}
