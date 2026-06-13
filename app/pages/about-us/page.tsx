import Image from "next/image";
import { Check } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-white">
      <div className=" lg:mx-12   px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <div>

            {/* Subheading */}
            <p className="uppercase tracking-[0.25em] text-green-500 text-sm font-medium mb-4">
              About Us
            </p>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-10 font-[family-name:var(--font-playfair)]">
              Discover. Experience. Cherish with L S L Adventure Travels &
              Tours
            </h2>

            {/* Image */}
            <div className=" rounded-lg overflow-hidden mb-10">
              <Image
                src="/images/about1.png"
                alt="About Sri Lanka"
                width={600}
                height={100}
                className=" shadow-xl"
              />
            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="space-y-8">

            <p className="text-lg text-gray-700 leading-relaxed">
             With over a decade of expertise in crafting exceptional Sri Lanka tours, L S L Adventure Travels & Tours is a trusted Sri Lanka travel agency dedicated to showcasing the island’s breathtaking landscapes, rich culture, and unforgettable experiences. From immersive cultural journeys and thrilling adventures to relaxing escapes, we offer carefully designed Sri Lanka tour packages tailored to suit every type of traveler from around the world.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
             We specialize in private tours in Sri Lanka, delivering fully personalized and custom tour packages to match your interests, schedule, and travel style. Our team of licensed, professional, and highly knowledgeable chauffeur guides ensures safe, comfortable, and insightful journeys—from airport transfers to island-wide tours. Having partnered with reputed international travel agents and earned excellent reviews on TripAdvisor, we take pride in delivering reliable service at competitive prices. Travel Sri Lanka with confidence and let us turn your journey into a truly memorable experience—where every destination tells a story and every moment feels extraordinary.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">

              <div className="flex items-center gap-3">
                <Check className="text-green-500 w-6 h-6" />
                <span className="font-medium ">
                  Local Expertise
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Check className="text-green-500 w-6 h-6" />
                <span className="font-medium">
                  Flexible Itinerary Options
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Check className="text-green-500 w-6 h-6" />
                <span className="font-medium">
                  Competitive Pricing
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Check className="text-green-500 w-6 h-6" />
                <span className="font-medium">
                  Award Winning Service
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}