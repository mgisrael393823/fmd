import { cn } from '@/lib/utils';
import { forwardRef, HTMLAttributes } from 'react';

export interface FormFieldProps extends HTMLAttributes<HTMLDivElement> {
  /** Field label */
  label?: string;
  /** Error message */
  error?: string;
  /** Help text */
  help?: string;
  /** Required field indicator */
  required?: boolean;
  /** Field spacing */
  spacing?: 'sm' | 'md' | 'lg';
}

const spacingVariants = {
  sm: 'space-y-2',
  md: 'space-y-3', 
  lg: 'space-y-4',
};

export const FormField = forwardRef<HTMLDivElement, FormFieldProps>(
  ({ 
    className,
    children,
    label,
    error,
    help,
    required = false,
    spacing = 'md',
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'w-full',
          spacingVariants[spacing],
          className
        )}
        {...props}
      >
        {label && (
          <label className="block text-sm font-medium text-white">
            {label}
            {required && (
              <span className="ml-1 text-red-400" aria-label="required">
                *
              </span>
            )}
          </label>
        )}
        
        {children}
        
        {error && (
          <p className="text-sm text-red-400" role="alert">
            {error}
          </p>
        )}
        
        {help && !error && (
          <p className="text-sm text-neutral-400">
            {help}
          </p>
        )}
      </div>
    );
  }
);

FormField.displayName = 'FormField';
