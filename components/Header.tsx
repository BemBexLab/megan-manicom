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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#282828]/10 bg-[#FFFFF3]/95 shadow-[0_5px_20px_rgba(40,40,40,0.04)] backdrop-blur-md md:rounded-b-4xl md:border-0 md:bg-transparent md:shadow-none md:backdrop-blur-none">
      <div className="relative mx-auto flex h-[72px] w-full max-w-[1500px] items-center justify-between px-4 sm:px-5 md:h-[90px] md:px-[5%]">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 transition-opacity hover:opacity-80 focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#282828]"
        >
          <span className="relative h-11 w-11 overflow-hidden rounded-full border border-[#282828] md:h-[60px] md:w-[60px]">
            <Image
              src="/3d10acc26a868a5485f246941722d40e2d5993dc.webp"
              alt="Megan"
              fill
              className="object-cover"
              sizes="60px"
            />
          </span>
          <span className="clash-display text-[30px] font-medium leading-none tracking-tight text-[#282828] md:text-[36px]">
            Megan
          </span>
        </Link>

        <Suspense fallback={<DesktopNavigationFallback />}>
          <DesktopNavigation />
        </Suspense>

        <Link
          href="mailto:info@meganmanicom.com"
          className="urbanist hidden h-12 shrink-0 items-center gap-2 rounded-full bg-[#D9B061] py-1 pl-4 pr-1.5 text-[14px] font-normal text-[#282828] shadow-[0_5px_12px_rgba(0,0,0,0.16)] transition-all duration-200 hover:bg-accent-hover hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#282828] md:inline-flex"
        >
          Work With Me
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#282828] text-[#D9B061]">
            <FiArrowUpRight aria-hidden="true" size={22} />
          </span>
        </Link>

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="grid h-11 w-11 place-content-center gap-[6px] text-[#282828] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#282828] md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span
            className={`block h-px w-6 bg-[#282828] transition-transform duration-300 ${
              isMenuOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-[#282828] transition-transform duration-300 ${
              isMenuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {isMenuOpen && (
        <Suspense fallback={<MobileMenuFallback />}>
          <MobileMenu onNavigate={() => setIsMenuOpen(false)} />
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
      className="border-t border-[#282828]/10 bg-[#FFFFF3] px-5 pt-1 pb-5 shadow-[0_14px_22px_rgba(40,40,40,0.06)] md:hidden"
    >
      <nav aria-label="Mobile navigation">
        {navLinks.map((link, index) => (
          <Link
            key={link.name}
            href={link.href}
            className="flex items-baseline gap-4 border-b border-[#282828]/10 py-3.5 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#282828]"
          >
            <span className="urbanist w-6 text-[11px] tabular-nums text-[#A87932]">0{index + 1}</span>
            <span className="clash-display text-[22px] font-medium text-[#282828]">{link.name}</span>
          </Link>
        ))}
        <Link
          href="mailto:info@meganmanicom.com"
          className="urbanist mt-4 flex items-center justify-between border-y border-[#D9B061]/60 py-3.5 text-[15px] font-medium text-[#282828] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#282828]"
        >
          Work With Me
          <FiArrowUpRight aria-hidden="true" size={20} className="text-[#A87932]" />
        </Link>
      </nav>
    </div>
  );
}

function MobileMenu({ onNavigate }: { onNavigate: () => void }) {
  const pathname = usePathname();

  return (
    <div
      id="mobile-navigation"
      className="border-t border-[#282828]/10 bg-[#FFFFF3] px-5 pt-1 pb-5 shadow-[0_14px_22px_rgba(40,40,40,0.06)] md:hidden"
    >
      <nav aria-label="Mobile navigation">
        {navLinks.map((link, index) =>
          (() => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(`${link.href}/`));

            return (
              <Link
                key={link.name}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`flex items-baseline gap-4 border-b border-[#282828]/10 py-3.5 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#282828] ${
                  isActive
                    ? "text-[#A87932]"
                    : "text-[#282828]"
                }`}
                onClick={onNavigate}
              >
                <span className="urbanist w-6 text-[11px] tabular-nums text-[#A87932]">0{index + 1}</span>
                <span className="clash-display text-[22px] font-medium">{link.name}</span>
              </Link>
            );
          })(),
        )}
        <Link
          href="mailto:info@meganmanicom.com"
          className="urbanist mt-4 flex items-center justify-between border-y border-[#D9B061]/60 py-3.5 text-[15px] font-medium text-[#282828] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#282828]"
          onClick={onNavigate}
        >
          Work With Me
          <FiArrowUpRight aria-hidden="true" size={20} className="text-[#A87932]" />
        </Link>
      </nav>
    </div>
  );
}
