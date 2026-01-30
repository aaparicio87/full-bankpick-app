import { Stack } from "expo-router";
import { useCSSVariable } from "uniwind";

export default function AppLayout() {
  const backgroundNavigation = useCSSVariable("--color-background");
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="card" />
      <Stack.Screen name="profile" />
      <Stack.Screen
        name="(modals)/add-card-modal"
        options={{
          presentation: "containedModal",
          gestureEnabled: false,
          contentStyle: {
            backgroundColor: backgroundNavigation?.toString(),
          },
        }}
      />
      <Stack.Screen
        name="(modals)/language-modal"
        options={{
          presentation: "containedModal",
          gestureEnabled: false,
          contentStyle: {
            backgroundColor: backgroundNavigation?.toString(),
          },
        }}
      />
      <Stack.Screen
        name="(modals)/edit-profile-modal"
        options={{
          presentation: "containedModal",
          gestureEnabled: false,
          contentStyle: {
            backgroundColor: backgroundNavigation?.toString(),
          },
        }}
      />
      <Stack.Screen
        name="(modals)/change-password-modal"
        options={{
          presentation: "containedModal",
          gestureEnabled: false,
          contentStyle: {
            backgroundColor: backgroundNavigation?.toString(),
          },
        }}
      />
      <Stack.Screen
        name="(modals)/theme-modal"
        options={{
          presentation: "containedModal",
          gestureEnabled: false,
          contentStyle: {
            backgroundColor: backgroundNavigation?.toString(),
          },
        }}
      />
    </Stack>
  );
}
