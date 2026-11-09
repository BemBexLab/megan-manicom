// components/ServicesSection.tsx
"use client";

import { useState } from "react";
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
  {
    title: "Gost Writing & Copywriting",
    text: "Engaging, well-researched content that speaks to your audience and drives action.",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#F5F5F5] py-7 lg:py-14">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-24">
          {/* LEFT — Intro + CTA + Image */}
          <div className="flex flex-col">
            {/* Label */}
            <div className="flex items-center gap-2.5">
              <span className="h-3 w-3 rounded-full border-2 border-[#D9A066] clash-display font-clash" />
              <span className="text-sm text-gray-500">My Services</span>
            </div>

            {/* Heading */}
            <h2 className="mt-4 max-w-[580px] text-[clamp(2.25rem,4.2vw,3.5rem)] font-medium leading-[1.15] tracking-tight text-[#2b2b2b] clash-display font-clash">
              Creative Solutions For Your Brand
            </h2>

            {/* Paragraph */}
            <p className="mt-6 max-w-[500px] text-sm leading-relaxed text-[#777777]">
              From social media strategy to engaging content creation, I offer
              creative services that help brands connect with their audience
              and grow their online presence.
            </p>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-b from-[#D9AE86] to-[#C9A47A] py-1.5 pl-6 pr-1.5 text-sm font-medium text-white shadow-[0_8px_20px_rgba(201,164,122,0.45)] transition-all duration-300 hover:shadow-[0_10px_26px_rgba(201,164,122,0.6)]"
              >
                Let&apos;s Talk
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#C9A47A]">
                  <FiArrowUpRight size={20} />
                </span>
              </Link>
            </div>

            {/* Image */}
            <div className="relative mt-10 aspect-[414/195] w-full max-w-[520px] overflow-hidden rounded-3xl lg:max-w-none">
              <Image
                src="/home/Rectangle 4.webp"
                alt="Social media post mockups"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 560px, 100vw"
              />
            </div>
          </div>

          {/* RIGHT — Accordion list */}
          <div className="flex flex-col lg:pt-0 md:mt-10">
            {services.map((service, i) => {
              const isActive = active === i;
              const isLast = i === services.length - 1;

              return (
                <div
                  key={service.title}
                  className={isLast ? "" : "border-b border-gray-300"}
                >
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-expanded={isActive}
                    className={`flex w-full items-center gap-5 text-left transition-colors duration-300 ${
                      isLast ? "pt-5" : "py-5"
                    } ${i === 0 ? "pt-0" : ""} ${
                      isActive
                        ? "text-[#E0A163]"
                        : "text-[#2b2b2b] hover:text-[#E0A163]"
                    }`}
                  >
                    <span className="w-6 text-base font-normal">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lg font-medium sm:text-[19px]">
                      {service.title}
                    </span>
                  </button>

                  {/* Description (animated) */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[500px] pb-6 pl-11 text-sm leading-relaxed text-gray-500">
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
