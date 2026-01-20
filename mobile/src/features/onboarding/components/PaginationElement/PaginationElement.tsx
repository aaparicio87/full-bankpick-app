import { View } from 'react-native';
import React, { useCallback } from 'react';
import Animated, {
    Extrapolation,
    interpolate,
    useAnimatedStyle,
    SharedValue
} from 'react-native-reanimated';

type Props = {
    length: number;
    x: SharedValue<number>;
    screenWidth: number;
};


const PaginationElement = ({ length, x, screenWidth }: Props) => {

    const PaginationComponent = useCallback(({ index }: { index: number }) => {
        const animatedDotStyle = useAnimatedStyle(() => {
            const widthAnimation = interpolate(
                x.value,
                [
                    (index - 1) * screenWidth,
                    index * screenWidth,
                    (index + 1) * screenWidth,
                ],
                [10, 20, 10],
                Extrapolation.CLAMP
            );

            const opacityAnimation = interpolate(
                x.value,
                [
                    (index - 1) * screenWidth,
                    index * screenWidth,
                    (index + 1) * screenWidth,
                ],
                [0.5, 1, 0.5],
                Extrapolation.CLAMP
            );

            return {
                width: widthAnimation,
                opacity: opacityAnimation,
            };
        });

        return (
            <Animated.View
                className='w-2.5 h-2.5 rounded-sm bg-primary mx-2.5'
                style={animatedDotStyle}
            />
        );
    }, []);

    return (
        <View className='flex-row justify-center items-center'>
            {Array.from({ length }).map((_, index) => {
                return <PaginationComponent index={index} key={index} />;
            })}
        </View>
    );
};

export default PaginationElement;
