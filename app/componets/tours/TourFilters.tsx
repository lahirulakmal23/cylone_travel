"use client";

interface Props {
  search: string;
  setSearch: (value: string) => void;
  duration: string;
  setDuration: (value: string) => void;
  minPrice: string;
  setMinPrice: (value: string) => void;
  maxPrice: string;
  setMaxPrice: (value: string) => void;
  destination: string;
  setDestination: (value: string) => void;
  activity: string;
  setActivity: (value: string) => void;
  onReset: () => void;
}

export default function TourFilters({
  search, setSearch,
  duration, setDuration,
  minPrice, setMinPrice,
  maxPrice, setMaxPrice,
  destination, setDestination,
  activity, setActivity,
  onReset,
}: Props) {
  return (
    <aside className="rounded-md bg-white p-6 border border-gray-200 h-fit sticky top-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Search Tours</h2>
        <button
          onClick={onReset}
          className="text-sm text-orange-500 hover:underline"
        >
          Reset all
        </button>
      </div>

      <div className="space-y-5">

        {/* Search */}
        <input
          type="text"
          placeholder="Search tours..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Duration */}
        <div>
          <span className="block text-sm font-bold mb-2">Duration</span>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option value="">All Durations</option>
            <option value="1 Day">1 Day Tour</option>
            <option value="3 Days">3 Days</option>
            <option value="5 Days">5 Days</option>
            <option value="7 Days">7 Days</option>
          </select>
        </div>

        {/* Price Range */}
        <div>
          <span className="block text-sm font-bold mb-2">Price Range</span>
          <div className="grid grid-cols-2 gap-3">
            <input
              type="number"
              placeholder="Min"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="rounded-lg border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="number"
              placeholder="Max"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="rounded-lg border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
        </div>

        {/* Destination */}
        <div>
          <span className="block text-sm font-bold mb-2">Destination</span>
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option value="">All Destinations</option>
            <option value="Beaches">Beaches</option>
            <option value="Mountains">Mountains</option>
            <option value="Desert">Desert</option>
          </select>
        </div>

        {/* Activity */}
        <div>
          <span className="block text-sm font-bold mb-2">Activities</span>
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option value="">All Activities</option>
            <option value="Adventure">Adventure</option>
            <option value="Safari">Safari</option>
            <option value="Hiking">Hiking</option>
          </select>
        </div>

        <button className="w-full rounded-lg bg-orange-500 px-4 py-3 text-white hover:bg-orange-600 font-bold text-lg transition-colors">
          Search
        </button>

      </div>
    </aside>
  );
}