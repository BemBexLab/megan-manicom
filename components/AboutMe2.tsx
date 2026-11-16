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
      className="section-spacing w-full bg-[#F5F5F5] px-5 sm:px-6 lg:px-[5.1%]"
    >
      <div className="mx-auto grid w-full grid-cols-1 items-start gap-x-9 gap-y-6 [container-type:inline-size] lg:grid-cols-[0.83fr_1fr] lg:gap-x-[9.5%] lg:gap-y-[2.14vw]">
        <div data-about-portrait className="relative mx-auto aspect-[442/496] w-full max-w-2xl overflow-hidden rounded-[1.25rem] lg:mx-0 lg:aspect-auto lg:max-w-none lg:self-stretch lg:rounded-[1.85cqw]">
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
            <span className="urbanist text-[0.75rem] leading-[1.4] text-[#777777] lg:text-[1.17cqw]">
              {eyebrowText}
            </span>
          </div>

          <h2
            id={headingId}
            className="clash-display font-clash mt-3 text-[2rem] font-medium leading-[1.25] tracking-normal text-[#282828] sm:text-[2.5rem] lg:mt-[0.85cqw] lg:text-[clamp(2rem,3.72cqw,4rem)] lg:leading-[1.22]"
          >
            {heading}
          </h2>

          <div className="urbanist mt-3 space-y-3 text-base leading-[1.7] text-[#777777] lg:mt-[0.85cqw] lg:space-y-[1.1cqw]">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {stats.length > 0 && <div className="mt-[1.625rem] grid grid-cols-3 gap-2.5 sm:gap-3 lg:mt-[2.8cqw] lg:w-[88.5%] lg:grid-cols-[1.25fr_1fr_1.25fr] lg:gap-[1.04cqw]">
            {stats.map((stat) => (
              <div
                key={stat.label}
                data-about-stat
                className="flex min-h-[4.75rem] min-w-0 flex-col justify-center rounded-[1.25rem] border border-[#DDDDDD] bg-[#FBFBFB] px-2.5 py-3 sm:px-4 lg:min-h-[7.3cqw] lg:rounded-[1.5cqw] lg:px-[2.3cqw]"
              >
                <span
                  data-about-stat-value
                  data-target={stat.value}
                  data-suffix={stat.suffix}
                  className="clash-display font-clash text-[1.5rem] font-medium leading-none text-[#282828] lg:text-[2.4cqw]"
                >
                  0{stat.suffix}
                </span>
                <span className="urbanist mt-2 text-[0.6875rem] leading-[1.4] text-[#282828] sm:text-[0.75rem] lg:mt-[0.8cqw] lg:text-[1.17cqw]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>}
        </div>
        <div data-about-cta className="min-w-0 lg:col-start-2">
          <Link
            href={buttonHref}
            className="urbanist inline-flex min-h-11 items-center gap-2 rounded-full bg-[#D9B061] py-1.5 pl-3 pr-1.5 text-[0.8125rem] font-normal text-[#282828] shadow-[0_0.4375rem_0.875rem_rgba(0,0,0,0.18)] transition-all duration-200 hover:bg-accent-hover hover:shadow-[0_0.625rem_1.125rem_rgba(0,0,0,0.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#282828] lg:min-h-[3.7cqw] lg:gap-[0.55cqw] lg:py-[0.55cqw] lg:pl-[1.16cqw] lg:pr-[0.55cqw] lg:text-[1.17cqw]"
          >
            {buttonLabel}
            <span className="flex h-[1.625rem] w-[1.625rem] shrink-0 items-center justify-center rounded-full bg-[#282828] text-[#D9B061] lg:size-[2.5cqw]">
              <FiArrowUpRight data-button-arrow="up-right" aria-hidden="true" size="1rem" className="lg:size-[1.5cqw]" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
