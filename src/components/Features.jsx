import {
  FaRobot,
  FaLeaf,
  FaMapMarkedAlt,
} from "react-icons/fa";

export default function Features() {
  return (
    <section data-aos="fade-up" className="bg-gradient-to-b from-green-50 to-white py-20 dark:from-gray-900 dark:to-black">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-[#14532D] dark:text-green-400">
          Why Choose EcoTrail AI?
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-14 dark:text-gray-300">
          Experience intelligent, eco-conscious travel planning with AI.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-[#14532D] rounded-3xl p-8 shadow-xl hover:scale-105 transition duration-300 text-center">

            <FaRobot className="text-6xl text-green-600 mx-auto" />

            <h3 className="text-2xl font-bold mt-6 text-white">
              AI Trip Planner
            </h3>

            <p className="mt-4 text-green-100">
              Get personalized travel plans based on your interests,
              budget and travel style.
            </p>

          </div>

          <div className="bg-[#14532D] rounded-3xl p-8 shadow-xl hover:scale-105 transition duration-300 text-center">

            <FaLeaf className="text-6xl text-green-600 mx-auto" />

            <h3 className="text-2xl font-bold mt-6 text-white">
              Eco-Friendly Travel
            </h3>

            <p className="mt-4 text-green-100">
              Support local communities while reducing your environmental footprint.
            </p>

          </div>

          <div className="bg-[#14532D] rounded-3xl p-8 shadow-xl hover:scale-105 transition duration-300 text-center">

            <FaMapMarkedAlt className="text-6xl text-green-600 mx-auto" />

            <h3 className="text-2xl font-bold mt-6 text-white">
              Hidden Destinations
            </h3>

            <p className="mt-4 text-green-100">
              Discover unexplored places recommended by AI beyond popular tourist spots.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}