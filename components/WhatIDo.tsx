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
    <section>
      <div className="rounded-t-4xl bg-[#2D0000] pt-[clamp(1rem,3vw,2rem)] [clip-path:polygon(0_0,100%_0,100%_96.5%,96%_98%,94%_99%,92%_98.5%,90%_98%,88%_99.5%,86%_100%,84%_99%,80%_98%,75%_97.6%,70%_97.8%,65%_98.5%,60%_99%,55%_98.6%,50%_97.8%,45%_97.6%,40%_98%,35%_98.8%,30%_99.2%,25%_99%,20%_98%,15%_97.5%,10%_97.5%,5%_97%,0_96%)]">
        <div className="pb-[calc(clamp(2.125rem,5.4vw,2.5rem)+1.5rem)] pt-[clamp(2.125rem,5.4vw,2.5rem)]">
          <p className="urbanist text-center text-[clamp(0.4rem,1vw,0.875rem)] uppercase leading-none text-[#FF5C05]">
            What I Do
          </p>
          <h2 className="refuseniks pt-2 text-center text-[clamp(1.375rem,3.5vw,2.25rem)] font-semibold uppercase leading-[1.1] text-white">
            What I Can Do for You.
          </h2>

          {/* cards */}
          <div className="mx-auto mt-[clamp(1.25rem,3vw,2rem)] grid max-w-[1200px] grid-cols-1 gap-x-2.5 gap-y-2.5 px-[26px] pb-[clamp(2.5rem,5vw,4rem)] min-[600px]:grid-cols-3">
            {SERVICES.map((service, index) => (
              <article
                key={service.title}
                className={`relative isolate aspect-[184/140] overflow-visible rounded-[9px] bg-[#5A1F1F] p-[clamp(0.7rem,1.8vw,1.4rem)] text-white sm:aspect-[184/135] md:aspect-[184/120] ${
                  index % 3 === 1
                    ? "min-[600px]:translate-y-6"
                    : ""
                }`}
              >
                <Image
                  src="/Vector 1.svg"
                  alt=""
                  width={184}
                  height={186}
                  aria-hidden="true"
                  className="pointer-events-none absolute right-0 top-0 -z-10 h-auto w-[clamp(7rem,12vw,9rem)] max-w-none rounded-tr-xl"
                />

                <div className="relative z-10 flex h-full flex-col items-start">
                  <Image
                    src="/advertising-ad-browser--Streamline-Freehand.svg"
                    alt=""
                    width={73}
                    height={73}
                    aria-hidden="true"
                    className="h-[clamp(1.45rem,4vw,2.25rem)] w-[clamp(1.45rem,4vw,2.25rem)]"
                  />

                  <h3 className="refuseniks mt-[clamp(0.3rem,0.8vw,0.65rem)] text-[clamp(0.625rem,1.6vw,1.25rem)] font-semibold leading-[1.1]">
                    {service.title}
                  </h3>

                  <p className="urbanist mt-[clamp(0.25rem,0.65vw,0.55rem)] max-w-4/5 text-xs leading-tight text-white/75 sm:text-sm sm:leading-[1.4]">
                    {service.description}
                  </p>

                  <a
                    href="#contact"
                    className="urbanist mt-auto inline-flex items-center gap-1 border-b pb-2 text-xs font-medium leading-none text-white/90 underline-offset-[3px] transition-colors hover:text-[#FF5C05] sm:text-sm"
                  >
                    Learn More
                    <span aria-hidden="true" className="relative inline-block h-3 w-5 shrink-0 no-underline sm:h-4 sm:w-6">
                      <Image
                        src="/Mask group.svg"
                        alt=""
                        fill
                        sizes="1.5rem"
                        className="object-contain"
                      />
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
