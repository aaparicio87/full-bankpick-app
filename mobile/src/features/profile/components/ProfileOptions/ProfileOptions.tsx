import { useCallback } from "react";
import { FlatList, Pressable, View } from "react-native";
import { profileConfig } from "../../config/config";
import { Profile } from "../../types/profile";
import IconLucide from "@components/IconLucide/IconLucide";
import { Typography } from "@components/Typography/Typography";
import LineSeparator from "@components/LineSeparator/LineSeparator";

const ProfileOptions = () => {
  const renderItem = useCallback(({ item }: { item: Profile }) => {
    const { iconName, label, onPress } = item;
    return (
      <Pressable
        className="flex-row items-center justify-between active:opacity-60"
        onPress={onPress}
        android_ripple={{ color: "#3a3a3c" }}
      >
        <View className="flex-row items-center gap-x-5">
          <IconLucide name={iconName} />
          <Typography>{label}</Typography>
        </View>
        <IconLucide name="ChevronRight" />
      </Pressable>
    );
  }, []);

  return (
    <FlatList
      data={profileConfig}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <LineSeparator contentClassName="my-5" />}
      ListFooterComponent={<LineSeparator contentClassName="mt-3 mb-4" />}
      contentContainerClassName="mt-5"
      showsVerticalScrollIndicator={false}
      scrollEnabled={false}
    />
  );
};

export default ProfileOptions;
