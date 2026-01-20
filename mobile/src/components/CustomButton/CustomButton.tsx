// components/ui/CustomButton.tsx
import { Typography } from '@components/Typography/Typography'
import { Pressable, PressableProps } from 'react-native'

interface CustomButtonProps extends PressableProps {
    label: string;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

const CustomButton = ({
    label,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}: CustomButtonProps) => {

    // Variant styles
    const variantStyles = {
        primary: 'bg-primary',
        secondary: 'bg-background-secondary',
        outline: 'bg-transparent border-2 border-primary',
    };

    // Size styles
    const sizeStyles = {
        sm: 'py-2',
        md: 'py-3',
        lg: 'py-4',
    };

    // Text colors based on variant
    const textColors = {
        primary: 'text-white',
        secondary: 'text-foreground',
        outline: 'text-primary',
    };

    return (
        <Pressable
            className={`rounded-full items-center ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
            style={({ pressed }) => ({ opacity: pressed ? 0.9 : 1 })}
            {...props}
        >
            <Typography size='base' weight='semibold' className={textColors[variant]}>
                {label}
            </Typography>
        </Pressable>
    );
};

export default CustomButton;