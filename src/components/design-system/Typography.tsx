import { cn } from '@/lib/utils';
import { forwardRef, HTMLAttributes } from 'react';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  /** Typography variant */
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body-lg' | 'body' | 'body-sm' | 'caption';
  /** Font family */
  family?: 'serif' | 'sans';
  /** Font weight */
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  /** Text color */
  color?: 'primary' | 'secondary' | 'accent' | 'muted';
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  /** HTML element to render */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  /** Balanced text wrap */
  balance?: boolean;
}

const typographyVariants = {
  variant: {
    h1: 'text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none',
    h2: 'text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight',
    h3: 'text-3xl md:text-4xl lg:text-5xl tracking-tight',
    h4: 'text-2xl md:text-3xl lg:text-4xl tracking-tight',
    'body-lg': 'text-lg md:text-xl lg:text-2xl leading-relaxed',
    'body': 'text-base md:text-lg leading-relaxed',
    'body-sm': 'text-sm md:text-base leading-relaxed',
    'caption': 'text-xs md:text-sm leading-normal',
  },
  family: {
    serif: 'font-serif',
    sans: 'font-sans',
  },
  weight: {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  },
  color: {
    primary: 'text-white',
    secondary: 'text-neutral-300',
    accent: 'text-amber-200',
    muted: 'text-neutral-400',
  },
  align: {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  },
};

const defaultElements = {
  h1: 'h1',
  h2: 'h2', 
  h3: 'h3',
  h4: 'h4',
  'body-lg': 'p',
  'body': 'p',
  'body-sm': 'p',
  'caption': 'span',
} as const;

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ 
    className,
    children,
    variant = 'body',
    family = 'sans',
    weight = 'normal',
    color = 'primary',
    align = 'left',
    as,
    balance = false,
    ...props 
  }, ref) => {
    const Component = as || defaultElements[variant];
    
    return (
      <Component
        ref={ref}
        className={cn(
          typographyVariants.variant[variant],
          typographyVariants.family[family],
          typographyVariants.weight[weight],
          typographyVariants.color[color],
          typographyVariants.align[align],
          balance && 'text-balance',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = 'Typography';
