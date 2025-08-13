
export default function Philosophy() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2558&auto=format&fit=crop')`,
        }}
      />
      
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="relative z-10 container py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <p className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-white leading-tight tracking-tight">
              We believe in space that feels{" "}
              <span className="italic gold-accent">curated</span>—not commoditized.
            </p>
            
            <div className="w-24 h-px bg-amber-200/60 mx-auto" />
            
            <p className="text-xl md:text-2xl text-neutral-300 font-light max-w-3xl mx-auto leading-relaxed">
              These residences reflect design, discretion, and the heartbeat of Fulton Market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
