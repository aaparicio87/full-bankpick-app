import { useCallback } from "react";
import { FlatList, View } from "react-native";
import { Typography } from "@components/Typography/Typography";
import { Transaction } from "@/types/api";
import { Icon } from "@components/Icon/Icon";
import * as icons from "lucide-react-native/icons";
import { HeaderTransaction } from "../HeaderTransactions/HeaderTransaction";

type Props = {
  transactions: Transaction[];
};

export const Transactions = ({ transactions }: Props) => {
  const renderItem = useCallback(({ item }: { item: Transaction }) => {
    const { icon, title, subtitle, currency, amount, direction } = item;

    return (
      <View className="flex-row justify-between items-center">
        <View className="flex-row justify-center items-center gap-x-4">
          <View className="w-12 h-12 rounded-full justify-center items-center bg-background-secondary">
            <Icon name={icon as keyof typeof icons} />
          </View>
          <View>
            <Typography weight="semibold" size="base">
              {title}
            </Typography>
            <Typography className="text-muted-foreground">
              {subtitle}
            </Typography>
          </View>
        </View>
        <Typography
          weight={direction === "IN" ? "semibold" : "medium"}
          className={`${direction === "IN" && "text-primary"}`}
        >{`${direction === "OUT" ? "-" : ""}${currency}${amount}`}</Typography>
      </View>
    );
  }, []);

  return (
    <View className="flex-1 gap-5">
      <HeaderTransaction />
      <FlatList
        data={transactions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className="m-3.5" />}
      />
    </View>
  );
};
