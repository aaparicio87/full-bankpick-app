import IconLucide from "@components/IconLucide/IconLucide";
import { PropsWithChildren } from "react";
import { Pressable } from "react-native";

type Props = PropsWithChildren & {
  onPress?: () => void;
};

const TabRightAction = ({ children, onPress = () => {} }: Props) => {
  return (
    <Pressable
      className="rounded-full w-12 h-12 justify-center items-center bg-background-secondary"
      style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
      onPress={onPress}
    >
      {children}
    </Pressable>
  );
};

export default TabRightAction;
