
import { useState, useEffect } from 'react';
import { GlassButton } from "@/components/ui/glass-button";
import { Container, Section } from '@/components/design-system';

export default function FinalCTA() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Section padding="xl" className="overflow-hidden bg-gradient-to-b from-black to-neutral-950">
      {/* Enhanced background with parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 transform scale-110"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2670&auto=format&fit=crop')`,
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 transform scale-110" />
      <div className="absolute inset-0 bg-grain opacity-15 transform scale-110" />
      
      {/* Floating accent elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-amber-200/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-amber-200/3 rounded-full blur-3xl" />
      
      <Container size="lg" className="relative z-10 text-center">
        <div className="animate-fade-in-up">
          <h2 className="text-h2 font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-8">
            Discover Chicago's{" "}
            <span className="italic text-amber-200/95 inline-block" style={{
              textShadow: '0 0 40px rgba(251, 191, 36, 0.3)'
            }}>
              Finest Fulton Market Rentals
            </span>
          </h2>
          
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent mx-auto mb-12" />
          
          <Container size="md">
            <p className="text-body-light text-xl md:text-2xl lg:text-3xl text-neutral-200 mb-16">
              Join our network to access Chicago's most premium Fulton Market rental opportunities and personalized service.
            </p>
          </Container>
        </div>
        
        <div className="animate-fade-in-up-delay">
          {!mounted ? (
            <GlassButton 
              size="lg"
              className="glass-primary opacity-0"
            >
              <span className="text-button text-xl">Join the Waitlist</span>
            </GlassButton>
          ) : isSubmitted ? (
            <div className="text-center">
              <div className="text-green-400 text-xl mb-4">✓ Thank you for joining!</div>
              <p className="text-neutral-300">We'll be in touch soon with exclusive opportunities.</p>
            </div>
          ) : !showEmailInput ? (
            <GlassButton 
              onClick={() => setShowEmailInput(true)}
              size="lg"
              className="glass-primary transform hover:scale-105 transition-transform duration-300"
            >
              <span className="text-button text-xl">Join the Waitlist</span>
            </GlassButton>
          ) : (
            <form 
              action="https://formspree.io/f/xvgqyoyd"
              method="POST"
              onSubmit={async (e) => {
                e.preventDefault();
                setIsSubmitting(true);
                
                const form = e.target as HTMLFormElement;
                const formData = new FormData();
                formData.append('email', email);
                formData.append('source', 'Fulton Market Waitlist');
                
                try {
                  const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: { Accept: 'application/json' }
                  });
                  
                  if (response.ok) {
                    setIsSubmitted(true);
                    setEmail('');
                  } else {
                    throw new Error('Form submission failed');
                  }
                } catch (error) {
                  alert('Something went wrong. Please try again.');
                }
                setIsSubmitting(false);
              }}
            >
              <div className="flex gap-4 animate-fade-in">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  autoFocus
                  className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:border-amber-200/50 focus:outline-none focus:ring-2 focus:ring-amber-200/20 transition-all duration-300"
                />
                <input type="hidden" name="source" value="Fulton Market Waitlist" />
                <GlassButton 
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="glass-primary px-8 py-4"
                >
                  {isSubmitting ? 'Joining...' : 'Join'}
                </GlassButton>
              </div>
              <button
                type="button"
                onClick={() => setShowEmailInput(false)}
                className="mt-4 text-sm text-neutral-400 hover:text-neutral-300 transition-colors underline"
              >
                Cancel
              </button>
            </form>
          )}
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
      </Container>
    </Section>
  );
}