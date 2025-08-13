import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		// Design system spacing (8px grid)
  		spacing: {
  			'4.5': '1.125rem', // 18px
  			'18': '4.5rem',     // 72px
  			'22': '5.5rem',     // 88px
  			'26': '6.5rem',     // 104px
  			'30': '7.5rem',     // 120px
  			'34': '8.5rem',     // 136px
  			'38': '9.5rem',     // 152px
  			'42': '10.5rem',    // 168px
  			'46': '11.5rem',    // 184px
  		},
  		// Typography scale
  		fontSize: {
  			'2xs': ['0.625rem', { lineHeight: '0.75rem' }],   // 10px
  			xs: ['0.75rem', { lineHeight: '1rem' }],       // 12px
  			sm: ['0.875rem', { lineHeight: '1.25rem' }],   // 14px
  			base: ['1rem', { lineHeight: '1.5rem' }],      // 16px
  			lg: ['1.125rem', { lineHeight: '1.75rem' }],   // 18px
  			xl: ['1.25rem', { lineHeight: '1.75rem' }],    // 20px
  			'2xl': ['1.5rem', { lineHeight: '2rem' }],     // 24px
  			'3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
  			'4xl': ['2.25rem', { lineHeight: '2.5rem' }],  // 36px
  			'5xl': ['3rem', { lineHeight: '1' }],          // 48px
  			'6xl': ['3.75rem', { lineHeight: '1' }],       // 60px
  			'7xl': ['4.5rem', { lineHeight: '1' }],        // 72px
  			'8xl': ['6rem', { lineHeight: '1' }],          // 96px
  			'9xl': ['8rem', { lineHeight: '1' }],          // 128px
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
