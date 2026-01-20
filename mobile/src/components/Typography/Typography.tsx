import { fontWeights, textSizes } from '@utils/fonts';
import { Text, TextProps } from 'react-native';

type TextSize = keyof typeof textSizes;
type TextWeight = keyof typeof fontWeights;

interface TypographyProps extends TextProps {
    size?: TextSize;
    weight?: TextWeight;
    className?: string;
}

export const Typography = ({
    size = 'sm',
    weight = 'normal',
    className = '',
    ...props
}: TypographyProps) => {
    return (
        <Text
            className={`${textSizes[size]} ${fontWeights[weight]} ${className}`}
            {...props}
        />
    );
};