import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedDestinations from "../components/FeaturedDestinations";
import Impact from "../components/Impact";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <FeaturedDestinations />
        <Impact />
        <Features />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
      <ScrollTop/>
    </>
  );
}