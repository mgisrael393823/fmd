import { cn } from '@/lib/utils';
import { forwardRef, HTMLAttributes } from 'react';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /** Section padding size following 8px grid system */
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** Background variant */
  background?: 'transparent' | 'black' | 'neutral' | 'gradient';
  /** Whether section should be full height */
  fullHeight?: boolean;
  /** Custom background image */
  backgroundImage?: string;
  /** Background overlay opacity (0-100) */
  overlayOpacity?: number;
  /** HTML semantic element */
  as?: 'section' | 'main' | 'div' | 'article' | 'aside';
}

const sectionVariants = {
  padding: {
    none: '',
    sm: 'py-12',      // 48px
    md: 'py-16',      // 64px  
    lg: 'py-24',      // 96px
    xl: 'py-32',      // 128px
    '2xl': 'py-40',   // 160px
  },
  background: {
    transparent: '',
    black: 'bg-black',
    neutral: 'bg-neutral-950',
    gradient: 'bg-gradient-to-b from-neutral-950 via-black to-neutral-950',
  },
};

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ 
    className,
    children,
    padding = 'lg',
    background = 'transparent',
    fullHeight = false,
    backgroundImage,
    overlayOpacity = 70,
    as: Component = 'section',
    style,
    ...props 
  }, ref) => {
    const sectionStyle = backgroundImage 
      ? {
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          ...style
        }
      : style;

    return (
      <Component
        ref={ref as any}
        className={cn(
          'relative',
          sectionVariants.padding[padding],
          sectionVariants.background[background],
          fullHeight && 'min-h-screen flex items-center',
          className
        )}
        style={sectionStyle}
        {...props}
      >
        {backgroundImage && (
          <div 
            className="absolute inset-0 bg-black"
            style={{ opacity: overlayOpacity / 100 }}
            aria-hidden="true"
          />
        )}
        <div className="relative z-10 w-full">
          {children}
        </div>
      </Component>
    );
  }
);

Section.displayName = 'Section';
