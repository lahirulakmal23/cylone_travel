export type GalleryItem = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Golden Beach",
    description: "Relax on Sri Lanka's stunning coastline.",
    category: "Beaches",
    image:
      "/images/beaches.jpeg",
  },
  {
    id: 2,
    title: "Tea Plantations",
    description: "Explore the green hills of Nuwara Eliya.",
    category: "Hill Country",
    image:
      "/images/nine-arch.jpg",
  },
  {
    id: 3,
    title: "Sri Lankan Leopard",
    description: "Wildlife encounters in Yala National Park.",
    category: "Wildlife",
    image:
      "/images/wildlife.jpg",
  },
  {
    id: 4,
    title: "Temple of the Tooth",
    description: "A sacred cultural landmark in Kandy.",
    category: "Cultural Sites",
    image:
      "/images/dalada_maligiwa.webp",
  },
  {
    id: 5,
    title: "Traditional Cuisine",
    description: "Taste authentic Sri Lankan dishes.",
    category: "Food & Cuisine",
    image:
      "/images/sigiriya.jpg",
  },
  {
    id: 6,
    title: "Elephant Safari",
    description: "Witness elephants in their natural habitat.",
    category: "Wildlife",
    image:
      "/images/yala-national-park.jpg",
  },
];