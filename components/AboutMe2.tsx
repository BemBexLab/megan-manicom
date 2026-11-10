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
    <section className="w-full bg-[#F5F5F5] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-[60px] 2xl:px-6">
      <div className="mx-auto grid w-full max-w-[1420px] grid-cols-1 items-center gap-9 lg:grid-cols-[0.83fr_1fr] lg:items-start lg:gap-16">
        <div className="relative mx-auto aspect-[0.895] w-full max-w-[520px] overflow-hidden rounded-[20px] bg-white lg:mx-0 lg:max-w-none lg:-left-[5px] lg:-top-[29px]">
          <Image
            src="/home/Rectangle 3.webp"
            alt="Megan Manicom"
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="relative w-full lg:left-[13px] lg:-top-[27px]">
          <div className="flex items-center gap-2">
            <span aria-hidden="true" className="h-4 w-4 rounded-full border-3 border-[#D4A373]" />
            <span className="urbanist text-[16px] text-[#777777]">About Me</span>
          </div>

          <h2 className="clash-display my-2 max-w-full break-words text-balance text-[2rem] font-medium leading-[1.05] text-[#282828] sm:text-[clamp(2.25rem,4.2vw,3.5rem)]">
            Turning Creativity Into Something Meaningful.
          </h2>

          <div className="urbanist mt-3 space-y-3 text-[16px] leading-[1.7] text-[#777777]">
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

          <div className="mt-7 grid grid-cols-3 gap-2.5 sm:mt-8 sm:gap-3 lg:mt-[26px] lg:w-[88%] lg:grid-cols-[1.25fr_1fr_1.25fr]">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex min-h-[76px] flex-col justify-center rounded-[18px] border border-[#E1E1E1] bg-white/70 px-2.5 py-3 sm:min-h-[80px] sm:px-4"
              >
                <span className="clash-display text-[clamp(1.3rem,2.15vw,1.8rem)] font-medium leading-none text-[#282828]">
                  {stat.value}
                </span>
                <span className="urbanist mt-2 text-[10px] leading-tight text-[#282828] sm:text-[12px] lg:text-[13px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="/work"
            className="urbanist mt-6 inline-flex items-center gap-2 rounded-full bg-[#D4A373] py-1.5 pl-4 pr-1.5 text-[12px] font-medium text-white shadow-[0_7px_14px_rgba(0,0,0,0.18)] transition-colors hover:bg-[#c69260] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a36e3d]"
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
