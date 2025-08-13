
import { useState } from 'react';
import { Hero as LampHero } from "@/components/ui/hero";

export default function Hero() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      className="min-h-screen bg-black"
      title={
        <>
          <span className="text-white">Fulton Market</span>{" "}
          <span className="text-amber-200 italic">Apartments for Rent</span>
        </>
      }
      subtitle="Find luxury apartments in Fulton Market, Chicago's premier West Loop neighborhood. Studios, 1BR, 2BR units available now."
      customActions={
        <div className="pt-8">
          {isSubmitted ? (
            <div className="text-center">
              <div className="text-green-400 text-xl mb-4">✓ Thank you for joining!</div>
              <p className="text-neutral-300">We'll be in touch soon with exclusive opportunities.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:border-amber-200/50 focus:outline-none focus:ring-2 focus:ring-amber-200/20"
                />
                <button
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="px-6 py-3 bg-amber-200/90 hover:bg-amber-200 text-black font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Joining...' : 'Join'}
                </button>
              </div>
            </form>
          )}
        </div>
      }
      titleClassName="text-h1 font-serif text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white mb-8 hero-text"
      subtitleClassName="text-body-light text-xl md:text-2xl lg:text-3xl text-neutral-200 max-w-3xl mx-auto"
    />
  );
}