"use client";

export default function Home() {
  const products = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `Product ${i + 1}`,
    price: (Math.random() * 100 + 10).toFixed(2),
    desc: "This is a short description of the product.",
    image: `https://picsum.photos/seed/product${i}/300/200`,
  }));

  return (
    <main className="min-h-screen p-8 sm:p-12 bg-gray-50 font-sans">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-600">
        Product Catalog
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col items-center"
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800">{p.title}</h2>
            <p className="text-gray-500 text-sm mt-1">{p.desc}</p>
            <p className="text-indigo-600 font-bold mt-3">${p.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
