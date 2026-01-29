import { PAYMENT_NETWORKS } from "@utils/constants";

export type PaymentNetwork =
  (typeof PAYMENT_NETWORKS)[keyof typeof PAYMENT_NETWORKS];
