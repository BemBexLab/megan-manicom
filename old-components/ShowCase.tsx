"use client";

import Image from "next/image";
import { useState } from "react";

const BOOKS = [
  {
    id: 1,
    cover: "/books/man-of-light.jpg",
    rotation: "-rotate-6",
    translate: "-translate-y-2",
  },
  {
    id: 2,
    cover: "/books/dont-cut-grass.jpg",
    rotation: "rotate-0",
    translate: "translate-y-0",
  },
  {
    id: 3,
    cover: "/books/growing-together.jpg",
    rotation: "rotate-6",
    translate: "-translate-y-3",
  },
  {
    id: 4,
    cover: "/books/fresh-paths.jpg",
    rotation: "rotate-0",
    translate: "translate-y-0",
  },
  {
    id: 5,
    cover: "/books/growing-together.jpg",
    rotation: "rotate-6",
    translate: "-translate-y-2",
  },
];

const Showcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? BOOKS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === BOOKS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full overflow-x-clip bg-[#2D0000]">
      {/* Straight top edge - no clip-path */}
      <div className="px-6 pt-20 pb-20 sm:px-10 sm:pt-28 sm:pb-24 md:px-16 md:pt-36 md:pb-28">
        
        {/* Header */}
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="urbanist text-xs tracking-[0.25em] text-[#FF5C05] uppercase sm:text-sm">
            ← Selected Work →
          </p>

          <h2 className="refuseniks mt-4 text-3xl font-bold uppercase leading-[1.1] text-[#282828] sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl">
            A Showcase of
            <br />
            Creativity & Passion.
          </h2>

          {/* Handwritten accent text */}
          <p
            className="absolute -right-4 top-0 hidden w-32 rotate-12 text-sm leading-snug text-[#FF5C05] sm:block md:right-0 md:w-40 md:text-base"
            style={{ fontFamily: "'Caveat', 'Dancing Script', cursive" }}
          >
            Discover hidden gems and breezy new releases
          </p>
        </div>

        {/* Book Carousel */}
        <div className="relative mx-auto mt-12 max-w-6xl sm:mt-16 md:mt-20">
          {/* Carousel track */}
          <div className="relative flex items-center justify-center gap-4 overflow-x-auto px-4 py-8 sm:gap-6 md:gap-8 lg:gap-10 [&::-webkit-scrollbar]:hidden">
            {BOOKS.map((book, index) => {
              const distance = Math.abs(index - activeIndex);
              const isOffscreen = distance > 2;

              return (
                <div
                  key={book.id}
                  className={`relative shrink-0 transition-all duration-500 ease-out ${
                    isOffscreen ? "scale-90 opacity-40" : "scale-100 opacity-100"
                  }`}
                  style={{ width: "clamp(140px, 22vw, 220px)" }}
                >
                  {/* Book Cover */}
                  <div
                    className={`relative aspect-[3/4.5] overflow-hidden rounded-sm bg-[#1A0000] shadow-2xl transition-transform duration-500 ${book.rotation} ${book.translate} ${
                      index === activeIndex ? "ring-2 ring-[#FF5C05]/40" : ""
                    }`}
                  >
                    <Image
                      src={book.cover}
                      alt={`Book cover ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 140px, (max-width: 1024px) 180px, 220px"
                      className="object-cover"
                      priority={index < 3}
                    />

                    {/* Book spine shadow for 3D effect */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/40 to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-2 bg-gradient-to-l from-black/20 to-transparent" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation buttons */}
          <div className="mt-8 flex items-center justify-center gap-3 sm:mt-10">
            <button
              onClick={handlePrev}
              aria-label="Previous book"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF5C05] text-[#282828] shadow-lg transition-all hover:scale-110 hover:bg-[#FF7A33] active:scale-95 sm:h-10 sm:w-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 sm:h-5 sm:w-5"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              aria-label="Next book"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF5C05] text-[#282828] shadow-lg transition-all hover:scale-110 hover:bg-[#FF7A33] active:scale-95 sm:h-10 sm:w-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 sm:h-5 sm:w-5"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Subtle background texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(255,92,5,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 30%, rgba(255,92,5,0.1) 0%, transparent 40%)",
        }}
      />
    </section>
  );
};

export default Showcase;