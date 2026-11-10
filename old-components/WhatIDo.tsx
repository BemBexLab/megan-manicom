import Image from "next/image";

const SERVICES = [
  {
    title: "Social Media Marketing",
    description:
      "Building engaging content and purposeful strategies that help brands connect with the right audience.",
  },
  {
    title: "Book Marketing",
    description:
      "Helping authors promote their books, attract readers, and build visibility before and after publication.",
  },
  {
    title: "eBook Design",
    description:
      "Creating clean, visually appealing digital books that make reading enjoyable and effortless.",
  },
  {
    title: "Cover Design",
    description:
      "Designing memorable book covers that capture the essence of your story and make a lasting impression.",
  },
  {
    title: "Illustration",
    description:
      "Bringing stories and creative concepts to life through expressive, thoughtfully crafted visuals.",
  },
  {
    title: "Publishing Support",
    description:
      "Helping authors navigate formatting, self-publishing, and Amazon KDP preparation with confidence.",
  },
];

const WhatIDo = () => {
  return (
    <section className="w-full overflow-x-clip">
      <div className="rounded-t-3xl bg-[#2D0000] pt-[clamp(1rem,3vw,2rem)] sm:rounded-t-4xl [clip-path:polygon(0_0,100%_0,100%_96.5%,96%_98%,94%_99%,92%_98.5%,90%_98%,88%_99.5%,86%_100%,84%_99%,80%_98%,75%_97.6%,70%_97.8%,65%_98.5%,60%_99%,55%_98.6%,50%_97.8%,45%_97.6%,40%_98%,35%_98.8%,30%_99.2%,25%_99%,20%_98%,15%_97.5%,10%_97.5%,5%_97%,0_96%)]">
        <div className="pb-[calc(clamp(2.125rem,5.4vw,2.5rem)+2.5rem)] pt-[clamp(2.125rem,5.4vw,2.5rem)]">
          <p className="urbanist px-4 text-center text-[clamp(0.6875rem,1.6vw,0.875rem)] uppercase leading-none tracking-[0.08em] text-[#FF5C05]">
            What I Do
          </p>
          <h2 className="refuseniks text-balance px-4 pt-2 text-center text-[clamp(1.375rem,4.5vw,2.25rem)] font-semibold uppercase leading-[1.1] text-[#282828]">
            What I Can Do for You.
          </h2>

          {/* cards */}
          <div className="mx-auto mt-[clamp(1.25rem,3vw,2rem)] grid w-full max-w-[1400px] grid-cols-1 gap-3 px-4 pb-[clamp(2.5rem,6vw,4rem)] sm:grid-cols-2 sm:gap-4 sm:px-6 lg:grid-cols-3 lg:gap-5 lg:px-8">
            {SERVICES.map((service, index) => (
              <article
                key={service.title}
                className={`relative isolate flex h-full min-h-[10.5rem] flex-col overflow-hidden rounded-[10px] bg-[#5A1F1F] p-4 text-[#282828] sm:min-h-[11.5rem] sm:p-5 lg:min-h-[14rem] lg:p-6 ${
                  index % 3 === 1 ? "lg:translate-y-6" : ""
                }`}
              >
                <Image
                  src="/Vector 1.svg"
                  alt=""
                  width={184}
                  height={186}
                  aria-hidden="true"
                  className="pointer-events-none absolute right-0 top-0 -z-10 h-auto w-[clamp(5rem,14vw,9rem)] max-w-none"
                />

                <Image
                  src="/advertising-ad-browser--Streamline-Freehand.svg"
                  alt=""
                  width={73}
                  height={73}
                  aria-hidden="true"
                  className="h-7 w-7 shrink-0 sm:h-8 sm:w-8 lg:h-9 lg:w-9"
                />

                <h3 className="refuseniks mt-2 break-words text-[clamp(1rem,2.2vw,1.25rem)] font-semibold leading-[1.15] lg:mt-2.5">
                  {service.title}
                </h3>

                <p className="urbanist mt-1.5 max-w-full text-[0.8125rem] leading-[1.45] text-[#282828]/75 sm:max-w-[92%] sm:text-sm lg:mt-2 lg:max-w-[88%] lg:text-[0.9375rem]">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="urbanist mt-auto inline-flex items-center gap-1.5 self-start border-b border-white/40 pt-4 pb-1.5 text-[0.8125rem] font-medium leading-none text-[#282828]/90 underline-offset-[3px] transition-colors hover:border-[#FF5C05] hover:text-[#FF5C05] sm:text-sm"
                >
                  Learn More
                  <span
                    aria-hidden="true"
                    className="relative inline-block h-3 w-5 shrink-0 sm:h-3.5 sm:w-6"
                  >
                    <Image
                      src="/Mask group.svg"
                      alt=""
                      fill
                      sizes="1.5rem"
                      className="object-contain"
                    />
                  </span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;