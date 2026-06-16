"use client";

import Link from "next/link";
import { FaLeaf } from "react-icons/fa";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#14532D]/90 backdrop-blur-md shadow-lg">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-2.5">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">

          <FaLeaf className="text-green-300 text-2xl" />

          <div>

            <h1 className="text-white font-bold text-xl">
              EcoTrail AI
            </h1>

            <p className="text-green-200 text-[10px] tracking-widest">
              DISCOVER • EXPLORE • SUSTAIN
            </p>

          </div>

        </Link>

        {/* Desktop Menu */}

        <ul className="hidden md:flex gap-8 text-white font-medium">

          <li>
            <Link
              href="/"
              className="hover:text-green-300 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="hover:text-green-300 transition"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/destinations"
              className="hover:text-green-300 transition"
            >
              Destinations
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="hover:text-green-300 transition"
            >
              Contact
            </Link>
          </li>

        </ul>

        {/* Login Button */}

        <div className="hidden md:block">

          <Link
            href="/login"
            className="bg-green-500 hover:bg-green-400 transition px-6 py-2 rounded-full font-semibold text-white shadow-lg"
          >
            Login
          </Link>

        </div>

        {/* Mobile Button */}

        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiXMark /> : <HiBars3 />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="md:hidden bg-[#14532D] text-white">

          <ul className="flex flex-col items-center gap-6 py-6">

            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>

            <li>
              <Link href="/destinations" onClick={() => setMenuOpen(false)}>
                Destinations
              </Link>
            </li>

            <li>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>

            <li>

              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="bg-green-500 px-6 py-2 rounded-full"
              >
                Login
              </Link>

            </li>

          </ul>

        </div>

      )}

    </nav>
  );
}