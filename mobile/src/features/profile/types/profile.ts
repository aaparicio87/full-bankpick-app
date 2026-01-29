import { IconsLucide } from "@/types/icon";

export interface Profile {
  id: string;
  iconName: IconsLucide;
  label: string;
  onPress?: () => void;
}
