"use client";

import Image from "next/image";
import Link from "next/link";

import { destinations } from "../data/detination";

const ExploreDestinations = () => {
  return (
    <section className="py-16 sm:py-20 bg-white ">
      <div className="lg:mx-12   px-4 sm:px-6 lg:px-8  ">

        {/* HEADER */}
        <div className="relative mb-10 md:mb-14 items-center text-center ">

          {/* Title + Subtitle */}
          <div className="text-center md:text-left items-center ">
            <p className="text-[#007A78] font-semibold tracking-wide uppercase text-sm mb-3 ">
              Explore Sri Lanka
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A2B49] leading-tight font-[family-name:var(--font-playfair)]">
              Explore Top Destinations
            </h2>

            <p className="mt-4 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto md:mx-0 font-[family-name:var(--font-inter)]">
              Discover the most beautiful places in Sri Lanka — from golden
              beaches to misty mountains and ancient wonders.
            </p>
          </div>

          {/* Desktop View All */}
          <div className="hidden md:block absolute right-0 top-6">
            <Link
              href="/destination"
              className="inline-flex items-center gap-2 text-[#007A78] font-semibold hover:gap-3 transition-all duration-300"
            >
              View all destinations
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6">

          {destinations.map((destination: Destination) => (
            <div
              key={destination.id}
              className="group relative overflow-hidden rounded-md shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            >

              {/* IMAGE CONTAINER */}
              <div className="relative aspect-[4/4] sm:aspect-[4/2] lg:aspect-[16/12]">

                <Image
                  src={destination.image}
                  alt={destination.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent " />

                {/* CONTENT */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 ">

                     {/* Explore Button */}
                  <div className="mt-5">
                    <button className="inline-flex items-center  bg-orange-500 backdrop-blur-md text-white px-4 py-0.9 rounded-full text-sm font-medium border border-white/20 hover:bg-white hover:text-[#1A2B49] transition-all duration-300">
                      {destination.label}
                      
                    </button>
                  </div>

                  <div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-2  font-[family-name:var(--font-playfair)]">
                    {destination.title}
                  </h3>
                    </div>
                    
                <div>
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                    {destination.description}
                  </p>
                </div>
                 
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE VIEW ALL */}
        <div className="flex justify-center mt-10 md:hidden">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-[#007A78] font-semibold hover:gap-3 transition-all duration-300"
          >
            View all destinations
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExploreDestinations;