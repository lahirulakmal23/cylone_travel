"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/images/slide7.jpg",
    alt: "Sri Lanka Landscape",
  },
  {
    src: "/images/slider2.jpg",
    alt: "Sri Lanka Beach",
  },
  {
    src: "/images/slider3.jpg",
    alt: "Sri Lanka Temple",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 700);
    },
    [isAnimating]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            className="object-cover brightness-[0.55]"
            sizes="100vw"
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/30 via-transparent to-black/70 pointer-events-none" />

      {/* Centered Hero Content */}
      <div className="relative z-30 flex flex-col items-center justify-center mt-20  text-center px-4 sm:px-6 lg:px-8 ">
        {/* Eyebrow label */}
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white/80 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase  ">
          Welcome to the Pearl of the Indian Ocean
        </span>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight drop-shadow-2xl mb-4 font-[family-name:var(--font-playfair)]">
          Discover the Pearl of the <br/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
           Indian Ocean 
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-2 text-base sm:text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
          Your ultimate travel guide to the wonders, culture, and breathtaking
          landscapes of Sri Lanka.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
          <button className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white font-semibold text-sm sm:text-base tracking-wide shadow-lg hover:shadow-orange-500/40 hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              <svg
                className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
                />
              </svg>
              Explore Now
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>

          <button className="group px-8 py-3 rounded-full border-2 border-white/60 bg-white/10 backdrop-blur-sm text-white font-semibold text-sm sm:text-base tracking-wide hover:bg-white hover:text-gray-900 hover:border-white hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2">
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            Plan Your Tour
          </button>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2.5 items-center">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-500 rounded-full ${
              i === current
                ? "w-8 h-2.5 bg-amber-400"
                : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={() => goTo((current - 1 + slides.length) % slides.length)}
        aria-label="Previous slide"
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/30 border border-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/50 hover:scale-110 transition-all duration-200"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={() => goTo((current + 1) % slides.length)}
        aria-label="Next slide"
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/30 border border-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/50 hover:scale-110 transition-all duration-200"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </section>
  );
};

export default Hero;