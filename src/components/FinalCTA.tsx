
import { useState } from "react";
import { GlassButton } from "@/components/ui/glass-button";

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", { email, message });
  };

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2670&auto=format&fit=crop')`,
        }}
      />
      
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-grain opacity-10" />
      
      <div className="relative z-10 container max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-6xl font-light text-white mb-8">
          Discover Fulton Market's{" "}
          <span className="italic gold-accent">Finest Rentals</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-neutral-300 mb-12 font-light max-w-2xl mx-auto">
          Join our network to access premium rental opportunities and personalized service.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
          <div>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors"
            />
          </div>
          
          <div>
            <textarea
              placeholder="Tell us about your ideal home (optional)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors resize-none"
            />
          </div>
          
          <GlassButton 
            type="submit"
            size="lg"
            className="glass-primary"
            contentClassName="w-full justify-center"
          >
            Get Early Access
          </GlassButton>
        </form>
        
        <div className="mt-12 flex justify-center space-x-8 text-sm text-neutral-400">
          <span className="flex items-center">
            <div className="w-2 h-2 bg-amber-400/60 rounded-full mr-2" />
            Free for renters
          </span>
          <span className="flex items-center">
            <div className="w-2 h-2 bg-amber-400/60 rounded-full mr-2" />
            Premium properties
          </span>
          <span className="flex items-center">
            <div className="w-2 h-2 bg-amber-400/60 rounded-full mr-2" />
            Personalized service
          </span>
        </div>
      </div>
    </section>
  );
}