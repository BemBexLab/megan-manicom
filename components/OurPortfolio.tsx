"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    category: "Social Media Design",
    title: "Social Media Campaigns",
    image: "/f0c1a7f23b5187dbe6344c6429eadc4002ba0640.webp",
    alt: "Portrait for a social media campaign",
  },
  {
    category: "Brand Identity",
    title: "Building Brand Identities",
    image: "/197b5ddca3219911529632c3c6086ed6bb832514.webp",
    alt: "Minimal branded product packaging",
  },
  {
    category: "Content Strategy",
    title: "Strategic Content",
    image: "/0c2c7797fabb6552fe2de813d20747ddd623d7db.webp",
    alt: "Laptop displaying a digital workspace",
  },
  {
    category: "Ebook Design",
    title: "Stories Brought To Life",
    image: "/af27d33222924e864c4b2a41a607007e90735646.webp",
    alt: "Books arranged as an editorial design collection",
  },
];

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article data-portfolio-card className="min-w-0 w-[84vw] shrink-0 snap-center rounded-[1.375rem] border border-[#E5E5E5] bg-[#FBFBFB] p-2 sm:w-[44vw] sm:p-[0.5625rem] lg:w-auto">
      <div className="relative aspect-[1.52] overflow-hidden rounded-[1.1875rem] shadow-[0_0.5rem_0.8125rem_rgba(0,0,0,0.18)]">
        <Image
          src={project.image}
          alt={project.alt}
          width={900}
          height={592}
          sizes="(min-width: 1024px) calc((100vw - 68px) / 4), (min-width: 640px) 44vw, 84vw"
          data-portfolio-image
          className="h-full w-full object-cover"
        />
      </div>
      <p className="urbanist mt-3 text-[0.875rem] leading-[1.4] text-[#D9B061]">
        {project.category}
      </p>
      <h3 className="clash-display mt-1 text-[1.25rem] font-medium leading-tight text-[#282828]">
        {project.title}
      </h3>
      <p className="urbanist mt-2 text-[0.875rem] leading-[1.55] text-[#777777]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <a
        href="/contact"
        className="urbanist group mt-3 inline-flex items-center gap-3 pb-1 text-[0.875rem] text-[#D9B061] transition-colors hover:text-[#bd8957] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a36e3d]"
      >
        Explore My Work
        <FiArrowRight aria-hidden="true" className="text-[1.1875rem]" />
      </a>
    </article>
  );
}

export default function OurPortfolio() {
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
        const images = section.querySelectorAll("[data-portfolio-image]");
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

        if (images.length) {
          timeline.from(
            images,
            {
              scale: 1.05,
              duration: 0.75,
              stagger: 0.12,
              ease: "power2.out",
            },
            "-=0.45",
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
    <section ref={sectionRef} className="section-spacing w-full bg-[#F2F2F2] px-4 sm:px-6 lg:px-4">
      <div className="mx-auto w-full">
        <header data-portfolio-header className="mx-auto mb-7 max-w-7xl text-center sm:mb-8">
          <div className="flex items-center justify-center gap-2">
            <span
              aria-hidden="true"
              className="h-4 w-4 rounded-full border-3 border-[#282828] bg-[#D9B061]"
            />
            <span className="urbanist text-[1rem] font-light text-[#777777]">
              Portfolio
            </span>
          </div>
          <h2 className="clash-display my-2 max-w-full break-words text-balance text-[2rem] sm:text-[clamp(2.25rem,4.2vw,3.5rem)] font-medium leading-tight text-[#282828]">
            Creative Work That Speaks Volumes
          </h2>
          <p className="urbanist mx-auto mt-3 max-w-7xl text-[1rem] leading-[1.6] text-[#777777]">
            A collection of social media campaigns, creative visuals, and
            content designed to make brands stand out. Explore how I turn fresh
            ideas into engaging digital experiences.
          </p>
        </header>

        <div
          role="region"
          aria-label="Portfolio projects"
          tabIndex={0}
          className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-4 pb-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9B061] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-6 sm:gap-5 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-3 lg:overflow-visible lg:p-0"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href="/portfolio"
            data-portfolio-cta
            className="urbanist inline-flex items-center gap-2 rounded-full bg-[#D9B061] py-1.5 pl-4 pr-1.5 text-[1rem] font-medium text-[#282828] shadow-[0_0.5rem_1rem_rgba(0,0,0,0.2)] transition-all duration-200 hover:bg-accent-hover hover:shadow-[0_0.6875rem_1.25rem_rgba(0,0,0,0.22)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#282828] "
          >
            View All Projects
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#282828] text-lg leading-none text-[#D9B061]">
              <FiArrowUpRight aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
