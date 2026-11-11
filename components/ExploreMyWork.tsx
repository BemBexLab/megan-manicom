"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const projects = [
  {
    category: "Social Media Marketing",
    title: "Creating Content That Connects",
    image: "/5f3cfe8a922f3706cc0bf386d1fc679aed5030d9.webp",
    imageAlt: "Laptop and phone on a creative workspace desk",
  },
  {
    category: "Ebook Design & Formatting",
    title: "Bringing Every Page to Life",
    image: "/547ad26614441f4e48ee3ef03e7b75e0bf59a408.webp",
    imageAlt: "Carefully designed book cover and pages",
  },
  {
    category: "Social Media Strategy",
    title: "Turning Ideas Into Impactful Strategies",
    image: "/3c9f5242ffe941cc07c5c01c35ea3ca9ce43ee6f.webp",
    imageAlt: "Digital marketing analytics on a computer screen",
  },
  {
    category: "Book Cover Design",
    title: "Making Every Story Stand Out",
    image: "/2be2c57951af1f027336a8025ad175bf08161f4d.webp",
    imageAlt: "An open book among other books",
  },
  {
    category: "Author Branding",
    title: "Building a Memorable Identity",
    image: "/f370d0a9467acf876add9030e5189e7664816bfe.webp",
    imageAlt: "A book cover held in front of a light background",
  },
  {
    category: "Illustration & Creative Design",
    title: "Turning Imagination Into Art",
    image: "/95aea43fab41f2258ac127c3a3f97d11dc60b2aa.webp",
    imageAlt: "Colorful artwork in a gallery",
  },
];

const projectDescription =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.";

export default function ExploreMyWork() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        const header = section.querySelector<HTMLElement>("[data-work-header]");
        if (header) {
          gsap.fromTo(
            header,
            { y: 18, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.6,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
              scrollTrigger: {
                trigger: header,
                start: "top 88%",
                once: true,
              },
            },
          );
        }

        section.querySelectorAll<HTMLElement>("[data-work-card]").forEach((card) => {
          const image = card.querySelector("img");
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
          });

          timeline.fromTo(
            card,
            { x: 24, autoAlpha: 0 },
            {
              x: 0,
              autoAlpha: 1,
              duration: 0.55,
              ease: "power2.out",
              clearProps: "transform,opacity,visibility",
            },
          );

          if (image) {
            timeline.fromTo(
              image,
              { scale: 1.04 },
              { scale: 1, duration: 0.75, ease: "power2.out", clearProps: "transform" },
              0,
            );
          }
        });
      }, section);

      return () => context.revert();
    });

    return () => media.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="explore-work-title"
      className="section-spacing w-full overflow-x-clip bg-[#F7F7F7] px-4 sm:px-6 min-[850px]:px-[5%]"
    >
      <div className="mx-auto w-full max-w-[1420px] min-[850px]:[container-type:inline-size]">
        <header data-work-header className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-4 w-4 rounded-full border-3 border-[#282828] bg-[#D9B061]"
            />
            <span className="urbanist text-sm font-light tracking-wide text-[#777777] sm:text-base lg:text-[clamp(14px,1.16cqw,17px)] lg:font-normal lg:tracking-normal">
              Explore My Work
            </span>
          </div>

          <h2
            id="explore-work-title"
            className="clash-display mt-2 mb-0 max-w-full break-words text-balance text-[2rem] font-medium leading-tight text-[#282828] sm:text-[clamp(2.25rem,4.2vw,3.5rem)]"
          >
            A Glimpse Into My Creative World.
          </h2>

          <p className="urbanist mx-auto mt-0 max-w-[700px] text-[16px] leading-[1.6] text-[#777777] min-[850px]:text-[clamp(12px,1.17cqw,16px)]">
            Every project tells a different story. From memorable book covers to
            engaging digital campaigns, here&apos;s a selection of work that
            brings creativity, purpose, and attention to detail together.
          </p>
        </header>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 min-[850px]:mt-[2.2cqw] min-[850px]:gap-[1.2cqw]">
          {projects.map((project) => (
            <article
              key={project.title}
              data-work-card
              className="flex h-full min-w-0 flex-col rounded-[18px] border border-[#E1E1E1] bg-[#FBFBFB] p-2.5 min-[850px]:min-h-[35.35cqw] min-[850px]:rounded-[1.55cqw] min-[850px]:p-[0.98cqw]"
            >
              <div className="relative aspect-[3/2] w-full shrink-0 overflow-hidden rounded-[13px] min-[850px]:rounded-[1.28cqw]">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(min-width: 1578px) 458px, (min-width: 850px) calc(30vw - 16px), (min-width: 640px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>

              <p className="urbanist mt-3 text-[14px] leading-[1.4] text-[#D9B061] min-[850px]:mt-[1.05cqw] min-[850px]:text-[clamp(10px,1.17cqw,16px)]">
                {project.category}
              </p>
              <h3 className="clash-display mt-1 text-[20px] font-medium leading-tight text-[#282828] min-[850px]:mt-[0.42cqw] min-[850px]:text-[clamp(14px,1.45cqw,20px)]">
                {project.title}
              </h3>
              <p className="urbanist mt-2 line-clamp-2 text-[14px] leading-[1.55] text-[#777777] min-[850px]:mt-[0.58cqw] min-[850px]:text-[clamp(11px,1.17cqw,16px)] min-[850px]:leading-[1.5]">
                {projectDescription}
              </p>
              <Link
                href="/work/sub-work"
                className="urbanist group mt-3 inline-flex w-fit items-center gap-3 text-[14px] leading-[1.4] text-[#D9B061] transition-colors hover:text-[#bd8957] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a36e3d] min-[850px]:mt-[0.82cqw] min-[850px]:gap-[0.62cqw] min-[850px]:text-[clamp(11px,1.17cqw,16px)]"
              >
                Explore My Work
                <FiArrowRight
                  aria-hidden="true"
                  className="text-[19px] min-[850px]:text-[1.45cqw]"
                />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
