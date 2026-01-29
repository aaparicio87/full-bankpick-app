import { View } from "react-native";

import { IconsLucide } from "@/types/icon";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import IconLucide from "../IconLucide/IconLucide";
import TabRightAction from "../TabRightAction/TabRightAction";
import { Typography } from "@components/Typography/Typography";

type Props = {
  title?: string;
  onPressAction: () => void;
  profile?: boolean;
  fullName?: string;
  iconName: IconsLucide;
};

const TabHeader = ({
  title = "Welcome to the app!",
  onPressAction,
  profile = false,
  fullName = "Jhon Doe",
  iconName,
}: Props) => {
  return (
    <View
      className={`flex-row items-center ${!profile ? "justify-end" : "justify-between"}`}
    >
      {profile && (
        <ProfileInfo>
          <View>
            <Typography className="text-muted-foreground">{title}</Typography>
            <Typography size="lg" weight="medium">
              {fullName}
            </Typography>
          </View>
        </ProfileInfo>
      )}
      <TabRightAction onPress={onPressAction}>
        <IconLucide name={iconName} size={18} />
      </TabRightAction>
    </View>
  );
};

export default TabHeader;
