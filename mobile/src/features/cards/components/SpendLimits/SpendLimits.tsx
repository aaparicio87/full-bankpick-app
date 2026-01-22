import { useState } from "react";
import { View } from "react-native";
import Slider from "@react-native-community/slider";

import { Typography } from "@components/Typography/Typography";

export const SpendLimits = () => {
  const [amount, setAmount] = useState(8545);
  const minValue = 0;
  const maxValue = 10000;

  const formatCurrency = (value: number) => {
    return `$${value.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  return (
    <View className="mt-2.5 gap-3">
      <Typography weight="medium" size="lg">
        Monthly spending limit
      </Typography>
      <View className="w-full h-28 bg-background-secondary rounded-2xl justify-center p-5">
        <Typography>Amount: {formatCurrency(amount)}</Typography>
        <Slider
          className="w-full h-10"
          minimumValue={minValue}
          maximumValue={maxValue}
          value={amount}
          onValueChange={setAmount}
          minimumTrackTintColor="#007AFF"
          maximumTrackTintColor="#E5E5EA"
          thumbTintColor="#007AFF"
          step={1}
        />
        <View className="flex-row justify-between mt-2">
          <Typography>${minValue}</Typography>
          <Typography>${(maxValue / 2).toLocaleString()}</Typography>
          <Typography>${maxValue.toLocaleString()}</Typography>
        </View>
      </View>
    </View>
  );
};
