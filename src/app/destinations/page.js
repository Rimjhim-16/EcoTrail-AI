import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Destinations() {
  return (
    <>
      <Navbar />

      <main className="p-10 text-center">

        <h1 className="text-5xl font-bold text-green-700">
          <br/>Destinations
        </h1>

        <p className="mt-6">
          Explore eco-tourism destinations recommended by EcoTrail AI.
        </p>

      </main>

      <Footer />
    </>
  );
}