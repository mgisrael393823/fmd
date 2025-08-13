import { Section, Container, Typography, FeatureGrid } from '@/components/design-system';

export default function Differentiators() {
  const features = [
    {
      title: 'Curation',
      description: 'Hand-selected homes anchored in design integrity.'
    },
    {
      title: 'Discreet Access',
      description: 'Off-market availability. Viewings by reservation only.'
    },
    {
      title: 'Service', 
      description: 'Effortless support—from move-in to maintenance, handled quietly.'
    }
  ];

  return (
    <Section 
      padding="2xl"
      background="black"
      className="bg-grain"
    >
      <Container size="xl">
        <div className="text-center mb-20">
          <Typography
            variant="h2"
            family="serif"
            weight="light"
            align="center"
            className="mb-8"
          >
            Why Fulton Market Apartments{" "}
            <span className="italic text-amber-200/90">Are Different</span>
          </Typography>
        </div>
        
        <FeatureGrid
          items={features}
          columns={3}
          variant="luxury"
          spacing="lg"
          hover={true}
        />
      </Container>
    </Section>
  );
}
