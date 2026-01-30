import { useRouter } from "expo-router";
import { View } from "react-native";
import Header from "@components/Header/Header";
import ProfileInfo from "@components/ProfileInfo/ProfileInfo";
import ScreenLayout from "@components/ScreenLayout/ScreenLayout";
import { Typography } from "@components/Typography/Typography";
import { handleBack } from "@utils/routes";
import ProfileOptions from "./components/ProfileOptions/ProfileOptions";

const ProfileScreen = () => {
  const router = useRouter();

  const handleEditProfile = () => {
    router.push("(app)/(modals)/edit-profile-modal");
  };

  return (
    <ScreenLayout>
      <Header
        nameRight="UserPen"
        handlePressLeft={handleBack}
        handlePressRight={handleEditProfile}
        title="Profile"
      />
      <ProfileInfo
        contentClassName="flex-row items-center gap-5 my-6"
        imageClassName="w-14 h-14"
      >
        <View>
          <Typography size="lg" weight="medium">
            {"Jhon Doe"}
          </Typography>
          <Typography className="text-muted-foreground">
            {"Senior Developer"}
          </Typography>
        </View>
      </ProfileInfo>
      <ProfileOptions />
    </ScreenLayout>
  );
};

export default ProfileScreen;
