import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock3, Star } from "lucide-react";
import { Tour } from "../../data/tour";

interface Props {
  tour: Tour;
}

export default function TourCard({ tour }: Props) {
  return (
    <article className="group overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg ">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="mb-4 line-clamp-2 text-xl font-bold text-slate-900">
          {tour.title}
        </h3>

        <div className="mb-4 flex flex-wrap gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Clock3 size={16} />
            {tour.duration}
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={16} />
            {tour.location}
          </div>
        </div>

        <p className="mb-5 line-clamp-3 text-gray-600">
          {tour.description}
        </p>

        <div className="mb-2 flex items-center gap-2">
          <Star
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
          <span className="font-medium">{tour.rating}</span>

          <span className="text-gray-500">
            ({tour.reviews} reviews)
          </span>
        </div>

        <div className="mb-4 flex items-center justify-between pt-2">
          <span className="text-gray-500">From</span>

          <span className="text-xl font-bold text-orange-500">
            ${tour.price}
          </span>
        </div>

        <Link
          href={`/tours/${tour.id}`}
          className="block w-full rounded-md bg-lime-600 py-3 text-center text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-lime-700"
        >
          Book Tour
        </Link>
      </div>
    </article>
  );
}