// components/AboutSection.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const stats = [
  { value: "100+", label: "Projects Completed" },
  { value: "500+", label: "Happy Clients" },
  { value: "10+", label: "Years of Experience" },
];

const features = [
  {
    title: "Creative Excellence",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: (
      <svg
        className="h-12 w-12"
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.9126 8.55896H41.1885C44.1932 8.55896 46.629 10.9948 46.629 13.9995V37.8978C46.629 40.9025 44.1932 43.3383 41.1885 43.3383H11.9126C8.9079 43.3383 6.47211 40.9025 6.47211 37.8978V13.9995C6.47211 10.9948 8.9079 8.55896 11.9126 8.55896Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#D9B061"
        />
        <path
          d="M12.1253 43.3384L10.9058 47.9149H14.6813L15.9008 43.3384M40.9748 43.3384L42.1954 47.9149H38.4199L37.2004 43.3384M12.5741 33.7669C21.3019 22.8184 31.1456 13.3257 34.1201 15.9199C37.0946 18.5142 23.3651 27.9698 26.3408 31.1356C29.3164 34.3013 34.272 23.4316 36.5985 25.2631C38.925 27.0946 33.6623 31.0591 35.4555 32.6611C37.2488 34.2631 40.0691 29.8767 40.0691 29.8767M28.8191 8.55906C28.8059 7.96614 28.5611 7.40196 28.1371 6.9873C27.7131 6.57264 27.1436 6.34045 26.5506 6.34045C25.9575 6.34045 25.388 6.57264 24.964 6.9873C24.54 7.40196 24.2952 7.96614 24.282 8.55906"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#D9B061"
        />
      </svg>
    ),
  },
  {
    title: "Client-Focused Approach",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: (
      <svg
        className="h-12 w-12"
        viewBox="0 0 51 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.0625 50.625H17.7188V47.25H5.0625C4.61512 47.2494 4.18622 47.0715 3.86987 46.7551C3.55353 46.4388 3.37556 46.0099 3.375 45.5625V32.9062H0V45.5625C0.00150743 46.9047 0.535361 48.1915 1.48444 49.1406C2.43351 50.0896 3.7203 50.6235 5.0625 50.625ZM3.375 5.0625C3.37556 4.61512 3.55353 4.18622 3.86987 3.86987C4.18622 3.55353 4.61512 3.37556 5.0625 3.375H17.7188V0H5.0625C3.7203 0.00150743 2.43351 0.535361 1.48444 1.48444C0.535361 2.43351 0.00150743 3.7203 0 5.0625V17.7188H3.375V5.0625ZM45.5625 0H32.9062V3.375H45.5625C46.0099 3.37556 46.4388 3.55353 46.7551 3.86987C47.0715 4.18622 47.2494 4.61512 47.25 5.0625V17.7188H50.625V5.0625C50.6235 3.7203 50.0896 2.43351 49.1406 1.48444C48.1915 0.535361 46.9047 0.00150743 45.5625 0ZM47.25 45.5625C47.2494 46.0099 47.0715 46.4388 46.7551 46.7551C46.4388 47.0715 46.0099 47.2494 45.5625 47.25H32.9062V50.625H45.5625C46.9047 50.6235 48.1915 50.0896 49.1406 49.1406C50.0896 48.1915 50.6235 46.9047 50.625 45.5625V32.9062H47.25V45.5625ZM40.5 25.3125C40.5 16.9383 33.6867 10.125 25.3125 10.125C16.9383 10.125 10.125 16.9383 10.125 25.3125C10.125 33.6867 16.9383 40.5 25.3125 40.5C33.6867 40.5 40.5 33.6867 40.5 25.3125ZM25.3125 37.125C22.9762 37.125 20.6924 36.4322 18.7498 35.1342C16.8073 33.8363 15.2932 31.9914 14.3992 29.8329C13.5051 27.6745 13.2712 25.2994 13.727 23.008C14.1828 20.7166 15.3078 18.6118 16.9598 16.9598C18.6118 15.3078 20.7166 14.1828 23.008 13.727C25.2994 13.2712 27.6745 13.5051 29.8329 14.3992C31.9914 15.2932 33.8363 16.8073 35.1342 18.7498C36.4322 20.6924 37.125 22.9762 37.125 25.3125C37.1215 28.4443 35.8758 31.4468 33.6613 33.6613C31.4468 35.8758 28.4443 37.1215 25.3125 37.125Z"
          fill="#D9B061"
        />
      </svg>
    ),
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

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
          .from("[data-about-image]", {
            x: -28,
            autoAlpha: 0,
            duration: 0.7,
            ease: "power2.out",
          })
          .from(
            "[data-about-copy] > *",
            {
              y: 18,
              autoAlpha: 0,
              duration: 0.55,
              stagger: 0.1,
              ease: "power2.out",
            },
            "-=0.4",
          )
          .from(
            "[data-about-feature]",
            {
              y: 18,
              autoAlpha: 0,
              duration: 0.5,
              stagger: 0.12,
              ease: "power2.out",
            },
            "-=0.25",
          );
      }, section);

      return () => context.revert();
    });

    return () => media.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-spacing bg-[#F7F7F7]">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-5">
          {/* LEFT — Image card with stats overlay */}
          <div data-about-image className="relative mx-auto w-full max-w-[650px] lg:mx-0">
            <div className="relative aspect-[370/318] w-full overflow-hidden rounded-3xl bg-gradient-to-b from-white to-[#E9E9E9]">
              <Image
                src="/3d10acc26a868a5485f246941722d40e2d5993dc.webp"
                alt="Megan Manicom"
                fill
                quality={100}
                className="object-cover object-top"
                sizes="(min-width: 1415px) 650px, (min-width: 1024px) 46vw, calc(100vw - 48px)"
              />

              {/* Stats overlay */}
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/50 px-5 py-4 backdrop-blur-md sm:px-6">
                <div className="grid grid-cols-3 divide-x divide-black">
                  {stats.map((stat, i) => (
                    <div
                      key={stat.label}
                      className={`flex flex-col ${
                        i === 0 ? "pr-3 sm:pr-5" : "px-3 sm:px-5"
                      }`}
                    >
                      <span className="text-2xl font-medium leading-none text-[#282828] sm:text-[28px] clash-display font-clash">
                        {stat.value}
                      </span>
                      <span className="mt-2 text-[11px] leading-tight text-[#282828] sm:text-[15px] urbanist">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Content */}
          <div data-about-copy className="flex flex-col">
            {/* Label */}
            <div className="flex items-center gap-1.5">
              <span
                aria-hidden="true"
                className="h-[9px] w-[9px] rounded-full border-3 border-[#282828] bg-[#D9B061] min-[850px]:h-[0.95cqw] min-[850px]:w-[0.95cqw]"
              />
              <span className="urbanist text-[16] text-[#777777] urbanist">
                About Me
              </span>
            </div>

            {/* Heading */}
            <h2
              className={`clash-display font-clash mt-4 max-w-[700px] text-[clamp(2.25rem,4.2vw,3.5rem)] font-medium leading-[1.15] tracking-tight text-[#282828]`}
            >
              The Mind Behind The Creativity
            </h2>

            {/* Paragraph */}
            <p className="urbanist mt-6 max-w-[700px] text-[16] leading-relaxed text-[#777777]">
              I&apos;m a passionate social media marketer who loves turning
              ideas into content that connects. My focus is helping brands tell
              their stories and build a memorable online presence.
            </p>

            {/* Feature cards */}
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  data-about-feature
                  className="rounded-3xl border border-gray-200 bg-white/60 p-6"
                >
                  <div className="text-[#D9A066]">{feature.icon}</div>
                  <h3 className="mt-6 text-base font-medium text-[#282828] clash-display">
                    {feature.title}
                  </h3>
                  <p className="urbanist mt-2 text-[14px] leading-relaxed text-[#777777]">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
