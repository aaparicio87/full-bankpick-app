import {
    Pressable,
} from 'react-native';
import Animated, {
    useAnimatedStyle,
    withSpring,
    withTiming,
    SharedValue
} from 'react-native-reanimated';
import { Feather } from '@expo/vector-icons';

type Props = {
    currentIndex: SharedValue<number>;
    length: number;
    flatListRef: any;
    onPress: () => void;
    label: string;
};


const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const OnboardButton = ({ currentIndex, length, onPress, label }: Props) => {
    const rnBtnStyle = useAnimatedStyle(() => {
        return {
            width:
                currentIndex.value === length - 1 ? withSpring(140) : withSpring(60),
            height: 60,
        };
    }, [currentIndex, length]);

    const rnTextStyle = useAnimatedStyle(() => {
        return {
            opacity:
                currentIndex.value === length - 1 ? withTiming(1) : withTiming(0),
            transform: [
                {
                    translateX:
                        currentIndex.value === length - 1 ? withTiming(0) : withTiming(100),
                },
            ],
        };
    }, [currentIndex, length]);



    const arrowAnimationStyle = useAnimatedStyle(() => {
        const isLastScreen = currentIndex.value === length - 1;
        return {
            opacity: isLastScreen ? withTiming(0) : withTiming(1),
            transform: [
                { translateX: isLastScreen ? withTiming(100) : withTiming(0) },
            ],
        };
    });


    return (
        <AnimatedPressable
            className='flex-row items-center justify-center overflow-hidden px-6 py-4 rounded-full bg-primary'
            style={rnBtnStyle}
            onPress={onPress}
        >
            <Animated.Text
                className='text-white absolute text-base font-semibold'
                style={rnTextStyle}
            >
                {label}
            </Animated.Text>
            <Animated.View className='absolute' style={arrowAnimationStyle}>
                <Feather
                    name="arrow-right"
                    size={30}
                    color={"white"}
                />
            </Animated.View>
        </AnimatedPressable>
    );
};

export default OnboardButton;
