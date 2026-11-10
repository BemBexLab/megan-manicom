import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const expertise = [
  {
    number: "01",
    title: "Social Media Marketing",
    text: "Creating engaging content and thoughtful strategies that help brands build their presence and connect with their audience.",
  },
  {
    number: "02",
    title: "Book Cover & eBook Design",
    text: "Designing visually appealing book covers and carefully formatted interiors that enhance the reading experience.",
  },
  {
    number: "03",
    title: "Author Branding & Book Marketing",
    text: "Helping authors establish their identity, promote their work, and connect with readers through creative marketing.",
  },
  {
    number: "04",
    title: "Publishing Support",
    text: "Supporting authors through the design, formatting, and preparation stages of bringing their books to market.",
  },
];

export default function MyExpertise() {
  return (
    <section
      aria-labelledby="expertise-title"
      className="w-full bg-[#F5F5F5] px-5 py-12 sm:px-8 sm:py-14 lg:px-[5%] lg:pt-[clamp(48px,4.3vw,68px)] lg:pb-[clamp(40px,3.6vw,57px)]"
    >
      <div className="mx-auto w-full max-w-[1420px] lg:[container-type:inline-size]">
        <div className="grid grid-cols-1 items-start gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-x-[1.2%] lg:gap-y-0">
          <div className="min-w-0">
            <div className="flex items-center gap-2 lg:gap-[0.85cqw]">
              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 shrink-0 rounded-full border-2 border-[#282828] bg-[#D9B061] lg:h-[0.94cqw] lg:w-[0.94cqw]"
              />
              <span className="urbanist text-sm leading-[1.5] text-[#777777] lg:text-[clamp(12px,1.13cqw,16px)]">
                My Expertise
              </span>
            </div>

            <h2
              id="expertise-title"
              className="clash-display mt-2 text-[2rem] font-medium leading-[1.28] text-[#282828] sm:text-[2.5rem] lg:mt-[0.7cqw] lg:text-[clamp(32px,3.56cqw,51px)]"
            >
              Helping Great Ideas Find Their Place.
            </h2>

            <p className="urbanist mt-4 text-[15px] leading-[1.7] text-[#777777] lg:mt-[1.32cqw] lg:text-[clamp(12px,1.17cqw,17px)]">
              I bring together creativity, design, and marketing to help individuals and businesses turn their visions into engaging experiences.
            </p>

            <Link
              href="/work"
              className="urbanist mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-[#D9B061] py-1.5 pl-3 pr-1.5 text-sm text-[#282828] shadow-[0_8px_12px_rgba(0,0,0,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#cba151] hover:shadow-[0_11px_17px_rgba(0,0,0,0.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#282828] active:translate-y-0 lg:mt-[2.35cqw] lg:gap-[0.66cqw] lg:py-[0.56cqw] lg:pl-[1.13cqw] lg:pr-[0.56cqw] lg:text-[clamp(12px,1.13cqw,16px)]"
            >
              Discover My Services
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#282828] text-[#D9B061] lg:h-[2.63cqw] lg:w-[2.63cqw]">
                <FiArrowUpRight
                  aria-hidden="true"
                  size={18}
                  className="lg:h-[1.69cqw] lg:w-[1.69cqw]"
                />
              </span>
            </Link>
          </div>

          <ol aria-label="Areas of expertise" className="isolate min-w-0 list-none">
            {expertise.map((item, index) => (
              <li
                key={item.number}
                className="relative min-h-[210px] bg-[length:100%_100%] bg-no-repeat px-5 pb-12 pt-4 [&:not(:first-child)]:-mt-6 sm:min-h-[220px] sm:px-7 lg:min-h-[15.96cqw] lg:px-[2.04cqw] lg:pb-[3.75cqw] lg:pt-[1.16cqw] lg:[&:not(:first-child)]:-mt-[3cqw]"
                style={{
                  backgroundImage: `url("${index % 2 === 0 ? "/Union.webp" : "/Union%20(1).webp"}")`,
                }}
              >
                <span
                  aria-hidden="true"
                  className="urbanist block text-xl leading-[1.2] text-[#282828] lg:pl-[0.55cqw] lg:text-[clamp(18px,1.88cqw,27px)]"
                >
                  {item.number}
                </span>
                <h3 className="clash-display mt-4 text-lg font-medium leading-[1.3] text-[#282828] lg:mt-[1.32cqw] lg:text-[clamp(16px,1.76cqw,25px)]">
                  {item.title}
                </h3>
                <p className="urbanist mt-2 text-sm leading-[1.7] text-[#333333] lg:mt-[0.94cqw] lg:text-[clamp(12px,1.17cqw,17px)]">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
