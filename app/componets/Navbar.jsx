"use client"
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <header className=" bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50  ">
      <div className=" lg:mx-12 px-6 lg:px-10 sm:mx-6">
        
        <nav className="flex items-center justify-between h-20   ">

          {/* LEFT SIDE - LOGO */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-3xl font-bold text-[#007A78] tracking-wide font-[family-name:var(--font-playfair)]"
            >
              Travel Sri Lanka
            </Link>
          </div>

          {/* CENTER - NAV LINKS */}
          <ul className="hidden lg:flex items-center gap-10 text-[#1A2B49] font-semibold ">
            
            {/* Home */}
            <li>
              <Link
                href="/"
                className="hover:text-[#007A78] transition duration-200"
              >
                Home
              </Link>
            </li>

            {/* Destinations Dropdown */}
            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-[#007A78] transition duration-200">
                Destinations
                <ChevronDown size={16} />
              </button>

              {/* Dropdown */}
              <div className="absolute top-10 left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 bg-white shadow-lg rounded-lg w-52 py-3 border border-gray-100">
                
                <Link
                  href="#"
                  className="block px-5 py-2 hover:bg-gray-50 hover:text-[#007A78]"
                >
                  Beaches
                </Link>

                <Link
                  href="#"
                  className="block px-5 py-2 hover:bg-gray-50 hover:text-[#007A78]"
                >
                  Mountains
                </Link>

                <Link
                  href="#"
                  className="block px-5 py-2 hover:bg-gray-50 hover:text-[#007A78]"
                >
                  Wildlife
                </Link>

                <Link
                  href="#"
                  className="block px-5 py-2 hover:bg-gray-50 hover:text-[#007A78]"
                >
                  Cultural Sites
                </Link>
              </div>
            </li>

            {/* Tours */}
            <li>
              <Link
                href="/tours"
                className="hover:text-[#007A78] transition duration-200"
              >
                Tours
              </Link>
            </li>

            {/* Gallery */}
            <li>
              <Link
                href="/gallery"
                className="hover:text-[#007A78] transition duration-200"
              >
                Gallery
              </Link>
            </li>

            {/* Blog */}
            <li>
              <Link
                href="/blog"
                className="hover:text-[#007A78] transition duration-200"
              >
                Blog
              </Link>
            </li>

            {/* Contact */}
            <li>
              <Link
                href="/contact"
                className="hover:text-[#007A78] transition duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex items-center gap-5">

            {/* Language Selector */}
            <div className="relative">
              <select className="border border-gray-200 rounded-md px-3 py-2 text-sm font-medium text-[#1A2B49] bg-white focus:outline-none focus:ring-2 focus:ring-[#007A78] cursor-pointer">
                <option>EN</option>
                <option>සිංහල</option>
                <option>தமிழ்</option>
              </select>
            </div>

            {/* Login */}
            <Link
              href="/login"
              className="font-semibold text-[#1A2B49] hover:text-[#007A78] transition duration-200"
            >
              Login
            </Link>

            {/* Sign Up Button */}
            <Link
              href="/signup"
              className="bg-[#FF6F43] hover:bg-[#e85f36] text-white font-bold px-5 py-2.5 rounded-md transition duration-200 shadow-sm"
            >
              Sign Up
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button className="lg:hidden text-[#1A2B49]">
            <Menu size={28} />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;