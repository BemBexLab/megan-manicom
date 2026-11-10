"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Work", href: "/work" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed rounded-b-4xl inset-x-0 top-0 z-50 bg-white">
      <div className="relative mx-auto flex h-[72px] w-full max-w-[1500px] items-center justify-between px-5 md:h-[90px] md:px-[5%]">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="relative h-[60px] w-[60px] overflow-hidden rounded-full border border-[#282828]">
            <Image
              src="/home/Face.webp"
              alt="Megan"
              fill
              className="object-cover"
              sizes="60px"
              priority
            />
          </span>
          <span className="clash-display text-[36px] font-medium leading-none tracking-tight text-[#282828]">
            Megan
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="urbanist absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center rounded-full bg-[#D4A373] p-[2px] shadow-[0_5px_12px_rgba(0,0,0,0.16)] md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`flex h-9 items-center justify-center rounded-full text-[14px] font-normal transition-colors ${
                link.name === "Home"
                  ? "bg-white px-3 text-[#D4A373] shadow-sm"
                  : "px-[22px] text-white hover:bg-white/10"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <Link
          href="/work-with-me"
          className="urbanist hidden h-12 shrink-0 items-center gap-2 rounded-full bg-[#D4A373] py-1 pl-4 pr-1.5 text-[14px] font-normal text-white shadow-[0_5px_12px_rgba(0,0,0,0.16)] transition-colors hover:bg-[#c69260] md:inline-flex"
        >
          Work With Me
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#D4A373]">
            <FiArrowUpRight aria-hidden="true" size={22} />
          </span>
        </Link>

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex flex-col items-center justify-center gap-1.5 rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
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

      {isMenuOpen && <MobileMenu />}
    </header>
  );
}

function MobileMenu() {
  return (
    <div
      id="mobile-navigation"
      className="border-t border-gray-100 bg-white px-5 py-4 md:hidden"
    >
      <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
              link.name === "Home"
                ? "bg-[#D4A373]/10 text-[#D4A373]"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            {link.name}
          </Link>
        ))}
        <Link
          href="/work-with-me"
          className="urbanist mt-3 flex items-center justify-center gap-2 rounded-full bg-[#D4A373] px-6 py-3 text-sm font-medium text-white shadow-md transition-colors hover:bg-[#c69260]"
        >
          Work With Me
          <FiArrowUpRight aria-hidden="true" size={18} />
        </Link>
      </nav>
    </div>
  );
}
