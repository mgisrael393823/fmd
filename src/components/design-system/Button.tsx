import { cn } from '@/lib/utils';
import { forwardRef, ButtonHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button visual variant */
  variant?: 'primary' | 'secondary' | 'ghost' | 'glass';
  /** Button size */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Full width button */
  fullWidth?: boolean;
  /** Render as different component */
  asChild?: boolean;
  /** Loading state */
  loading?: boolean;
}

const buttonVariants = {
  variant: {
    primary: [
      'bg-amber-200/20 border-amber-200/40 text-amber-200',
      'hover:bg-amber-200/30 hover:border-amber-200/60',
      'active:bg-amber-200/25',
      'disabled:opacity-50 disabled:cursor-not-allowed',
    ].join(' '),
    secondary: [
      'bg-white/10 border-white/20 text-white',
      'hover:bg-white/15 hover:border-white/30',
      'active:bg-white/12',
      'disabled:opacity-50 disabled:cursor-not-allowed',
    ].join(' '),
    ghost: [
      'bg-transparent border-transparent text-white',
      'hover:bg-white/10',
      'active:bg-white/5',
      'disabled:opacity-50 disabled:cursor-not-allowed',
    ].join(' '),
    glass: [
      'bg-white/10 backdrop-blur-sm border-white/20 text-white',
      'hover:bg-white/15 hover:border-white/30 hover:-translate-y-0.5',
      'active:translate-y-0',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
    ].join(' '),
  },
  size: {
    sm: 'px-4 py-2 text-sm font-medium',
    md: 'px-6 py-3 text-base font-medium', 
    lg: 'px-8 py-4 text-lg font-medium',
    xl: 'px-10 py-5 text-xl font-medium',
  },
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className,
    children,
    variant = 'secondary',
    size = 'md',
    fullWidth = false,
    asChild = false,
    loading = false,
    disabled,
    ...props 
  }, ref) => {
    const Comp = asChild ? Slot : 'button';
    
    return (
      <Comp
        ref={ref}
        className={cn(
          // Base styles
          'relative inline-flex items-center justify-center',
          'rounded-full border transition-all duration-300',
          'focus:outline-none focus:ring-2 focus:ring-amber-200/50 focus:ring-offset-2 focus:ring-offset-black',
          // Variants
          buttonVariants.variant[variant],
          buttonVariants.size[size],
          // Modifiers
          fullWidth && 'w-full',
          loading && 'cursor-wait',
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg 
            className="animate-spin -ml-1 mr-3 h-4 w-4" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        )}
        {children}
      </Comp>
    );
  }
);

Button.displayName = 'Button';
