import { View } from "react-native";
import { Typography } from "@components/Typography/Typography";

type Props = {
  balance: string;
};

export const Balance = ({ balance }: Props) => {
  return (
    <View className="self-center items-center gap-1">
      <Typography className="text-muted-foreground" size="xl" weight="normal">
        Current Balance
      </Typography>
      <Typography size="2xl" weight="medium">
        {balance}
      </Typography>
    </View>
  );
};
