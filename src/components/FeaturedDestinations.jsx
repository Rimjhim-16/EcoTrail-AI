import Card from "./Card";

export default function FeaturedDestinations() {
  return (
    <section data-aos="fade-up" className="py-20 px-8 bg-gray-100 dark:bg-gray-900">

      <h2 className="text-4xl font-bold text-center text-[#14532D] mb-4 dark:text-green-400">
        Explore Eco Experiences
      </h2>

      <p className="text-center text-gray-600 mb-12 dark:text-gray-300">
        Discover sustainable adventures curated by EcoTrail AI.
      </p>

      <div className="grid md:grid-cols-3 gap-8">

        <Card
          image="/images/destinations/homestay.jpg"
          title="Eco Homestays"
          description="Experience local culture with sustainable stays."
        />

        <Card
          image="/images/destinations/mountain.jpg"
          title="Mountain Trails"
          description="Discover hidden hiking and trekking routes."
        />

        <Card
          image="/images/destinations/camping.jpg"
          title="Camping Adventures"
          description="Adventure responsibly with eco-friendly camping."
        />

      </div>

    </section>
  );
}