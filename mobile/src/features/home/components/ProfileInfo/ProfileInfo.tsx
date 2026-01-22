import { View, Image } from "react-native";
import { Typography } from "@components/Typography/Typography";

type Props = {
  welcomeText: string;
  fullName: string;
};

export const ProfileInfo = ({ welcomeText, fullName }: Props) => {
  return (
    <View className="flex-1 flex-row items-center gap-2">
      <Image
        className="rounded-full w-12 h-12 bg-border  "
        source={{ uri: "https://picsum.photos/seed/696/3000/2000" }}
      />
      <View>
        <Typography className="text-muted-foreground">{welcomeText}</Typography>
        <Typography size="lg" weight="medium">
          {fullName}
        </Typography>
      </View>
    </View>
  );
};
