import { useCallback } from "react";
import { FlatList, Pressable, View } from "react-native";
import { Typography } from "@components/Typography/Typography";
import IconLucide from "@components/IconLucide/IconLucide";

import { TransactionAction } from "../../types/transaction";

type Props = {
  listOperations: TransactionAction[];
};

export const Actions = ({ listOperations }: Props) => {
  const renderItem = useCallback(({ item }: { item: TransactionAction }) => {
    const { action, icon, label } = item;

    return (
      <View className="items-center gap-y-1">
        <Pressable
          onPress={action}
          style={({ pressed }) => ({ opacity: pressed ? 0.2 : 1 })}
          className="w-13 h-13 rounded-full bg-background-secondary justify-center items-center"
        >
          <IconLucide name={icon} />
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
