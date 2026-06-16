import Image from "next/image";

export default function Hero() {
  return (
    <section data-aos="fade-up" className="relative h-screen pt-20">

      <Image
        src="/images/hero/hero.jpg"
        alt="Eco Tourism"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/45"></div>

      <div className="relative z-10 flex items-center justify-center h-full">

        <div className="text-center text-white max-w-4xl px-6">

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">

            Discover Nature
            <br />
            with EcoTrail AI

          </h1>

          <p className="mt-8 text-lg md:text-2xl text-gray-200">

            AI-powered eco tourism platform helping you discover
            sustainable homestays, hidden destinations,
            nature trails and authentic local experiences.

          </p>

          <div className="mt-10 flex justify-center gap-5">

            <button className="bg-green-600 hover:bg-green-700 transition-all duration-300 hover:scale-105 px-8 py-4 rounded-full font-semibold shadow-xl">

              Explore Destinations

            </button>

            <button className="border-2 border-white hover:bg-white hover:text-green-800 transition-all duration-300 hover:scale-105 px-8 py-4 rounded-full font-semibold">

              Learn More

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}