import "./globals.css";
import { Poppins } from "next/font/google";
import AOSInit from "../components/AOSInit";
import { ThemeProvider } from "@/context/ThemeContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "EcoTrail AI",
  description: "AI-powered sustainable tourism platform",
};

export default function RootLayout({ children }) {
  return (
    <html
  lang="en"
  data-scroll-behavior="smooth"
>
      <body className={`${poppins.className} bg-white text-gray-800 dark:bg-gray-900 dark:text-white`}>

    <ThemeProvider>
<AOSInit />
        {children}

    </ThemeProvider>

    </body>
    </html>
  );
}