export interface Post {
  id: number;
  category: string;
  date: string;
  title: string;
  description: string;
  readTime: string;
  image: string;
  featured?: boolean;
}