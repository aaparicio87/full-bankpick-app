import { View } from "react-native";
import IconLucide from "../IconLucide/IconLucide";
import TabRightAction from "../TabRightAction/TabRightAction";
import { Typography } from "../Typography/Typography";
import { IconsLucide } from "@/types/icon";

type Props = {
  handlePressLeft: () => void;
  handlePressRight?: () => void;
  title?: string;
  nameLeft?: IconsLucide;
  nameRight?: IconsLucide;
};

const Header = ({
  handlePressLeft,
  handlePressRight = () => {},
  title,
  nameLeft = "ChevronLeft",
  nameRight,
}: Props) => {
  return (
    <View className="flex-row items-center">
      <View className="flex-1">
        <TabRightAction onPress={handlePressLeft}>
          <IconLucide name={nameLeft} size={18} />
        </TabRightAction>
      </View>

      <View className="flex-1 items-center">
        <Typography weight="semibold" size="base">
          {title}
        </Typography>
      </View>

      <View className="flex-1 items-end">
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
