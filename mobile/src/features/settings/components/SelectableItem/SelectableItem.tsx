// components/SelectableItem/SelectableItem.tsx
import RadioCheck from "@components/RadioCheck/RadioCheck";
import { Typography } from "@components/Typography/Typography";
import { Pressable, View } from "react-native";

type SelectableItemData = {
  name: string;
  icon?: string;
  active: boolean;
};

type Props<T extends SelectableItemData> = {
  item: T;
  onPress: () => void;
};

export const SelectableItem = <T extends SelectableItemData>({
  item,
  onPress,
}: Props<T>) => {
  return (
    <Pressable
      className="flex-row justify-between items-center"
      style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
      onPress={onPress}
    >
      <View className="flex-row items-center gap-3">
        {item.icon && <Typography size="xl">{item.icon}</Typography>}
        <Typography>{item.name}</Typography>
      </View>
      {item.active && <RadioCheck />}
    </Pressable>
  );
};
