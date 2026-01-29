import { Transaction } from "../types/api";
import { PAYMENT_NETWORKS } from "./constants";
import { Card } from "@features/cards/types/cards";

export const mockTransactions: Transaction[] = [
  {
    id: "txn_001",
    title: "Apple Store",
    subtitle: "Entertainment",
    amount: 5.99,
    currency: "$",
    type: "SUBSCRIPTION",
    status: "COMPLETED",
    direction: "OUT",
    icon: "Apple",
    createdAt: 1739897229000,
    updatedAt: 1740068635000,
  },
  {
    id: "txn_002",
    title: "Spotify",
    subtitle: "Music",
    amount: 12.99,
    currency: "$",
    type: "SUBSCRIPTION",
    status: "COMPLETED",
    direction: "OUT",
    icon: "Music",
    createdAt: 1736068472000,
    updatedAt: 1736068472000,
  },
  {
    id: "txn_003",
    title: "Money Transfer",
    subtitle: "Transaction",
    amount: 300.0,
    currency: "$",
    type: "TRANSFER",
    status: "COMPLETED",
    direction: "IN",
    icon: "ArrowDownToLine",
    createdAt: 1741594961000,
    updatedAt: 1742020572000,
  },
  {
    id: "txn_004",
    title: "Amazon",
    subtitle: "Shopping",
    amount: 29.99,
    currency: "$",
    type: "PAYMENT",
    status: "COMPLETED",
    direction: "OUT",
    icon: "ShoppingCart",
    createdAt: 1742594961000,
    updatedAt: 1743020572000,
  },
];

export const CARDS_LIST: Card[] = [
  {
    id: "1",
    cardNumber: "1234 5678 9012 3456",
    expiryDate: "12/25",
    cvv: "123",
    paymentNetwork: PAYMENT_NETWORKS.VISA,
    fullName: "John Doe",
  },
  {
    id: "2",
    cardNumber: "9876 5432 1098 7654",
    expiryDate: "01/26",
    cvv: "456",
    paymentNetwork: PAYMENT_NETWORKS.MASTERCARD,
    fullName: "Jane Doe",
  },
];
