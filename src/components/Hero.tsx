
import { useState, useEffect } from 'react';
import { Hero as LampHero } from "@/components/ui/hero";
import { Container } from '@/components/design-system';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData();
    formData.append('email', email);
    formData.append('source', 'Hero Waitlist');
    
    try {
      const response = await fetch('https://formspree.io/f/xvgqyoyd', {
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
  };

  return (
    <LampHero
      className="min-h-[85vh] bg-black"
      title={
        <>
          <span className="text-white">Fulton Market Chicago</span>{" "}
          <span className="text-amber-200 italic">Apartments for Rent</span>
        </>
      }
      subtitle="Discover luxury apartments in Chicago's Fulton Market - the West Loop's most desirable neighborhood. Premium studios, 1BR, and 2BR units available now."
      customActions={
        <Container size="sm" className="pt-8 relative z-50">
          {!mounted ? (
            <div className="px-8 py-4 bg-amber-200/90 text-black font-medium text-lg rounded-lg opacity-0">
              Join the Waitlist
            </div>
          ) : isSubmitted ? (
            <div className="text-center">
              <div className="text-green-400 text-xl mb-4">✓ Thank you for joining!</div>
              <p className="text-neutral-300">We'll be in touch soon with exclusive opportunities.</p>
            </div>
          ) : !showEmailInput ? (
            <div className="text-center">
              <button
                onClick={() => setShowEmailInput(true)}
                className="relative z-10 px-8 py-4 bg-amber-200/90 hover:bg-amber-200 text-black font-medium text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Join the Waitlist
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="flex gap-4 animate-fade-in">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  autoFocus
                  className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:border-amber-200/50 focus:outline-none focus:ring-2 focus:ring-amber-200/20 transition-all duration-300"
                />
                <button
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="px-6 py-3 bg-amber-200/90 hover:bg-amber-200 text-black font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Joining...' : 'Join'}
                </button>
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
        </Container>
      }
      titleClassName="text-h1 font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-8 hero-text"
      subtitleClassName="text-body-light text-lg md:text-xl lg:text-2xl text-neutral-200"
    />
  );
}