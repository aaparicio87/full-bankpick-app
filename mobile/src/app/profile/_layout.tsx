import BackButton from "@components/BackButtom/BackButton";
import IconLucide from "@components/IconLucide/IconLucide";
import TabRightAction from "@components/TabRightAction/TabRightAction";
import { handleBack } from "@utils/routes";
import { Stack } from "expo-router";
import { Platform } from "react-native";
import { useCSSVariable } from "uniwind";

export default function ProfileLayout() {
  const backgroundNavigation = useCSSVariable("--color-background");

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: backgroundNavigation?.toString(),
        },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="edit" />
    </Stack>
  );
}
