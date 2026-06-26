"use client";

import Image from "next/image";
import { useState } from "react";
import { galleryItems } from "../data/galleryData";
import Navbar from "../componets/Navbar";

const filters = [
  "All",
  "Beaches",
  "Wildlife",
  "Hill Country",
  "Cultural Sites",
  "Food & Cuisine",
];

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeFilter
        );

  return (
    <section className=" bg-gray-50">
    <Navbar />
      <div className="lg:mx-12 mt-10  px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-teal-700 ">
            Gallery
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Explore the visual beauty of Sri Lanka through our
            collection of high-quality images.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full border transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-[#FF6F43] text-white border-[#FF6F43]"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-md cursor-pointer"
            >
              <div className="relative aspect-[4/5]">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <h3 className="text-white text-xl font-bold  font-[family-name:var(--font-playfair)]">
                    {item.title}
                  </h3>

                  <p className="text-gray-200 text-sm mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}