import React from 'react';
import Head from 'next/head';
import Navigation from "@/components/Navigation";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Container, Section } from '@/components/design-system';
import { GlassButton } from "@/components/ui/glass-button";
import { GlassLinkButton } from "@/components/ui/glass-link-button";

export default function FultonMarketChicago() {
  const attractions = [
    {
      title: 'Restaurant Row',
      description: 'World-class dining destination with Michelin-starred restaurants and celebrity chef establishments.',
      highlights: ['Girl & the Goat', 'Au Cheval', 'Next Restaurant', 'Alinea', 'The Purple Pig']
    },
    {
      title: 'Google Chicago Office',
      description: 'Major tech hub attracting thousands of professionals to the neighborhood daily.',
      highlights: ['1000 W Fulton Market', 'Tech industry jobs', 'Innovation district', 'Startup ecosystem']
    },
    {
      title: 'Union Park',
      description: '13-acre green space perfect for recreation, events, and outdoor activities.',
      highlights: ['Pitchfork Music Festival', 'Farmers markets', 'Playground facilities', 'Basketball courts']
    },
    {
      title: 'Chicago French Market',
      description: 'Year-round indoor/outdoor market featuring local vendors and artisanal foods.',
      highlights: ['Local vendors', 'Fresh produce', 'Artisanal goods', 'Community events']
    }
  ];

  const transportation = [
    {
      type: 'CTA Green/Pink Line',
      details: 'Morgan Station - 3 blocks away',
      description: 'Direct access to downtown Loop, O\'Hare Airport, and other Chicago neighborhoods.'
    },
    {
      type: 'Union Station',
      details: '0.8 miles walking distance',
      description: 'Major transportation hub for Amtrak, Metra commuter trains, and regional travel.'
    },
    {
      type: 'Bus Lines',
      details: 'Multiple routes including #9, #20, #126',
      description: 'Comprehensive bus network connecting to all parts of Chicago.'
    },
    {
      type: 'Bike Infrastructure',
      details: 'Protected bike lanes and Divvy stations',
      description: 'Bike-friendly neighborhood with secure bike storage and rental options.'
    }
  ];

  const lifestyle = [
    {
      category: 'Dining & Entertainment',
      venues: ['50+ restaurants', 'Craft cocktail bars', 'Rooftop lounges', 'Live music venues', 'Comedy clubs']
    },
    {
      category: 'Shopping & Services',
      venues: ['Whole Foods Market', 'Local boutiques', 'Fitness studios', 'Salons & spas', 'Banking']
    },
    {
      category: 'Arts & Culture',
      venues: ['Gallery district', 'Street art murals', 'Cultural events', 'Music festivals', 'Art walks']
    }
  ];

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Fulton Market Chicago', url: '/fulton-market-chicago' }
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Head>
        <title>Fulton Market Chicago Neighborhood Guide 2025 | Living in West Loop</title>
        <meta 
          name="description" 
          content="Complete guide to Fulton Market Chicago neighborhood. Discover restaurants, attractions, transportation, and why it's Chicago's hottest area for apartment living." 
        />
        <meta 
          name="keywords" 
          content="fulton market chicago, west loop neighborhood, fulton market guide, chicago neighborhood, fulton market restaurants, google chicago, union park, restaurant row chicago" 
        />
        <link rel="canonical" href="https://rentfultonmarket.apartments/fulton-market-chicago/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Fulton Market Chicago Neighborhood Guide | West Loop Living" />
        <meta property="og:description" content="Everything you need to know about Fulton Market - Chicago's hottest neighborhood with world-class dining and tech hub." />
        <meta property="og:url" content="https://rentfultonmarket.apartments/fulton-market-chicago/" />
        
        {/* Local Business Schema for the neighborhood */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Place",
              "name": "Fulton Market District Chicago",
              "description": "Chicago's premier dining and residential district in the West Loop",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Chicago",
                "addressRegion": "Illinois", 
                "addressCountry": "United States",
                "postalCode": "60607"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "41.8858",
                "longitude": "-87.6467"
              },
              "containedInPlace": {
                "@type": "Place",
                "name": "West Loop, Chicago"
              }
            })
          }}
        />
      </Head>
      
      <Navigation />
      
      <main className="bg-black text-white min-h-screen">
        {/* Hero Section */}
        <Section padding="2xl" className="bg-gradient-to-b from-black via-neutral-950 to-black">
          <Container size="lg" className="text-center">
            <h1 className="text-h1 font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-8">
              Fulton Market <span className="text-amber-200 italic">Chicago</span>
            </h1>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent mx-auto mb-8" />
            <Container size="md">
              <p className="text-body-light text-xl md:text-2xl text-neutral-200 mb-12 leading-relaxed">
                Discover Chicago's most dynamic neighborhood where industrial heritage meets modern luxury. From world-class restaurants to tech headquarters, Fulton Market offers an unparalleled urban lifestyle.
              </p>
            </Container>
            <GlassLinkButton size="lg" className="glass-primary" href="/apartments">
              <span className="text-button text-xl">Find Apartments Here</span>
            </GlassLinkButton>
          </Container>
        </Section>

        {/* Neighborhood Overview */}
        <Section padding="2xl" className="bg-gradient-to-b from-black to-neutral-950">
          <Container size="lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-h2 font-serif text-4xl md:text-5xl text-white mb-6">
                  Chicago's <span className="text-amber-200/90">Hottest</span> Neighborhood
                </h2>
                <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent mb-8" />
                <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                  Once the heart of Chicago's meatpacking district, Fulton Market has transformed into the city's premier destination for dining, technology, and luxury living. This West Loop neighborhood seamlessly blends historic architecture with cutting-edge development.
                </p>
                <p className="text-neutral-300 text-lg leading-relaxed mb-8">
                  Home to Google's Chicago headquarters and Restaurant Row, Fulton Market attracts young professionals, food enthusiasts, and anyone seeking the perfect balance of work and play in an urban setting.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-light text-amber-200 mb-2">100+</div>
                    <div className="text-sm text-neutral-400 uppercase tracking-wider">Restaurants</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-light text-amber-200 mb-2">5,000+</div>
                    <div className="text-sm text-neutral-400 uppercase tracking-wider">Tech Workers</div>
                  </div>
                </div>
              </div>
              <div 
                className="aspect-[4/3] bg-cover bg-center rounded-2xl"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2940&auto=format&fit=crop')" }}
              />
            </div>
          </Container>
        </Section>

        {/* Key Attractions */}
        <Section padding="2xl" className="bg-gradient-to-b from-neutral-950 to-black">
          <Container size="lg">
            <div className="text-center mb-16">
              <h2 className="text-h2 font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                Neighborhood <span className="text-amber-200/90">Highlights</span>
              </h2>
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {attractions.map((attraction, index) => (
                <div key={index} className="luxury-card p-8 rounded-2xl">
                  <h3 className="text-2xl font-semibold text-white mb-4">{attraction.title}</h3>
                  <p className="text-neutral-300 mb-6 leading-relaxed">{attraction.description}</p>
                  <div className="space-y-2">
                    {attraction.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-amber-200/80 rounded-full mr-3" />
                        <span className="text-neutral-300 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Transportation */}
        <Section padding="2xl" className="bg-gradient-to-b from-black to-neutral-950">
          <Container size="lg">
            <div className="text-center mb-16">
              <h2 className="text-h2 font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                Transportation & <span className="text-amber-200/90">Connectivity</span>
              </h2>
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent mx-auto mb-8" />
              <Container size="md">
                <p className="text-body-light text-xl text-neutral-200">
                  Fulton Market's central location provides unparalleled access to all of Chicago and beyond.
                </p>
              </Container>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {transportation.map((transport, index) => (
                <div key={index} className="luxury-card p-6 rounded-xl">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{transport.type}</h3>
                    <div className="w-3 h-3 bg-amber-200/80 rounded-full mt-2" />
                  </div>
                  <p className="text-amber-200/90 font-medium mb-3">{transport.details}</p>
                  <p className="text-neutral-300 leading-relaxed">{transport.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Lifestyle */}
        <Section padding="2xl" className="bg-gradient-to-b from-neutral-950 to-black">
          <Container size="lg">
            <div className="text-center mb-16">
              <h2 className="text-h2 font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                Lifestyle & <span className="text-amber-200/90">Amenities</span>
              </h2>
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {lifestyle.map((category, index) => (
                <div key={index} className="luxury-card p-8 rounded-2xl text-center">
                  <h3 className="text-2xl font-semibold text-white mb-6">{category.category}</h3>
                  <div className="space-y-3">
                    {category.venues.map((venue, idx) => (
                      <div key={idx} className="text-neutral-300">{venue}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <Section padding="2xl" className="bg-gradient-to-b from-black to-neutral-950">
          <Container size="lg" className="text-center">
            <h2 className="text-h2 font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-8">
              Ready to Live in <span className="text-amber-200 italic">Fulton Market?</span>
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent mx-auto mb-8" />
            <Container size="md">
              <p className="text-body-light text-xl text-neutral-200 mb-12">
                Experience the best of Chicago living in the city's most dynamic neighborhood. Discover luxury apartments just steps from world-class dining, entertainment, and culture.
              </p>
            </Container>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlassLinkButton size="lg" className="glass-primary" href="/apartments">
                <span className="text-button text-xl">View Apartments</span>
              </GlassLinkButton>
              <GlassLinkButton size="lg" className="glass-secondary" href="/#faq">
                <span className="text-button text-xl">Neighborhood FAQ</span>
              </GlassLinkButton>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}