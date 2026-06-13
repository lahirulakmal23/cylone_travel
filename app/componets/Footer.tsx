"use client";

import React, { useState } from "react";
import Link from "next/link";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="bg-[#0f1923] text-white">
      {/* Main Footer Grid */}
      <div className=" mx-12 px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="flex flex-col  gap-5">
          <h2 className="text-2xl font-bold text-white  font-[family-name:var(--font-playfair)]">Travel Sri Lanka</h2>
          <p className="text-md text-gray-400 leading-relaxed">
            Discover the beauty of Sri Lanka with our expertly curated tours and
            travel experiences. From ancient temples to pristine beaches,
            we&apos;ll help you explore the Pearl of the Indian Ocean.
          </p>
          {/* Social Icons */}
          <div className="flex gap-3 mt-1">
            {[
              {
                label: "Facebook",
                href: "#",
                icon: (
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                ),
              },
              {
                label: "Twitter",
                href: "#",
                icon: (
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                ),
              },
              {
                label: "Instagram",
                href: "#",
                icon: (
                  <>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="3" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </>
                ),
              },
              {
                label: "YouTube",
                href: "#",
                icon: (
                  <>
                    <rect x="2" y="4" width="20" height="16" rx="3" ry="3" />
                    <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none" />
                  </>
                ),
              },
            ].map(({ label, href, icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/40 hover:bg-white/10 transition-all duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  viewBox="0 0 24 24"
                >
                  {icon}
                </svg>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base font-bold text-white mb-5  font-[family-name:var(--font-playfair)]">Quick Links</h3>
          <ul className="flex flex-col gap-3">
            {["About Us", "Destinations", "Tours & Packages", "Travel Blog", "Contact Us"].map(
              (item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-base font-bold text-white mb-5 font-[family-name:var(--font-playfair)]">Support</h3>
          <ul className="flex flex-col gap-3">
            {["FAQ", "Help Center", "Terms & Conditions", "Privacy Policy", "Cancellation Policy"].map(
              (item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-base font-bold text-white mb-5  font-[family-name:var(--font-playfair)]">Newsletter</h3>
          <p className="text-sm text-gray-400 mb-4 leading-relaxed">
            Subscribe to our newsletter for travel tips and exclusive offers
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/15 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-400 transition-colors duration-200"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[#FF6F43]  text-white text-sm font-semibold tracking-wide hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-orange-500/20"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mx-12 px-6" />

      {/* Contact Bar */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <a
          href="tel:+9411234567890"
          className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-200"
        >
          <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.26 7.86a16 16 0 006.88 6.88l1.22-1.21a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
          </svg>
          +94 11 2345 6789
        </a>

        <a
          href="mailto:info@travelsrilanka.com"
          className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-200"
        >
          <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          info@travelsrilanka.com
        </a>

        <span className="flex items-center gap-2">
          <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          123 Galle Road, Colombo 03, Sri Lanka
        </span>
      </div>

      

      {/* Copyright */}
      <div className="py-4 text-center text-xs text-gray-500">
        © 2026 Travel Sri Lanka. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;