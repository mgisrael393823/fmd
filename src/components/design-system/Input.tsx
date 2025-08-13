import { cn } from '@/lib/utils';
import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Input size */
  size?: 'sm' | 'md' | 'lg';
  /** Error state */
  error?: boolean;
  /** Input variant */
  variant?: 'default' | 'glass';
}

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Textarea size */
  size?: 'sm' | 'md' | 'lg';
  /** Error state */
  error?: boolean;
  /** Textarea variant */
  variant?: 'default' | 'glass';
}

const inputVariants = {
  size: {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-6 py-4 text-lg',
  },
  variant: {
    default: [
      'bg-neutral-900 border-neutral-700 text-white',
      'placeholder:text-neutral-400',
      'focus:border-amber-200/50 focus:ring-amber-200/50',
    ].join(' '),
    glass: [
      'bg-white/10 backdrop-blur-sm border-white/20 text-white',
      'placeholder:text-white/60',
      'focus:border-white/40 focus:ring-white/20',
    ].join(' '),
  },
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className,
    size = 'md',
    variant = 'default',
    error = false,
    ...props 
  }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          // Base styles
          'w-full rounded-lg border transition-colors duration-200',
          'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black',
          // Variants
          inputVariants.variant[variant],
          inputVariants.size[size],
          // Error state
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500/50',
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ 
    className,
    size = 'md',
    variant = 'default',
    error = false,
    ...props 
  }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          // Base styles
          'w-full rounded-lg border transition-colors duration-200 resize-none',
          'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black',
          // Variants
          inputVariants.variant[variant],
          inputVariants.size[size],
          // Error state
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500/50',
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';
