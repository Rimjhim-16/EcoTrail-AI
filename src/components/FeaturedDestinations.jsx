import Card from "./Card";

export default function FeaturedDestinations({ destinations }) {
  return (
    <section
      data-aos="fade-up"
      className="py-20 px-8 bg-gray-100 dark:bg-gray-900"
    >
      <h2 className="text-4xl font-bold text-center text-[#14532D] dark:text-green-400 mb-4">
        Explore Eco Experiences
      </h2>

      <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
        Discover sustainable adventures curated by EcoTrail AI.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {destinations.length > 0 ? (
          destinations.map((destination) => (
            <Card
              key={destination.id}
              image={destination.image}
              title={destination.name}
              description={destination.description}
            />
          ))
        ) : (
          <p className="text-center col-span-3">
            Loading destinations...
          </p>
        )}
      </div>
    </section>
  );
}