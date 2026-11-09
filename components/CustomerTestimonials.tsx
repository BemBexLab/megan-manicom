"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiArrowLeft, FiArrowRight, FiStar } from "react-icons/fi";

const testimonials = [
  { name: "John Doe", detail: "Lorem Ipsum", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&q=80" },
  { name: "Sarah Miller", detail: "Brand Founder", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=96&q=80" },
  { name: "Marcus Lee", detail: "Author", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=96&q=80" },
  { name: "Ava Johnson", detail: "Content Creator", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=96&q=80" },
  { name: "Daniel Kim", detail: "Creative Director", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=96&q=80" },
  { name: "Olivia Brown", detail: "Small Business Owner", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=96&q=80" },
  { name: "Noah Williams", detail: "Coach", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=96&q=80" },
  { name: "Mia Davis", detail: "Entrepreneur", avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=96&q=80" },
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <article className="flex h-[242px] w-[220px] shrink-0 snap-start 2xl:h-[302px] 2xl:w-[286px] flex-col rounded-[20px] border border-[#E5E5E5] bg-[#FBFBFB] px-4 py-5 shadow-[0_2px_3px_rgba(0,0,0,0.1)] sm:w-[230px] 2xl:px-5 2xl:py-6 2xl:text-[16px]">
      <svg aria-hidden="true" viewBox="0 0 28 22" className="h-6 w-8 shrink-0 fill-none stroke-[#D0D0D0] stroke-[1.2]">
        <path d="M10.8 2.2H4.2v7.1c0 4.2 2 7 5.4 9.3l2.2-2.8c-2-1.4-3-2.8-3.2-4.7h3V6.8a4.6 4.6 0 0 0-4.6-4.6Zm12 0h-6.6v7.1c0 4.2 2 7 5.4 9.3l2.2-2.8c-2-1.4-3-2.8-3.2-4.7h3V6.8a4.6 4.6 0 0 0-4.6-4.6Z" />
      </svg>
      <p className="urbanist mt-2 text-[15px] leading-[1.65] text-[#333333]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since 1966.
      </p>
      <div className="mt-auto flex items-center gap-2.5">
        <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full 2xl:h-9 2xl:w-9">
          <Image
            src={testimonial.avatar}
            alt=""
            fill
            unoptimized
            sizes="28px"
            className="object-cover"
          />
        </div>
        <span className="h-7 w-px bg-[#D4D4D4]" />
        <div className="min-w-0">
          <p className="urbanist truncate text-[12px] leading-tight text-[#D4A373] 2xl:text-[14px]">
            {testimonial.name}
          </p>
          <p className="urbanist truncate text-[11px] leading-tight text-[#999999] 2xl:text-[13px]">
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

    carousel.scrollBy({
      left: direction * (carousel.clientWidth * 0.72),
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full overflow-hidden bg-[#F5F5F5] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-[60px] 2xl:px-6">
      <div className="mx-auto w-full max-w-[1420px]">
        <header className="grid grid-cols-1 items-center gap-5 lg:grid-cols-2 lg:gap-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-4 w-4 rounded-full border-3 border-[#D4A373]" />
              <span className="urbanist text-[16px] text-[#777777]">
                Customer Testimonials
              </span>
            </div>
            <h2 className="clash-display my-2 max-w-full break-words text-balance text-[2rem] sm:text-[clamp(2.25rem,4.2vw,3.5rem)] font-medium leading-[1.05] text-[#282828]">
              Kind Words From Happy Clients
            </h2>
          </div>
          <p className="urbanist max-w-[590px] text-[16px] leading-[1.7] text-[#777777] lg:justify-self-end">
            Great collaborations lead to meaningful results and lasting
            relationships. Here&apos;s what clients have to say about working
            with me.
          </p>
        </header>

        <div className="mt-9 flex flex-col gap-3 sm:mt-10 md:flex-row md:items-center md:gap-[10px] lg:mt-11">
          <aside className="flex h-[220px] w-full shrink-0 flex-col items-center justify-center rounded-[20px] bg-[#D4A373] px-5 text-center text-white sm:h-[242px] md:h-[282px] md:w-[250px] 2xl:h-[352px] 2xl:w-[320px]">
            <p className="urbanist w-full text-[54px] font-medium leading-none 2xl:text-[68px]">4.8</p>
            <div role="img" aria-label="5 out of 5 stars" className="mt-0.5 flex w-full justify-center gap-[1px] text-[17px] leading-none text-[#F5D436] 2xl:text-[21px]">
              {Array.from({ length: 5 }, (_, index) => (
                <FiStar key={index} aria-hidden="true" fill="currentColor" />
              ))}
            </div>
            <p className="urbanist mt-1 w-full text-[13px] 2xl:text-[16px]">500+ Review</p>
            <p className="urbanist mt-4 w-full text-[12px] leading-[1.45] 2xl:text-[14px]">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry.
            </p>
            <div className="mt-5 flex w-full items-center justify-center gap-2 2xl:mt-6">
              <button
                type="button"
                aria-label="Previous testimonials"
                onClick={() => slide(-1)}
                disabled={!canScrollPrevious}
                className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors 2xl:h-11 2xl:w-11 ${
                  canScrollPrevious
                    ? "bg-[#F8F2EC] text-[#D4A373]"
                    : "cursor-not-allowed bg-white/55 text-white"
                }`}
              >
                <FiArrowLeft aria-hidden="true" size={18} />
              </button>
              <button
                type="button"
                aria-label="Next testimonials"
                onClick={() => slide(1)}
                disabled={!canScrollNext}
                className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors 2xl:h-11 2xl:w-11 ${
                  canScrollNext
                    ? "bg-[#F8F2EC] text-[#D4A373]"
                    : "cursor-not-allowed bg-white/55 text-white"
                }`}
              >
                <FiArrowRight aria-hidden="true" size={18} />
              </button>
            </div>
          </aside>

          <div
            ref={carouselRef}
            aria-label="Client testimonials"
            className="flex min-w-0 flex-1 snap-x snap-mandatory gap-[10px] overflow-x-auto py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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

