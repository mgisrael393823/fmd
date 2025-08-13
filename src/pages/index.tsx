
import React from 'react';
import Head from 'next/head';
import Hero from "@/components/Hero";
import Invitation from "@/components/Invitation";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Differentiators from "@/components/Differentiators";
import PlaceExperience from "@/components/PlaceExperience";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fulton Market Apartments - Premium Rental Marketplace | Early Access</title>
        <meta 
          name="description" 
          content="Premium rental network for Fulton Market apartments. Get early access to Chicago's most sought-after addresses before they're widely advertised. Free for renters." 
        />
        <meta 
          name="keywords" 
          content="Fulton Market apartments, apartment marketplace Chicago, premium rental network, early access apartments, luxury apartments Fulton Market, rental concierge service Chicago" 
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rentfultonmarket.apartments/" />
        <meta property="og:title" content="Fulton Market Apartments - Premium Rental Marketplace" />
        <meta property="og:description" content="Premium rental network connecting you to Fulton Market's most sought-after addresses. Get early access - free for renters." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1200&auto=format&fit=crop" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rentfultonmarket.apartments/" />
        <meta property="twitter:title" content="Fulton Market Apartments - Premium Rental Marketplace" />
        <meta property="twitter:description" content="Premium rental network connecting you to Fulton Market's most sought-after addresses. Get early access - free for renters." />
        <meta property="twitter:image" content="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1200&auto=format&fit=crop" />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Fulton Market Rental Network" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://rentfultonmarket.apartments/" />
        
        {/* Structured Data for Local Business */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Fulton Market Rental Network",
              "description": "Premium rental marketplace connecting renters to exclusive Fulton Market apartments",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Chicago",
                "addressRegion": "IL",
                "addressCountry": "US",
                "streetAddress": "Fulton Market District"
              },
              "areaServed": "Fulton Market, Chicago, IL",
              "serviceType": "Rental Marketplace & Concierge Services"
            })
          }}
        />
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      
      <main className="bg-black text-white scroll-smooth">
        <Hero />
        <Invitation />
        <Differentiators />
        <PlaceExperience />
        <FAQ />
        <FinalCTA />
      </main>
    </>
  );
}
