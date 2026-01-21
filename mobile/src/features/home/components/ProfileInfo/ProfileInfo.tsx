import { Typography } from "@components/Typography/Typography";
import { View, Image } from "react-native";

export const ProfileInfo = () => {
  return (
    <View className="flex-1 flex-row items-center gap-2">
      <Image
        className="rounded-full w-12 h-12 bg-border  "
        source={{ uri: "https://picsum.photos/seed/696/3000/2000" }}
      />
      <View>
        <Typography size="xs" weight="normal" className="text-muted-foreground">
          Welcome to the app!
        </Typography>
        <Typography size="lg" weight="medium">
          Jhon Doe
        </Typography>
      </View>
    </View>
  );
};
