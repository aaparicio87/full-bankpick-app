import Footer from '@features/auth/components/Footer/Footer';
import Header from '@features/auth/components/Header/Header';
import { authConfig, getAuthRoute } from '@utils/routes';
import { Slot, useSegments } from 'expo-router';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export default function AuthLayout() {
    const insets = useSafeAreaInsets();
    const segments = useSegments()
    const route = getAuthRoute(segments)
    const {
        title,
        footerText,
        footerLinkText,
        footerLinkUrl,
    } = authConfig[route]

    return (
        <View
            className='flex-1 bg-background px-5'
            style={{
                paddingTop: insets.top,
                paddingBottom: insets.bottom
            }}
        >
            <Header title={title} />
            <Slot />
            <Footer
                text={footerText}
                linkText={footerLinkText}
                linkUrl={footerLinkUrl}
                btnLabel={title}
            />
        </View>
    )
}