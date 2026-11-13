"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const services = [
  {
    title: "Author Social Media Marketing",
    text: "Social media strategy and content support for authors who want to stay visible before, during, and after launch.",
  },
  {
    title: "Book Launch Visibility",
    text: "Launch-focused content, messaging, and posting direction to help build awareness around a new or upcoming book.",
  },
  {
    title: "Book Positioning",
    text: "Clear messaging around the book, the author, the reader, and the reason people should care.",
  },
  {
    title: "Content Planning",
    text: "Simple content plans for LinkedIn, Instagram, Facebook, and other platforms so you know what to post and why.",
  },
  {
    title: "Publishing Support",
    text: "Support with KDP, book setup direction, formatting guidance, and the key steps needed to prepare a book for release.",
  },
  {
    title: "Audience Growth",
    text: "Practical strategies to reach readers, communities, coaches, speakers, parents, schools, or business audiences, depending on the book.",
  },
  {
    title: "EBook Design",
    text: "Professional eBook layouts crafted for clarity, readability, and visual appeal. I design structured, engaging pages that enhance content and provide a seamless reading experience across all devices.",
  },
  {
    title: "Illustration",
    text: "Custom illustrations designed to bring ideas to life with creativity and precision. Each piece is tailored to match your concept, style, and audience, ensuring visually compelling results.",
  },
  {
    title: "Cover Design",
    text: "Striking and memorable covers that capture attention instantly. I create designs that reflect your content’s essence while making a strong first impression.",
  },
  {
    title: "Layout & Formatg",
    text: "Clean and consistent formatting for eBooks and digital publications. From typography to spacing, every detail is refined for a polished and professional finish.",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState<number | null>(0);
  const accordionId = useId();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const pinTriggerRef = useRef<ScrollTrigger | null>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const hasInitializedPanels = useRef(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const media = gsap.matchMedia();
    media.add("(min-width: 1024px)", () => {
      const section = sectionRef.current;
      const content = contentRef.current;
      if (!section || !content) return;

      pinTriggerRef.current = ScrollTrigger.create({
        trigger: content,
        pin: content,
        start: "top top+=96",
        endTrigger: section,
        end: () => {
          const bottomPadding = parseFloat(
            window.getComputedStyle(section).paddingBottom,
          );
          return `bottom top+=${96 + content.offsetHeight + bottomPadding}`;
        },
        pinSpacing: false,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      });
    });

    return () => {
      media.revert();
      pinTriggerRef.current = null;
    };
  }, []);

  useLayoutEffect(() => {
    const panels = panelRefs.current;

    if (!hasInitializedPanels.current) {
      panels.forEach((panel, index) => {
        if (!panel) return;
        gsap.set(panel, {
          height: active === index ? "auto" : 0,
          opacity: active === index ? 1 : 0,
        });
      });
      hasInitializedPanels.current = true;
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const timeline = gsap.timeline({
      defaults: { duration: reduceMotion ? 0 : 0.45, ease: "power2.inOut" },
      onComplete: () => {
        if (pinTriggerRef.current) {
          ScrollTrigger.refresh();
        }
      },
    });

    panels.forEach((panel, index) => {
      if (!panel) return;
      gsap.killTweensOf(panel);
      const currentHeight = panel.getBoundingClientRect().height;
      gsap.set(panel, { height: currentHeight });
      const isActive = active === index;

      timeline.to(
        panel,
        {
          height: isActive ? panel.scrollHeight : 0,
          opacity: isActive ? 1 : 0,
          onComplete: () => {
            if (isActive) gsap.set(panel, { height: "auto" });
          },
        },
        0,
      );
    });

    return () => {
      timeline.kill();
    };
  }, [active]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="services-title"
      className="section-spacing bg-[#F5F5F5] px-4 sm:px-6 lg:px-[5%]"
    >
      <div className="mx-auto w-full lg:[container-type:inline-size]">
        <div className="grid grid-cols-1 items-start gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1.21fr)_minmax(0,1fr)] lg:gap-x-[9.6%] lg:gap-y-0">
          <div ref={contentRef} className="flex min-w-0 flex-col">
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="h-4 w-4 rounded-full border-3 border-[#282828] bg-[#D9B061]"
              />
              <span className="urbanist text-sm leading-[1.5] text-[#777777] lg:text-[clamp(0.75rem,1.13cqw,1rem)]">
                What I Offer
              </span>
            </div>

            <h2
              id="services-title"
              className="clash-display mt-3.5 text-[2rem] font-medium leading-[1.2] text-[#282828] sm:text-[2.5rem] lg:mt-[0.94cqw] lg:text-[clamp(2rem,3.76cqw,3.375rem)]"
            >
              Services Built Around
              <span className="block">Visibility and Growth</span>
            </h2>

            <p className="urbanist mt-4 text-[0.9375rem] leading-[1.7] text-[#777777] lg:mt-[1.32cqw] lg:max-w-[95%] lg:text-[clamp(0.75rem,1.17cqw,1.0625rem)]">
              From book launches to social media content, I help make your message easier to find, understand, and trust.
            </p>

            <div className="mt-5 lg:mt-[1.79cqw]">
              <Link
                href="/contact"
                className="urbanist inline-flex items-center gap-2 rounded-full bg-[#D9B061] py-1.5 pl-3 pr-1.5 text-sm text-[#282828] shadow-[0_0.5rem_0.875rem_rgba(0,0,0,0.18)] transition-all duration-200 hover:bg-accent-hover hover:shadow-[0_0.6875rem_1.125rem_rgba(0,0,0,0.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a36e3d] lg:gap-[0.66cqw] lg:py-[0.566cqw] lg:pl-[1.13cqw] lg:pr-[0.566cqw] lg:text-[clamp(0.75rem,1.13cqw,1rem)]"
              >
                Let&apos;s Talk
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#282828] text-[#D9B061] lg:h-[2.25cqw] lg:w-[2.25cqw]">
                  <FiArrowUpRight
                    aria-hidden="true"
                    size="1rem"
                    className="lg:h-[1.45cqw] lg:w-[1.45cqw]"
                  />
                </span>
              </Link>
            </div>

            <div className="relative mt-6 aspect-[414/195] w-full overflow-hidden rounded-[1.25rem] lg:mt-[2.26cqw] lg:rounded-[1.89cqw]">
              <Image
                src="/home/Rectangle 4.webp"
                alt="Social media post mockups"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
              />
            </div>
          </div>

          <div className="min-w-0">
            <div className="min-w-0">
              {services.map((service, i) => {
              const isActive = active === i;
              const triggerId = `${accordionId}-trigger-${i}`;
              const panelId = `${accordionId}-panel-${i}`;

              return (
                <div
                  key={service.title}
                  className={`border-b border-[#D2D2D2] last:border-b-0 ${
                    isActive ? "pb-0" : "pb-5 lg:pb-[2.16cqw]"
                  }`}
                >
                  <h3>
                    <button
                      id={triggerId}
                      type="button"
                      onClick={() => setActive(isActive ? null : i)}
                      aria-expanded={isActive}
                      aria-controls={panelId}
                      className={`clash-display grid w-full grid-cols-[1.5rem_minmax(0,1fr)] items-start gap-x-3 text-left text-[1.0625rem] font-medium leading-[1.4] transition-colors duration-300 motion-reduce:transition-none focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a36e3d] lg:grid-cols-[1.89cqw_minmax(0,1fr)] lg:text-[clamp(1rem,1.51cqw,1.375rem)] ${
                        i === 0 ? "pt-0" : "pt-5 lg:pt-[2.16cqw]"
                      } ${isActive ? "lg:gap-x-[1.42cqw]" : "lg:gap-x-[1.89cqw]"} ${
                        isActive
                          ? "text-[#D9B061]"
                          : "text-[#282828] hover:text-[#D9B061]"
                      }`}
                    >
                      <span>{String(i + 1).padStart(2, "0")}</span>
                      <span className="min-w-0">{service.title}</span>
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    ref={(element) => {
                      panelRefs.current[i] = element;
                    }}
                    role="region"
                    aria-labelledby={triggerId}
                    aria-hidden={!isActive}
                    inert={!isActive}
                    className="overflow-hidden"
                  >
                    <p className="urbanist pt-1.5 pb-2 pl-9 text-[0.875rem] leading-[1.7] text-[#777777] lg:pt-[0.47cqw] lg:pb-[0.5cqw] lg:pl-[3.31cqw] lg:text-[clamp(0.75rem,1.17cqw,1.0625rem)]">
                      {service.text}
                    </p>
                  </div>
                </div>
              );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
