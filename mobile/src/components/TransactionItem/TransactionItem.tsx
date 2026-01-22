import { View } from "react-native";
import * as icons from "lucide-react-native/icons";

import { Typography } from "../Typography/Typography";
import IconLucide from "../IconLucide/IconLucide";
import { TransactionDirection } from "@/types/api";

type Props = {
  icon: string;
  title: string;
  subtitle: string;
  currency: string;
  amount: number;
  direction: TransactionDirection;
};

const TransactionItem = ({
  icon,
  title,
  subtitle,
  currency,
  amount,
  direction,
}: Props) => {
  const iconName = icon as keyof typeof icons;
  const ammountValue = `${direction === "OUT" ? "-" : ""}${currency}${amount}`;

  return (
    <View className="flex-row justify-between items-center">
      <View className="flex-row justify-center items-center gap-x-4">
        <View className="w-12 h-12 rounded-full justify-center items-center bg-background-secondary">
          <IconLucide name={iconName} />
        </View>
        <View>
          <Typography weight="semibold" size="base">
            {title}
          </Typography>
          <Typography className="text-muted-foreground">{subtitle}</Typography>
        </View>
      </View>
      <Typography
        weight="semibold"
        className={`${direction === "IN" ? "text-primary" : "text-foreground"}`}
        size="base"
      >
        {ammountValue}
      </Typography>
    </View>
  );
};

export default TransactionItem;
