"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import TourCard from "../componets/tours/TourCard";
import TourFilters from "../componets/tours/TourFilters";
import { tours } from "../data/tourData";
import Navbar from "../componets/Navbar";

export default function ToursPage() {
  const [search, setSearch] = useState("");
  const [duration, setDuration] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [destination, setDestination] = useState("");
  const [activity, setActivity] = useState("");

  const filteredTours = useMemo(() => {
    return tours.filter((tour) => {
      const matchSearch = tour.title.toLowerCase().includes(search.toLowerCase());
      const matchDuration = duration === "" || tour.duration === duration;
      const matchMin = minPrice === "" || tour.price >= Number(minPrice);
      const matchMax = maxPrice === "" || tour.price <= Number(maxPrice);
      const matchDestination = destination === "" || tour.destination === destination;
      const matchActivity = activity === "" || tour.activity === activity;

      return matchSearch && matchDuration && matchMin && matchMax && matchDestination && matchActivity;
    });
  }, [search, duration, minPrice, maxPrice, destination, activity]);

  function handleReset() {
    setSearch("");
    setDuration("");
    setMinPrice("");
    setMaxPrice("");
    setDestination("");
    setActivity("");
  }

  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden font-sans">
        <Image
          src="/images/slide7.jpg"
          alt="Tours Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <p className="mb-4 text-sm font-medium text-white/80">Home / Tours</p>
          <h1 className="text-4xl font-bold text-white md:text-6xl font-[family-name:var(--font-playfair)]">
            Search Tours
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-gray-200 md:text-lg">
            Discover unforgettable destinations, cultural experiences,
            and adventures tailored for every traveler.
          </p>
        </div>
      </section>

      {/* Tours Section */}
      <section className="py-12 lg:mx-12 font-sans">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[320px_1fr]">

            <TourFilters
              search={search} setSearch={setSearch}
              duration={duration} setDuration={setDuration}
              minPrice={minPrice} setMinPrice={setMinPrice}
              maxPrice={maxPrice} setMaxPrice={setMaxPrice}
              destination={destination} setDestination={setDestination}
              activity={activity} setActivity={setActivity}
              onReset={handleReset}
            />

            <div>
              <h2 className="mb-8 text-xl font-bold text-slate-900">
                {filteredTours.length} Tour{filteredTours.length !== 1 ? "s" : ""} Found
              </h2>

              {filteredTours.length === 0 ? (
                <p className="text-gray-400 text-sm mt-12 text-center">
                  No tours match your filters. Try resetting them.
                </p>
              ) : (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {filteredTours.map((tour) => (
                    <TourCard key={tour.id} tour={tour} />
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}