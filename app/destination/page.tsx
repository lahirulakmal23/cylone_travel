"use client";

import Image from "next/image";
import Destinationcard from "../componets/DestinationCard";

export default function ToursPage() {
  return (
    <>
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
          <p className="mb-4 text-sm font-medium text-white/80">
            Home / Destination
          </p>

          <h1 className="text-4xl font-bold text-white md:text-6xl font-[family-name:var(--font-playfair)]">
            Destination
          </h1>

          <p className="mt-4 max-w-2xl text-sm text-gray-200 md:text-lg">
            Discover unforgettable destinations, cultural experiences,
            and adventures tailored for every traveler.
          </p>
        </div>
      </section>

      <Destinationcard />
    </>
  );
}