
export default function Invitation() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2400&auto=format&fit=crop')`,
        }}
      />
      
      <div className="absolute inset-0 bg-black/70" />
      
      <div className="relative z-10 container py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-12">
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-tight">
              No listings, no noise.
            </h2>
            
            <div className="w-32 h-px bg-amber-200/60 mx-auto" />
            
            <p className="text-2xl md:text-3xl text-neutral-300 font-light max-w-3xl mx-auto leading-relaxed">
              A curated living network built for those who value{" "}
              <span className="gold-accent italic">context over contract.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
