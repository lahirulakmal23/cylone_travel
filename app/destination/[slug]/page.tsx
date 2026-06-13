import Image from "next/image";
import Link from "next/link";
import { destinations } from "../../data/detination";
import { notFound } from "next/navigation";
import { use } from "react";

type Props = {
  params: Promise<{ slug: string }>;
};

export default function DestinationDetailPage({ params }: Props) {
  const { slug } = use(params);
  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) return notFound();

  return (
    <main>

      {/* Hero — half-page image with overlay text */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Back button */}
        <div className="absolute top-6 left-6">
          <Link
            href="/destination"
           className="mt-4 self-start inline-flex items-center gap-1.5  border border-white/30 text-white text-sm font-sm px-4 py-1 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back
          </Link>
        </div>

        {/* Overlay text */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-16">
          <span className="inline-block bg-orange-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-3">
            {destination.label}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-[family-name:var(--font-playfair)]">
            {destination.title}
          </h1>
          <p className="mt-3 text-gray-200 text-base sm:text-lg max-w-2xl">
            {destination.description}
          </p>
        </div>
      </section>

      {/* Details */}
      <section className="bg-gray-50 py-12 px-4 sm:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">

          {/* Quick info bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
            <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Location</p>
              <p className="text-sm font-medium text-gray-800">{destination.details.location}</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Best Time</p>
              <p className="text-sm font-medium text-gray-800">{destination.details.bestTime}</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm col-span-2 sm:col-span-1">
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Duration</p>
              <p className="text-sm font-medium text-gray-800">{destination.details.duration}</p>
            </div>
          </div>

          {/* Overview */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-playfair)]">
              Overview
            </h2>
            <p className="text-gray-600 leading-relaxed text-base">
              {destination.details.overview}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-playfair)]">
              Highlights
            </h2>
            <ul className="space-y-3">
              {destination.details.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-600 text-sm leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

    </main>
  );
}