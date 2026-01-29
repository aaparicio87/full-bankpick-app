import { SettingSection } from "../types/setting";
import { router } from "expo-router";

export const SETTINGS_DATA: SettingSection[] = [
  {
    title: "General",
    data: [
      {
        id: "profile",
        title: "My Profile",
        type: "navigation",
        onPress: () =>
          router.navigate({
            pathname: "/profile",
          }),
      },
      {
        id: "language",
        title: "Language",
        type: "navigation",
        value: "English",
        onPress: () => console.log("Navigate to Language"),
      },
      {
        id: "contact",
        title: "Contact Us",
        type: "navigation",
        onPress: () => console.log("Navigate to Contact"),
      },
    ],
  },
  {
    title: "Security",
    data: [
      {
        id: "password",
        title: "Change Password",
        type: "navigation",
        onPress: () => console.log("Navigate to Change Password"),
      },
      {
        id: "privacy",
        title: "Privacy Policy",
        type: "navigation",
        onPress: () => console.log("Navigate to Privacy Policy"),
      },
    ],
  },
];
