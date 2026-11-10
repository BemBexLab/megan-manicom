import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const stats = [
  { value: "100+", label: "Projects Completed" },
  { value: "500+", label: "Happy Clients" },
  { value: "10+", label: "Years of Experience" },
];

export default function AboutMe2() {
  return (
    <section
      aria-labelledby="about-me-title"
      className="w-full bg-[#F5F5F5] px-4 py-10 sm:px-6 sm:py-12 lg:px-[clamp(24px,2.35vw,40px)] lg:pb-9 lg:pt-[31px]"
    >
      <div className="mx-auto grid w-full max-w-[1420px] grid-cols-1 items-start gap-9 lg:grid-cols-[0.8fr_1fr] lg:gap-[9.5%]">
        <div className="relative mx-auto aspect-[442/496] w-full max-w-[520px] overflow-hidden rounded-[20px] bg-white lg:mx-0 lg:max-w-none">
          <Image
            src="/home/Rectangle 3.webp"
            alt="Megan Manicom"
            fill
            unoptimized
            className="object-cover object-center"
          />
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span aria-hidden="true" className="h-4 w-4 shrink-0 rounded-full border-3 border-[#D4A373]" />
            <span className="urbanist text-[16px] leading-5 text-[#777777]">About Me</span>
          </div>

          <h2
            id="about-me-title"
            className="clash-display mt-2 text-[2rem] font-medium leading-[1.25] text-[#282828] sm:text-[2.5rem] lg:text-[clamp(36px,3.472vw,50px)]"
          >
            Turning Creativity Into Something Meaningful.
          </h2>

          <div className="urbanist mt-3 space-y-3 text-[14px] leading-[1.65] text-[#777777] sm:text-[15px] lg:max-w-[97%] lg:text-[clamp(12.5px,1.0851vw,16px)] lg:leading-[1.72]">
            <p>Hi, I&apos;m Megan!</p>
            <p>
              I&apos;ve always believed that every great idea deserves the
              opportunity to shine. Whether it&apos;s a story waiting to be
              published, a brand looking to grow, or a creative concept ready to
              take shape, I love being part of the journey that brings it to life.
            </p>
            <p>
              My work brings together design, storytelling, and digital marketing
              to help authors, entrepreneurs, and brands communicate their ideas
              with confidence.
            </p>
            <p>
              I enjoy the details that make each project unique, from selecting
              the right visual elements to creating content that truly resonates
              with an audience.
            </p>
            <p>
              For me, it&apos;s not just about creating something that looks
              beautiful. It&apos;s about creating something that feels authentic,
              serves a purpose, and makes a difference.
            </p>
          </div>

          <div className="mt-[26px] grid grid-cols-3 gap-2.5 sm:gap-3 lg:w-[85.5%] lg:grid-cols-[1.25fr_1fr_1.25fr]">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex min-h-[76px] min-w-0 flex-col justify-center rounded-[20px] border border-[#E1E1E1] bg-white/70 px-2.5 py-3 sm:min-h-[80px] sm:px-4 lg:px-6"
              >
                <span className="clash-display text-[clamp(1.3rem,2.15vw,1.8rem)] font-medium leading-none text-[#282828]">
                  {stat.value}
                </span>
                <span className="urbanist mt-2 text-[14px] leading-[1.4] text-[#282828]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="/work"
            className="urbanist mt-6 inline-flex items-center gap-3 rounded-full bg-[#D4A373] py-1.5 pl-3 pr-1.5 text-[16px] font-normal text-white shadow-[0_7px_14px_rgba(0,0,0,0.18)] transition-colors hover:bg-[#c69260] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a36e3d]"
          >
            Explore My Work
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[#D4A373]">
              <FiArrowUpRight aria-hidden="true" size={16} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
