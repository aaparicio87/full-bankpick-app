export const TRANSACTION_TYPES = {
  SUBSCRIPTION: "SUBSCRIPTION",
  PAYMENT: "PAYMENT",
  TRANSFER: "TRANSFER",
  DEPOSIT: "DEPOSIT",
  WITHDRAWAL: "WITHDRAWAL",
} as const;

export const TRANSACTION_STATUS = {
  PENDING: "PENDING",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  CANCELLED: "CANCELLED",
} as const;

export const PAYMENT_NETWORKS = {
  VISA: "Visa",
  MASTERCARD: "Matercard",
} as const;

export const CARD_BRAND_ICONS: Record<
  (typeof PAYMENT_NETWORKS)[keyof typeof PAYMENT_NETWORKS],
  string
> = {
  Visa: "visa_card",
  Matercard: "master_card",
};
