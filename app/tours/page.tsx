"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import TourCard from "../componets/tours/TourCard";
import TourFilters from "../componets/tours/TourFilters";
import { tours } from "../data/tourData";
import Nabvar from "../componets/Navbar";

export default function ToursPage() {
  const [search, setSearch] = useState("");

  const filteredTours = useMemo(() => {
    return tours.filter((tour) =>
      tour.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <>
      
      <Nabvar />
      <section className="relative h-[300px] md:h-[400px] overflow-hidden font-sans">
      
        <Image
          src="/images/slide7.jpg"
          alt="Tours Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <p className="mb-4 text-sm font-medium text-white/80">
            Home / Tours
          </p>

          <h1 className="text-4xl font-bold text-white md:text-6xl font-[family-name:var(--font-playfair)]">
            Search Tours
          </h1>

          <p className="mt-4 max-w-2xl text-sm text-gray-200 md:text-lg">
            Discover unforgettable destinations, cultural experiences,
            and adventures tailored for every traveler.
          </p>
        </div>
      </section>

      {/* ========================================
          TOURS SECTION
      ======================================== */}
      <section className=" py-12  mx-12 font-sans">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
            <TourFilters
              search={search}
              setSearch={setSearch}
            />

            <div>
              <h2 className="mb-8 text-xl font-bold text-slate-900">
                {filteredTours.length} Tours Found
              </h2>

              <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3">
                {filteredTours.map((tour) => (
                  <TourCard
                    key={tour.id}
                    tour={tour}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}