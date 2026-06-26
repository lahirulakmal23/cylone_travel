"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../componets/Navbar";
import { BADGE, FILTERS, POSTS } from "../data/postData";

const BlogPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const featured = POSTS.find((p) => p.featured)!;
  const cards = POSTS.filter((p) => !p.featured);

  const filteredCards = cards.filter((p) => {
    const matchFilter = activeFilter === "All" || p.category === activeFilter;
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      {/* ── Header ───────────────────────────────────────────────────────── */}
      <Navbar />
      <section className="mx-16 px-6 pt-14 pb-8">
        <h1 className="text-5xl font-extrabold text-teal-800 tracking-tight mb-2 ">
          Travel Blog
        </h1>
        <p className="text-gray-500 text-lg mb-8">
          Stories, tips, and guides to enhance your Sri Lankan adventure.
        </p>

        {/* Search + Filters */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* Search */}
          <div className="relative w-full sm:w-72">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
            />
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeFilter === f
                    ? "bg-teal-500 text-white shadow-md shadow-teal-200"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-teal-400 hover:text-teal-600"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Post ────────────────────────────────────────────────── */}
      <section className="mx-16 px-6 mb-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-md overflow-hidden shadow-xl bg-white">
          {/* Left — Image */}
          <div className="relative h-72 sm:h-96 lg:h-full min-h-[380px]">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right — Content */}
          <div className="flex flex-col justify-center px-8 py-10 lg:px-12">
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full ${BADGE[featured.category]}`}
              >
                {featured.category}
              </span>
              <span className="text-sm text-gray-400">{featured.date}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug mb-4">
              {featured.title}
            </h2>

            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              {featured.description}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">{featured.readTime}</span>
              <Link
                href={`/blog/${featured.id}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 hover:text-teal-800 transition-colors"
              >
                Read More
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Blog Cards Grid ──────────────────────────────────────────────── */}
      <section className=" mx-16 px-6 ">
        {filteredCards.length === 0 ? (
          <div className="text-center py-20 text-gray-400 text-lg">
            No articles found. Try a different search or filter.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredCards.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col group"
              >
                {/* Card Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Card Body */}
                <div className="flex flex-col flex-1 p-5">
                  {/* Category + Date */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        BADGE[post.category] ?? "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-gray-900 leading-snug mb-2 ">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">
                    {post.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-sm font-semibold text-teal-600 hover:text-teal-800 transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default BlogPage;