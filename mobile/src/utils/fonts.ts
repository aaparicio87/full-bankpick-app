
export type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
export type TextWeight = 'normal' | 'medium' | 'semibold' | 'bold';

export const Size = {
  xs: 'xs',
  sm: 'sm',
  base: 'base',
  lg: 'lg',
  xl: 'xl',
  '2xl': '2xl',
  '3xl': '3xl',
  '4xl': '4xl',
} as const;

export const Weight = {
  normal: 'normal',
  medium: 'medium',
  semibold: 'semibold',
  bold: 'bold',
} as const;

export const textSizes: Record<keyof typeof Size, string> = {
    xs: 'text-xs',       // 12px
    sm: 'text-sm',       // 14px
    base: 'text-base',   // 16px
    lg: 'text-lg',       // 18px
    xl: 'text-xl',       // 20px
    '2xl': 'text-2xl',   // 24px
    '3xl': 'text-3xl',   // 30px
    '4xl': 'text-4xl',   // 36px
};

export const fontWeights: Record<keyof typeof Weight, string> = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
};