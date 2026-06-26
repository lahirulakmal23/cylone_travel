import { Post } from "./post";

export const FILTERS = ["All", "Food", "Culture", "Adventure", "Tips", "Beaches", "History"];

export const POSTS: Post[] = [
  {
    id: 1,
    category: "Featured",
    date: "April 25, 2025",
    title: "The Ultimate Guide to Train Travel in Sri Lanka's Hill Country",
    description:
      "Winding through mist-covered mountains and emerald tea estates, Sri Lanka's hill country train journey is considered one of the most scenic rail routes in the world. Here's everything you need to know.",
    readTime: "10 min read",
    image: "/images/slide7.jpg",
    featured: true,
  },
  {
    id: 2,
    category: "Beaches",
    date: "May 15, 2025",
    title: "10 Must-Visit Beaches in Sri Lanka",
    description:
      "Discover the most beautiful and serene beaches along Sri Lanka's stunning coastline.",
    readTime: "5 min read",
    image: "/images/beaches.webp",
  },
  {
    id: 3,
    category: "Food",
    date: "May 10, 2025",
    title: "A Guide to Sri Lankan Cuisine",
    description:
      "Explore the rich flavors and spices that make Sri Lankan food a culinary delight.",
    readTime: "7 min read",
    image: "/images/food.jpg",
  },
  {
    id: 4,
    category: "History",
    date: "May 3, 2025",
    title: "Exploring the Ancient City of Anuradhapura",
    description:
      "Step back in time and discover the historical wonders of Sri Lanka's first capital.",
    readTime: "8 min read",
    image: "/images/anuradhapura.jpg",
  },
  {
    id: 5,
    category: "Adventure",
    date: "April 18, 2025",
    title: "Hiking Adam's Peak: A Complete Guide",
    description:
      "Everything you need to know about climbing Sri Lanka's most sacred and spectacular mountain.",
    readTime: "6 min read",
    image: "/images/adventure.jpg",
  },
  {
    id: 6,
    category: "Culture",
    date: "April 10, 2025",
    title: "Kandy's Esala Perahera Festival",
    description:
      "Experience the grandeur of one of Asia's most magnificent cultural pageants held in the hill capital.",
    readTime: "5 min read",
    image: "/images/kandy.jpg",
  },
  {
    id: 7,
    category: "Tips",
    date: "March 28, 2025",
    title: "Best Time to Visit Sri Lanka",
    description:
      "A season-by-season breakdown to help you plan the perfect Sri Lankan getaway.",
    readTime: "4 min read",
    image: "/images/slide7.jpg",
  },
];

/** Tailwind badge classes per category, used on both the blog list and detail page. */
export const BADGE: Record<string, string> = {
  Featured: "bg-teal-100 text-teal-700",
  Beaches: "bg-amber-100 text-amber-700",
  Food: "bg-orange-100 text-orange-700",
  History: "bg-purple-100 text-purple-700",
  Adventure: "bg-green-100 text-green-700",
  Culture: "bg-rose-100 text-rose-700",
  Tips: "bg-sky-100 text-sky-700",
};

export function getPostById(id: number): Post | undefined {
  return POSTS.find((post) => post.id === id);
}