export type Destination = {
  id: number;
  slug: string;
  title: string;
  description: string;
  label: string;
  image: string;
  categories: string[];
  details: {
    overview: string;
    highlights: string[];
    bestTime: string;
    location: string;
    duration: string;
  };
};

export type FilterOption = {
  key: string;
  label: string;
};

export const destinations: Destination[] = [
  {
    id: 1,
    slug: "sigiriya",
    title: "Sigiriya",
    label: "Ancient Wonders",
    description:
      "A 5th-century fortress city rising 200 m from the jungle — a UNESCO world wonder.",
    image: "/images/sigiriya.jpg",
    categories: ["ancient", "cultural"],
    details: {
      overview:
        "Sigiriya, also known as Lion Rock, is an ancient rock fortress located in the Matale District of Sri Lanka. Built by King Kashyapa in the 5th century, it stands 200 metres above the surrounding jungle and is one of the best-preserved examples of ancient urban planning in the world.",
      highlights: [
        "Climb the 1,200 steps to the summit for panoramic views",
        "Ancient frescoes of celestial maidens painted on the rock face",
        "The Mirror Wall with inscriptions dating back to the 8th century",
        "Symmetrical water gardens at the base — among the oldest landscaped gardens in the world",
        "Lion's Paw entrance — remnants of an enormous lion gateway",
      ],
      bestTime: "December to April",
      location: "Matale District, Central Province",
      duration: "Half day to full day",
    },
  },
  {
    id: 2,
    slug: "ella",
    title: "Ella",
    label: "Hill Country",
    description:
      "Nine Arch Bridge, Little Adam's Peak hikes, and slow train rides through tea mist.",
    image: "/images/nine-arch.jpg",
    categories: ["hill-country", "adventure", "food"],
    details: {
      overview:
        "Ella is a small town in the Badulla District nestled in the lush green hills of Sri Lanka's central highlands. Famous for its dramatic mountain scenery, cascading waterfalls, and the iconic Nine Arch Bridge, Ella has become a favourite stop on the classic Sri Lanka trail.",
      highlights: [
        "Nine Arch Bridge — a stunning colonial-era viaduct surrounded by tea bushes",
        "Little Adam's Peak — an easy sunrise hike with sweeping valley views",
        "Ella Rock trek through tea estates and jungle",
        "Rawana Falls, one of the widest waterfalls in Sri Lanka",
        "Scenic train journey from Kandy or Nuwara Eliya",
      ],
      bestTime: "January to April",
      location: "Badulla District, Uva Province",
      duration: "2 to 3 days",
    },
  },
  {
    id: 3,
    slug: "mirissa",
    title: "Mirissa",
    label: "Beaches",
    description:
      "Turquoise coves, whale watching at dawn, and beachside seafood at sunset.",
    image: "/images/beaches.jpeg",
    categories: ["beaches", "food"],
    details: {
      overview:
        "Mirissa is a small coastal town on the southern tip of Sri Lanka, renowned for its crescent-shaped beach, clear blue waters, and some of the best whale watching in the world. The laid-back fishing village atmosphere combined with excellent seafood makes it a perfect tropical escape.",
      highlights: [
        "Blue whale and sperm whale watching tours from November to April",
        "Parrot Rock — a small island connected by a sandbar at low tide",
        "Fresh seafood at beachfront restaurants",
        "Snorkelling and surfing in calm turquoise waters",
        "Stunning sunsets over the Indian Ocean",
      ],
      bestTime: "November to April",
      location: "Matara District, Southern Province",
      duration: "2 to 4 days",
    },
  },
  {
    id: 4,
    slug: "kandy",
    title: "Kandy",
    label: "Cultural Sites",
    description:
      "Temple of the Tooth, Esala Perahera festival, and Sri Lanka's last royal capital.",
    image: "/images/dalada_maligiwa.webp",
    categories: ["cultural", "food"],
    details: {
      overview:
        "Kandy is the cultural capital of Sri Lanka and the last royal capital of the ancient kings. Sitting at an elevation of 500 metres, the city is built around a picturesque lake and is home to the sacred Temple of the Tooth Relic — one of Buddhism's most venerated sites.",
      highlights: [
        "Temple of the Tooth Relic — Sri Lanka's most sacred Buddhist shrine",
        "Esala Perahera — a spectacular 10-day festival with elephants and fire dancers",
        "Kandy Lake walk and Royal Botanical Gardens in nearby Peradeniya",
        "Traditional Kandyan dance performances",
        "Vibrant local market and craft shops in the city centre",
      ],
      bestTime: "December to April",
      location: "Kandy District, Central Province",
      duration: "1 to 2 days",
    },
  },
  {
    id: 5,
    slug: "yala",
    title: "Yala National Park",
    label: "Wildlife",
    description:
      "Sri Lanka's premier safari — leopards, elephants, and crocodiles in dense scrub forest.",
    image: "/images/wildlife.jpg",
    categories: ["wildlife", "adventure"],
    details: {
      overview:
        "Yala National Park is Sri Lanka's most visited and second largest national park, covering over 979 square kilometres of scrub forest, grasslands, and lagoons. It has one of the highest leopard densities in the world, making it the best place on earth to spot these elusive big cats.",
      highlights: [
        "Highest leopard density in the world — sightings are common",
        "Large herds of Sri Lankan elephants gathering at waterholes",
        "Saltwater crocodiles, sloth bears, and over 200 bird species",
        "Early morning and evening jeep safaris for best wildlife sightings",
        "Stunning coastal scenery with lagoons and ancient ruins inside the park",
      ],
      bestTime: "February to July",
      location: "Southern and Uva Provinces",
      duration: "1 to 2 days",
    },
  },
  {
    id: 6,
    slug: "nuwara-eliya",
    title: "Nuwara Eliya",
    label: "Hill Country",
    description:
      "Colonial bungalows, strawberry farms, and endless tea estates in cool mist.",
    image: "/images/nuwara-eliya-3.jpg",
    categories: ["hill-country", "food"],
    details: {
      overview:
        "Nuwara Eliya, often called 'Little England', sits at 1,868 metres above sea level in the heart of Sri Lanka's tea country. The town retains much of its British colonial character with Tudor-style bungalows, manicured gardens, and a cool misty climate year-round.",
      highlights: [
        "Visit a working tea factory and learn how Ceylon tea is made",
        "Gregory Lake boat rides surrounded by misty mountains",
        "Horton Plains National Park and World's End — a dramatic 880 m cliff drop",
        "Strawberry farms and fresh produce markets",
        "Victoria Park — a beautiful colonial-era botanical garden",
      ],
      bestTime: "March to May",
      location: "Nuwara Eliya District, Central Province",
      duration: "1 to 2 days",
    },
  },
];

export const filters: FilterOption[] = [
  { key: "all", label: "All" },
  { key: "beaches", label: "Beaches" },
  { key: "wildlife", label: "Wildlife" },
  { key: "hill-country", label: "Hill Country" },
  { key: "cultural", label: "Cultural Sites" },
  { key: "ancient", label: "Ancient Wonders" },
  { key: "food", label: "Food & Cuisine" },
  { key: "adventure", label: "Adventure" },
];
