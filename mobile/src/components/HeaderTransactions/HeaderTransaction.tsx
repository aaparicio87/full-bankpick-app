import { Pressable, View } from "react-native";
import { Typography } from "../Typography/Typography";

type Props = {
  title?: string;
  actionText?: string;
  action: () => void;
};

const HeaderTransaction = ({
  title = "Transaction",
  actionText = "See All",
  action,
}: Props) => {
  return (
    <View className="flex-row justify-between items-center">
      <Typography weight="medium" size="xl">
        {title}
      </Typography>
      <Pressable
        onPress={action}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}
      >
        <Typography weight="medium" size="base" className="text-primary">
          {actionText}
        </Typography>
      </Pressable>
    </View>
  );
};

export default HeaderTransaction;
