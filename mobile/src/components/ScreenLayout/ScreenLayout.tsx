import { PropsWithChildren } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = PropsWithChildren & {
  contentClassName?: string;
};

const ScreenLayout = ({ children, contentClassName = "flex-1 p-4" }: Props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className={contentClassName}>{children}</View>
    </SafeAreaView>
  );
};

export default ScreenLayout;
