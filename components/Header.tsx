"use client";

import { Suspense, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
        <Link href="/" className="flex shrink-0 items-center gap-2 transition-opacity hover:opacity-80 focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#282828]">
          <span className="relative h-[60px] w-[60px] overflow-hidden rounded-full border border-[#282828]">
            <Image
              src="/3d10acc26a868a5485f246941722d40e2d5993dc.webp"
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

        <Suspense fallback={<DesktopNavigationFallback />}>
          <DesktopNavigation />
        </Suspense>

        <Link
          href="/contact"
          className="urbanist hidden h-12 shrink-0 items-center gap-2 rounded-full bg-[#D9B061] py-1 pl-4 pr-1.5 text-[14px] font-normal text-[#282828] shadow-[0_5px_12px_rgba(0,0,0,0.16)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#c69260] hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#282828] active:translate-y-0 md:inline-flex"
        >
          Work With Me
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#282828] text-[#D9B061]">
            <FiArrowUpRight aria-hidden="true" size={22} />
          </span>
        </Link>

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex flex-col items-center justify-center gap-1.5 rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#282828] md:hidden"
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

      {isMenuOpen && (
        <Suspense fallback={<MobileMenuFallback />}>
          <MobileMenu />
        </Suspense>
      )}
    </header>
  );
}

function DesktopNavigationFallback() {
  return (
    <nav
      aria-label="Main navigation"
      className="urbanist absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center rounded-full bg-[#D9B061] p-[2px] shadow-[0_5px_12px_rgba(0,0,0,0.16)] md:flex"
    >
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="flex h-9 items-center justify-center rounded-full px-[22px] text-[14px] font-medium text-[#282828] transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#282828]"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}

function DesktopNavigation() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main navigation"
      className="urbanist absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center rounded-full bg-[#D9B061] p-[2px] shadow-[0_5px_12px_rgba(0,0,0,0.16)] md:flex"
    >
      {navLinks.map((link) => {
        const isActive =
          pathname === link.href ||
          (link.href !== "/" && pathname.startsWith(`${link.href}/`));

        return (
          <Link
            key={link.name}
            href={link.href}
            aria-current={isActive ? "page" : undefined}
            className={`flex h-9 items-center justify-center rounded-full text-[14px] font-normal transition-colors focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#282828] ${
              isActive
                ? "bg-[#282828] font-medium px-3 text-[#D9B061] shadow-sm hover:bg-[#1E1E1E]"
                : "px-[22px] font-medium text-[#282828] hover:bg-white/10"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}

function MobileMenuFallback() {
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
            className="rounded-lg px-4 py-3 text-sm font-medium text-[#282828] transition-colors hover:bg-[#D9B061]/20 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#282828]"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}

function MobileMenu() {
  const pathname = usePathname();

  return (
    <div
      id="mobile-navigation"
      className="border-t border-gray-100 bg-white px-5 py-4 md:hidden"
    >
      <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
        {navLinks.map((link) => (
          (() => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(`${link.href}/`));

            return (
              <Link
                key={link.name}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#282828] ${
                  isActive
                  ? "bg-[#282828] text-[#D9B061] shadow-sm hover:bg-[#1E1E1E]"
                    : "text-[#282828] hover:bg-[#D9B061]/20"
                }`}
              >
                {link.name}
              </Link>
            );
          })()
        ))}
        <Link
          href="/work-with-me"
          className="urbanist mt-3 flex items-center justify-center gap-2 rounded-full bg-[#D9B061] px-6 py-3 text-sm font-medium text-[#282828] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#c9a04e] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#282828] active:translate-y-0"
        >
          Work With Me
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#282828] text-[#D9B061]">
            <FiArrowUpRight aria-hidden="true" size={18} />
          </span>
        </Link>
      </nav>
    </div>
  );
}
