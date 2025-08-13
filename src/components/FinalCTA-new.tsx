import { useState } from 'react';
import { Section, Container, Typography, Button, FormField, Input, Textarea, BackgroundImage } from '@/components/design-system';

export default function FinalCTA() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Handle form submission
    try {
      console.log('Form submitted:', { email, message });
      // Add your form submission logic here
      
      // Reset form on success
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    'No listing page',
    'By reservation', 
    'Curated collection'
  ];

  return (
    <Section 
      padding="xl"
      className="overflow-hidden"
    >
      <BackgroundImage
        src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2670&auto=format&fit=crop"
        alt="Luxury apartment living room with floor-to-ceiling windows"
        overlayOpacity={70}
        grain
        className="absolute inset-0 opacity-30"
      />
      
      <Container size="lg" className="text-center">
        <Typography
          variant="h2"
          family="serif"
          weight="light"
          align="center"
          className="mb-8"
        >
          Discover Fulton Market's{" "}
          <span className="italic text-amber-200/90">Finest Rentals</span>
        </Typography>
        
        <Typography
          variant="body-lg"
          color="secondary"
          weight="light"
          align="center"
          className="mb-12 max-w-2xl mx-auto"
        >
          Join our network to access premium rental opportunities and personalized service.
        </Typography>
        
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
          <FormField required>
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              variant="glass"
              size="lg"
              aria-label="Email address"
            />
          </FormField>
          
          <FormField>
            <Textarea
              placeholder="Tell us about your ideal home (optional)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              variant="glass"
              size="lg"
              aria-label="Tell us about your ideal home"
            />
          </FormField>
          
          <Button 
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            loading={isSubmitting}
            disabled={!email}
          >
            {isSubmitting ? 'Submitting...' : 'Get Early Access'}
          </Button>
        </form>
        
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-neutral-400">
          {features.map((feature, index) => (
            <span key={index} className="flex items-center">
              <div className="w-2 h-2 bg-amber-400/60 rounded-full mr-2" />
              {feature}
            </span>
          ))}
        </div>
      </Container>
    </Section>
  );
}
