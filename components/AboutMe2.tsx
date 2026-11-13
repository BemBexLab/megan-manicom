"use client";

import { useEffect, useId, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export type AboutMe2Props = {
  eyebrowText: string;
  heading: string;
  text: string | string[];
  imageSrc: ImageProps["src"];
  imageAlt: string;
  imageClassName?: string;
  stats: {
    value: number;
    suffix?: string;
    label: string;
  }[];
  buttonLabel: string;
  buttonHref: string;
};

export default function AboutMe2({
  eyebrowText,
  heading,
  text,
  imageSrc,
  imageAlt,
  imageClassName = "object-cover object-center",
  stats,
  buttonLabel,
  buttonHref,
}: AboutMe2Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const headingId = useId();
  const paragraphs = Array.isArray(text) ? text : [text];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);

    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            once: true,
          },
        });

        timeline
          .from("[data-about-portrait]", {
            x: -22,
            autoAlpha: 0,
            duration: 0.7,
            ease: "power2.out",
          })
          .from(
            "[data-about-content]",
            {
              x: 18,
              autoAlpha: 0,
              duration: 0.6,
              ease: "power2.out",
            },
            "-=0.4",
          );

        if (section.querySelector("[data-about-stat]")) {
          timeline.from(
            "[data-about-stat]",
            {
              y: 12,
              autoAlpha: 0,
              duration: 0.45,
              stagger: 0.1,
              ease: "power2.out",
            },
            "-=0.3",
          );
        }
      }, section);

      return () => context.revert();
    });

    return () => media.revert();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add({
      animate: "(prefers-reduced-motion: no-preference)",
      reduce: "(prefers-reduced-motion: reduce)",
    }, (context) => {
      section.querySelectorAll<HTMLElement>("[data-about-stat-value]").forEach((element) => {
        const target = Number(element.dataset.target);
        const suffix = element.dataset.suffix ?? "";
        if (context.conditions?.reduce) {
          element.textContent = `${target}${suffix}`;
          return;
        }

        element.textContent = `0${suffix}`;
        const counter = { value: 0 };
        const decimals = String(target).split(".")[1]?.length ?? 0;
        gsap.to(counter, {
          value: target,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: element, start: "top 90%", once: true },
          onUpdate: () => {
            element.textContent = `${counter.value.toFixed(decimals)}${suffix}`;
          },
        });
      });
    });

    return () => media.revert();
  }, [stats]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby={headingId}
      className="section-spacing w-full bg-[#F7F7F7] px-4 sm:px-6 lg:px-[5%]"
    >
      <div className="mx-auto grid w-full grid-cols-1 items-start gap-9 [container-type:inline-size] lg:grid-cols-[0.83fr_1fr] lg:gap-[9.5%]">
        <div data-about-portrait className="relative mx-auto aspect-[442/496] w-full max-w-[32.5rem] overflow-hidden rounded-[1.25rem] lg:mx-0 lg:max-w-none">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 37vw, (min-width: 568px) 520px, calc(100vw - 32px)"
            className={imageClassName}
          />
        </div>

        <div data-about-content className="min-w-0">
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-4 w-4 rounded-full border-3 border-[#282828] bg-[#D9B061]"
            />
            <span className="urbanist text-[0.75rem] leading-[1.4] text-[#777777] lg:text-[clamp(0.75rem,1.17cqw,1rem)]">
              {eyebrowText}
            </span>
          </div>

          <h2
            id={headingId}
            className="clash-display font-clash mt-3 text-[2rem] font-medium leading-[1.25] tracking-tight text-[#282828] sm:text-[2.5rem] lg:text-[clamp(2rem,3.5cqw,3.125rem)]"
          >
            {heading}
          </h2>

          <div className="urbanist mt-3 space-y-3 text-[0.875rem] leading-[1.72] text-[#777777] lg:text-[clamp(0.75rem,1.17cqw,1rem)]">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {stats.length > 0 && <div className="mt-[1.625rem] grid grid-cols-3 gap-2.5 sm:gap-3 lg:w-[88.5%] lg:grid-cols-[1.25fr_1fr_1.25fr]">
            {stats.map((stat) => (
              <div
                key={stat.label}
                data-about-stat
                className="flex min-h-[4.75rem] min-w-0 flex-col justify-center rounded-[1.25rem] border border-[#E1E1E1] bg-[#FBFBFB] px-2.5 py-3 sm:px-4 lg:min-h-[clamp(4.75rem,7.4cqw,6.5rem)] lg:px-[2.3cqw]"
              >
                <span
                  data-about-stat-value
                  data-target={stat.value}
                  data-suffix={stat.suffix}
                  className="clash-display font-clash text-[1.5rem] font-medium leading-none text-[#282828] lg:text-[clamp(1.5rem,2.4cqw,2.125rem)]"
                >
                  0{stat.suffix}
                </span>
                <span className="urbanist mt-2 text-[0.6875rem] leading-[1.4] text-[#282828] sm:text-[0.75rem] lg:text-[clamp(0.6875rem,1.17cqw,1rem)]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>}

          <Link
            href={buttonHref}
            className="urbanist mt-6 inline-flex items-center gap-2 rounded-full bg-[#D9B061] py-1.5 pl-3 pr-1.5 text-[0.8125rem] font-normal text-[#282828] shadow-[0_0.4375rem_0.875rem_rgba(0,0,0,0.18)] transition-all duration-200 hover:bg-accent-hover hover:shadow-[0_0.625rem_1.125rem_rgba(0,0,0,0.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#282828] lg:text-[clamp(0.75rem,1.17cqw,1rem)]"
          >
            {buttonLabel}
            <span className="flex h-[1.625rem] w-[1.625rem] shrink-0 items-center justify-center rounded-full bg-[#282828] text-[#D9B061]">
              <FiArrowUpRight aria-hidden="true" size="1rem" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
