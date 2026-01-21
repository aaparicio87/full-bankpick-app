import { Typography } from "@components/Typography/Typography";
import { View } from "react-native";

export const HeaderTransaction = () => {
  return (
    <View className="flex-row justify-between items-center">
      <Typography weight="medium" size="lg">
        Transaction
      </Typography>
      <Typography weight="medium" size="sm" className="text-primary">
        See All
      </Typography>
    </View>
  );
};
