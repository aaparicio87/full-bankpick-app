import { IconsLucide } from "@/types/icon";

export interface TransactionAction {
  id: string;
  icon: IconsLucide;
  label: string;
  action: () => void;
}
