"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowUpRight } from "react-icons/fi";

const stepPositions = [
  "lg:left-0 lg:top-0",
  "lg:right-0 lg:top-0",
  "lg:bottom-0 lg:left-0",
  "lg:bottom-0 lg:right-0",
];

const connectors = [
  "left-[20.8%] top-[22.5%]",
  "right-[20.8%] top-[22.5%] -scale-x-100",
  "bottom-[21.5%] left-[20.8%] -scale-y-100",
  "right-[20.8%] bottom-[21.5%] rotate-180",
];

// Preserve the GIF's 434 × 182 canvas and tapered curve as scalable vectors.
const connectorOutline =
  "M 0 0 C 2 29 23 51 52 51 L 280 50 C 353 50 407 105 412 168 C 405 105 352 55 280 55 L 52 54 C 22 54 0 30 0 0 Z";
const connectorCenterline =
  "M 0 0 C 1 29 23 52.5 52 52.5 H 280 C 352.5 52.5 406 105 412 168";

function ProcessConnector({ position }: { position: string }) {
  return (
    <svg
      data-process-connector
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 434 182"
      width={434}
      height={182}
      className={`pointer-events-none absolute z-0 hidden h-auto w-[25.77%] select-none lg:block ${position}`}
    >
      <path d={connectorOutline} fill="#808080" />
      <g fill="none" stroke="#D9B061" strokeLinecap="round">
        <path
          data-process-pulse
          d={connectorCenterline}
          pathLength={100}
          strokeWidth={5}
          strokeDasharray="12 88"
          strokeDashoffset={-22}
        />
      </g>
    </svg>
  );
}

type ProcessStep = {
  number?: string | number;
  title: string;
  text: string;
};

type MyCreativeProcessProps = {
  eyebrowText: string;
  heading: string;
  text: string;
  buttonLabel: string;
  buttonHref: string;
  steps: ProcessStep[];
};

function StepCard({ step, index }: { step: ProcessStep; index: number }) {
  return (
    <article
      data-process-card
      className={`relative z-10 flex min-h-[8.75rem] w-[min(84vw,22.5rem)] min-w-0 shrink-0 snap-center flex-col justify-center rounded-[1.5rem] border border-[#DDDDDD] bg-[#FBFBFB] px-4 py-5 shadow-[0_0.125rem_0.1875rem_rgba(0,0,0,0.10)] sm:w-[min(66vw,26.25rem)] lg:absolute lg:h-[27.027%] lg:min-h-0 lg:w-[24.663%] lg:rounded-[1.93cqw] lg:p-[1.2cqw] ${stepPositions[index] ?? ""}`}
    >
      {step.number !== undefined && (
        <span className="clash-display mb-3 text-sm font-semibold leading-none text-[#282828] lg:mb-[0.9cqw] lg:text-[clamp(0.75rem,1.05cqw,0.9375rem)]">
          {step.number}
        </span>
      )}
      <h3 className="clash-display text-lg font-medium leading-tight text-[#282828] lg:text-[clamp(0.9375rem,1.45cqw,1.3125rem)]">
        {step.title}
      </h3>
      <p className="urbanist mt-2 text-sm leading-[1.5] text-[#777777] lg:mt-[0.39cqw]">
        {step.text}
      </p>
    </article>
  );
}

