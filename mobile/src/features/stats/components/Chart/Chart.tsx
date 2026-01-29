import { SharedValue, useDerivedValue } from "react-native-reanimated";
import { View } from "react-native";
import { useCSSVariable } from "uniwind";
import { Canvas, Circle, Text, useFont } from "@shopify/react-native-skia";
import { CartesianChart, Line, useChartPressState } from "victory-native";
import { useEffect, useState } from "react";
import { Balance } from "../Balance/Balance";

const roboto = require("../../utils/Poppins-SemiBold.ttf");

type ToolTipProps = {
  x: SharedValue<number>;
  y: SharedValue<number>;
  color: string;
};

type ChartProps = {
  data: {
    month: string;
    balance: number;
  }[];
};

function ToolTip({ x, y, color }: ToolTipProps) {
  return (
    <Circle cx={x} cy={y} r={8} color={color} style="stroke" strokeWidth={6} />
  );
}

export const Chart = ({ data }: ChartProps) => {
  const [balance, setBalance] = useState("");
  const font = useFont(roboto, 12);
  const lineColor = useCSSVariable("--color-primary");
  const labelColor = useCSSVariable("--color-foreground-secondary");

  const { state, isActive } = useChartPressState({ x: "", y: { balance: 0 } });

  const value = useDerivedValue(() => {
    const currentBalance = `${state.y.balance.value.value.toFixed(2)}`;
    return currentBalance;
  }, [state]);

  return (
    <View className="flex-1 h-90 my-3 gap-2">
      <Canvas className="flex-1">
        <Text x={0} y={12} text="Hello World" font={font} />
      </Canvas>
      <View className="flex-1 ">
        <CartesianChart
          data={data}
          xKey="month"
          yKeys={["balance"]}
          axisOptions={{
            labelColor: labelColor?.toString(),
            font,
          }}
          chartPressState={state}
        >
          {({ points }) => {
            return (
              <>
                <Line
                  points={points.balance}
                  color={lineColor?.toString()}
                  strokeWidth={4}
                  curveType="natural"
                  animate={{ type: "timing", duration: 500 }}
                />
                {isActive ? (
                  <ToolTip
                    x={state.x.position}
                    y={state.y.balance.position}
                    color={lineColor?.toString()!}
                  />
                ) : null}
              </>
            );
          }}
        </CartesianChart>
      </View>
    </View>
  );
};
