# Fulton Market Chicago Apartments

A premium apartment rental platform for Chicago's Fulton Market district, featuring luxury apartments in the West Loop's most desirable neighborhood.

## Features

- 🏢 500+ luxury apartment listings
- 🎯 Targeted for Chicago's Fulton Market and West Loop area
- 📧 Email waitlist functionality with Formspree integration
- 📱 Fully responsive design with mobile-first approach
- ⚡ Optimized for performance and SEO
- 🎨 Modern design system with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Formspree
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/mgisrael393823/fmd.git

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Development

```bash
# Development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Configuration

### Environment Variables

Create a `.env.local` file for any environment-specific configuration:

```env
# Optional: Analytics tracking
NEXT_PUBLIC_GA_TRACKING_ID=your-google-analytics-id

# Optional: Custom domain
NEXT_PUBLIC_SITE_URL=https://rentfultonmarket.apartments
```

### Form Configuration

Email signups use Formspree. The form IDs are configured in:
- **Hero component**: `src/components/Hero.tsx` (line 19)
- **Final CTA component**: `src/components/FinalCTA.tsx` (line 53)

Current form ID: `xvgqyoyd`

### SEO Configuration

- **Google Search Console**: Verified with code `7F7KTn7eLWV7tFhOuMa8WGZOK0J_gh2stYJEoRbMw0I`
- **Sitemap**: Available at `/sitemap.xml`
- **Robots.txt**: Configured for optimal crawling

## Project Structure

```
src/
├── components/
│   ├── design-system/      # Custom design system components
│   │   ├── Button.tsx      # Primary button component
│   │   ├── Typography.tsx  # Text styling system
│   │   ├── Section.tsx     # Layout sections
│   │   └── Input.tsx       # Form inputs with variants
│   ├── ui/                 # shadcn/ui components
│   │   ├── hero.tsx        # Hero section with lamp effect
│   │   ├── glass-button.tsx # Glass morphism buttons
│   │   └── ...             # Other UI components
│   ├── Hero.tsx           # Landing page hero section
│   ├── FAQ.tsx            # Frequently asked questions
│   ├── FinalCTA.tsx       # Email signup section
│   └── Invitation.tsx     # Secondary hero section
├── pages/
│   ├── _app.tsx           # App wrapper with global styles
│   ├── _document.tsx      # HTML document structure
│   ├── index.tsx          # Homepage (main landing page)
│   └── api/
│       └── hello.ts       # Example API route
├── styles/
│   └── globals.css        # Global styles and Tailwind imports
├── lib/
│   └── utils.ts           # Utility functions (cn, etc.)
└── hooks/                 # Custom React hooks
    ├── use-mobile.tsx     # Mobile detection hook
    └── use-toast.ts       # Toast notification hook
```

### Design System

The project uses a custom design system built with:
- **Typography**: Responsive text scales with semantic variants
- **Spacing**: 8px grid system for consistent layouts  
- **Colors**: Amber accent with neutral grays for luxury feel
- **Components**: Glass morphism effects and subtle animations

## SEO

The site is optimized for local Chicago SEO with:
- Structured data for local business
- Google Search Console verification
- Comprehensive meta tags
- XML sitemap
- Optimized robots.txt

## Performance

The site is optimized for performance with:
- **Core Web Vitals**: Optimized LCP, FID, and CLS scores
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Caching**: Static assets cached with long TTL headers
- **Bundle Size**: ~135KB first load JS (including all features)

## Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Accessibility**: WCAG 2.1 AA compliant

## Form Handling

Email signups are handled through Formspree. To configure:
1. Create an account at [formspree.io](https://formspree.io)
2. Create a new form
3. Update the form ID in both components:
   - `src/components/Hero.tsx` (line 19)
   - `src/components/FinalCTA.tsx` (line 53)

Form submissions include:
- Email address (required)
- Source tracking (Hero vs CTA)
- Timestamp and user agent

## Deployment

The application is configured for deployment on Vercel:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod

# Or connect GitHub for automatic deployments
```

### Domain Setup

1. **DNS Configuration**: Point your domain to Vercel
2. **SSL**: Automatic Let's Encrypt SSL certificates
3. **Custom Domain**: Configure in Vercel dashboard

### Environment Variables in Production

Set these in your Vercel dashboard:
- `NEXT_PUBLIC_GA_TRACKING_ID` (if using analytics)
- `NEXT_PUBLIC_SITE_URL` (production URL)

## Troubleshooting

### Common Issues

**Build Errors:**
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

**Form Not Working:**
- Verify Formspree form ID in components
- Check network requests in browser dev tools
- Ensure CORS is configured in Formspree

**SEO Issues:**
- Verify Google Search Console ownership
- Check robots.txt at `/robots.txt`
- Validate sitemap at `/sitemap.xml`

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Run tests: `npm run build`
5. Commit changes: `git commit -m 'Add feature'`
6. Push to branch: `git push origin feature-name`
7. Submit a pull request

## License

Private repository - All rights reserved

## Contact

For inquiries about Fulton Market apartments in Chicago, visit [rentfultonmarket.apartments](https://rentfultonmarket.apartments)

---

Built with ❤️ for Chicago's Fulton Market District