import { ReactElement, useCallback } from "react";
import { FlatList, View } from "react-native";

import { Transaction } from "@/types/api";
import TransactionItem from "../TransactionItem/TransactionItem";

type Props = {
  transactions: Transaction[];
  children?: React.ReactNode;
  containerClassName?: string;
};

const TransactionsList = ({
  transactions,
  children,
  containerClassName,
}: Props) => {
  const renderItem = useCallback(({ item }: { item: Transaction }) => {
    const { icon, title, subtitle, currency, amount, direction } = item;

    return (
      <TransactionItem
        icon={icon}
        title={title}
        subtitle={subtitle}
        currency={currency}
        amount={amount}
        direction={direction}
      />
    );
  }, []);

  return (
    <View className={containerClassName}>
      {children}
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

export default TransactionsList;
