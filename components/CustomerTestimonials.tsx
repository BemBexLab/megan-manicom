"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiArrowLeft, FiArrowRight, FiStar } from "react-icons/fi";

const testimonials = [
  { name: "John Doe", detail: "Lorem Ipsum", avatar: "/844706ea98766b3dcadd59521af580fdf5b9cfb7.webp" },
  { name: "John Doe", detail: "Brand Founder", avatar: "/09ff1cf10a7376f0a3fad37aafdcf8255a4665ed.webp" },
  { name: "John Doe", detail: "Author", avatar: "/54845759cbe20ac97afca20129b70d5fb0e351b6.webp" },
  { name: "John Doe", detail: "Content Creator", avatar: "/38f76d47ebd8842273bdfbb591ae8d51d0b6f9d7.webp" },
  { name: "John Doe", detail: "Creative Director", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=96&q=80" },
  { name: "John Doe", detail: "Small Business Owner", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=96&q=80" },
  { name: "John Doe", detail: "Coach", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=96&q=80" },
  { name: "Mia Davis", detail: "Entrepreneur", avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=96&q=80" },
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <article className="flex min-h-[308px] w-[var(--testimonial-card-width)] shrink-0 snap-start flex-col rounded-[20px] border border-[#E5E5E5] bg-[#FBFBFB] px-[22px] py-8 shadow-[0_2px_3px_rgba(0,0,0,0.1)]">
      <svg aria-hidden="true" viewBox="0 0 28 22" className="h-[22px] w-[26px] shrink-0 fill-none stroke-[#BDBDBD] stroke-[0.7]">
        <path d="M10.8 2.2H4.2v7.1c0 4.2 2 7 5.4 9.3l2.2-2.8c-2-1.4-3-2.8-3.2-4.7h3V6.8a4.6 4.6 0 0 0-4.6-4.6Zm12 0h-6.6v7.1c0 4.2 2 7 5.4 9.3l2.2-2.8c-2-1.4-3-2.8-3.2-4.7h3V6.8a4.6 4.6 0 0 0-4.6-4.6Z" />
      </svg>
      <p className="urbanist mt-2.5 text-[13px] leading-[1.8] text-[#333333] lg:text-[clamp(12px,1.08vw,16px)]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since 1966.
      </p>
      <div className="mt-auto flex items-center gap-3.5 pt-8">
        <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full">
          <Image
            src={testimonial.avatar}
            alt=""
            fill
            unoptimized
            sizes="32px"
            className="object-cover"
          />
        </div>
        <span aria-hidden="true" className="h-8 w-px bg-[#B5B5B5]" />
        <div className="min-w-0">
          <p className="clash-display font-clash truncate text-[14px] font-medium leading-[1.4] text-[#D9B061] lg:text-[clamp(13px,1.17vw,17px)]">
            {testimonial.name}
          </p>
          <p className="urbanist truncate text-[12px] leading-[1.5] text-[#999999] lg:text-[clamp(11px,0.98vw,14px)]">
            {testimonial.detail}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function CustomerTestimonials() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const updateScrollButtons = () => {
      const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
      setCanScrollPrevious(carousel.scrollLeft > 1);
      setCanScrollNext(carousel.scrollLeft < maxScrollLeft - 1);
    };

    updateScrollButtons();
    carousel.addEventListener("scroll", updateScrollButtons, { passive: true });
    const resizeObserver = new ResizeObserver(updateScrollButtons);
    resizeObserver.observe(carousel);

    return () => {
      carousel.removeEventListener("scroll", updateScrollButtons);
      resizeObserver.disconnect();
    };
  }, []);

  const slide = (direction: -1 | 1) => {
    const carousel = carouselRef.current;
    if (!carousel || (direction < 0 && !canScrollPrevious) || (direction > 0 && !canScrollNext)) return;

    const firstCard = carousel.firstElementChild as HTMLElement | null;
    const gap = parseFloat(window.getComputedStyle(carousel).columnGap) || 0;

    carousel.scrollBy({
      left: direction * ((firstCard?.offsetWidth ?? carousel.clientWidth) + gap),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  };

  return (
    <section className="w-full overflow-hidden bg-[#F5F5F5] px-4 pt-10 pb-12 sm:px-6 sm:pt-12 sm:pb-14 lg:px-[5%] lg:pt-[3.8vw] lg:pb-[5.4vw]">
      <div className="mx-auto w-full max-w-[1420px] [--testimonial-card-width:282px] md:[--testimonial-card-width:clamp(250px,21.75vw,344px)]">
        <header className="grid grid-cols-1 items-end gap-5 lg:grid-cols-2 lg:gap-3.5">
          <div>
            <div className="flex items-center gap-2">
              <span aria-hidden="true" className="h-4 w-4 rounded-full border-3 border-[#282828] bg-[#D9B061]" />
              <span className="urbanist text-[16px] leading-[1.4] text-[#777777]">
                Customer Testimonials
              </span>
            </div>
            <h2 className="clash-display font-clash mt-4 max-w-[540px] text-[clamp(2.25rem,4.2vw,3.5rem)] font-medium leading-[1.15] tracking-tight text-[#282828]">
              Kind Words From<br />Happy Clients
            </h2>
          </div>
          <p className="urbanist mt-2 max-w-[620px] text-[13px] leading-[1.8] text-[#777777] lg:text-[clamp(12px,1.08vw,16px)] lg:justify-self-start">
            Great collaborations lead to meaningful results and lasting
            relationships. Here&apos;s what clients have to say about working
            with me.
          </p>
        </header>

        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:gap-3.5 lg:mt-14 lg:mr-[calc((min(90vw,1420px)-100vw)/2)]">
          <aside className="flex min-h-[300px] w-full shrink-0 flex-col items-center rounded-[22px] bg-[#D9B061] px-6 pt-10 pb-5 text-center text-white shadow-[0_2px_4px_rgba(0,0,0,0.12)] md:min-h-[358px] md:w-[var(--testimonial-card-width)] md:pt-[100px]">
            <p className="urbanist text-[60px] font-semibold leading-none">4.8</p>
            <div role="img" aria-label="5 stars" className="flex justify-center gap-px text-[14px] leading-none text-[#FFE600]">
              {Array.from({ length: 5 }, (_, index) => (
                <FiStar key={index} aria-hidden="true" fill="currentColor" />
              ))}
            </div>
            <p className="urbanist mt-1 text-[12px] leading-[1.5] lg:text-[clamp(11px,0.98vw,14px)]">500+ Review</p>
            <p className="urbanist mt-4 max-w-[220px] text-[12px] leading-[1.5] lg:text-[clamp(11px,0.98vw,14px)]">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry.
            </p>
            <div className="mt-auto flex items-center justify-center gap-2.5 pt-8">
              <button
                type="button"
                aria-label="Previous testimonials"
                onClick={() => slide(-1)}
                disabled={!canScrollPrevious}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#D9B061] transition-all duration-200 hover:scale-105 hover:bg-[#FCF7EE] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#282828] disabled:cursor-not-allowed disabled:hover:scale-100 disabled:opacity-60"
              >
                <FiArrowLeft aria-hidden="true" size={24} strokeWidth={1} />
              </button>
              <button
                type="button"
                aria-label="Next testimonials"
                onClick={() => slide(1)}
                disabled={!canScrollNext}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#D9B061] transition-all duration-200 hover:scale-105 hover:bg-[#FCF7EE] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#282828] disabled:cursor-not-allowed disabled:hover:scale-100 disabled:opacity-60"
              >
                <FiArrowRight aria-hidden="true" size={24} strokeWidth={1} />
              </button>
            </div>
          </aside>

          <div
            ref={carouselRef}
            role="region"
            aria-label="Client testimonials"
            tabIndex={0}
            className="flex min-w-0 snap-x snap-mandatory gap-3.5 overflow-x-auto py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9B061] md:flex-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

