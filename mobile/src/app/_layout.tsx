import '../global.css'
import { Stack } from "expo-router"
import SplashScreenController from "./splash";
import { AuthProvider, useAuthContext } from "@contexts/auth/AuthContext";
import { StatusBar } from 'expo-status-bar';
import { Uniwind } from 'uniwind';
import { getStoredThemeSync } from '@utils/theme';
import { useTheme } from '@hooks/useTheme';

const initialTheme = getStoredThemeSync()
Uniwind.setTheme(initialTheme)

function RootNavigator() {
    const { isAuthenticated, completeOnboarding } = useAuthContext()
    const { themeUpdated } = useTheme()

    return (
        <>
            <Stack screenOptions={{
                headerShown: false,
            }} >
                <Stack.Protected guard={!!isAuthenticated && !!completeOnboarding}>
                    <Stack.Screen name="(app)" />
                </Stack.Protected>

                <Stack.Protected guard={!isAuthenticated && !!completeOnboarding}>
                    <Stack.Screen name="(auth)" />
                </Stack.Protected>
                <Stack.Protected guard={!completeOnboarding}>
                    <Stack.Screen name="onboarding" />
                </Stack.Protected>
            </Stack>
            <StatusBar style={themeUpdated} />
        </>
    )
}

const RootLayout = () => {

    return (
        <AuthProvider>
            <SplashScreenController />
            <RootNavigator />
        </AuthProvider>
    )
}

export default RootLayout
