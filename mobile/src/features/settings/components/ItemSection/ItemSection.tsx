import { Pressable, View } from "react-native";
import { SettingItem } from "../../types/setting";
import { Typography } from "@components/Typography/Typography";
import IconLucide from "@components/IconLucide/IconLucide";
import { useCSSVariable } from "uniwind";

type Props = {
  item: SettingItem;
};

export const ItemSection = ({ item }: Props) => {
  const iconColor = useCSSVariable("--color-foreground-secondary");

  return (
    <View>
      <Pressable
        onPress={item.onPress}
        android_ripple={{ color: "#3a3a3c" }}
        className="active:opacity-60"
      >
        <View className="flex-row items-center justify-between pb-2.5">
          <View className="flex-1">
            <Typography
              className="text-foreground"
              size="base"
              weight="semibold"
            >
              {item.title}
            </Typography>
          </View>

          <View className="flex-row items-center">
            {item.value && (
              <Typography
                className="text-foreground-secondary mr-3"
                size="base"
              >
                {item.value}
              </Typography>
            )}
            <IconLucide
              name="ChevronRight"
              size={24}
              color={iconColor?.toString()}
            />
          </View>
        </View>
      </Pressable>
    </View>
  );
};
