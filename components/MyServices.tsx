"use client";

import { useId, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const services = [
  {
    title: "Social Media Management",
    text: "Building and managing your social presence with consistent content, meaningful engagement, and a strategy tailored to your brand.",
  },
  {
    title: "Content Creation & Design",
    text: "Scroll-stopping posts, graphics, and visuals designed to reflect your brand and connect with your audience.",
  },
  {
    title: "Social Media Strategy",
    text: "A clear, goal-driven roadmap covering content planning, launch timing, and audience growth.",
  },
  {
    title: "Ebook Design & Formatting",
    text: "Clean, professional ebook layouts and formatting that are ready to publish and easy to read.",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState<number | null>(0);
  const accordionId = useId();

  return (
    <section
      aria-labelledby="services-title"
      className="bg-[#F5F5F5] px-4 py-12 sm:px-6 sm:py-14 lg:px-[5%] lg:pt-14 lg:pb-16"
    >
      <div className="mx-auto w-full max-w-[1420px] lg:[container-type:inline-size]">
        <div className="grid grid-cols-1 items-start gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1.21fr)_minmax(0,1fr)] lg:gap-x-[9.6%] lg:gap-y-0">
          <div className="flex min-w-0 flex-col">
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="h-[9px] w-[9px] rounded-full border-3 border-[#282828] bg-[#D9B061] min-[850px]:h-[0.95cqw] min-[850px]:w-[0.95cqw]"
              />
              <span className="urbanist text-sm leading-[1.5] text-[#777777] lg:text-[clamp(12px,1.13cqw,16px)]">
                My Services
              </span>
            </div>

            <h2
              id="services-title"
              className="clash-display mt-3.5 text-[2rem] font-medium leading-[1.2] text-[#282828] sm:text-[2.5rem] lg:mt-[0.94cqw] lg:text-[clamp(32px,3.76cqw,54px)]"
            >
              Creative Solutions For
              <span className="block">Your Brand</span>
            </h2>

            <p className="urbanist mt-4 text-[15px] leading-[1.7] text-[#777777] lg:mt-[1.32cqw] lg:max-w-[95%] lg:text-[clamp(12px,1.17cqw,17px)]">
              From social media strategy to engaging content creation, I offer
              creative services that help brands connect with their audience and
              grow their online presence.
            </p>

            <div className="mt-5 lg:mt-[1.79cqw]">
              <Link
                href="/contact"
                className="urbanist inline-flex items-center gap-2 rounded-full bg-[#D9B061] py-1.5 pl-3 pr-1.5 text-sm text-[#282828] shadow-[0_8px_14px_rgba(0,0,0,0.18)] transition-all duration-200 hover:bg-accent-hover hover:shadow-[0_11px_18px_rgba(0,0,0,0.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a36e3d] lg:gap-[0.66cqw] lg:py-[0.566cqw] lg:pl-[1.13cqw] lg:pr-[0.566cqw] lg:text-[clamp(12px,1.13cqw,16px)]"
              >
                Let&apos;s Talk
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#282828] text-[#D9B061] lg:h-[2.25cqw] lg:w-[2.25cqw]">
                  <FiArrowUpRight
                    aria-hidden="true"
                    size={16}
                    className="lg:h-[1.45cqw] lg:w-[1.45cqw]"
                  />
                </span>
              </Link>
            </div>

            <div className="relative mt-6 aspect-[414/195] w-full overflow-hidden rounded-[20px] lg:mt-[2.26cqw] lg:rounded-[1.89cqw]">
              <Image
                src="/home/Rectangle 4.webp"
                alt="Social media post mockups"
                fill
                className="object-cover"
                sizes="(min-width: 1578px) 703px, (min-width: 1024px) 45vw, (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
              />
            </div>
          </div>

          <div className="min-w-0">
            {services.map((service, i) => {
              const isActive = active === i;
              const triggerId = `${accordionId}-trigger-${i}`;
              const panelId = `${accordionId}-panel-${i}`;

              return (
                <div
                  key={service.title}
                  className="border-b border-[#D2D2D2] last:border-b-0"
                >
                  <h3>
                    <button
                      id={triggerId}
                      type="button"
                      onClick={() => setActive(isActive ? null : i)}
                      aria-expanded={isActive}
                      aria-controls={panelId}
                      className={`clash-display grid w-full grid-cols-[24px_minmax(0,1fr)] items-start gap-x-3 text-left text-[17px] font-medium leading-[1.4] transition-colors duration-200 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a36e3d] lg:grid-cols-[1.89cqw_minmax(0,1fr)] lg:text-[clamp(16px,1.51cqw,22px)] ${
                        i === 0 ? "pt-0" : "pt-5 lg:pt-[2.16cqw]"
                      } ${isActive ? "pb-0 lg:gap-x-[1.42cqw]" : "pb-5 lg:pb-[2.16cqw] lg:gap-x-[1.89cqw]"} ${
                        isActive
                          ? "text-[#D9B061]"
                          : "text-[#282828] hover:text-[#D9B061]"
                      }`}
                    >
                      <span>{String(i + 1).padStart(2, "0")}</span>
                      <span className="min-w-0">{service.title}</span>
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    aria-hidden={!isActive}
                    inert={!isActive}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out motion-reduce:transition-none ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="urbanist mt-1.5 pb-6 pl-9 text-[14px] leading-[1.7] text-[#777777] lg:mt-[0.47cqw] lg:pb-[2.26cqw] lg:pl-[3.31cqw] lg:text-[clamp(12px,1.17cqw,17px)]">
                        {service.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
