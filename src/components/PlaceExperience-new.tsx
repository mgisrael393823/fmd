import { Section, Container, Typography, BackgroundImage } from '@/components/design-system';

export default function PlaceExperience() {
  const highlights = [
    'Michelin-starred dining within reach',
    'Innovation hubs on your doorstep', 
    'Seamless connectivity—transit, bike, runway'
  ];

  return (
    <Section 
      fullHeight 
      padding="xl"
      className="flex items-center"
    >
      <BackgroundImage
        src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2670&auto=format&fit=crop"
        alt="Fulton Market district skyline showing modern architecture and urban development"
        overlayOpacity={50}
        className="absolute inset-0"
      />
      
      <Container size="xl">
        <div className="text-center mb-16">
          <Typography
            variant="h2"
            family="serif"
            weight="light"
            align="center"
            balance
            className="mb-8 text-shadow-luxury"
          >
            Located at the intersection of{" "}
            <span className="italic text-amber-200/90">grit and glass</span>: Fulton Market.
          </Typography>
          
          <Typography
            variant="body-lg"
            color="secondary"
            weight="light"
            align="center"
            className="max-w-3xl mx-auto"
          >
            Michelin cuisine, cultural ateliers, tech firms—these aren't amenities, 
            they're your surroundings.
          </Typography>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center">
              <div className="inline-block w-2 h-2 bg-amber-200/80 rounded-full mb-4" />
              <Typography
                variant="body"
                color="primary"
                weight="light"
                className="tracking-wide"
              >
                {highlight}
              </Typography>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
