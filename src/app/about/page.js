import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="p-10 text-center">
        <h1 className="text-5xl font-bold text-green-700">
          <br/>About EcoTrail AI
        </h1>

        <p className="mt-6 text-lg">
          EcoTrail AI promotes sustainable tourism by helping travelers discover
          eco-friendly destinations and local homestays.
        </p>
      </main>

      <Footer />
    </>
  );
}