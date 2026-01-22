import { useCallback } from "react";
import { FlatList, Pressable, View } from "react-native";
import { Typography } from "@components/Typography/Typography";

import { TransactionAction } from "../../types/transaction";
import { useCSSVariable } from "uniwind";

type Props = {
  listOperations: TransactionAction[];
};

export const Actions = ({ listOperations }: Props) => {
  const iconColor = useCSSVariable("--color-foreground");

  const renderItem = useCallback(({ item }: { item: TransactionAction }) => {
    const { action, icon, label } = item;
    const Icon = icon;

    return (
      <View className="items-center gap-y-0.5">
        <Pressable
          onPress={action}
          style={({ pressed }) => ({ opacity: pressed ? 0.2 : 1 })}
          className="w-13 h-13 rounded-full bg-background-secondary justify-center items-center"
        >
          <Icon color={iconColor?.toString()} />
        </Pressable>
        <Typography>{label}</Typography>
      </View>
    );
  }, []);

  return (
    <View className="mb-6">
      <FlatList
        data={listOperations}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        scrollEnabled={false}
        contentContainerClassName="flex-row justify-between gap-4 flex-1"
      />
    </View>
  );
};
