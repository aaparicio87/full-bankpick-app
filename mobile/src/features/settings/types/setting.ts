// Types for settings structure
export type SettingItemType = "navigation" | "switch";

export interface SettingItem {
  title: string;
  id: string;
  type: SettingItemType;
  value?: string;
  switchValue?: boolean;
  onPress?: () => void;
  onSwitchChange?: (value: boolean) => void;
}

export interface SettingSection {
  title: string;
  data: SettingItem[];
}
