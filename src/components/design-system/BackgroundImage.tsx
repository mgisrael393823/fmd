import { cn } from '@/lib/utils';
import { forwardRef, HTMLAttributes } from 'react';

export interface BackgroundImageProps extends HTMLAttributes<HTMLDivElement> {
  /** Background image URL */
  src: string;
  /** Alt text for accessibility */
  alt?: string;
  /** Background position */
  position?: 'center' | 'top' | 'bottom' | 'left' | 'right';
  /** Background size */
  size?: 'cover' | 'contain' | 'auto';
  /** Overlay opacity (0-100) */
  overlayOpacity?: number;
  /** Overlay color */
  overlayColor?: 'black' | 'white' | 'neutral';
  /** Grain effect */
  grain?: boolean;
  /** Parallax effect */
  parallax?: boolean;
}

const positionVariants = {
  center: 'bg-center',
  top: 'bg-top',
  bottom: 'bg-bottom', 
  left: 'bg-left',
  right: 'bg-right',
};

const sizeVariants = {
  cover: 'bg-cover',
  contain: 'bg-contain',
  auto: 'bg-auto',
};

const overlayColors = {
  black: 'bg-black',
  white: 'bg-white',
  neutral: 'bg-neutral-900',
};

export const BackgroundImage = forwardRef<HTMLDivElement, BackgroundImageProps>(
  ({ 
    className,
    children,
    src,
    alt,
    position = 'center',
    size = 'cover',
    overlayOpacity = 0,
    overlayColor = 'black',
    grain = false,
    parallax = false,
    style,
    ...props 
  }, ref) => {
    const backgroundStyle = {
      backgroundImage: `url(${src})`,
      ...style,
    };

    return (
      <div
        ref={ref}
        className={cn(
          'relative bg-no-repeat',
          positionVariants[position],
          sizeVariants[size],
          parallax && 'bg-fixed',
          className
        )}
        style={backgroundStyle}
        {...props}
      >
        {/* Screen reader accessible image description */}
        {alt && (
          <span className="sr-only">
            Background image: {alt}
          </span>
        )}
        
        {/* Overlay */}
        {overlayOpacity > 0 && (
          <div 
            className={cn(
              'absolute inset-0',
              overlayColors[overlayColor]
            )}
            style={{ opacity: overlayOpacity / 100 }}
            aria-hidden="true"
          />
        )}
        
        {/* Grain effect */}
        {grain && (
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
              backgroundSize: '20px 20px',
            }}
            aria-hidden="true"
          />
        )}
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    );
  }
);

BackgroundImage.displayName = 'BackgroundImage';
