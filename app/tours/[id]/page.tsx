"use client";

import { useState, FormEvent } from "react";
import { useParams } from "next/navigation";
import { tours } from "../../data/tourData";
import { getTourDetailById } from "../../data/tourDetails";
import Navbar from "../../componets/Navbar";

type TabId = "overview" | "itinerary" | "inclusion" | "faq";

const TABS: { id: TabId; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "itinerary", label: "Itinerary" },
  { id: "inclusion", label: "Inclusion & Exclusion" },
  { id: "faq", label: "FAQ" },
];

interface BookingFormValues {
  firstName: string;
  lastName: string;
  email: string;
  pickupLocation: string;
  country: string;
  totalPax: string;
  adults: string;
  childUnder5: string;
  child6to11: string;
  rooms: string;
  arrivalDate: string;
}

const INITIAL_BOOKING_VALUES: BookingFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  pickupLocation: "",
  country: "",
  totalPax: "",
  adults: "",
  childUnder5: "",
  child6to11: "",
  rooms: "",
  arrivalDate: "",
};

interface FieldConfig {
  id: keyof BookingFormValues;
  label: string;
  type?: "text" | "email" | "number" | "date";
  placeholder?: string;
}

const BOOKING_FIELD_ROWS: FieldConfig[][] = [
  [
    { id: "firstName", label: "First Name", placeholder: "Enter your first name" },
    { id: "lastName", label: "Last Name", placeholder: "Enter your last name" },
  ],
  [
    {
      id: "email",
      label: "Email Address",
      type: "email",
      placeholder: "Enter your email address",
    },
  ],
  [
    {
      id: "pickupLocation",
      label: "Pickup Location",
      placeholder: "Enter pickup location",
    },
  ],
  [
    { id: "country", label: "Country", placeholder: "Enter your country" },
    {
      id: "totalPax",
      label: "Total No of Pax",
      type: "number",
      placeholder: "Enter total passenger",
    },
  ],
  [
    { id: "adults", label: "Adults", type: "number", placeholder: "Adults" },
    { id: "childUnder5", label: "Child (00-05)", type: "number", placeholder: "00-05" },
    { id: "child6to11", label: "Child (06-11)", type: "number", placeholder: "06-11" },
  ],
  [
    {
      id: "rooms",
      label: "No of Rooms",
      type: "number",
      placeholder: "Enter number of rooms",
    },
    { id: "arrivalDate", label: "Arrival Date", type: "date" },
  ],
];

const GRID_COLUMNS_BY_FIELD_COUNT: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
};

function validateBookingForm(values: BookingFormValues) {
  const errors: Partial<Record<keyof BookingFormValues, string>> = {};
  const required: Array<[keyof BookingFormValues, string]> = [
    ["firstName", "First name"],
    ["lastName", "Last name"],
    ["email", "Email address"],
    ["pickupLocation", "Pickup location"],
    ["country", "Country"],
    ["adults", "Number of adults"],
    ["arrivalDate", "Arrival date"],
  ];

  for (const [field, label] of required) {
    if (!values[field].trim()) {
      errors[field] = `${label} is required.`;
    }
  }

  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (values.adults && Number(values.adults) < 1) {
    errors.adults = "At least one adult is required.";
  }

  return errors;
}

