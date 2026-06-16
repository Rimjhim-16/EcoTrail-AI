import Image from "next/image";

export default function Card({ image, title, description }) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-[0.5deg]">

      <div className="relative h-64 overflow-hidden">

        <Image
  src={image}
  alt={title}
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="object-cover group-hover:scale-110 transition-transform duration-700"
/>

      </div>

      <div className="p-6">

        <h3 className="text-2xl font-bold text-green-800">
          <span className="inline-block bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full mb-4 font-semibold">
            Eco Certified
          </span> <br />
          {title}
        </h3>

        <p className="mt-3 text-gray-600">
          {description}
        </p>

        <div className="mt-6 flex justify-between items-center">

  <span className="text-sm text-green-700 font-semibold">
    ⭐ 4.9 Rating
  </span>

  <button className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-full transition duration-300">
    Explore
  </button>

</div>

      </div>

    </div>
  );
}