
export default function PlaceExperience() {
  const highlights = [
    "Michelin-starred dining within reach",
    "Innovation hubs on your doorstep", 
    "Seamless connectivity—transit, bike, runway"
  ];

  return (
    <section className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2670&auto=format&fit=crop')`,
        }}
      />
      
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 container py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight leading-tight">
              Located at the intersection of{" "}
              <span className="italic gold-accent">grit and glass</span>: Fulton Market.
            </h2>
            
            <p className="text-xl md:text-2xl text-neutral-300 font-light max-w-3xl mx-auto leading-relaxed">
              Michelin cuisine, cultural ateliers, tech firms—these aren't amenities, they're your surroundings.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="inline-block w-2 h-2 bg-amber-200/80 rounded-full mb-4" />
                <p className="text-lg text-white font-light tracking-wide">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
