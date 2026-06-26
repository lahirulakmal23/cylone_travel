"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "../../componets/Navbar";
import { BADGE, getPostById } from "../../data/postData";

export default function BlogDetailPage() {
  const params = useParams<{ id: string }>();
  const post = getPostById(Number(params.id));

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="flex min-h-screen items-center justify-center bg-gray-50">
          <p className="text-gray-600">Article not found.</p>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 font-sans">
        {/* Hero image */}
        <div className="relative h-[280px] w-full overflow-hidden sm:h-[360px] md:h-[420px]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative mx-auto flex h-full max-w-3xl flex-col items-start justify-end px-4 pb-8 sm:px-6">
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full ${
                BADGE[post.category] ?? "bg-gray-100 text-gray-600"
              }`}
            >
              {post.category}
            </span>
            <h1 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
              {post.title}
            </h1>
            <p className="mt-2 text-sm text-gray-200">
              {post.date} &middot; {post.readTime}
            </p>
          </div>
        </div>

        {/* Article body */}
        <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
          <p className="text-base leading-7 text-gray-700">{post.description}</p>

          {/* Placeholder body content — replace with full article content
              once each post has more than a short description. */}
          <p className="mt-6 text-base leading-7 text-gray-500">
            Full article content for this post will appear here.
          </p>

          <div className="mt-10 border-t border-gray-200 pt-6">
            <Link
              href="/blog"
              className="text-sm font-semibold text-teal-600 hover:text-teal-800 transition-colors"
            >
              ← Back to Travel Blog
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}