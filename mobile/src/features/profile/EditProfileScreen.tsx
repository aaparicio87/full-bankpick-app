import Header from "@components/Header/Header";
import ProfileInfo from "@components/ProfileInfo/ProfileInfo";
import ScreenLayout from "@components/ScreenLayout/ScreenLayout";
import TextInput from "@components/TextInput/TextInput";
import { Typography } from "@components/Typography/Typography";
import { handleBack } from "@utils/routes";
import { TEXTS } from "@utils/texts";
import { View } from "react-native";

const EditProfileScreen = () => {
  return (
    <ScreenLayout>
      <Header
        title="Edit Profile"
        hideLeft
        nameRight="X"
        handlePressRight={handleBack}
      />
      <ProfileInfo
        contentClassName="items-center my-3"
        imageClassName="w-18 h-18"
      >
        <View className="items-center pt-2 gap-1">
          <Typography size="lg" weight="medium">
            {"Jhon Doe"}
          </Typography>
          <Typography className="text-muted-foreground">
            {"Senior Developer"}
          </Typography>
        </View>
      </ProfileInfo>

      <View className="px-4">
        <TextInput
          label={TEXTS.full_name}
          leftIcon="CircleUser"
          placeholder={TEXTS.sample_name}
        />
        <TextInput
          label={TEXTS.email_address}
          leftIcon="Mail"
          placeholder={TEXTS.sample_mail}
          keyboardType="email-address"
        />
        <TextInput
          label={TEXTS.phone_number}
          leftIcon="Phone"
          placeholder={TEXTS.phone_number_placeholder}
          keyboardType="phone-pad"
        />
        <TextInput
          label={TEXTS.birth_date}
          leftIcon="Calendar"
          placeholder={TEXTS.birth_date_placeholder}
          keyboardType="number-pad"
        />
      </View>
    </ScreenLayout>
  );
};

export default EditProfileScreen;
