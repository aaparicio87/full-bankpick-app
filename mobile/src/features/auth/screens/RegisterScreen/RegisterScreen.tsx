import TextInput from '@components/TextInput/TextInput'
import { TEXTS } from '@utils/texts'
import { ScrollView } from 'react-native'
import { useRegister } from './hooks/useRegister'

const RegisterScreen = () => {

    const { register, tooglePasswordVisibility } = useRegister()

    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
            <TextInput
                label={TEXTS.full_name}
                leftIcon="User"
                placeholder={TEXTS.sample_name}
            />
            <TextInput
                label={TEXTS.phone_number}
                leftIcon="Phone"
                placeholder={TEXTS.phone_number_placeholder}
                keyboardType="phone-pad"
            />
            <TextInput
                label={TEXTS.email_address}
                leftIcon="Mail"
                placeholder={TEXTS.sample_mail}
                keyboardType="email-address"
            />
            <TextInput
                label={TEXTS.password}
                leftIcon="Lock"
                secureTextEntry={!register.passwordVisible}
                rightIcon={register.passwordVisible ? 'EyeOff' : 'Eye'}
                onRightIconPress={() => tooglePasswordVisibility('passwordVisible')}
            />
            <TextInput
                label={TEXTS.confirm_password}
                leftIcon="Lock"
                secureTextEntry={!register.confirmPasswordVisible}
                rightIcon={register.confirmPasswordVisible ? 'EyeOff' : 'Eye'}
                onRightIconPress={() => tooglePasswordVisibility('confirmPasswordVisible')}
            />
        </ScrollView>
    )
}

export default RegisterScreen