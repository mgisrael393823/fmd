import { cn } from '@/lib/utils';
import { forwardRef, HTMLAttributes, ReactNode } from 'react';

export interface FeatureItem {
  /** Feature title */
  title: string;
  /** Feature description */
  description: ReactNode;
  /** Optional icon */
  icon?: ReactNode;
}

export interface FeatureGridProps extends HTMLAttributes<HTMLDivElement> {
  /** Feature items */
  items: FeatureItem[];
  /** Grid columns */
  columns?: 1 | 2 | 3 | 4;
  /** Feature card variant */
  variant?: 'default' | 'luxury' | 'minimal';
  /** Spacing between items */
  spacing?: 'sm' | 'md' | 'lg';
  /** Hover effects */
  hover?: boolean;
}

const gridVariants = {
  columns: {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  },
  spacing: {
    sm: 'gap-4',
    md: 'gap-6 md:gap-8',
    lg: 'gap-8 md:gap-12',
  },
  variant: {
    default: {
      container: '',
      item: 'bg-neutral-900 border border-neutral-700 rounded-lg p-6',
      title: 'text-xl font-semibold text-white mb-3',
      description: 'text-neutral-300 leading-relaxed',
    },
    luxury: {
      container: '',
      item: [
        'bg-neutral-900/60 backdrop-blur-sm border border-neutral-700/40',
        'rounded-2xl p-8 md:p-10 shadow-lg transition-all duration-500',
        'hover:bg-neutral-800/70 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10'
      ].join(' '),
      title: 'text-2xl md:text-3xl font-medium text-amber-200 mb-6 font-serif',
      description: 'text-lg text-neutral-300 font-light leading-relaxed',
    },
    minimal: {
      container: '',
      item: 'text-center p-4',
      title: 'text-lg font-medium text-white mb-4',
      description: 'text-neutral-300 leading-relaxed',
    },
  },
};

export const FeatureGrid = forwardRef<HTMLDivElement, FeatureGridProps>(
  ({ 
    className,
    items,
    columns = 3,
    variant = 'default',
    spacing = 'md',
    hover = true,
    ...props 
  }, ref) => {
    const variantStyles = gridVariants.variant[variant];
    
    return (
      <div
        ref={ref}
        className={cn(
          'grid',
          gridVariants.columns[columns],
          gridVariants.spacing[spacing],
          variantStyles.container,
          className
        )}
        {...props}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={cn(
              variantStyles.item,
              !hover && variant === 'luxury' && 'hover:transform-none hover:shadow-lg'
            )}
          >
            {item.icon && (
              <div className="mb-4 flex justify-center">
                {item.icon}
              </div>
            )}
            
            <h3 className={variantStyles.title}>
              {item.title}
            </h3>
            
            <div className={variantStyles.description}>
              {item.description}
            </div>
          </div>
        ))}
      </div>
    );
  }
);

FeatureGrid.displayName = 'FeatureGrid';
