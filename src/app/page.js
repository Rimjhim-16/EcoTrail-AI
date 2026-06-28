"use client";

import { useEffect, useState } from "react";
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
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
  const fetchDestinations = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/destinations");

      if (!response.ok) {
        throw new Error("Failed to fetch destinations");
      }

      const data = await response.json();
      setDestinations(data);
    } catch (error) {
      console.error("Error fetching destinations:", error);
    }
  };

  fetchDestinations();
}, []);

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <FeaturedDestinations destinations={destinations} />
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