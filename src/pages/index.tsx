
import React from 'react';
import Head from 'next/head';
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Differentiators from "@/components/Differentiators";
import PlaceExperience from "@/components/PlaceExperience";
import Invitation from "@/components/Invitation";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fulton Market Apartments - Exclusive Residences in Chicago | Reserve Access</title>
        <meta 
          name="description" 
          content="Reserve access to Fulton Market's most discreet residences. Curated apartments in Chicago's premier district. Off-market availability, viewings by reservation only." 
        />
        <meta 
          name="keywords" 
          content="Fulton Market apartments, apartments in Fulton Market, Chicago apartments, luxury apartments Fulton Market, exclusive apartments in Fulton Market Chicago, new apartments in Fulton Market District" 
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rentfultonmarket.apartments/" />
        <meta property="og:title" content="Fulton Market Apartments - Exclusive Residences in Chicago" />
        <meta property="og:description" content="Reserve access to Fulton Market's most discreet residences. Curated apartments in Chicago's premier district." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1200&auto=format&fit=crop" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rentfultonmarket.apartments/" />
        <meta property="twitter:title" content="Fulton Market Apartments - Exclusive Residences in Chicago" />
        <meta property="twitter:description" content="Reserve access to Fulton Market's most discreet residences. Curated apartments in Chicago's premier district." />
        <meta property="twitter:image" content="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1200&auto=format&fit=crop" />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Fulton Market Apartments" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://rentfultonmarket.apartments/" />
        
        {/* Structured Data for Local Business */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Fulton Market Apartments",
              "description": "Exclusive apartment rentals in Chicago's Fulton Market District",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Chicago",
                "addressRegion": "IL",
                "addressCountry": "US",
                "streetAddress": "Fulton Market District"
              },
              "areaServed": "Fulton Market, Chicago, IL",
              "serviceType": "Apartment Rentals"
            })
          }}
        />
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      
      <main className="bg-black text-white smooth-scroll">
        <Hero />
        <Philosophy />
        <Differentiators />
        <PlaceExperience />
        <Invitation />
        <FAQ />
        <FinalCTA />
      </main>
    </>
  );
}
