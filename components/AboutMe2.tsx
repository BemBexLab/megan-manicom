"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const stats = [
  { value: 100, suffix: "+", label: "Projects Completed" },
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Years of Experience" },
];

export default function AboutMe2() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);

    const statValues = gsap.utils.toArray<HTMLElement>("[data-about-stat-value]", section);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      statValues.forEach((element) => {
        element.textContent = `${element.dataset.target}${element.dataset.suffix ?? ""}`;
      });
    }

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
          )
          .from(
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

        statValues.forEach((element) => {
          const target = Number(element.dataset.target);
          const counter = { value: 0 };

          gsap.to(counter, {
            value: target,
            duration: 1.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
              once: true,
            },
            onUpdate: () => {
              element.textContent = `${Math.round(counter.value)}${element.dataset.suffix ?? ""}`;
            },
          });
        });
      }, section);

      return () => context.revert();
    });

    return () => media.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="about-me-title"
      className="section-spacing w-full bg-[#F7F7F7] px-4 sm:px-6 lg:px-[5%]"
    >
      <div className="mx-auto grid w-full max-w-[1420px] grid-cols-1 items-start gap-9 [container-type:inline-size] lg:grid-cols-[0.83fr_1fr] lg:gap-[9.5%]">
        <div data-about-portrait className="relative mx-auto aspect-[442/496] w-full max-w-[520px] overflow-hidden rounded-[20px] bg-white lg:mx-0 lg:max-w-none">
          <Image
            src="/3d10acc26a868a5485f246941722d40e2d5993dc.webp"
            alt="Megan Manicom"
            fill
            sizes="(min-width: 1578px) 583px, (min-width: 1024px) 37vw, (min-width: 568px) 520px, calc(100vw - 32px)"
            className="object-cover object-center"
          />
        </div>

        <div data-about-content className="min-w-0">
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-[9px] w-[9px] shrink-0 rounded-full border-3 border-[#282828] bg-[#D9B061] min-[850px]:h-[0.95cqw] min-[850px]:w-[0.95cqw]"
            />
            <span className="urbanist text-[12px] leading-[1.4] text-[#777777] lg:text-[clamp(12px,1.17cqw,16px)]">
              About Me
            </span>
          </div>

          <h2
            id="about-me-title"
            className="clash-display font-clash mt-3 text-[2rem] font-medium leading-[1.25] tracking-tight text-[#282828] sm:text-[2.5rem] lg:text-[clamp(32px,3.5cqw,50px)]"
          >
            Turning Creativity Into Something Meaningful.
          </h2>

          <div className="urbanist mt-3 space-y-3 text-[14px] leading-[1.72] text-[#777777] lg:text-[clamp(12px,1.17cqw,16px)]">
            <p>Hi, I&apos;m Megan!</p>
            <p>
              I&apos;ve always believed that every great idea deserves the
              opportunity to shine. Whether it&apos;s a story waiting to be
              published, a brand looking to grow, or a creative concept ready to
              take shape, I love being part of the journey that brings it to
              life.
            </p>
            <p>
              My work brings together design, storytelling, and digital
              marketing to help authors, entrepreneurs, and brands communicate
              their ideas with confidence.
            </p>
            <p>
              I enjoy the details that make each project unique, from selecting
              the right visual elements to creating content that truly resonates
              with an audience.
            </p>
            <p>
              For me, it&apos;s not just about creating something that looks
              beautiful. It&apos;s about creating something that feels
              authentic, serves a purpose, and makes a difference.
            </p>
          </div>

          <div className="mt-[26px] grid grid-cols-3 gap-2.5 sm:gap-3 lg:w-[88.5%] lg:grid-cols-[1.25fr_1fr_1.25fr]">
            {stats.map((stat) => (
              <div
                key={stat.label}
                data-about-stat
                className="flex min-h-[76px] min-w-0 flex-col justify-center rounded-[20px] border border-[#E1E1E1] bg-[#FBFBFB] px-2.5 py-3 sm:px-4 lg:min-h-[clamp(76px,7.4cqw,104px)] lg:px-[2.3cqw]"
              >
                <span
                  data-about-stat-value
                  data-target={stat.value}
                  data-suffix={stat.suffix}
                  className="clash-display font-clash text-[24px] font-medium leading-none text-[#282828] lg:text-[clamp(24px,2.4cqw,34px)]"
                >
                  0{stat.suffix}
                </span>
                <span className="urbanist mt-2 text-[11px] leading-[1.4] text-[#282828] sm:text-[12px] lg:text-[clamp(11px,1.17cqw,16px)]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="/work"
            className="urbanist mt-6 inline-flex items-center gap-2 rounded-full bg-[#D9B061] py-1.5 pl-3 pr-1.5 text-[13px] font-normal text-[#282828] shadow-[0_7px_14px_rgba(0,0,0,0.18)] transition-all duration-200 hover:bg-accent-hover hover:shadow-[0_10px_18px_rgba(0,0,0,0.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#282828] lg:text-[clamp(12px,1.17cqw,16px)]"
          >
            Explore My Work
            <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-[#282828] text-[#D9B061]">
              <FiArrowUpRight aria-hidden="true" size={16} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
