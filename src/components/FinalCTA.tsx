
import { GlassButton } from "@/components/ui/glass-button";

export default function FinalCTA() {

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-black to-neutral-950">
      {/* Enhanced background with parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 transform scale-110"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2670&auto=format&fit=crop')`,
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
      <div className="absolute inset-0 bg-grain opacity-15" />
      
      {/* Floating accent elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-amber-200/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-amber-200/3 rounded-full blur-3xl" />
      
      <div className="relative z-10 container max-w-5xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <h2 className="text-h2 font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-8">
            Discover Fulton Market's{" "}
            <span className="italic text-amber-200/95 inline-block" style={{
              textShadow: '0 0 40px rgba(251, 191, 36, 0.3)'
            }}>
              Finest Rentals
            </span>
          </h2>
          
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent mx-auto mb-12" />
          
          <p className="text-body-light text-xl md:text-2xl lg:text-3xl text-neutral-200 mb-16 max-w-3xl mx-auto">
            Join our network to access premium rental opportunities and personalized service.
          </p>
        </div>
        
        <div className="animate-fade-in-up-delay">
          <GlassButton 
            size="lg"
            className="glass-primary transform hover:scale-105 transition-transform duration-300"
          >
            <span className="text-button text-xl">Join the Waitlist</span>
          </GlassButton>
        </div>
        
        {/* Enhanced feature list */}
        <div className="mt-16 animate-fade-in-up-delay-2">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-lg text-neutral-300">
            {[
              { icon: "✓", text: "Free for renters" },
              { icon: "★", text: "Premium properties" },
              { icon: "♦", text: "Personalized service" }
            ].map((item, index) => (
              <div key={index} className="flex items-center group hover:text-amber-200/80 transition-colors duration-300">
                <div className="w-8 h-8 bg-amber-200/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-amber-200/20 transition-colors duration-300">
                  <span className="text-amber-200/80 font-medium">{item.icon}</span>
                </div>
                <span className="text-caption">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}