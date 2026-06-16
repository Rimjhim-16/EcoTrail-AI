import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Login() {
  return (
    <>
      <Navbar />

      <main className="flex flex-col items-center justify-center p-20">

        <h1 className="text-4xl font-bold text-green-700">
          Login
        </h1>

        <input
          className="border p-3 mt-8 rounded-lg w-80"
          placeholder="Email"
        />

        <input
          type="password"
          className="border p-3 mt-4 rounded-lg w-80"
          placeholder="Password"
        />

        <button className="mt-6 bg-green-700 text-white px-8 py-3 rounded-lg">
          Login
        </button>

      </main>

      <Footer />
    </>
  );
}