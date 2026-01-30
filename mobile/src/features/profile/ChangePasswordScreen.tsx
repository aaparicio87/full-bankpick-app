import Header from "@components/Header/Header";
import ScreenLayout from "@components/ScreenLayout/ScreenLayout";
import TextInput from "@components/TextInput/TextInput";
import { handleBack } from "@utils/routes";
import { TEXTS } from "@utils/texts";
import { View } from "react-native";
import { useChangePassword } from "./hooks/useChangePassword";
import CustomButton from "@components/CustomButton/CustomButton";

const ChangePasswordScreen = () => {
  const { changePassword, tooglePasswordVisibility } = useChangePassword();

  return (
    <ScreenLayout>
      <Header handlePressLeft={handleBack} title="Change Password" />
      <View className="mt-5 gap-2">
        <TextInput
          label={TEXTS.current_password}
          leftIcon="Lock"
          secureTextEntry={!changePassword.currentPasswordVisible}
          rightIcon={!changePassword.currentPasswordVisible ? "EyeOff" : "Eye"}
          onRightIconPress={() =>
            tooglePasswordVisibility("currentPasswordVisible")
          }
        />
        <TextInput
          label={TEXTS.new_password}
          leftIcon="Lock"
          secureTextEntry={!changePassword.newPasswordVisible}
          rightIcon={!changePassword.newPasswordVisible ? "EyeOff" : "Eye"}
          onRightIconPress={() =>
            tooglePasswordVisibility("newPasswordVisible")
          }
        />
        <TextInput
          label={TEXTS.confirm_new_password}
          leftIcon="Lock"
          secureTextEntry={!changePassword.confirmPasswordVisible}
          rightIcon={!changePassword.confirmPasswordVisible ? "EyeOff" : "Eye"}
          onRightIconPress={() =>
            tooglePasswordVisibility("confirmPasswordVisible")
          }
        />
        <CustomButton
          label={TEXTS.change_password}
          size="lg"
          className="mt-7"
        />
      </View>
    </ScreenLayout>
  );
};

export default ChangePasswordScreen;
