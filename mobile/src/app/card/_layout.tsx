import { Stack } from "expo-router";
import { useCSSVariable } from "uniwind";

export default function CardLayout() {
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
      <Stack.Screen
        name="add_card"
        options={{
          presentation: "fullScreenModal",
          gestureEnabled: false,
        }}
      />
    </Stack>
  );
}
