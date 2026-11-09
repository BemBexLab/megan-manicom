// components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Work", href: "/work" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo — Image + Text */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-gray-200">
            <Image
              src="/home/Face.webp"
              alt="Megan"
              fill
              className="object-cover"
              sizes="44px"
              priority
            />
          </div>
          <span className="text-2xl font-semibold tracking-tight text-gray-900">
            Megan
          </span>
        </Link>

        {/* Center Navigation — Pill Shape */}
        <nav className="hidden md:block">
          <div className="relative flex items-center rounded-full bg-[#D4A373] px-2 py-1.5 shadow-[0_4px_14px_rgba(0,0,0,0.15)]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative z-10 rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  link.name === "Home"
                    ? "bg-white text-[#D4A373] shadow-sm"
                    : "text-white hover:text-white/90"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* CTA Button */}
        {/* CTA Button */}
<Link
  href="/work-with-me"
  className="hidden md:inline-flex items-center gap-2 rounded-full bg-[#D4A373] pr-2 py-1.5 text-sm font-medium text-white shadow-[0_4px_14px_rgba(0,0,0,0.12)] transition-all duration-300 hover:bg-[#b8936a] hover:shadow-[0_6px_20px_rgba(0,0,0,0.18)]"
>
  <span className="pl-5">Work With Me</span>
  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#D4A373] shadow-sm">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 17L17 7M17 7H7M17 7V17"
      />
    </svg>
  </span>
</Link>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex md:hidden flex-col items-center justify-center gap-1.5 rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`block h-[2px] w-6 rounded-full bg-gray-700 transition-all duration-300 ${
              isMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 rounded-full bg-gray-700 transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 rounded-full bg-gray-700 transition-all duration-300 ${
              isMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu — Conditionally Rendered */}
      {isMenuOpen && <MobileMenu />}
    </header>
  );
}

function MobileMenu() {
  return (
    <div className="border-t border-gray-100 bg-white px-6 py-4 md:hidden animate-in slide-in-from-top-2 duration-200">
      <nav className="flex flex-col gap-1">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
              link.name === "Home"
                ? "bg-[#C9A47A]/10 text-[#C9A47A]"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            {link.name}
          </Link>
        ))}
        <Link
          href="/work-with-me"
          className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#D4A373] px-6 py-3 text-sm font-medium text-white shadow-md transition-all hover:bg-[#b8936a]"
        >
          Work With Me
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 17L17 7M17 7H7M17 7V17"
            />
          </svg>
        </Link>
      </nav>
    </div>
  );
}