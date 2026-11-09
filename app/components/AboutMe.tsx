// components/AboutSection.tsx
import Image from "next/image";
import { clashDisplay } from "../fonts";

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
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-10 w-10"
      >
        <rect x="3" y="8" width="26" height="18" rx="4" />
        <path d="M11 8l5-4 5 4" />
        <path d="M9 21c2-1 3-5 5-7s3 1 5-1 3-2 4-1" />
        <path d="M10 26v2M22 26v2" />
      </svg>
    ),
  },
  {
    title: "Client-Focused Approach",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-10 w-10"
      >
        <path d="M4 11V8a4 4 0 014-4h3M21 4h3a4 4 0 014 4v3M28 21v3a4 4 0 01-4 4h-3M11 28H8a4 4 0 01-4-4v-3" />
        <circle cx="16" cy="16" r="6" />
      </svg>
    ),
  },
];

export default function AboutSection() {
  return (
    <section className="bg-[#F5F5F5] py-7 lg:py-14">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-5">
          {/* LEFT — Image card with stats overlay */}
          <div className="relative mx-auto w-full max-w-[520px] lg:mx-0 lg:max-w-[560px]">
            <div className="relative aspect-[370/318] w-full overflow-hidden rounded-3xl bg-gradient-to-b from-white to-[#E9E9E9]">
              <Image
                src="/home/Rectangle 3.webp"
                alt="Megan Manicom"
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 560px, 100vw"
              />

              {/* Stats overlay */}
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/50 px-5 py-4 backdrop-blur-md sm:px-6">
                <div className="grid grid-cols-3 divide-x divide-gray-400">
                  {stats.map((stat, i) => (
                    <div
                      key={stat.label}
                      className={`flex flex-col ${
                        i === 0 ? "pr-3 sm:pr-5" : "px-3 sm:px-5"
                      }`}
                    >
                      <span className="text-2xl font-medium leading-none text-[#2b2b2b] sm:text-[28px] clash-display font-clash">
                        {stat.value}
                      </span>
                      <span className="mt-2 text-[11px] leading-tight text-gray-600 sm:text-xs clash-display font-clash">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className="flex flex-col">
            {/* Label */}
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full border-2 border-[#D9A066]" />
              <span className="text-sm text-gray-500 clash-display font-clash">About Me</span>
            </div>

            {/* Heading */}
            <h2 className={`${clashDisplay.className} clash-display font-clash mt-4 max-w-[560px] text-[clamp(2.25rem,4.2vw,3.5rem)] font-medium leading-[1.15] tracking-tight text-[#2b2b2b]`}>
              The Mind Behind The Creativity
            </h2>

            {/* Paragraph */}
            <p className="mt-6 max-w-[520px] text-sm leading-relaxed text-gray-500 clash-display font-clash">
              I&apos;m a passionate social media marketer who loves turning
              ideas into content that connects. My focus is helping brands tell
              their stories and build a memorable online presence.
            </p>

            {/* Feature cards */}
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-gray-200 bg-white/60 p-6"
                >
                  <div className="text-[#D9A066]">{feature.icon}</div>
                  <h3 className="mt-6 text-base font-medium text-[#2b2b2b] clash-display font-clash">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-gray-500 clash-display font-clash">
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