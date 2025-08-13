
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { GlassButton } from "@/components/ui/glass-button";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What apartments are available for rent in Fulton Market?",
      answer: "We have 500+ luxury apartments for rent in Fulton Market including studios, 1-bedroom, and 2-bedroom units. All apartments feature modern amenities, premium finishes, and prime West Loop locations."
    },
    {
      question: "How much do Fulton Market apartments cost?",
      answer: "Fulton Market apartment rents range from $2,000-$6,000+ depending on size and amenities. Studios start around $2,000, 1-bedrooms from $2,500, and 2-bedrooms from $3,500. Contact us for current pricing and availability."
    },
    {
      question: "What neighborhoods are near Fulton Market?",
      answer: "Fulton Market is in Chicago's West Loop, bordered by the Loop, River North, and Near West Side. It's walking distance to Union Station, Google Chicago, and top restaurants on Restaurant Row."
    },
    {
      question: "What amenities do Fulton Market apartments have?",
      answer: "Most Fulton Market rental apartments include luxury amenities like rooftop decks, fitness centers, concierge services, in-unit laundry, stainless steel appliances, and parking. Many buildings are pet-friendly."
    },
    {
      question: "How do I rent an apartment in Fulton Market?",
      answer: "Browse available Fulton Market apartments, schedule viewings, and apply online. Our service is free for renters - we help you find and secure the perfect apartment in Chicago's most desirable neighborhood."
    }
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-neutral-950 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grain opacity-10" />
      
      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-h2 font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            Fulton Market <span className="text-amber-200/90">Apartments FAQ</span>
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent mx-auto" />
        </div>
        
        <div className="space-y-6">
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
      </div>
    </section>
  );
}