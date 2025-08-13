
import { GlassButton } from "@/components/ui/glass-button";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2564&auto=format&fit=crop')`,
        }}
      />
      
      <div className="absolute inset-0 cinematic-gradient" />
      <div className="absolute inset-0 bg-grain opacity-20" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 hero-text tracking-tight">
          What if your next apartment{" "}
          <span className="italic gold-accent">found you?</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-neutral-300 mb-12 font-light tracking-wide max-w-2xl mx-auto">
          Reserve access to Fulton Market's most discreet residences.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <GlassButton 
            size="lg"
            className="glass-primary"
          >
            Reserve Access
          </GlassButton>
          
          <GlassButton 
            size="lg"
          >
            Learn More
          </GlassButton>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}