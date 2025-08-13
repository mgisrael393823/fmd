
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { GlassButton } from "@/components/ui/glass-button";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes Fulton Market apartments different?",
      answer: "Curation, context, quiet entry. Each residence is selected for design integrity and neighborhood harmony."
    },
    {
      question: "Are pets welcome?",
      answer: "Yes—with thoughtful care integrated subtly into the living experience."
    },
    {
      question: "What amenities are included?",
      answer: "Integrated co-working spaces, rooftop atmosphere, and discreet hospitality services tailored to modern living."
    },
    {
      question: "How does reservation work?",
      answer: "Submit your request. Access is shared with a select few prior to public release. Not all requests will be granted."
    }
  ];

  return (
    <section className="py-24 px-4 bg-neutral-950">
      <div className="container max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-16 text-center">
          Questions & Context
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="luxury-card rounded-lg p-6">
              <GlassButton
                className="w-full text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                contentClassName="flex justify-between items-center w-full"
              >
                <span className="font-medium text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 ml-4" />
                ) : (
                  <ChevronDown className="h-5 w-5 ml-4" />
                )}
              </GlassButton>
              
              {openIndex === index && (
                <div className="mt-6 pt-6 border-t border-neutral-700/30">
                  <p className="text-neutral-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}