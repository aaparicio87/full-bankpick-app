import { useCallback } from 'react';
import { View, TextInput as RNTextInput, TextInputProps, Pressable } from 'react-native';
import { LucideIcon } from 'lucide-react-native';
import * as Icons from 'lucide-react-native';
import { Typography } from '../Typography/Typography';


type InputVariant = 'default' | 'search';
type LucideIconName = keyof typeof Icons;

interface InputProps extends TextInputProps {
    variant?: InputVariant;
    label?: string;
    leftIcon?: LucideIconName;
    rightIcon?: LucideIconName;
    onRightIconPress?: () => void;
    error?: string;
    containerClassName?: string;
    inputClassName?: string;
}

const TextInput = ({
    variant = 'default',
    label,
    leftIcon,
    rightIcon,
    onRightIconPress,
    error,
    containerClassName = '',
    inputClassName = '',
    placeholderTextColor = '#a2a2a7',
    ...props
}: InputProps) => {

    const renderIcon = useCallback((iconName: LucideIconName, color: string = '#a2a2a7') => {
        const IconComponent = Icons[iconName] as LucideIcon;
        return IconComponent ? <IconComponent size={20} color={color} /> : null;
    }, [])

    if (variant === 'search') {
        return (
            <View className={containerClassName}>
                <View className="flex-row items-center bg-background-secondary rounded-xl px-4 py-3">
                    {renderIcon('Search')}
                    <RNTextInput
                        className={`flex-1 text-base font-normal text-foreground ml-3 ${inputClassName}`}
                        placeholderTextColor={placeholderTextColor}
                        {...props}
                    />
                </View>
            </View>
        );
    }

    return (
        <View className='pb-3 my-3 border-b-2 border-border'>
            {label && (
                <Typography size='sm' weight='normal' className="mb-3.5 text-muted-foreground">
                    {label}
                </Typography>
            )}

            <View className={`flex-row items-center`}>
                {leftIcon && (
                    <View className="mr-3 pl-1">
                        {renderIcon(leftIcon)}
                    </View>
                )}

                <RNTextInput
                    className={`flex-1 text-base font-normal text-foreground ${inputClassName}`}
                    placeholderTextColor={placeholderTextColor}
                    {...props}
                />

                {rightIcon && onRightIconPress && (
                    <Pressable
                        onPress={onRightIconPress}
                        style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
                        className="ml-3"
                    >
                        {renderIcon(rightIcon)}
                    </Pressable>
                )}
            </View>

            {error && (
                <Typography size="xs" className="text-danger mt-1">
                    {error}
                </Typography>
            )}
        </View>
    );
};

export default TextInput