export default function MyCreativeProcess({
  eyebrowText,
  heading,
  text,
  buttonLabel,
  buttonHref,
  steps,
}: MyCreativeProcessProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);

    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        gsap.fromTo(
          "[data-process-pulse]",
          { attr: { "stroke-dashoffset": -22 } },
          {
            attr: { "stroke-dashoffset": -122 },
            duration: 1.96,
            repeat: -1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              toggleActions: "play pause resume pause",
            },
          },
        );

        const header = section.querySelector("[data-process-header]");
        const connectors = section.querySelectorAll("[data-process-connector]");
        const cards = section.querySelectorAll("[data-process-card]");
        const button = section.querySelector("[data-process-cta]");

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            once: true,
          },
        });

        if (header) {
          timeline.from(header, {
            y: 22,
            autoAlpha: 0,
            duration: 0.65,
            ease: "power2.out",
          });
        }

        if (connectors.length) {
          timeline.from(
            connectors,
            {
              autoAlpha: 0,
              scale: 0.96,
              duration: 0.7,
              stagger: 0.1,
              ease: "power2.out",
            },
            "-=0.25",
          );
        }

        if (cards.length) {
          timeline.from(
            cards,
            {
              y: 24,
              autoAlpha: 0,
              duration: 0.55,
              stagger: 0.12,
              ease: "power2.out",
            },
            "-=0.3",
          );
        }

        if (button) {
          timeline.from(
            button,
            {
              y: 10,
              scale: 0.94,
              autoAlpha: 0,
              duration: 0.45,
              ease: "back.out(1.5)",
            },
            "-=0.25",
          );
        }
      }, section);

      return () => context.revert();
    });

    return () => media.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-spacing w-full min-w-0 overflow-hidden bg-[#FBFBFB] px-4 sm:px-6 lg:px-[6.05%]"
    >
      <div className="mx-auto w-full lg:[container-type:inline-size]">
        <header data-process-header className="mx-auto mb-9 w-full min-w-0 max-w-5xl text-center lg:mb-0 lg:max-w-none">
          <div className="flex items-center justify-center gap-2">
            <span
              aria-hidden="true"
              className="h-4 w-4 rounded-full border-3 border-[#282828] bg-[#D9B061] lg:size-[1cqw]"
            />
            <span className="urbanist text-sm font-light tracking-wide text-[#777777] sm:text-base lg:text-[clamp(0.875rem,1.16cqw,1.0625rem)] lg:font-normal lg:tracking-normal">
              {eyebrowText}
            </span>
          </div>
          <h2 className="clash-display my-2 max-w-full break-words text-balance text-[2rem] font-medium leading-tight text-[#282828] sm:text-[clamp(2.25rem,4.2vw,3.5rem)] lg:mt-[1.25cqw] lg:mb-[0.8cqw] lg:text-[clamp(2.25rem,3.82cqw,3.5rem)]">
            {heading}
          </h2>
          <p className="urbanist mx-auto mb-10 w-full max-w-5xl px-2 text-base leading-[1.7] text-[#777777] lg:mb-0 lg:max-w-[48cqw]">
            {text}
          </p>
        </header>

        <div className="relative mx-auto mt-6 w-full min-w-0 lg:mt-[0.1cqw] lg:aspect-[1038/370]">
          {connectors.map((position) => (
            <ProcessConnector
              key={position}
              position={position}
            />
          ))}

          <div
            role="region"
            aria-label="Creative process steps"
            tabIndex={0}
            className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-4 pb-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9B061] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-6 sm:gap-5 sm:px-6 lg:contents"
          >
            {steps.map((step, index) => (
              <StepCard key={step.title} step={step} index={index} />
            ))}
          </div>

          <div className="relative z-20 flex justify-center py-3 lg:absolute lg:left-1/2 lg:top-[50.811%] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:py-0">
            <a
              data-process-cta
              href={buttonHref}
              className="urbanist flex w-fit items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#D9B061] py-1.5 pl-3 pr-1.5 text-base font-medium text-[#282828] shadow-[0_0.5rem_1.125rem_rgba(0,0,0,0.18)] transition-all duration-200 hover:bg-accent-hover hover:shadow-[0_0.6875rem_1.25rem_rgba(0,0,0,0.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#282828] lg:gap-[0.55cqw] lg:py-[0.58cqw] lg:pl-[1.16cqw] lg:pr-[0.58cqw] lg:text-[clamp(0.75rem,1.16cqw,1.0625rem)] lg:font-normal"
            >
              {buttonLabel}
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#282828] text-lg leading-none text-[#D9B061] lg:h-[2.7cqw] lg:w-[2.7cqw]">
                <FiArrowUpRight data-button-arrow="up-right"
                  aria-hidden="true"
                  size="1.125rem"
                  className="lg:h-[1.74cqw] lg:w-[1.74cqw]"
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
