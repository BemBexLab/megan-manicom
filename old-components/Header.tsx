// components/Header.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <header className="w-full bg-[#fdfdec] border-b border-gray-200/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* ── Logo ── */}
<Link href="/" className="shrink-0">
  <div className="relative h-11 w-32 overflow-hidden">
    <Image
      src="/logo.webp"
      alt="Megan"
      fill
      className="object-contain"
      priority
    />
  </div>
</Link>

        {/* ── Desktop Nav ── */}
        <ul className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => setActive(link.label)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  active === link.label
                    ? "border border-gray-400 text-gray-900"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Desktop CTA Button ── */}
<Link
  href="/contact"
  className="hidden rounded-full bg-[#FF5C05] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#d4521f] hover:shadow-md md:inline-flex md:items-center md:gap-2"
>
  Work With Me
  <Image
    src="/cta-element.webp" // ← replace with your icon image path
    alt="CTA icon"
    width={20}
    height={20}
    className="object-contain"
  />
</Link>

        {/* ── Mobile Hamburger ── */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-gray-100 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* ── Mobile Menu ── */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          mobileOpen ? "max-h-80 border-t border-gray-200/60" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => {
                  setActive(link.label);
                  setMobileOpen(false);
                }}
                className={`block rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                  active === link.label
                    ? "border border-gray-400 text-gray-900"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-2">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex w-full items-center justify-center gap-1.5 rounded-full bg-[#FF5C05] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#d4521f]"
            >
              Work With Me <Image
    src="/cta-element.webp" // ← replace with your icon image path
    alt="CTA icon"
    width={20}
    height={20}
    className="object-contain"
  />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}