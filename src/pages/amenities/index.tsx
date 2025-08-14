import React from 'react';
import Head from 'next/head';
import Navigation from "@/components/Navigation";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Container, Section } from '@/components/design-system';
import { GlassButton } from "@/components/ui/glass-button";
import { GlassLinkButton } from "@/components/ui/glass-link-button";

export default function Amenities() {
  const buildingAmenities = [
    {
      category: 'Wellness & Fitness',
      description: 'State-of-the-art facilities for your health and wellness journey.',
      amenities: [
        {
          name: '24/7 Fitness Center',
          description: 'Fully equipped gym with cardio machines, free weights, and strength training equipment.',
          highlight: 'Technogym equipment'
        },
        {
          name: 'Yoga & Meditation Studio',
          description: 'Peaceful space for yoga classes, meditation, and mindfulness practices.',
          highlight: 'Natural lighting'
        },
        {
          name: 'Rooftop Swimming Pool',
          description: 'Year-round heated pool with stunning city skyline views.',
          highlight: 'Infinity edge design'
        },
        {
          name: 'Spa & Wellness Suite',
          description: 'Private treatment rooms for massage, skincare, and relaxation services.',
          highlight: 'Professional therapists available'
        }
      ]
    },
    {
      category: 'Entertainment & Social',
      description: 'Spaces designed for connection, entertainment, and memorable experiences.',
      amenities: [
        {
          name: 'Rooftop Terrace & Lounge',
          description: 'Expansive outdoor space with fire pits, seating areas, and panoramic city views.',
          highlight: 'Perfect for entertaining'
        },
        {
          name: 'Private Cinema',
          description: 'State-of-the-art movie theater with luxury seating and surround sound.',
          highlight: '4K projection system'
        },
        {
          name: 'Game Room & Billiards',
          description: 'Recreation space with pool tables, arcade games, and entertainment systems.',
          highlight: 'Tournament-quality tables'
        },
        {
          name: 'Wine Cellar & Tasting Room',
          description: 'Climate-controlled wine storage with private tasting area for residents.',
          highlight: 'Sommelier events'
        }
      ]
    },
    {
      category: 'Work & Productivity',
      description: 'Professional spaces for remote work, meetings, and creative projects.',
      amenities: [
        {
          name: 'Co-Working Spaces',
          description: 'Modern work areas with high-speed internet, charging stations, and ergonomic furniture.',
          highlight: 'Fiber optic internet'
        },
        {
          name: 'Private Meeting Rooms',
          description: 'Bookable conference rooms with video conferencing capabilities and presentation equipment.',
          highlight: 'Soundproof design'
        },
        {
          name: 'Business Center',
          description: 'Full-service office with printing, scanning, and administrative support.',
          highlight: '24/7 access'
        },
        {
          name: 'Phone Booths',
          description: 'Private spaces for confidential calls and video meetings.',
          highlight: 'Acoustic privacy'
        }
      ]
    },
    {
      category: 'Convenience & Services',
      description: 'Thoughtful services that simplify urban living and save you time.',
      amenities: [
        {
          name: '24/7 Concierge',
          description: 'Professional staff for package delivery, reservations, and personalized assistance.',
          highlight: 'Multilingual support'
        },
        {
          name: 'Valet Parking',
          description: 'White-glove parking service with car washing and maintenance coordination.',
          highlight: 'Electric vehicle charging'
        },
        {
          name: 'Pet Spa & Dog Run',
          description: 'Dedicated pet amenities including grooming stations and outdoor exercise area.',
          highlight: 'Professional grooming available'
        },
        {
          name: 'Dry Cleaning & Laundry',
          description: 'On-site laundry services with pickup and delivery to your door.',
          highlight: 'Same-day service'
        }
      ]
    }
  ];

  const neighborhoodAmenities = [
    {
      title: 'Restaurant Row',
      distance: 'On your doorstep',
      description: 'World-class dining with 100+ restaurants including Michelin-starred establishments.',
      highlights: ['Girl & the Goat', 'Au Cheval', 'Next Restaurant', 'Alinea']
    },
    {
      title: 'Google Chicago Office',
      distance: '2 blocks away',
      description: 'Major tech hub bringing innovation and opportunity to your neighborhood.',
      highlights: ['Tech networking events', 'Innovation district', 'Startup ecosystem']
    },
    {
      title: 'Union Park',
      distance: '3 blocks away',
      description: '13-acre green space perfect for recreation, events, and outdoor activities.',
      highlights: ['Pitchfork Music Festival', 'Farmers markets', 'Sports facilities']
    },
    {
      title: 'Shopping & Retail',
      distance: 'Walking distance',
      description: 'Premium shopping destinations and essential services within easy reach.',
      highlights: ['Whole Foods Market', 'Local boutiques', 'Banking & services']
    }
  ];

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Amenities', url: '/amenities' }
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Head>
        <title>Fulton Market Apartments Amenities | Luxury Building Features Chicago</title>
        <meta 
          name="description" 
          content="Discover world-class amenities at Fulton Market apartments: rooftop pool, fitness center, concierge, pet spa, co-working spaces, and more. Experience luxury living in Chicago." 
        />
        <meta 
          name="keywords" 
          content="fulton market apartments amenities, luxury building amenities chicago, rooftop pool fulton market, fitness center apartments, concierge services chicago, pet friendly amenities, co-working spaces apartments" 
        />
        <link rel="canonical" href="https://rentfultonmarket.apartments/amenities/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Luxury Amenities at Fulton Market Apartments Chicago" />
        <meta property="og:description" content="Experience premium building amenities including rooftop pool, fitness center, concierge services, and more at Fulton Market apartments." />
        <meta property="og:url" content="https://rentfultonmarket.apartments/amenities/" />
        <meta property="og:type" content="website" />
        
        {/* Amenities Schema */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ApartmentComplex",
              "name": "Fulton Market Luxury Apartments",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Fulton Market District",
                "addressLocality": "Chicago",
                "addressRegion": "Illinois",
                "postalCode": "60607",
                "addressCountry": "United States"
              },
              "amenityFeature": buildingAmenities.flatMap(category => 
                category.amenities.map(amenity => ({
                  "@type": "LocationFeatureSpecification",
                  "name": amenity.name,
                  "value": true
                }))
              ),
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "41.8858",
                "longitude": "-87.6467"
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
              World-Class <span className="text-amber-200 italic">Amenities</span>
            </h1>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent mx-auto mb-8" />
            <Container size="md">
              <p className="text-body-light text-xl md:text-2xl text-neutral-200 mb-12 leading-relaxed">
                Experience luxury living redefined with premium amenities designed for modern urban lifestyles. From rooftop pools to concierge services, every detail enhances your Fulton Market experience.
              </p>
            </Container>
            <GlassButton size="lg" className="glass-primary">
              <span className="text-button text-xl">Schedule Tour</span>
            </GlassButton>
          </Container>
        </Section>

        {/* Building Amenities */}
        <Section padding="2xl" className="bg-gradient-to-b from-black to-neutral-950">
          <Container size="lg">
            <div className="text-center mb-16">
              <h2 className="text-h2 font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                Premium <span className="text-amber-200/90">Building Features</span>
              </h2>
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent mx-auto mb-8" />
              <Container size="md">
                <p className="text-body-light text-xl text-neutral-200">
                  Every amenity is thoughtfully designed to elevate your daily life and provide exceptional convenience.
                </p>
              </Container>
            </div>

            <div className="space-y-20">
              {buildingAmenities.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <div className="text-center mb-12">
                    <h3 className="text-h3 font-serif text-3xl md:text-4xl text-white mb-4">{category.category}</h3>
                    <p className="text-neutral-300 text-lg max-w-2xl mx-auto">{category.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {category.amenities.map((amenity, amenityIndex) => (
                      <div key={amenityIndex} className="luxury-card p-8 rounded-2xl">
                        <div className="flex items-start justify-between mb-4">
                          <h4 className="text-xl font-semibold text-white">{amenity.name}</h4>
                          <div className="w-3 h-3 bg-amber-200/80 rounded-full mt-2" />
                        </div>
                        <p className="text-neutral-300 leading-relaxed mb-4">{amenity.description}</p>
                        <div className="inline-flex items-center px-3 py-1 bg-amber-200/10 rounded-full border border-amber-200/20">
                          <span className="text-amber-200/90 text-sm font-medium">{amenity.highlight}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Neighborhood Amenities */}
        <Section padding="2xl" className="bg-gradient-to-b from-neutral-950 to-black">
          <Container size="lg">
            <div className="text-center mb-16">
              <h2 className="text-h2 font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                Neighborhood <span className="text-amber-200/90">Perks</span>
              </h2>
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent mx-auto mb-8" />
              <Container size="md">
                <p className="text-body-light text-xl text-neutral-200">
                  Beyond our building amenities, Fulton Market offers unparalleled access to Chicago's best attractions.
                </p>
              </Container>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {neighborhoodAmenities.map((amenity, index) => (
                <div key={index} className="luxury-card p-8 rounded-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-semibold text-white">{amenity.title}</h3>
                    <div className="bg-amber-200/10 px-3 py-1 rounded-full border border-amber-200/20">
                      <span className="text-amber-200/90 text-sm font-medium">{amenity.distance}</span>
                    </div>
                  </div>
                  <p className="text-neutral-300 leading-relaxed mb-6">{amenity.description}</p>
                  <div className="space-y-2">
                    {amenity.highlights.map((highlight, idx) => (
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

        {/* CTA Section */}
        <Section padding="2xl" className="bg-gradient-to-b from-black to-neutral-950">
          <Container size="lg" className="text-center">
            <h2 className="text-h2 font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-8">
              Experience <span className="text-amber-200 italic">Luxury Living</span>
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent mx-auto mb-8" />
            <Container size="md">
              <p className="text-body-light text-xl text-neutral-200 mb-12">
                Discover how our world-class amenities can transform your daily routine into an extraordinary lifestyle. Schedule a tour to experience these features firsthand.
              </p>
            </Container>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlassLinkButton size="lg" className="glass-primary" href="/pricing">
                <span className="text-button text-xl">Tour Amenities</span>
              </GlassLinkButton>
              <GlassLinkButton size="lg" className="glass-secondary" href="/apartments">
                <span className="text-button text-xl">View Apartments</span>
              </GlassLinkButton>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}