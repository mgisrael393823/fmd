import { Section, Container, Typography, Button, BackgroundImage } from '@/components/design-system';

export default function Hero() {
  return (
    <Section 
      fullHeight 
      padding="none"
      as="main"
      className="flex items-center justify-center"
    >
      <BackgroundImage
        src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2564&auto=format&fit=crop"
        alt="Modern luxury apartment interior in Fulton Market"
        overlayOpacity={70}
        grain
        className="absolute inset-0"
      />
      
      <Container size="lg" className="text-center">
        <Typography
          variant="h1"
          family="serif"
          weight="light"
          align="center"
          balance
          className="mb-6 text-shadow-luxury"
        >
          The apartment marketplace{" "}
          <span className="italic text-amber-200/90">
            that finds you.
          </span>
        </Typography>
        
        <Typography
          variant="body-lg"
          color="secondary"
          weight="light"
          align="center"
          className="mb-12 max-w-2xl mx-auto"
        >
          A premium rental network connecting you to Fulton Market's most 
          sought-after addresses and hidden gems.
        </Typography>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            variant="primary"
            size="lg"
            className="min-w-48"
          >
            Get Early Access
          </Button>
          
          <Button 
            variant="glass"
            size="lg"
            className="min-w-48"
          >
            Learn More
          </Button>
        </div>
      </Container>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </Section>
  );
}
