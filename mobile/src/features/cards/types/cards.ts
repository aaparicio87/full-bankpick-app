import { PaymentNetwork } from "@/types/payment";

export interface Card {
  id: string;
  fullName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  paymentNetwork: PaymentNetwork;
}