export default function TourDetailPage() {
  const params = useParams<{ id: string }>();
  const tour = tours.find((t) => t.id === params.id);
  const detail = getTourDetailById(params.id);

  const [activeTab, setActiveTab] = useState<TabId>("overview");
  const [values, setValues] = useState<BookingFormValues>(INITIAL_BOOKING_VALUES);
  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormValues, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  console.log("params:", params);
  console.log("params.id:", params.id, typeof params.id);
  console.log("tours ids:", tours.map((t) => t.id));


  if (!tour) {
    return (
      <>
        <Navbar />
        <main className="flex min-h-screen items-center justify-center bg-stone-50">
          <p className="text-stone-600">Tour not found.</p>
        </main>
      </>
    );
  }

  function handleFieldChange(field: keyof BookingFormValues) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues((previous) => ({ ...previous, [field]: event.target.value }));
    };
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validateBookingForm(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    // No backend wired up yet — replace with a POST to an API route
    // (e.g. /api/bookings) once one exists.
    setSubmitted(true);
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-stone-50">
      {/* Half-height hero */}
      <div className="relative h-[230px] w-full overflow-hidden sm:h-[260px] md:h-[300px]">
        <img
          src={tour.image}
          alt={tour.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative mx-auto flex h-full max-w-7xl flex-col items-start justify-end px-4 pb-6 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-lime-300">
            {tour.destination} · {tour.activity}
          </p>
          <h1 className="mt-2 max-w-2xl text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            {tour.title}
          </h1>
          <p className="mt-2 max-w-xl text-sm text-stone-200 sm:text-base">
            {tour.duration} &middot; {tour.location}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_420px]">
          {/* Left column: tabs + tab content */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl bg-stone-100 p-2">
              <nav
                role="tablist"
                aria-label="Tour information sections"
                className="flex flex-wrap gap-2"
              >
                {TABS.map((tab) => {
                  const isActive = tab.id === activeTab;
                  return (
                    <button
                      key={tab.id}
                      role="tab"
                      type="button"
                      aria-selected={isActive}
                      onClick={() => setActiveTab(tab.id)}
                      className={[
                        "rounded-xl px-5 py-3 text-sm font-bold uppercase tracking-wide transition-colors",
                        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600",
                        isActive
                          ? "bg-lime-600 text-white shadow-sm"
                          : "bg-transparent text-stone-500 hover:text-stone-700",
                      ].join(" ")}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </nav>
            </div>

            <div role="tabpanel" id={`${activeTab}-panel`}>
              {activeTab === "overview" && (
                <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                  <section aria-labelledby="description-heading">
                    <h2 id="description-heading" className="text-xl font-bold text-stone-900">
                      Description
                    </h2>
                    <p className="mt-4 text-base leading-7 text-stone-600">
                      {detail?.description ?? tour.description}
                    </p>
                  </section>

                  <div className="mt-6 flex flex-wrap gap-4 text-sm text-stone-600">
                    <span className="rounded-full bg-stone-100 px-4 py-2 font-medium">
                      ⭐ {tour.rating} ({tour.reviews} reviews)
                    </span>
                    <span className="rounded-full bg-stone-100 px-4 py-2 font-medium">
                      From ${tour.price}
                    </span>
                  </div>

                  {detail?.highlights && (
                    <>
                      <hr className="my-8 border-stone-200" />
                      <section aria-labelledby="highlights-heading">
                        <h2
                          id="highlights-heading"
                          className="text-xl font-bold text-stone-900"
                        >
                          Highlights
                        </h2>
                        <ul className="mt-4 space-y-3">
                          {detail.highlights.map((highlight) => (
                            <li key={highlight} className="flex items-center gap-3">
                              <span
                                className="flex h-5 w-5 flex-none items-center justify-center text-lime-600"
                                aria-hidden="true"
                              >
                                ✓
                              </span>
                              <span className="text-base font-medium text-stone-800">
                                {highlight}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </section>
                    </>
                  )}
                </div>
              )}

              {activeTab === "itinerary" && (
                <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                  <h2 className="text-xl font-bold text-stone-900">Itinerary</h2>
                  <p className="mt-4 text-base leading-7 text-stone-500">
                    {detail?.itinerary ?? "Itinerary details will appear here."}
                  </p>
                </div>
              )}

              {activeTab === "inclusion" && (
                <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                  <h2 className="text-xl font-bold text-stone-900">Inclusion & Exclusion</h2>
                  <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <h3 className="text-sm font-bold uppercase text-lime-700">Included</h3>
                      <ul className="mt-3 space-y-2">
                        {(detail?.inclusions ?? []).map((item) => (
                          <li key={item} className="text-sm text-stone-600">
                            + {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold uppercase text-red-600">Excluded</h3>
                      <ul className="mt-3 space-y-2">
                        {(detail?.exclusions ?? []).map((item) => (
                          <li key={item} className="text-sm text-stone-600">
                            − {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "faq" && (
                <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                  <h2 className="text-xl font-bold text-stone-900">FAQ</h2>
                  <div className="mt-4 space-y-4">
                    {(detail?.faq ?? []).map((item) => (
                      <div key={item.question}>
                        <p className="font-semibold text-stone-800">{item.question}</p>
                        <p className="mt-1 text-sm text-stone-600">{item.answer}</p>
                      </div>
                    ))}
                    {!detail?.faq?.length && (
                      <p className="text-base text-stone-500">
                        Common questions about this tour will appear here.
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right column: booking form */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold text-stone-900">Book This Tour</h2>
              <hr className="mt-4 mb-6 border-stone-200" />

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {BOOKING_FIELD_ROWS.map((row) => (
                  <div
                    key={row.map((field) => field.id).join("-")}
                    className={`grid gap-4 ${
                      GRID_COLUMNS_BY_FIELD_COUNT[row.length] ?? "grid-cols-1"
                    }`}
                  >
                    {row.map((field) => {
                      const errorId = `${field.id}-error`;
                      const fieldError = errors[field.id];

                      return (
                        <div key={field.id} className="flex flex-col gap-2">
                          <label htmlFor={field.id} className="text-sm font-bold text-stone-800">
                            {field.label}
                          </label>
                          <input
                            id={field.id}
                            name={field.id}
                            type={field.type ?? "text"}
                            placeholder={field.placeholder}
                            min={field.type === "number" ? 0 : undefined}
                            value={values[field.id]}
                            onChange={handleFieldChange(field.id)}
                            aria-invalid={Boolean(fieldError)}
                            aria-describedby={fieldError ? errorId : undefined}
                            className={[
                              "w-full rounded-lg bg-stone-100 px-4 py-3 text-sm text-stone-700 placeholder:text-stone-400 outline-none ring-1 transition-shadow focus:bg-white focus:ring-2",
                              fieldError
                                ? "ring-red-400 focus:ring-red-500"
                                : "ring-transparent focus:ring-lime-600",
                            ].join(" ")}
                          />
                          {fieldError && (
                            <p id={errorId} role="alert" className="text-xs font-medium text-red-600">
                              {fieldError}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}

                <button
                  type="submit"
                  className="w-full rounded-lg bg-lime-600 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-lime-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700"
                >
                  Submit Booking Request
                </button>

                {submitted && (
                  <p role="status" className="text-center text-sm font-medium text-lime-700">
                    Booking request received. We&apos;ll be in touch shortly.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      </main>
    </>
  );
}