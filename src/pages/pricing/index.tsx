import React from 'react';
import Head from 'next/head';
import Navigation from "@/components/Navigation";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Container, Section } from '@/components/design-system';
import { GlassButton } from "@/components/ui/glass-button";
import { GlassLinkButton } from "@/components/ui/glass-link-button";

export default function Pricing() {
  const pricingTiers = [
    {
      id: 'studio',
      title: 'Studio Apartments',
      priceRange: '$2,000 - $2,800',
      averagePrice: '$2,200',
      sqft: '450-650 sq ft',
      description: 'Perfect for young professionals and minimalists seeking efficiency and style.',
      features: [
        'Premium hardwood floors',
        'Floor-to-ceiling windows',
        'Stainless steel appliances',
        'In-unit washer/dryer',
        'Built-in storage solutions',
        'Modern bathroom fixtures'
      ],
      popular: false
    },
    {
      id: '1bedroom',
      title: '1 Bedroom Apartments',
      priceRange: '$2,500 - $3,800',
      averagePrice: '$2,800',
      sqft: '650-900 sq ft',
      description: 'Spacious living with separate bedroom and modern amenities for professionals.',
      features: [
        'Separate bedroom with walk-in closet',
        'Open-concept living/dining',
        'Chef-inspired kitchen',
        'Private balcony (select units)',
        'Spa-like bathroom',
        'Smart home technology'
      ],
      popular: true
    },
    {
      id: '2bedroom',
      title: '2 Bedroom Apartments',
      priceRange: '$3,500 - $5,500',
      averagePrice: '$4,200',
      sqft: '950-1,400 sq ft',
      description: 'Premium space for roommates, couples, or those needing a home office.',
      features: [
        'Two spacious bedrooms',
        'Master suite with en-suite bath',
        'Open-concept living space',
        'Gourmet kitchen with island',
        'Multiple balconies available',
        'Dedicated workspace area'
      ],
      popular: false
    }
  ];

  const additionalCosts = [
    {
      category: 'Parking',
      cost: '$150 - $300/month',
      description: 'Secure underground parking with optional valet service and EV charging.',
      included: false
    },
    {
      category: 'Pet Fee',
      cost: '$50/month per pet',
      description: 'Monthly pet rent plus $200-500 one-time deposit. Weight/breed restrictions apply.',
      included: false
    },
    {
      category: 'Storage Unit',
      cost: '$75 - $150/month',
      description: 'Additional storage space in secure basement area (subject to availability).',
      included: false
    },
    {
      category: 'Utilities Package',
      cost: '$100 - $200/month',
      description: 'Bundled utilities including water, sewer, trash, and high-speed internet.',
      included: true
    }
  ];

  const incentives = [
    {
      title: 'First Month Free',
      description: 'Move in with no rent for your first month on select 12+ month leases.',
      terms: 'New residents only, select units'
    },
    {
      title: 'Reduced Security Deposit',
      description: 'Qualified applicants can reduce security deposit to half of one month\'s rent.',
      terms: 'Credit score 700+ required'
    },
    {
      title: 'Tech Worker Discount',
      description: 'Special rates for employees of Google, Meta, and other qualifying tech companies.',
      terms: 'Employment verification required'
    },
    {
      title: 'Referral Bonus',
      description: 'Receive $500 credit when you refer a friend who signs a lease.',
      terms: 'Both parties must complete lease'
    }
  ];

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Pricing', url: '/pricing' }
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Head>
        <title>Fulton Market Apartment Pricing | Chicago Luxury Rent Rates 2025</title>
        <meta 
          name="description" 
          content="Transparent pricing for Fulton Market Chicago apartments. Studios from $2,000, 1BR from $2,500, 2BR from $3,500. View current rates, fees, and special offers." 
        />
        <meta 
          name="keywords" 
          content="fulton market apartment prices, chicago apartment rent rates, fulton market rent cost, luxury apartment pricing chicago, fulton market studio price, 1 bedroom rent fulton market" 
        />
        <link rel="canonical" href="https://rentfultonmarket.apartments/pricing/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Fulton Market Apartment Pricing | Chicago Luxury Rent" />
        <meta property="og:description" content="Transparent pricing for luxury Fulton Market apartments. Studios from $2,000, competitive rates with premium amenities included." />
        <meta property="og:url" content="https://rentfultonmarket.apartments/pricing/" />
        <meta property="og:type" content="website" />
        
        {/* Pricing Schema */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Fulton Market Luxury Apartments",
              "description": "Premium apartment rentals in Chicago's Fulton Market district",
              "offers": pricingTiers.map(tier => ({
                "@type": "Offer",
                "name": tier.title,
                "price": tier.averagePrice.replace('$', '').replace(',', ''),
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": tier.averagePrice.replace('$', '').replace(',', ''),
                  "priceCurrency": "USD",
                  "unitCode": "MON"
                }
              })),
              "provider": {
                "@type": "RealEstateAgent",
                "name": "Fulton Market Apartments"
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
              Transparent <span className="text-amber-200 italic">Pricing</span>
            </h1>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent mx-auto mb-8" />
            <Container size="md">
              <p className="text-body-light text-xl md:text-2xl text-neutral-200 mb-12 leading-relaxed">
                No hidden fees, no surprises. Discover competitive rates for luxury apartment living in Chicago's most desirable neighborhood.
              </p>
            </Container>
            <GlassButton size="lg" className="glass-primary">
              <span className="text-button text-xl">Get Current Rates</span>
            </GlassButton>
          </Container>
        </Section>

        {/* Pricing Tiers */}
        <Section padding="2xl" className="bg-gradient-to-b from-black to-neutral-950">
          <Container size="lg">
            <div className="text-center mb-16">
              <h2 className="text-h2 font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                Apartment <span className="text-amber-200/90">Pricing</span>
              </h2>
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent mx-auto mb-8" />
              <Container size="md">
                <p className="text-body-light text-xl text-neutral-200">
                  Choose the perfect apartment size for your lifestyle and budget.
                </p>
              </Container>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div key={tier.id} className={`luxury-card rounded-2xl p-8 relative ${tier.popular ? 'ring-2 ring-amber-200/30' : ''}`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-amber-200/90 text-black px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-h3 font-serif text-2xl md:text-3xl text-white mb-4">{tier.title}</h3>
                    <div className="mb-4">
                      <div className="text-4xl font-light text-amber-200 mb-2">{tier.averagePrice}</div>
                      <div className="text-neutral-400 text-sm">Average monthly rent</div>
                      <div className="text-neutral-400 text-sm mt-1">Range: {tier.priceRange}</div>
                    </div>
                    <div className="inline-flex items-center px-3 py-1 bg-white/5 rounded-full border border-white/10">
                      <span className="text-neutral-300 text-sm">{tier.sqft}</span>
                    </div>
                  </div>

                  <p className="text-neutral-300 text-center mb-8 leading-relaxed">{tier.description}</p>

                  <div className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-amber-200/80 rounded-full mr-3" />
                        <span className="text-neutral-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <GlassButton className={tier.popular ? "glass-primary w-full" : "glass-secondary w-full"}>
                    <span className="text-button">View {tier.title}</span>
                  </GlassButton>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Additional Costs */}
        <Section padding="2xl" className="bg-gradient-to-b from-neutral-950 to-black">
          <Container size="lg">
            <div className="text-center mb-16">
              <h2 className="text-h2 font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                Additional <span className="text-amber-200/90">Costs</span>
              </h2>
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent mx-auto mb-8" />
              <Container size="md">
                <p className="text-body-light text-xl text-neutral-200">
                  Complete transparency on all potential fees and optional services.
                </p>
              </Container>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {additionalCosts.map((cost, index) => (
                <div key={index} className="luxury-card p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{cost.category}</h3>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      cost.included 
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                        : 'bg-amber-200/10 text-amber-200 border border-amber-200/20'
                    }`}>
                      {cost.included ? 'Included' : 'Optional'}
                    </div>
                  </div>
                  <div className="text-2xl font-light text-amber-200 mb-3">{cost.cost}</div>
                  <p className="text-neutral-300 leading-relaxed">{cost.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Special Offers */}
        <Section padding="2xl" className="bg-gradient-to-b from-black to-neutral-950">
          <Container size="lg">
            <div className="text-center mb-16">
              <h2 className="text-h2 font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                Current <span className="text-amber-200/90">Incentives</span>
              </h2>
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent mx-auto mb-8" />
              <Container size="md">
                <p className="text-body-light text-xl text-neutral-200">
                  Take advantage of limited-time offers and special discounts.
                </p>
              </Container>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {incentives.map((incentive, index) => (
                <div key={index} className="luxury-card p-8 rounded-2xl">
                  <h3 className="text-2xl font-semibold text-white mb-4">{incentive.title}</h3>
                  <p className="text-neutral-300 leading-relaxed mb-4">{incentive.description}</p>
                  <div className="inline-flex items-center px-3 py-1 bg-amber-200/10 rounded-full border border-amber-200/20">
                    <span className="text-amber-200/90 text-sm">{incentive.terms}</span>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <Section padding="2xl" className="bg-gradient-to-b from-neutral-950 to-black">
          <Container size="lg" className="text-center">
            <h2 className="text-h2 font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-8">
              Ready to <span className="text-amber-200 italic">Move In?</span>
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent mx-auto mb-8" />
            <Container size="md">
              <p className="text-body-light text-xl text-neutral-200 mb-12">
                Get personalized pricing and check availability for your preferred apartment type. Our team is ready to help you find the perfect home.
              </p>
            </Container>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlassLinkButton size="lg" className="glass-primary" href="/apartments">
                <span className="text-button text-xl">Check Availability</span>
              </GlassLinkButton>
              <GlassLinkButton size="lg" className="glass-secondary" href="/apartments">
                <span className="text-button text-xl">Schedule Tour</span>
              </GlassLinkButton>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}