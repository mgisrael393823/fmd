import { Section, Container, Typography, BackgroundImage } from '@/components/design-system';

export default function Invitation() {
  return (
    <Section 
      fullHeight 
      padding="xl"
      className="flex items-center"
    >
      <BackgroundImage
        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2400&auto=format&fit=crop"
        alt="Elegant modern living space with premium finishes"
        overlayOpacity={70}
        className="absolute inset-0"
      />
      
      <Container size="lg">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <Typography
            variant="h2"
            family="serif"
            weight="light"
            align="center"
            balance
            className="text-shadow-luxury"
          >
            No listings, no noise.
          </Typography>
          
          {/* Decorative line */}
          <div className="w-32 h-px bg-amber-200/60 mx-auto" />
          
          <Typography
            variant="body-lg"
            color="secondary"
            weight="light"
            align="center"
            className="max-w-3xl mx-auto"
          >
            A curated rental experience built for those who value{" "}
            <span className="italic text-amber-200/90">quality over quantity.</span>
          </Typography>
        </div>
      </Container>
    </Section>
  );
}
