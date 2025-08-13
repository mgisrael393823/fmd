import { cn } from '@/lib/utils';
import { forwardRef, HTMLAttributes } from 'react';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** Container max width */
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  /** Horizontal padding */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Center content */
  center?: boolean;
}

const containerVariants = {
  size: {
    sm: 'max-w-2xl',      // 672px
    md: 'max-w-4xl',      // 896px
    lg: 'max-w-6xl',      // 1152px
    xl: 'max-w-7xl',      // 1280px
    '2xl': 'max-w-[1400px]',
    full: 'max-w-none',
  },
  padding: {
    none: '',
    sm: 'px-4',           // 16px
    md: 'px-6',           // 24px
    lg: 'px-8',           // 32px
  },
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ 
    className,
    children,
    size = 'xl',
    padding = 'md',
    center = true,
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'w-full',
          containerVariants.size[size],
          containerVariants.padding[padding],
          center && 'mx-auto',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';
