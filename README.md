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

## Environment Variables

Create a `.env.local` file for any environment-specific configuration:

```env
# Add any environment variables here
```

## Project Structure

```
src/
├── components/       # React components
│   ├── design-system/   # Reusable design system components
│   └── ui/             # UI components from shadcn/ui
├── pages/           # Next.js pages
│   ├── api/           # API routes
│   └── index.tsx      # Homepage
├── styles/          # Global styles
└── lib/            # Utility functions
```

## SEO

The site is optimized for local Chicago SEO with:
- Structured data for local business
- Google Search Console verification
- Comprehensive meta tags
- XML sitemap
- Optimized robots.txt

## Form Handling

Email signups are handled through Formspree. To configure:
1. Create an account at [formspree.io](https://formspree.io)
2. Create a new form
3. Update the form ID in the components

## Deployment

The application is configured for deployment on Vercel:

```bash
# Deploy to Vercel
vercel
```

## License

Private repository - All rights reserved

## Contact

For inquiries about Fulton Market apartments in Chicago, visit [rentfultonmarket.apartments](https://rentfultonmarket.apartments)