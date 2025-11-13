"use client";
import { useEffect, useState } from "react";
import { products } from "../partial-components/posts";

export default function Products() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const incomingData = await products();
      setAllProducts(incomingData.data);
    };
    fetchProducts();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Posts</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {allProducts.map((product) => {
          const { id, title, body } = product;
          return (
            <div
              key={id}
              className="max-w-md w-full bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 p-5"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
