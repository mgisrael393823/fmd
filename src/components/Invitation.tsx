
export default function Invitation() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Enhanced background with parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110 transition-transform duration-[15s] hover:scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2400&auto=format&fit=crop')`,
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-grain opacity-12" />
      
      {/* Floating accent elements */}
      <div className="absolute top-1/4 right-16 w-40 h-40 bg-amber-200/4 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 left-20 w-24 h-24 bg-white/3 rounded-full blur-2xl animate-pulse delay-1000" />
      
      <div className="relative z-10 container py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="space-y-16 animate-fade-in-up">
            <h2 className="text-h2 font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white tracking-tight leading-none">
              <span className="block animate-slide-in-left">No listings,</span>
              <span className="block animate-slide-in-right delay-300">no noise.</span>
            </h2>
            
            <div className="w-40 h-px bg-gradient-to-r from-transparent via-amber-200/70 to-transparent mx-auto animate-fade-in-delay" />
            
            <div className="animate-fade-in-up-delay">
              <p className="text-body-light text-2xl md:text-3xl lg:text-4xl text-neutral-200 max-w-4xl mx-auto leading-relaxed">
                A curated rental experience built for those who value{" "}
                <span className="text-amber-200/95 italic inline-block transform hover:scale-105 transition-transform duration-300" style={{
                  textShadow: '0 0 30px rgba(251, 191, 36, 0.4)'
                }}>
                  quality over quantity.
                </span>
              </p>
            </div>
            
            {/* Added visual elements for depth */}
            <div className="flex justify-center items-center gap-12 mt-16 animate-fade-in-up-delay-2">
              {[
                { number: "500+", label: "Premium Units" },
                { number: "24/7", label: "Concierge" },
                { number: "100%", label: "Free Service" }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl md:text-4xl font-light text-amber-200/90 mb-2 group-hover:text-amber-200 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-neutral-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
