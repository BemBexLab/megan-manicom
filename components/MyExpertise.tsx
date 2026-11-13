"use client";

import { useLayoutEffect, useRef, type CSSProperties } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const expertise = [
  {
    number: "01",
    title: "Social Media Marketing",
    text: "Creating engaging content and thoughtful strategies that help brands build their presence and connect with their audience.",
  },
  {
    number: "02",
    title: "Book Cover & eBook Design",
    text: "Designing visually appealing book covers and carefully formatted interiors that enhance the reading experience.",
  },
  {
    number: "03",
    title: "Author Branding & Book Marketing",
    text: "Helping authors establish their identity, promote their work, and connect with readers through creative marketing.",
  },
  {
    number: "04",
    title: "Publishing Support",
    text: "Supporting authors through the design, formatting, and preparation stages of bringing their books to market.",
  },
];

export default function MyExpertise() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();

    media.add({
      desktop: "(min-width: 1200px)",
      motion: "(prefers-reduced-motion: no-preference)",
    }, (mediaContext) => {
      if (!mediaContext.conditions?.motion) return;
      const isDesktop = mediaContext.conditions.desktop;
      const context = gsap.context(() => {
        section.querySelectorAll<HTMLElement>("[data-expertise-card]").forEach((card) => {
          gsap.fromTo(
            card,
            { x: isDesktop ? 48 : 0, y: isDesktop ? 0 : 16, autoAlpha: 0 },
            {
              x: 0,
              y: 0,
              autoAlpha: 1,
              duration: 0.7,
              ease: "power3.out",
              clearProps: "transform,opacity,visibility",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                once: true,
              },
            },
          );
        });
      }, section);

      return () => context.revert();
    });

    return () => media.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="expertise-title"
      className="section-spacing w-full min-w-0 bg-[#F5F5F5] px-4 sm:px-6 min-[75rem]:overflow-x-clip min-[75rem]:px-[5%]"
    >
      <div className="mx-auto w-full min-[75rem]:[container-type:inline-size]">
        <div className="grid grid-cols-1 items-start gap-10 sm:gap-12 min-[75rem]:grid-cols-2 min-[75rem]:gap-x-[1.2%] min-[75rem]:gap-y-0">
          <div className="min-w-0 max-w-[42rem] min-[75rem]:max-w-none">
            <div className="flex items-center gap-2 min-[75rem]:gap-[0.85cqw]">
              <span
                aria-hidden="true"
                className="h-4 w-4 shrink-0 rounded-full border-3 border-[#282828] bg-[#D9B061]"
              />
              <span className="urbanist text-sm leading-[1.5] text-[#777777] min-[75rem]:text-[clamp(0.75rem,1.13cqw,1rem)]">
                My Expertise
              </span>
            </div>

            <h2
              id="expertise-title"
              className="clash-display mt-3 break-words text-[clamp(1.75rem,5vw,2.5rem)] font-medium leading-[1.2] text-[#282828] min-[75rem]:mt-[0.7cqw] min-[75rem]:text-[clamp(2rem,3.56cqw,3.1875rem)]"
            >
              Helping Great Ideas Find Their Place.
            </h2>

            <p className="urbanist mt-4 text-[0.9375rem] leading-[1.7] text-[#777777] min-[75rem]:mt-[1.32cqw] min-[75rem]:text-[clamp(0.75rem,1.17cqw,1.0625rem)]">
              I bring together creativity, design, and marketing to help
              individuals and businesses turn their visions into engaging
              experiences.
            </p>

            <Link
              href="/work"
              className="urbanist mt-7 inline-flex w-fit max-w-full items-center gap-2 rounded-full bg-[#D9B061] py-1.5 pl-3 pr-1.5 text-sm text-[#282828] shadow-[0_0.5rem_0.75rem_rgba(0,0,0,0.18)] transition-all duration-200 hover:bg-accent-hover hover:shadow-[0_0.6875rem_1.0625rem_rgba(0,0,0,0.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#282828] min-[75rem]:mt-[2.35cqw] min-[75rem]:gap-[0.66cqw] min-[75rem]:py-[0.56cqw] min-[75rem]:pl-[1.13cqw] min-[75rem]:pr-[0.56cqw] min-[75rem]:text-[clamp(0.75rem,1.13cqw,1rem)]"
            >
              Discover My Services
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#282828] text-[#D9B061] min-[75rem]:h-[2.63cqw] min-[75rem]:w-[2.63cqw]">
                <FiArrowUpRight
                  aria-hidden="true"
                  size="1.125rem"
                  className="min-[75rem]:h-[1.69cqw] min-[75rem]:w-[1.69cqw]"
                />
              </span>
            </Link>
          </div>

          <ol
            aria-label="Areas of expertise"
            className="isolate grid w-full min-w-0 list-none grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 min-[75rem]:block"
          >
            {expertise.map((item, index) => (
              <li
                key={item.number}
                data-expertise-card
                className="relative min-w-0 rounded-lg border border-[#E1E1E1] border-t-[0.1875rem] border-t-[#D9B061] bg-[#FBFBFB] p-5 sm:p-6 min-[75rem]:min-h-[15.96cqw] min-[75rem]:rounded-none min-[75rem]:border-0 min-[75rem]:bg-transparent min-[75rem]:bg-[length:100%_100%] min-[75rem]:bg-no-repeat min-[75rem]:px-[2.04cqw] min-[75rem]:pb-[3.75cqw] min-[75rem]:pt-[1.16cqw] min-[75rem]:[background-image:var(--expertise-background)] min-[75rem]:[&:not(:first-child)]:-mt-[3cqw]"
                style={{
                  "--expertise-background": `url("${index % 2 === 0 ? "/Union.webp" : "/Union%20(1).webp"}")`,
                } as CSSProperties}
              >
                <span
                  aria-hidden="true"
                  className="urbanist block text-sm font-medium leading-[1.2] tracking-widest text-[#946A24] min-[75rem]:pl-[0.55cqw] min-[75rem]:text-[clamp(1.125rem,1.88cqw,1.6875rem)] min-[75rem]:font-normal min-[75rem]:tracking-normal min-[75rem]:text-[#282828]"
                >
                  {item.number}
                </span>
                <h3 className="clash-display mt-4 break-words text-xl font-medium leading-[1.3] text-[#282828] min-[75rem]:mt-[1.32cqw] min-[75rem]:text-[clamp(1rem,1.76cqw,1.5625rem)]">
                  {item.title}
                </h3>
                <p className="urbanist mt-3 break-words text-[0.9375rem] leading-[1.7] text-[#555555] min-[75rem]:mt-[0.94cqw] min-[75rem]:text-[clamp(0.75rem,1.17cqw,1.0625rem)] min-[75rem]:text-[#333333]">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
