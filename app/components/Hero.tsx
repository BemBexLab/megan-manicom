// components/HeroSection.tsx
import Image from "next/image";
import Link from "next/link";
import { clashDisplay } from "../fonts";

const partnerLogos = [
  { name: "LOCO", src: "/home/Logo (1).png" },
  { name: "Infinity", src: "/home/Logo (2).png" },
  { name: "N", src: "/home/Logo (3).png" },
  { name: "IPSUM", src: "/home/Logo (4).png" },
];

const clientAvatars = [
  "/home/Ellipse 5.webp",
  "/home/Ellipse 6.webp",
  "/home/Ellipse 7.webp",
  "/home/Ellipse 8.webp",
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-40 lg:pt-60 pb-20 lg:pb-32">
      {/* Subtle curved background arc at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[300px] pointer-events-none">
        <svg
          viewBox="0 0 1440 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 300 C360 100, 720 0, 1080 50 C1260 75, 1380 150, 1440 200 L1440 300 L0 300 Z"
            fill="#F5F5F5"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-10">
        {/* Grid with balanced vertical spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-8 lg:py-12">
          {/* LEFT COLUMN — Name + Rating */}
          <div className="lg:col-span-4 flex flex-col justify-center z-10">
            <h1 className={`${clashDisplay.className} clash-display font-clash whitespace-nowrap text-[clamp(3rem,8vw,6.5rem)] font-medium leading-[0.95] tracking-tight text-gray-900`}>
              MEGAN
              <br />
              <span className="inline-block pl-8 lg:pl-16 xl:pl-20">
                MANICOM
              </span>
            </h1>

            {/* Rating Block */}
            <div className="mt-10 flex flex-col items-start gap-3">
              {/* Overlapping Avatars */}
              <div className="flex -space-x-3.5">
                {clientAvatars.map((avatar, i) => (
                  <div
                    key={i}
                    className="relative h-10 w-10 rounded-full border-2 border-white overflow-hidden"
                  >
                    <Image
                      src={avatar}
                      alt={`Client ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                ))}
              </div>

              {/* Rating number + text */}
              <div className="flex items-center gap-4">
                <span className="text-[72px] font-bold leading-none tracking-tight text-[#2b2b2b]">
                  4.8/5
                </span>
                <span className="text-xl font-normal leading-snug text-[#3a3a3a]">
                  500+ Happy
                  <br />
                  Client Worldwide
                </span>
              </div>
            </div>
          </div>

          {/* CENTER COLUMN — Hero Image (Pushed further down) */}
          <div className="relative lg:col-span-4 flex justify-center items-end lg:self-stretch z-20 order-first lg:order-none">
            <div className="relative w-full max-w-[620px] lg:max-w-none lg:absolute lg:-bottom-12 xl:-bottom-30 lg:left-1/2 lg:w-[125%] lg:-translate-x-[58%] xl:-translate-x-[62%]">
              <Image
                src="/home/hero.webp"
                alt="Megan Manicom"
                width={700}
                height={850}
                className="block w-full h-auto object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* RIGHT COLUMN — Bio + CTA + Partners */}
          <div className="lg:col-span-4 flex flex-col justify-center z-20">
            {/* Bio Text */}
            <p className="text-base leading-relaxed text-gray-600 max-w-md">
              I&apos;m Megan Manicom, a social media marketing specialist
              helping authors, coaches, creators, and growing brands build
              visibility through clear content, launch planning, and
              audience-focused strategy.
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                href="/work-with-me"
                className="inline-flex items-center gap-2 rounded-full bg-[#FFFFFF] pl-5 pr-2 py-1.5 text-sm font-medium text-[#D4A373] hover:text-[#FFFFFF] shadow-[0_4px_14px_rgba(0,0,0,0.12)] transition-all duration-300 hover:bg-[#D4A373] hover:shadow-[0_6px_20px_rgba(0,0,0,0.18)]"
              >
                Work With Me
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D4A373] text-[#FFFFFF] shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 17L17 7M17 7H7M17 7V17"
                    />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Trusted Partners */}
            <div className="mt-16 lg:mt-24">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-gray-300" />
                <span className="text-sm font-medium text-gray-500 whitespace-nowrap">
                  Our Trusted Partners
                </span>
                <div className="h-px flex-1 bg-gray-300" />
              </div>

              {/* Partner Logos */}
              <div className="flex items-center justify-center gap-5">
                {partnerLogos.map((logo) => (
                  <div
                    key={logo.name}
                    className="flex items-center justify-center h-8"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={60}
                      height={32}
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}