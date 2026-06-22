"use client";

import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {

  const { darkMode, toggleTheme } = useTheme();

  return (

    <button

      onClick={toggleTheme}

      className="px-4 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition"

    >

      {darkMode ? "☀️ Light" : "🌙 Dark"}

    </button>

  );

}