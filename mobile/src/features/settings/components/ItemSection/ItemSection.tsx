import { Pressable, View } from "react-native";
import { SettingItem } from "../../types/setting";
import { Typography } from "@components/Typography/Typography";
import IconLucide from "@components/IconLucide/IconLucide";

type Props = {
  item: SettingItem;
};

export const ItemSection = ({ item }: Props) => {
  return (
    <View>
      <Pressable
        onPress={item.onPress}
        android_ripple={{ color: "#3a3a3c" }}
        className="active:opacity-60"
      >
        <View className="flex-row items-center justify-between pb-2.5">
          <View className="flex-1">
            <Typography className="text-white" size="lg">
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
            {/* Using a chevron icon or the character from your image */}
            <IconLucide name="ChevronRight" size={24} />
          </View>
        </View>
      </Pressable>
    </View>
  );
};
