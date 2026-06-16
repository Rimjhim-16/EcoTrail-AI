import Image from "next/image";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Travel Blogger",
    image: "/images/testimonials/person1.jpg",
    review:
      "EcoTrail AI helped me discover hidden eco-friendly destinations I never knew existed. A fantastic experience!",
  },
  {
    name: "Rahul Mehta",
    role: "Adventure Traveler",
    image: "/images/testimonials/person2.jpg",
    review:
      "The AI recommendations were spot on. Planning my trek became effortless and enjoyable.",
  },
  {
    name: "Freddy Johnson",
    role: "Photographer",
    image: "/images/testimonials/person3.jpg",
    review:
      "Beautiful destinations and sustainable stays. This platform is perfect for nature lovers.",
  },
];

export default function Testimonials() {
  return (
    <section data-aos="fade-up" className="py-24 bg-gray-100">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center text-green-800">
          What Our Travelers Say
        </h2>

        <p className="text-center text-gray-500 mt-4 mb-14">
          Trusted by eco-conscious travelers across the world.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((person, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition duration-300"
            >

              <div className="flex items-center gap-4">

                <Image
                  src={person.image}
                  alt={person.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full object-cover"
                />

                <div>

                  <h3 className="font-bold text-xl text-green-900">
                    {person.name}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {person.role}
                  </p>

                </div>

              </div>

              <p className="mt-6 text-gray-600 italic">
                "{person.review}"
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}