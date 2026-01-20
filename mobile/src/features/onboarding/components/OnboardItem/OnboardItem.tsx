import { View } from 'react-native'
import Animated, {
    Extrapolation,
    interpolate,
    useAnimatedStyle,
    SharedValue
} from 'react-native-reanimated';
import { Typography } from '@components/Typography/Typography';
import { Page } from '../../data/pages';

type Props = {
    item: Page;
    index: number;
    x: SharedValue<number>;
    screenWidth: number;
};

const OnboardItem = ({ item, index, x, screenWidth }: Props) => {

    const imageAnimatedStyle = useAnimatedStyle(() => {
        const opacityAnimation = interpolate(
            x.value,
            [
                (index - 1) * screenWidth,
                index * screenWidth,
                (index + 1) * screenWidth,
            ],
            [0, 1, 0],
            Extrapolation.CLAMP
        );

        const translateYAnimation = interpolate(
            x.value,
            [
                (index - 1) * screenWidth,
                index * screenWidth,
                (index + 1) * screenWidth,
            ],
            [100, 0, 100],
            Extrapolation.CLAMP
        );

        return {
            width: screenWidth * 0.8,
            height: screenWidth * 0.8,
            opacity: opacityAnimation,
            transform: [{ translateY: translateYAnimation }],
        };
    });

    const textAnimatedStyle = useAnimatedStyle(() => {
        const opacityAnimation = interpolate(
            x.value,
            [
                (index - 1) * screenWidth,
                index * screenWidth,
                (index + 1) * screenWidth,
            ],
            [0, 1, 0],
            Extrapolation.CLAMP
        );

        const translateYAnimation = interpolate(
            x.value,
            [
                (index - 1) * screenWidth,
                index * screenWidth,
                (index + 1) * screenWidth,
            ],
            [100, 0, 100],
            Extrapolation.CLAMP
        );

        return {
            opacity: opacityAnimation,
            transform: [{ translateY: translateYAnimation }],
        };
    });

    return (
        <View className='flex-1 items-center justify-around' style={{ width: screenWidth }}>
            <Animated.Image
                source={{ uri: item.image }}
                style={imageAnimatedStyle}
                resizeMode="contain"
            />
            <Animated.View style={textAnimatedStyle} className='px-8'>
                <Typography size='2xl' weight='semibold' className='text-center'>
                    {item.text}
                </Typography>
            </Animated.View>
        </View>
    );
}

export default OnboardItem