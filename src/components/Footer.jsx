import Link from "next/link";
import { FaLeaf, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-green-800 bg-[#062C16] text-white dark:bg-gray-950">

      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          <div>

            <div className="flex items-center gap-2">

              <FaLeaf className="text-green-300 text-2xl"/>

              <h2 className="font-bold text-2xl">
                EcoTrail AI
              </h2>

            </div>

            <p className="mt-5 text-green-100">

              AI-powered sustainable tourism platform helping travelers
              discover eco-friendly destinations.

            </p>

          </div>

          <div>

            <h3 className="font-semibold text-lg mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">

              <li><Link href="/">Home</Link></li>

              <li><Link href="/about">About</Link></li>

              <li><Link href="/destinations">Destinations</Link></li>

              <li><Link href="/contact">Contact</Link></li>

            </ul>

          </div>

          <div>

            <h3 className="font-semibold text-lg mb-4">
              Resources
            </h3>

            <ul className="space-y-2">

              <li>Privacy Policy</li>

              <li>Terms of Service</li>

              <li>Support</li>

            </ul>

          </div>

          <div>

            <h3 className="font-semibold text-lg mb-4">
              Connect
            </h3>

            <div className="flex gap-5 text-2xl">

              <FaGithub/>

              <FaLinkedin/>

              <FaInstagram/>

            </div>

          </div>

        </div>

        <hr className="my-8 border-green-700"/>

        <p className="text-center text-green-200">

          © 2026 EcoTrail AI. All Rights Reserved.

        </p>

      </div>

    </footer>
  );
}