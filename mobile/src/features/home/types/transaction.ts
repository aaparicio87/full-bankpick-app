import { LucideIcon } from "lucide-react-native";

export interface TransactionAction {
  id: string;
  icon: LucideIcon;
  label: string;
  action: () => void;
}
