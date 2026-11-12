"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    title: "Dreams From My Grandfather",
    image: "/A.D-Bradley-2-1-rmb2b7umq4sh848agcn1u43quxocd9dl8nfiepk9vk.png",
    alt: "Dreams From My Grandfather by A. D. Bradley book cover",
  },
  {
    title: "God Carried Me",
    image: "/Group-33-rmb2b9qb3sv1vc5k5dgaz3mo1pf2snl1wwqhd9hhj4.png",
    alt: "God Carried Me and additional book cover designs",
  },
  {
    title: "Faith Over Feelings",
    image: "/image-95-rmb2bcjtoaywu61gowo6okx1tv16fqw8xaoxt3db0g.png",
    alt: "Faith Over Feelings and additional book cover designs",
  },
  {
    title: "Laflaps",
    image: "/Laflaps-2-rmb0yhvsha3ffr00yah7lepmdxtfe1ygji3gwdswe8.png",
    alt: "Laflaps: Living a Fruitful Life After Prison System book cover",
  },
  {
    title: "The Adventure of Scott and Lenny",
    image: "/Leonard-2-1-rmb2bao5amwc6y46zvuxjle4n3ag0cos91dyujg3cw.png",
    alt: "The Adventure of Scott and Lenny book cover",
  },
  {
    title: "Through the Eye of the Storm",
    image: "/The-Storm-2-rmb0yg043m0usj2r99nygf6p762oynqzv8shxtvoqo.png",
    alt: "Through the Eye of the Storm book cover",
  },
];

function ProjectCard({
  project,
  projectIndex,
}: {
  project: (typeof projects)[number];
  projectIndex: number;
}) {
  return (
    <article data-portfolio-card className="flex w-[78vw] min-w-0 shrink-0 snap-start flex-col sm:w-[42vw] lg:w-auto">
      <div className="flex h-[250px] items-center justify-center rounded-[12px] border border-[#E7E5DF] bg-[#EEEDE8] px-7 py-7 sm:h-[270px] lg:h-[280px]">
        <div className="relative h-full w-full max-w-[280px]">
          <Image
            src={project.image}
            alt={project.alt}
            fill
            sizes="(min-width: 640px) 280px, 65vw"
            className="object-contain drop-shadow-[0_8px_8px_rgba(40,40,40,0.12)]"
          />
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <h3 className="clash-display text-[20px] font-medium leading-[1.2] text-[#282828]">
          {project.title}
        </h3>
        <span aria-hidden="true" className="urbanist shrink-0 pt-1 text-xs tabular-nums text-[#999999]">{String(projectIndex + 1).padStart(2, "0")}</span>
      </div>
      <a
        href="/contact"
        className="urbanist group mt-auto inline-flex w-fit items-center gap-3 pt-4 text-[13px] font-medium text-[#282828] transition-colors hover:text-[#8A6A35] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a36e3d]"
      >
        Discuss a similar project
        <FiArrowRight aria-hidden="true" className="text-[16px] text-[#A87932] motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover:translate-x-1" />
      </a>
    </article>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);

    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        const header = section.querySelector("[data-portfolio-header]");
        const cards = section.querySelectorAll("[data-portfolio-card]");
        const button = section.querySelector("[data-portfolio-cta]");

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            once: true,
          },
        });

        if (header) {
          timeline.from(header, {
            y: 20,
            autoAlpha: 0,
            duration: 0.6,
            ease: "power2.out",
          });
        }

        if (cards.length) {
          timeline.from(
            cards,
            {
              y: 26,
              autoAlpha: 0,
              duration: 0.55,
              stagger: 0.12,
              ease: "power2.out",
            },
            "-=0.25",
          );
        }

        if (button) {
          timeline.from(
            button,
            {
              y: 10,
              autoAlpha: 0,
              duration: 0.4,
              ease: "power2.out",
            },
            "-=0.2",
          );
        }
      }, section);

      return () => context.revert();
    });

    return () => media.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-spacing w-full bg-[#F7F7F7] px-4 sm:px-6 lg:px-[5%]">
      <div className="mx-auto w-full max-w-[1240px]">
        <header data-portfolio-header className="mb-8 flex flex-col gap-5 border-b border-[#D9D9D5] pb-7 sm:mb-10 sm:pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[760px]">
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-4 w-4 rounded-full border-3 border-[#282828] bg-[#D9B061]"
            />
            <span className="urbanist text-[16px] font-light text-[#777777]">
              Projects
            </span>
          </div>
          <h2 className="clash-display mt-3 max-w-full break-words text-balance text-[2rem] font-medium leading-[1.1] text-[#282828] sm:text-[clamp(2.25rem,4.2vw,3.5rem)]">
            Stories, thoughtfully covered.
          </h2>
          <p className="urbanist mt-3 max-w-[680px] text-[15px] leading-[1.7] text-[#777777] sm:text-base">
            A selection of book covers designed to give each story its own clear and memorable first impression.
          </p>
          </div>
          <p className="urbanist shrink-0 text-sm tracking-wide text-[#777777]">BOOK DESIGN <span className="mx-2 text-[#D9B061]">/</span> 01—06</p>
        </header>

        <div
          role="region"
          aria-label="Portfolio projects"
          tabIndex={0}
          className="-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-5 overflow-x-auto overscroll-x-contain px-4 pb-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9B061] [scrollbar-width:thin] sm:-mx-6 sm:scroll-px-6 sm:gap-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-x-7 lg:gap-y-10 lg:overflow-visible lg:p-0"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} projectIndex={index} />
          ))}
        </div>

        <div className="mt-9 flex flex-col items-center justify-between gap-5 border-t border-[#D9D9D5] pt-7 text-center sm:mt-10 sm:flex-row sm:text-left">
          <p className="clash-display text-xl font-medium text-[#282828]">Have a story ready for its cover?</p>
          <a
            href="/contact"
            data-portfolio-cta
            className="urbanist inline-flex items-center gap-2 rounded-full bg-[#D9B061] py-1.5 pl-4 pr-1.5 text-[16px] font-medium text-[#282828] shadow-[0_8px_16px_rgba(0,0,0,0.2)] transition-all duration-200 hover:bg-accent-hover hover:shadow-[0_11px_20px_rgba(0,0,0,0.22)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#282828] "
          >
            Start a Project
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#282828] text-lg leading-none text-[#D9B061]">
              <FiArrowUpRight aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
