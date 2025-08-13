
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { GlassButton } from "@/components/ui/glass-button";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does early access work?",
      answer: "Register to receive priority notifications about new rental listings before they're posted on other platforms. All qualified applicants welcome."
    },
    {
      question: "What makes these apartments special?",
      answer: "Every property is hand-selected for exceptional design, prime Fulton Market location, and premium amenities. We focus on quality over quantity."
    },
    {
      question: "What's included with your service?",
      answer: "Personalized property matching, private showings, market insights, application assistance, and ongoing resident support."
    },
    {
      question: "How much does this service cost?",
      answer: "Our service is completely free for renters. Property owners pay us to find qualified tenants for their premium units."
    }
  ];

  return (
    <section className="py-24 px-4 bg-neutral-950">
      <div className="container max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-16 text-center">
          Questions & Details
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