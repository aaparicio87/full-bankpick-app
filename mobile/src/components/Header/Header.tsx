import { View } from "react-native";
import IconLucide from "../IconLucide/IconLucide";
import TabRightAction from "../TabRightAction/TabRightAction";
import { Typography } from "../Typography/Typography";
import { IconsLucide } from "@/types/icon";

type Props = {
  handlePressLeft?: () => void;
  handlePressRight?: () => void;
  title?: string;
  nameLeft?: IconsLucide;
  nameRight?: IconsLucide;
  hideLeft?: boolean;
};

const Header = ({
  handlePressLeft,
  handlePressRight = () => {},
  title,
  nameLeft = "ChevronLeft",
  nameRight,
  hideLeft = false,
}: Props) => {
  return (
    <View className="flex-row items-center">
      {/* Left button - fixed width */}
      <View className="w-12">
        {!hideLeft && (
          <TabRightAction onPress={handlePressLeft}>
            <IconLucide name={nameLeft} size={18} />
          </TabRightAction>
        )}
      </View>

      {/* Title - takes remaining space */}
      <View className="flex-1 items-center px-2">
        <Typography
          weight="semibold"
          size="base"
          className="text-center text-foreground"
        >
          {title}
        </Typography>
      </View>

      {/* Right button - fixed width */}
      <View className="w-12 items-end">
        {nameRight && (
          <TabRightAction onPress={handlePressRight}>
            <IconLucide name={nameRight} size={18} />
          </TabRightAction>
        )}
      </View>
    </View>
  );
};

export default Header;
