import { Switch, View } from "react-native";
import { Typography } from "@components/Typography/Typography";
import { SettingItem } from "../../types/setting";

type Props = {
  item: SettingItem;
};

export const ItemSectionSwitch = ({ item }: Props) => {
  return (
    <View className="mb-px">
      <View className="flex-row items-center justify-between py-4">
        <Typography>{item.title}</Typography>
        <Switch
          value={item.switchValue ?? false}
          onValueChange={item.onSwitchChange}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={item.switchValue ? "#007AFF" : "#f4f3f4"}
        />
      </View>
    </View>
  );
};
