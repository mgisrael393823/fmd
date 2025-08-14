
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { GlassButton } from "@/components/ui/glass-button";
import { Container, Section } from '@/components/design-system';
import Head from 'next/head';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What apartments are available for rent in Chicago's Fulton Market?",
      answer: "We have 500+ luxury apartments for rent in Chicago's Fulton Market including studios, 1-bedroom, and 2-bedroom units. All apartments feature modern amenities, premium finishes, and prime West Loop Chicago locations."
    },
    {
      question: "How much do Chicago Fulton Market apartments cost?",
      answer: "Chicago Fulton Market apartment rents range from $2,000-$6,000+ depending on size and amenities. Studios start around $2,000, 1-bedrooms from $2,500, and 2-bedrooms from $3,500. Contact us for current pricing and availability."
    },
    {
      question: "What neighborhoods are near Fulton Market?",
      answer: "Fulton Market is in Chicago's West Loop, bordered by the Loop, River North, and Near West Side. It's walking distance to Union Station, Google Chicago, and top restaurants on Restaurant Row."
    },
    {
      question: "What amenities do Chicago Fulton Market apartments have?",
      answer: "Most Chicago Fulton Market rental apartments include luxury amenities like rooftop decks, fitness centers, concierge services, in-unit laundry, stainless steel appliances, and parking. Many buildings are pet-friendly."
    },
    {
      question: "How do I rent an apartment in Fulton Market?",
      answer: "Browse available Fulton Market apartments, schedule viewings, and apply online. Our service is free for renters - we help you find and secure the perfect apartment in Chicago's most desirable neighborhood."
    },
    {
      question: "What is the average rent in Fulton Market Chicago?",
      answer: "The average rent in Fulton Market Chicago varies by unit type: studios average $2,200, 1-bedrooms average $2,800, and 2-bedrooms average $4,200. Luxury high-rise buildings command premium rents, while converted lofts offer more affordable options."
    },
    {
      question: "Are pets allowed in Fulton Market apartments?",
      answer: "Yes, many Fulton Market apartments are pet-friendly! Most buildings allow cats and dogs with typical pet deposits of $200-500. Some luxury buildings offer dog runs, pet spas, and grooming stations. Weight and breed restrictions may apply."
    },
    {
      question: "What restaurants are near Fulton Market apartments?",
      answer: "Fulton Market is Chicago's Restaurant Row with world-class dining. Nearby favorites include Girl & the Goat, Au Cheval, Next, and Alinea. The neighborhood features over 100 restaurants, from Michelin-starred establishments to casual neighborhood spots."
    },
    {
      question: "How far is Fulton Market from downtown Chicago?",
      answer: "Fulton Market is just 1-2 miles from downtown Chicago's Loop. It's a 10-15 minute walk, 5-minute bike ride, or quick train ride on the Green/Pink Lines. Many residents walk to work in the financial district daily."
    },
    {
      question: "What is the best time to rent in Fulton Market?",
      answer: "The best time to rent in Fulton Market is typically September-November and February-April when inventory is higher and rents may be more negotiable. Summer months see higher demand from new graduates and relocating professionals."
    },
    {
      question: "Are there apartments near Google Chicago in Fulton Market?",
      answer: "Yes! Google Chicago's office at 1000 W Fulton Market is surrounded by luxury apartment buildings. Many tech workers live within walking distance in buildings like Fulton West, The Hoxton, and converted Fulton Market lofts."
    },
    {
      question: "Do Fulton Market apartments have parking?",
      answer: "Most Fulton Market apartments include parking, either in attached garages or nearby lots. Monthly parking rates range from $150-300. Some luxury buildings offer valet parking, EV charging stations, and covered parking options."
    },
    {
      question: "What public transportation is near Fulton Market apartments?",
      answer: "Fulton Market apartments have excellent transit access. The Morgan Green/Pink Line station is 3 blocks away, providing direct service downtown. Multiple bus lines serve the area, and Union Station is within walking distance for regional travel."
    },
    {
      question: "Are there luxury Fulton Market apartments available?",
      answer: "Absolutely! Fulton Market features numerous luxury apartment buildings with premium amenities like rooftop pools, concierge services, fitness centers, and stunning city views. Popular luxury buildings include high-rises and converted industrial lofts."
    },
    {
      question: "What grocery stores are near Fulton Market apartments?",
      answer: "Fulton Market residents have access to Whole Foods Market (2 blocks), Mariano's, and multiple smaller markets. The historic Fulton Market District also features specialty food vendors, butchers, and the popular Fulton Street Farmers Market."
    },
    {
      question: "Are there studio apartments under $2500 in Fulton Market?",
      answer: "Yes, studio apartments under $2500 are available in Fulton Market, typically in older buildings or smaller units. These may be converted lofts or smaller spaces in mixed-use buildings. Demand is high for affordable studios in this prime location."
    },
    {
      question: "What makes Fulton Market apartments special?",
      answer: "Fulton Market apartments offer urban living at its finest: industrial-chic loft conversions, modern high-rises, proximity to Chicago's best restaurants, walking distance to downtown, and a vibrant arts/culture scene. It's where historic charm meets modern luxury."
    },
    {
      question: "Are there furnished apartments in Fulton Market Chicago?",
      answer: "Yes, furnished apartments are available in Fulton Market for short-term and long-term rentals. Many luxury buildings offer furnished units with modern furniture, full kitchens, and premium amenities - perfect for relocating professionals and temporary residents."
    },
    {
      question: "What is the nightlife like near Fulton Market apartments?",
      answer: "Fulton Market offers vibrant nightlife with rooftop bars, craft cocktail lounges, and late-night eateries. Popular spots include Cindy's Rooftop, The Aviary, and numerous brewery taprooms. The neighborhood buzzes with energy well into the night."
    },
    {
      question: "Are there apartments with gym access in Fulton Market?",
      answer: "Most luxury Fulton Market apartments include state-of-the-art fitness centers with cardio equipment, weights, and group fitness spaces. Many buildings also feature yoga studios, swimming pools, and some offer personal training services for residents."
    }
  ];

  // Create FAQ Schema markup
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Head>
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <Section padding="xl" background="neutral" className="overflow-hidden bg-gradient-to-b from-neutral-950 via-black to-black">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grain opacity-10" />
      
      <Container size="lg" className="relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-h2 font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-8">
            Chicago Fulton Market <span className="text-amber-200/90">Apartments FAQ</span>
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent mx-auto" />
        </div>
        
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} 
                 className={`luxury-card rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02] animate-fade-in-up stagger-${index + 1}`}>
              <button
                className="w-full text-left group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-h4 font-medium text-xl md:text-2xl text-white group-hover:text-amber-200/90 transition-colors duration-300 pr-6">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-amber-200/20 transition-all duration-300">
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-amber-200/80 transition-transform duration-300 rotate-180" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-white/70 group-hover:text-amber-200/80 transition-all duration-300" />
                    )}
                  </div>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index 
                  ? 'max-h-96 opacity-100 mt-6 pt-6' 
                  : 'max-h-0 opacity-0 mt-0 pt-0'
              }`}>
                <div className="border-t border-gradient-to-r from-neutral-700/30 via-amber-200/30 to-neutral-700/30 h-px mb-6" />
                <p className="text-body text-lg text-neutral-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action at bottom */}
        <div className="mt-20 text-center animate-fade-in-up-delay-2">
          <p className="text-body-light text-xl text-neutral-400 mb-8">
            Have more questions? We're here to help.
          </p>
          <GlassButton 
            size="lg"
            className="glass-primary transform hover:scale-105 transition-transform duration-300"
          >
            <span className="text-button">Contact Us</span>
          </GlassButton>
        </div>
      </Container>
    </Section>
    </>
  );
}