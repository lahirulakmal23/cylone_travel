"use client";

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

export default function TourFilters({
  search,
  setSearch,
}: Props) {
  return (
    <aside className="rounded-md  bg-white p-6 border  border-gray-200">
      <h2 className="mb-6 text-xl font-bold">
        Search Tours
      </h2>

      <div className="space-y-6">
        <input
          type="text"
          placeholder="Search tours..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="block  text-md font-bold ">
            Duration
        </span>

        <select className="w-full rounded-lg border border-gray-300 p-3">
         
          <option>1 Day Tour</option>
          <option>3 Days</option>
          <option>5 Days</option>
          <option>7 Days</option>
        </select>

        <div className="grid grid-cols-2 gap-3">
             <span className="block  text-md font-bold ">
          Min price
        </span>
         <span className="block  text-md font-bold ">
          Max price
        </span>
          <input
            type="number"
            placeholder="Min"
            className="rounded-lg border border-gray-300 p-3"
          />

          <input
            type="number"
            placeholder="Max"
            className="rounded-lg border border-gray-300 p-3"
          />
        </div>
          <span className="block  text-md font-bold ">
          Destination
        </span>

        <select className="w-full rounded-lg border border-gray-300 p-3">
        
          <option>Beaches</option>
          <option>Mountains</option>
          <option>Desert</option>
        </select>
        <span className="block  text-md font-bold ">
          Activities
        </span>
        <select className="w-full rounded-lg border border-gray-300 p-3">
          <option>Adventure</option>
          <option>Safari</option>
          <option>Hiking</option>
        </select>

        <button className="w-full rounded-lg bg-[#FF6F43] px-4 py-3 text-white hover:bg-orange-600 font-bold text-lg">
          Search
        </button>
      </div>
    </aside>
  );
}