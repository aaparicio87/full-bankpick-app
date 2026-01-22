import { PropsWithChildren } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCSSVariable } from "uniwind";

type Props = PropsWithChildren & {
  className?: string;
  contentClassName?: string;
};

const TabScreenNavigation = ({
  children,
  className = "",
  contentClassName = "flex-1 p-5",
}: Props) => {
  const backgroundNavigation = useCSSVariable("--color-background");
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: backgroundNavigation?.toString() }}
      className={className}
      edges={["top"]}
    >
      <View className={contentClassName}>{children}</View>
    </SafeAreaView>
  );
};

export default TabScreenNavigation;
