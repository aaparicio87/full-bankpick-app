import { View } from 'react-native'
import { Typography } from '@components/Typography/Typography'

type Props = {
    title: string
}

const Header = ({ title }: Props) => {
    return (
        <View className='my-5 py-6'>
            <Typography size='3xl' weight='medium'>{title}</Typography>
        </View>
    )
}

export default Header