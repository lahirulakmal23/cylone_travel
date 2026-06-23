export interface TourDetail {
  id: string;
  description: string;
  highlights: string[];
  itinerary?: string;
  inclusions?: string[];
  exclusions?: string[];
  faq?: { question: string; answer: string }[];
}

export const tourDetails: TourDetail[] = [
  {
    id: "1",
    description:
      "Explore Oahu's golden beaches, dramatic volcanic craters, and lush green valleys on this five-day adventure. From sunrise hikes to sunset surf sessions, this tour blends Hawaii's natural beauty with its laid-back island spirit.",
    highlights: [
      "Diamond Head Crater Hike",
      "Waikiki Beach Sunset",
      "North Shore Surf Towns",
    ],
    itinerary:
      "Day-by-day stops across Oahu's beaches, craters, and coastal towns will appear here.",
    inclusions: ["Hotel pickup and drop-off", "Professional tour guide", "Bottled water"],
    exclusions: ["International flights", "Travel insurance", "Personal expenses"],
    faq: [
      {
        question: "Is this tour suitable for beginners?",
        answer: "Yes, the pace is relaxed and suitable for most fitness levels.",
      },
    ],
  },
  {
    id: "2",
    description:
      "Journey across Africa's open plains in search of the continent's most iconic wildlife. Guided game drives, expert trackers, and golden-hour skies make this safari an unforgettable encounter with nature.",
    highlights: [
      "Big Five Game Drives",
      "Sunset Savanna Views",
      "Local Maasai Village Visit",
    ],
    itinerary:
      "Day-by-day game drives and camp stops across the safari route will appear here.",
    inclusions: ["4x4 safari vehicle", "Park entrance fees", "Experienced safari guide"],
    exclusions: ["International flights", "Visa fees", "Gratuities"],
    faq: [
      {
        question: "What should I pack for the safari?",
        answer: "Neutral-colored clothing, sunscreen, and a good camera are recommended.",
      },
    ],
  },
  {
    id: "3",
    description:
      "Immerse yourself in centuries-old traditions on this cultural heritage tour. Visit sacred temples, witness vibrant local ceremonies, and discover the stories woven into every street and shrine.",
    highlights: [
      "Historic Temple Visits",
      "Traditional Perahera Procession",
      "Local Artisan Workshops",
    ],
    itinerary:
      "Day-by-day temple and heritage site visits will appear here.",
    inclusions: ["Dedicated guide", "Entrance tickets", "Traditional lunch"],
    exclusions: ["International flights", "Personal shopping", "Tips"],
    faq: [
      {
        question: "Is modest dress required for temple visits?",
        answer: "Yes, shoulders and knees should be covered when visiting temples.",
      },
    ],
  },
];

export function getTourDetailById(id: string): TourDetail | undefined {
  return tourDetails.find((detail) => detail.id === id);
}