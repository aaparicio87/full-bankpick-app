import { View } from 'react-native'
import CustomButton from '@components/CustomButton/CustomButton'
import { Typography } from '@components/Typography/Typography'
import { Link } from 'expo-router'

type Props = {
    text: string
    linkText: string
    linkUrl: string
    btnLabel: string
}

const Footer = ({
    text,
    linkText,
    linkUrl,
    btnLabel,
}: Props) => {
    return (
        <View className='flex-3'>
            <CustomButton label={btnLabel} size='lg' className='mb-5' />
            <Typography size='base' weight='normal' className='text-muted-foreground self-center'>
                {text} {' '}
                <Link href={{ pathname: linkUrl }}>
                    <Typography size='base' weight='medium' className='text-primary'>
                        {linkText}
                    </Typography>
                </Link>
            </Typography>
        </View>
    )
}

export default Footer