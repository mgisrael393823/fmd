import { Section, Container, Typography, Accordion } from '@/components/design-system';

export default function FAQ() {
  const faqs = [
    {
      id: 'early-access',
      question: 'How does early access work?',
      answer: 'Register to receive priority notifications about new rental listings before they\'re posted on other platforms. All qualified applicants welcome.'
    },
    {
      id: 'special-apartments',
      question: 'What makes these apartments special?',
      answer: 'Every property is hand-selected for exceptional design, prime Fulton Market location, and premium amenities. We focus on quality over quantity.'
    },
    {
      id: 'service-included',
      question: 'What\'s included with your service?',
      answer: 'Personalized property matching, private showings, market insights, application assistance, and ongoing resident support.'
    },
    {
      id: 'service-cost',
      question: 'How much does this service cost?',
      answer: 'Our service is completely free for renters. Property owners pay us to find qualified tenants for their premium units.'
    }
  ];

  return (
    <Section 
      padding="xl"
      background="neutral"
    >
      <Container size="lg">
        <Typography
          variant="h2"
          family="serif"
          weight="light"
          align="center"
          className="mb-16"
        >
          Questions & Details
        </Typography>
        
        <Accordion
          items={faqs}
          variant="luxury"
          spacing="lg"
          className="max-w-4xl mx-auto"
        />
      </Container>
    </Section>
  );
}
