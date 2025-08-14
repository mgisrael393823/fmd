
import React from 'react';
import Head from 'next/head';
import Hero from "@/components/Hero";
import Invitation from "@/components/Invitation";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fulton Market Chicago Apartments for Rent | Best Apartments in Chicago Fulton Market</title>
        <meta 
          name="description" 
          content="Find the best Fulton Market Chicago apartments for rent. 500+ luxury apartments, studios, 1-2 bedroom units in Chicago's West Loop. Rent Chicago Fulton Market apartments now!" 
        />
        <meta 
          name="keywords" 
          content="fulton market chicago apartments, chicago fulton market apartments, apartments in fulton market chicago, rent fulton market chicago, fulton market apartments chicago, west loop chicago apartments, luxury apartments fulton market chicago, chicago apartments rent, fulton market chicago rental, studio apartments fulton market chicago, 1 bedroom fulton market chicago, 2 bedroom fulton market chicago, chicago west loop rentals" 
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rentfultonmarket.apartments/" />
        <meta property="og:title" content="🏙️ Premium Fulton Market Apartments | Luxury Chicago West Loop Rentals" />
        <meta property="og:description" content="Discover Chicago's most sought-after apartments in Fulton Market! 🌟 500+ luxury units • Studios from $2K • 1BR from $2.5K • 2BR from $3.5K • Restaurant Row location • Join waitlist for exclusive access!" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Luxury Fulton Market apartments with Chicago skyline view at sunset" />
        <meta property="og:site_name" content="Fulton Market Apartments" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@FultonMarketApts" />
        <meta property="twitter:creator" content="@FultonMarketApts" />
        <meta property="twitter:url" content="https://rentfultonmarket.apartments/" />
        <meta property="twitter:title" content="🏙️ Premium Fulton Market Apartments - Chicago's Hottest Rental Market" />
        <meta property="twitter:description" content="Get exclusive access to Fulton Market's luxury apartments! ✨ 500+ units in West Loop's dining capital. Studios $2K+ | 1BR $2.5K+ | 2BR $3.5K+ #ChicagoApartments" />
        <meta property="twitter:image" content="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3" />
        <meta property="twitter:image:alt" content="Luxury Fulton Market apartments with Chicago skyline view" />

        {/* WhatsApp / Telegram */}
        <meta property="og:title" content="🏠 Fulton Market Luxury Apartments Available Now!" />
        <meta property="og:description" content="Chicago's hottest neighborhood! 🔥 Premium apartments in Fulton Market's Restaurant Row. Early access to 500+ units. Studios $2K | 1BR $2.5K | 2BR $3.5K. Join waitlist!" />

        {/* Pinterest */}
        <meta name="pinterest-rich-pin" content="true" />
        <meta property="og:title" content="Stunning Fulton Market Apartments - Chicago Luxury Living Inspiration" />
        <meta property="og:description" content="Get inspired by Chicago's most beautiful apartments in Fulton Market! Modern luxury living in the heart of Restaurant Row. 500+ curated units with premium amenities and skyline views." />

        {/* Reddit */}
        <meta property="og:title" content="Found the perfect Fulton Market apartments - 500+ luxury units available" />
        <meta property="og:description" content="After months of searching, discovered this amazing resource for Fulton Market apartments. They have 500+ luxury units, studios from $2K, great locations near all the best restaurants. Thought r/Chicago would appreciate this find!" />

        {/* Additional Enhanced SEO */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Fulton Market Rental Network" />
        <meta name="publisher" content="Fulton Market Apartments" />
        <meta name="copyright" content="© 2025 Fulton Market Apartments" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        
        {/* Enhanced Local SEO */}
        <meta name="google-site-verification" content="7F7KTn7eLWV7tFhOuMa8WGZOK0J_gh2stYJEoRbMw0I" />
        <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" />
        <meta name="yandex-verification" content="YOUR_YANDEX_VERIFICATION_CODE" />
        
        {/* Geo targeting */}
        <meta name="geo.region" content="US-IL" />
        <meta name="geo.placename" content="Chicago, Illinois" />
        <meta name="geo.position" content="41.8858;-87.6467" />
        <meta name="ICBM" content="41.8858, -87.6467" />
        
        {/* Business specific */}
        <meta name="rating" content="5" />
        <meta name="price" content="$2000-$6000" />
        <meta name="priceCurrency" content="USD" />
        <meta name="availability" content="InStock" />
        
        {/* Local Business Schema */}
        <meta name="business:contact_data:street_address" content="Fulton Market District" />
        <meta name="business:contact_data:locality" content="Chicago" />
        <meta name="business:contact_data:region" content="Illinois" />
        <meta name="business:contact_data:postal_code" content="60607" />
        <meta name="business:contact_data:country_name" content="United States" />
        <meta name="place:location:latitude" content="41.8858" />
        <meta name="place:location:longitude" content="-87.6467" />
        
        <link rel="canonical" href="https://rentfultonmarket.apartments/" />
        <link rel="alternate" hrefLang="en" href="https://rentfultonmarket.apartments/" />
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        
        {/* Enhanced Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Structured Data for Local Business */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["RealEstateAgent", "LocalBusiness"],
              "name": "Fulton Market Chicago Apartments",
              "alternateName": "Rent Fulton Market Chicago",
              "description": "Find the best Fulton Market Chicago apartments for rent. Premium apartment rentals in Chicago's West Loop most desirable neighborhood.",
              "url": "https://rentfultonmarket.apartments/",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Chicago",
                "addressRegion": "IL",
                "addressCountry": "US",
                "streetAddress": "Fulton Market District",
                "postalCode": "60607"
              },
              "areaServed": [
                "Fulton Market, Chicago, IL",
                "West Loop, Chicago, IL",
                "Near West Side, Chicago, IL"
              ],
              "serviceType": ["Chicago Apartment Rentals", "Fulton Market Chicago Luxury Apartment Rentals", "Chicago Studio Apartments", "Chicago 1 Bedroom Apartments", "Chicago 2 Bedroom Apartments"],
              "priceRange": "$2000-$6000",
              "telephone": "+1-312-XXX-XXXX",
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "41.8858",
                "longitude": "-87.6467"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Fulton Market Chicago Apartment Rentals",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Studio Apartments in Fulton Market Chicago",
                      "offers": {
                        "@type": "Offer",
                        "price": "2000",
                        "priceCurrency": "USD",
                        "availability": "http://schema.org/InStock"
                      }
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Product",
                      "name": "1 Bedroom Apartments in Fulton Market Chicago",
                      "offers": {
                        "@type": "Offer",
                        "price": "2500",
                        "priceCurrency": "USD",
                        "availability": "http://schema.org/InStock"
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product", 
                      "name": "2 Bedroom Apartments in Fulton Market Chicago",
                      "offers": {
                        "@type": "Offer",
                        "price": "3500",
                        "priceCurrency": "USD",
                        "availability": "http://schema.org/InStock"
                      }
                    }
                  }
                ]
              }
            })
          }}
        />
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2564&auto=format&fit=crop" as="image" type="image/jpeg" />
        
        {/* Performance optimizations */}
        <meta name="theme-color" content="#000000" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      
      <main className="bg-black text-white smooth-scroll" role="main">
        <Hero />
        <Invitation />
        <section aria-label="Frequently Asked Questions">
          <FAQ />
        </section>
        <section aria-label="Join our waitlist">
          <FinalCTA />
        </section>
        
        {/* Skip to content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-amber-200 focus:text-black focus:rounded"
        >
          Skip to main content
        </a>
      </main>
    </>
  );
}
