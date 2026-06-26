"use client";

import Image from "next/image";
import { useState } from "react";
import { destinations, filters } from "../data/detination";
import Link from "next/link";

export default function DestinationCard() {
  const [active, setActive] = useState("all");

  const filtered = destinations.filter(
    (d) => active === "all" || d.categories.includes(active),
  );

  return (
    <section className="py-12 bg-gray-50">
      <div className="lg:mx-12 px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-orange-600 bg-orange-50 px-4 py-1.5 rounded-full mb-4">
            Where to go
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 font-[family-name:var(--font-playfair)]">
            Find your perfect destination
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            From misty hill country to sun-drenched shores — explore Sri Lanka's
            most unforgettable places, filtered by what moves you.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm border transition-all duration-200 ${
                active === f.key
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:text-gray-900"
              }`}
            >
              
              {f.label}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="text-center text-xs text-gray-400 mb-6">
          Showing {filtered.length} destination
          {filtered.length !== 1 ? "s" : ""}
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((destination) => (
            <div
              key={destination.id}
              className="group relative overflow-hidden rounded-md shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={destination.image}
                  alt={destination.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
                  <button className="inline-flex items-center self-start bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-medium mb-2">
                    {destination.label}
                  </button>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-[family-name:var(--font-playfair)]">
                    {destination.title}
                  </h3>
                  <p className="text-sm text-gray-200 mt-1 leading-relaxed">
                    {destination.description}
                  </p>
                  {/* Explore Button */}
                  <Link
                    href={`/destination/${destination.slug}`}
                    className="mt-4 self-start inline-flex items-center gap-1.5  border border-white/30 text-white text-sm font-sm px-4 py-1 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
                  >
                    Explore
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-400 mt-12 text-sm">
            No destinations found for this filter.
          </p>
        )}
      </div>
    </section>
  );
}
