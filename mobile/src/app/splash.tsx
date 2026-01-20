import { useAuthContext } from '@contexts/auth/AuthContext';
import * as SplashScreen from 'expo-splash-screen';


SplashScreen.preventAutoHideAsync();

export default function SplashScreenController() {
    const { isLoading } = useAuthContext();

    if (!isLoading) {
        SplashScreen.hide();
    }

    return null;
}
