import { cn } from '@/lib/utils';
import { forwardRef, HTMLAttributes, useState, ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItemProps {
  /** Unique identifier */
  id: string;
  /** Question/trigger text */
  question: string;
  /** Answer/content */
  answer: ReactNode;
}

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  /** Accordion items */
  items: AccordionItemProps[];
  /** Allow multiple items open */
  multiple?: boolean;
  /** Default open items (by id) */
  defaultOpen?: string[];
  /** Accordion variant */
  variant?: 'default' | 'luxury';
  /** Item spacing */
  spacing?: 'sm' | 'md' | 'lg';
}

const accordionVariants = {
  variant: {
    default: {
      container: 'space-y-2',
      item: 'bg-neutral-900 border border-neutral-700 rounded-lg',
      trigger: 'p-4 hover:bg-neutral-800',
      content: 'px-4 pb-4 border-t border-neutral-700',
    },
    luxury: {
      container: 'space-y-4',
      item: 'bg-neutral-900/60 backdrop-blur-sm border border-neutral-700/40 rounded-lg shadow-lg',
      trigger: 'p-6 hover:bg-neutral-800/70',
      content: 'px-6 pb-6 border-t border-neutral-700/30',
    },
  },
  spacing: {
    sm: 'space-y-2',
    md: 'space-y-4',
    lg: 'space-y-6',
  },
};

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ 
    className,
    items,
    multiple = false,
    defaultOpen = [],
    variant = 'default',
    spacing = 'md',
    ...props 
  }, ref) => {
    const [openItems, setOpenItems] = useState<Set<string>>(new Set(defaultOpen));
    
    const toggleItem = (id: string) => {
      setOpenItems(prev => {
        const newSet = new Set(prev);
        
        if (newSet.has(id)) {
          newSet.delete(id);
        } else {
          if (!multiple) {
            newSet.clear();
          }
          newSet.add(id);
        }
        
        return newSet;
      });
    };
    
    const variantStyles = accordionVariants.variant[variant];
    
    return (
      <div
        ref={ref}
        className={cn(
          accordionVariants.spacing[spacing],
          className
        )}
        {...props}
      >
        {items.map((item) => {
          const isOpen = openItems.has(item.id);
          
          return (
            <div 
              key={item.id} 
              className={variantStyles.item}
            >
              <button
                type="button"
                className={cn(
                  'w-full text-left transition-colors duration-200',
                  'focus:outline-none focus:ring-2 focus:ring-amber-200/50 focus:ring-offset-2 focus:ring-offset-black',
                  variantStyles.trigger
                )}
                onClick={() => toggleItem(item.id)}
                aria-expanded={isOpen}
                aria-controls={`accordion-content-${item.id}`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium text-white">
                    {item.question}
                  </span>
                  <ChevronDown 
                    className={cn(
                      'h-5 w-5 text-neutral-400 transition-transform duration-200',
                      isOpen && 'rotate-180'
                    )}
                    aria-hidden="true"
                  />
                </div>
              </button>
              
              {isOpen && (
                <div 
                  id={`accordion-content-${item.id}`}
                  className={variantStyles.content}
                  role="region"
                  aria-labelledby={`accordion-trigger-${item.id}`}
                >
                  <div className="text-neutral-300 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
);

Accordion.displayName = 'Accordion';
