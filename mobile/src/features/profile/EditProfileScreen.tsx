import Header from "@components/Header/Header";
import ScreenLayout from "@components/ScreenLayout/ScreenLayout";
import { handleBack } from "@utils/routes";

const EditProfileScreen = () => {
  return (
    <ScreenLayout>
      <Header handlePressLeft={handleBack} title="Edit Profile" />
    </ScreenLayout>
  );
};

export default EditProfileScreen;
