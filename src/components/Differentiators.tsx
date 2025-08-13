
export default function Differentiators() {
  const features = [
    {
      title: "Curation",
      description: "Hand-selected homes anchored in design integrity."
    },
    {
      title: "Discreet Access",
      description: "Off-market availability. Viewings by reservation only."
    },
    {
      title: "Service", 
      description: "Effortless support—from move-in to maintenance, handled quietly."
    }
  ];

  return (
    <section className="py-32 bg-black bg-grain">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 tracking-tight">
              Why Fulton Market Apartments{" "}
              <span className="italic gold-accent">Are Different</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="luxury-card p-8 md:p-10 h-full rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10">
                  <h3 className="font-serif text-2xl md:text-3xl font-medium text-white mb-6 gold-accent">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-neutral-300 font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
