import { Stack } from "expo-router";
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
      <Stack.Screen name="language" />
      <Stack.Screen name="change-password" />
    </Stack>
  );
}
