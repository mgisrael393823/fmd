import React from 'react';
import Head from 'next/head';
import Navigation from "@/components/Navigation";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Container, Section } from '@/components/design-system';
import { GlassButton } from "@/components/ui/glass-button";
import { GlassLinkButton } from "@/components/ui/glass-link-button";

export default function Apartments() {
  const apartmentTypes = [
    {
      id: 'studio',
      title: 'Studio Apartments',
      price: 'From $2,000/month',
      sqft: '450-650 sq ft',
      description: 'Modern studio apartments perfect for young professionals and minimalists. Features premium finishes, floor-to-ceiling windows, and efficient layouts.',
      features: [
        'Floor-to-ceiling windows',
        'Premium hardwood floors',
        'Stainless steel appliances',
        'In-unit washer/dryer',
        'Modern bathroom fixtures',
        'Built-in storage solutions'
      ],
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2940&auto=format&fit=crop'
    },
    {
      id: '1br',
      title: '1 Bedroom Apartments',
      price: 'From $2,500/month',
      sqft: '650-900 sq ft',
      description: 'Spacious 1-bedroom apartments with separate living areas and modern amenities. Ideal for professionals seeking comfort and style in the heart of Fulton Market.',
      features: [
        'Separate bedroom with walk-in closet',
        'Open-concept living/dining',
        'Chef-inspired kitchen',
        'Private balcony (select units)',
        'Spa-like bathroom',
        'Smart home technology'
      ],
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2940&auto=format&fit=crop'
    },
    {
      id: '2br',
      title: '2 Bedroom Apartments',
      price: 'From $3,500/month',
      sqft: '950-1,400 sq ft',
      description: 'Premium 2-bedroom apartments offering spacious living with luxury finishes. Perfect for roommates, couples, or professionals needing a home office.',
      features: [
        'Two spacious bedrooms',
        'Master suite with en-suite bath',
        'Open-concept living space',
        'Gourmet kitchen with island',
        'Multiple balconies available',
        'Dedicated workspace area'
      ],
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2958&auto=format&fit=crop'
    }
  ];

  const buildingAmenities = [
    'Rooftop terrace with city views',
    '24/7 fitness center',
    'Concierge services',
    'Pet spa and dog run',
    'Co-working spaces',
    'Package receiving',
    'Bike storage',
    'Electric car charging'
  ];

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Apartments', url: '/apartments' }
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Head>
        <title>Luxury Fulton Market Chicago Apartments for Rent | Studios, 1BR, 2BR</title>
        <meta 
          name="description" 
          content="Discover luxury apartments in Fulton Market Chicago. Studios from $2,000, 1BR from $2,500, 2BR from $3,500. Premium finishes, modern amenities, Restaurant Row location." 
        />
        <meta 
          name="keywords" 
          content="fulton market apartments, chicago apartments, luxury apartments fulton market, west loop apartments, studio apartments fulton market, 1 bedroom fulton market, 2 bedroom fulton market" 
        />
        <link rel="canonical" href="https://rentfultonmarket.apartments/apartments/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Luxury Fulton Market Chicago Apartments for Rent" />
        <meta property="og:description" content="Premium apartments in Chicago's hottest neighborhood. Studios, 1BR, 2BR units with luxury amenities." />
        <meta property="og:url" content="https://rentfultonmarket.apartments/apartments/" />
        <meta property="og:type" content="website" />
      </Head>
      
      <Navigation />
      
      <main className="bg-black text-white min-h-screen">
        {/* Hero Section */}
        <Section padding="2xl" className="bg-gradient-to-b from-black via-neutral-950 to-black">
          <Container size="lg" className="text-center">
            <h1 className="text-h1 font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-8">
              Luxury <span className="text-amber-200 italic">Fulton Market</span> Apartments
            </h1>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent mx-auto mb-8" />
            <Container size="md">
              <p className="text-body-light text-xl md:text-2xl text-neutral-200 mb-12 leading-relaxed">
                Discover premium apartment living in Chicago's most dynamic neighborhood. From modern studios to spacious 2-bedrooms, find your perfect home in the heart of Restaurant Row.
              </p>
            </Container>
            <GlassButton size="lg" className="glass-primary">
              <span className="text-button text-xl">Schedule a Tour</span>
            </GlassButton>
          </Container>
        </Section>

        {/* Apartment Types */}
        <Section padding="2xl" className="bg-gradient-to-b from-black to-neutral-950">
          <Container size="lg">
            <div className="text-center mb-16">
              <h2 className="text-h2 font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                Available <span className="text-amber-200/90">Apartment Types</span>
              </h2>
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent mx-auto" />
            </div>

            <div className="space-y-20">
              {apartmentTypes.map((apt, index) => (
                <div key={apt.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="flex-1">
                    <div 
                      className="aspect-[4/3] bg-cover bg-center rounded-2xl"
                      style={{ backgroundImage: `url('${apt.image}')` }}
                    />
                  </div>
                  <div className="flex-1 space-y-6">
                    <div>
                      <h3 className="text-h3 font-serif text-3xl md:text-4xl text-white mb-4">{apt.title}</h3>
                      <div className="flex flex-col sm:flex-row gap-4 mb-6">
                        <div className="bg-amber-200/10 px-4 py-2 rounded-full border border-amber-200/20">
                          <span className="text-amber-200 font-medium">{apt.price}</span>
                        </div>
                        <div className="bg-white/5 px-4 py-2 rounded-full border border-white/10">
                          <span className="text-neutral-300">{apt.sqft}</span>
                        </div>
                      </div>
                      <p className="text-neutral-300 text-lg leading-relaxed mb-8">{apt.description}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-medium text-white mb-4">Key Features</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {apt.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="w-2 h-2 bg-amber-200/80 rounded-full mr-3" />
                            <span className="text-neutral-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <GlassButton className="glass-primary">
                        <span className="text-button">View {apt.title}</span>
                      </GlassButton>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Building Amenities */}
        <Section padding="2xl" className="bg-gradient-to-b from-neutral-950 to-black">
          <Container size="lg">
            <div className="text-center mb-16">
              <h2 className="text-h2 font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                Premium <span className="text-amber-200/90">Building Amenities</span>
              </h2>
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent mx-auto mb-8" />
              <Container size="md">
                <p className="text-body-light text-xl text-neutral-200">
                  Experience luxury living with world-class amenities designed for modern urban lifestyles.
                </p>
              </Container>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {buildingAmenities.map((amenity, index) => (
                <div key={index} className="luxury-card p-6 text-center rounded-xl">
                  <div className="w-12 h-12 bg-amber-200/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-amber-200/80 rounded-full" />
                  </div>
                  <p className="text-white font-medium">{amenity}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <Section padding="2xl" className="bg-gradient-to-b from-black to-neutral-950">
          <Container size="lg" className="text-center">
            <h2 className="text-h2 font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-8">
              Ready to Call Fulton Market <span className="text-amber-200 italic">Home?</span>
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent mx-auto mb-8" />
            <Container size="md">
              <p className="text-body-light text-xl text-neutral-200 mb-12">
                Join hundreds of residents who have discovered luxury living in Chicago's most vibrant neighborhood. Schedule your tour today.
              </p>
            </Container>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlassLinkButton size="lg" className="glass-primary" href="/pricing">
                <span className="text-button text-xl">Schedule Tour</span>
              </GlassLinkButton>
              <GlassLinkButton size="lg" className="glass-secondary" href="/pricing">
                <span className="text-button text-xl">View Pricing</span>
              </GlassLinkButton>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}