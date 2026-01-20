import { View } from 'react-native'
import TextInput from '@components/TextInput/TextInput'
import { useLogin } from './hooks/useLogin'
import { TEXTS } from '@utils/texts'

const LoginScreen = () => {

    const { login, tooglePasswordVisibility } = useLogin()

    return (
        <View className="flex-2">
            <TextInput
                label={TEXTS.email_address}
                leftIcon="Mail"
                placeholder={TEXTS.sample_mail}
                keyboardType="email-address"
            />

            <TextInput
                label={TEXTS.password}
                leftIcon="Lock"
                secureTextEntry={!login.passwordVisible}
                rightIcon={login.passwordVisible ? 'EyeOff' : 'Eye'}
                onRightIconPress={tooglePasswordVisibility}
            />
        </View>
    )
}

export default LoginScreen