
import { Hero as LampHero } from "@/components/ui/hero";

export default function Hero() {
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
      actions={[
        {
          label: "Join the Waitlist",
          href: "#waitlist",
          variant: "default"
        }
      ]}
      titleClassName="text-h1 font-serif text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white mb-8 hero-text"
      subtitleClassName="text-body-light text-xl md:text-2xl lg:text-3xl text-neutral-200 max-w-3xl mx-auto"
      actionsClassName="pt-4"
    />
  );
}