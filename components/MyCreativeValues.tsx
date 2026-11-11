"use client";

import { useId, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi";

const values = [
  {
    step: "01",
    label: "Strategy And Planning",
    title: "Creativity",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966.",
  },
  {
    step: "02",
    label: "Content Strategy",
    title: "Authenticity",
    description:
      "I create thoughtful content that sounds true to your brand and builds meaningful connections with the people you want to reach.",
  },
  {
    step: "03",
    label: "Creative Execution",
    title: "Collaboration",
    description:
      "The best ideas grow through open collaboration, careful craft, and a shared commitment to creating work that matters.",
  },
  {
    step: "04",
    label: "Growth Optimization",
    title: "Meaningful Growth",
    description:
      "Every detail has a purpose: helping your brand grow with a clear voice, considered strategy, and lasting impact.",
  },
];

export default function MyCreativeValues() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const panelId = useId();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        section.querySelectorAll<HTMLElement>("[data-values-reveal]").forEach((element) => {
          gsap.fromTo(
            element,
            { y: 20, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.65,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
              scrollTrigger: {
                trigger: element,
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
    <section ref={sectionRef} className="section-spacing w-full bg-[#F5F5F5] px-4 sm:px-6 lg:flex lg:min-h-[492px] lg:items-center lg:px-8 2xl:px-6">
      <div className="mx-auto grid w-full max-w-[1420px] grid-cols-1 items-center gap-9 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div data-values-reveal>
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-[9px] w-[9px] rounded-full border-3 border-[#282828] bg-[#D9B061] min-[850px]:h-[0.95cqw] min-[850px]:w-[0.95cqw]"
            />
            <span className="urbanist text-[16px] text-[#777777]">
              My Creative Values
            </span>
          </div>

          <h2 className="clash-display my-2 max-w-full text-[2rem] font-medium leading-[1.05] text-[#282828] sm:text-[clamp(2.25rem,4.2vw,3.5rem)]">
            The Values Behind My Work.
          </h2>

          <p className="urbanist mt-3 max-w-[630px] text-[16px] leading-[1.7] text-[#777777]">
            My work is guided by creativity, authenticity, and a passion for
            meaningful connections. I believe in thoughtful design, open
            collaboration, and delivering quality work that reflects each
            client&apos;s unique vision and brings their ideas to life.
          </p>

          <Link
            href="/contact"
            className="urbanist mt-8 inline-flex items-center gap-2 rounded-full bg-[#D9B061] py-1.5 pl-4 pr-1.5 text-[16px] font-medium text-[#282828] shadow-[0_7px_14px_rgba(0,0,0,0.18)] transition-all duration-200 hover:bg-accent-hover hover:shadow-[0_10px_18px_rgba(0,0,0,0.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#282828] lg:mt-[36px]"
          >
            Let&apos;s Create Together
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#282828] text-[#D9B061]">
              <FiArrowUpRight aria-hidden="true" size={16} />
            </span>
          </Link>
        </div>

        <div data-values-reveal className="w-full min-w-0">
          <div className="relative grid grid-cols-4 lg:-left-[3.86%] lg:w-[92.73%]">
            <span
              aria-hidden="true"
              className="absolute left-[12.5%] right-[12.5%] top-5 h-[2px] bg-[#DDDDDD]"
            >
              <span
                data-values-progress
                className="block h-full w-full origin-left bg-[#D9B061] transition-transform duration-500 ease-in-out motion-reduce:transition-none"
                style={{ transform: `scaleX(${activeIndex / (values.length - 1)})` }}
              />
            </span>
            {values.map((value, index) => {
              const isActive = index === activeIndex;
              const isComplete = index < activeIndex;

              return (
                <button
                  key={value.step}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show ${value.label}`}
                  aria-pressed={isActive}
                  aria-current={isActive ? "step" : undefined}
                  aria-controls={`${panelId}-${index}`}
                  className="group relative z-10 flex min-w-0 flex-col items-center text-center focus-visible:rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a36e3d]"
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full border text-[15px] transition-[background-color,border-color,color,box-shadow] duration-300 motion-reduce:transition-none ${
                      isActive
                        ? "border-[#D9B061] bg-[#D9B061] text-[#FFFFFF] shadow-[0_4px_8px_rgba(0,0,0,0.12)] group-hover:bg-accent-hover"
                        : isComplete
                          ? "border-[#D9B061] bg-[#FBF3E1] text-[#8F633D] group-hover:bg-[#F5E6C8]"
                        : "border-[#E7E7E7] bg-[#FCFCFC] text-[#282828] group-hover:border-[#D9B061] group-hover:bg-[#FBF3E1]"
                    }`}
                  >
                    {value.step}
                  </span>
                  <span
                    className={`urbanist mt-3 max-w-[100px] text-[13px] leading-[1.35] transition-colors duration-200 group-hover:text-[#A87932] ${
                      isActive ? "text-[#282828]" : isComplete ? "text-[#8F633D]" : "text-[#B8B8B8]"
                    }`}
                  >
                    {value.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            aria-live="polite"
            aria-atomic="true"
            className="mt-7 grid min-h-[100px] rounded-[20px] border border-[#E1E1E1] bg-white/70 px-5 py-4 sm:px-[18px] lg:mt-[31px]"
          >
            {values.map((value, index) => (
              <div
                key={value.step}
                id={`${panelId}-${index}`}
                role="region"
                aria-label={value.title}
                aria-hidden={index !== activeIndex}
                inert={index !== activeIndex}
                className={`min-w-0 [grid-area:1/1] transition-[opacity,transform] ease-out motion-reduce:transition-none ${
                  index === activeIndex
                    ? "z-10 translate-y-0 opacity-100 duration-300 delay-100"
                    : "pointer-events-none translate-y-2 opacity-0 duration-150"
                }`}
              >
                <h3 className="clash-display text-[18px] font-medium leading-[1.35] text-[#282828] 2xl:text-[20px]">
                  {value.title}
                </h3>
                <p className="urbanist mt-2 text-[13px] leading-[1.55] text-[#777777] 2xl:text-[16px]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-2.5 lg:mt-4">
            <button
              type="button"
              onClick={() =>
                setActiveIndex((current) => Math.max(0, current - 1))
              }
              disabled={activeIndex === 0}
              aria-label="Previous value"
              className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#D9B061] text-[#FFFFFF] transition-all duration-200 hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#282828] disabled:cursor-not-allowed disabled:bg-[#E6C5A2]"
            >
              <FiArrowLeft aria-hidden="true" size={18} />
            </button>
            <button
              type="button"
              onClick={() =>
                setActiveIndex((current) =>
                  Math.min(values.length - 1, current + 1),
                )
              }
              disabled={activeIndex === values.length - 1}
              aria-label="Next value"
              className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#D9B061] text-[#FFFFFF] transition-all duration-200 hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#282828] disabled:cursor-not-allowed disabled:bg-[#E6C5A2]"
            >
              <FiArrowRight aria-hidden="true" size={18} />
            </button>
            <p className="urbanist ml-auto text-[13px] tabular-nums text-[#777777]">
              Step <span className="font-medium text-[#282828]">{activeIndex + 1}</span> of {values.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
