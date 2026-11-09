import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const steps = [
  {
    title: "Brand Discovery",
    position: "lg:left-0 lg:top-0",
  },
  {
    title: "Content Creation",
    position: "lg:right-0 lg:top-0",
  },
  {
    title: "Strategy & Planning",
    position: "lg:bottom-0 lg:left-0",
  },
  {
    title: "Launch & Growth",
    position: "lg:bottom-0 lg:right-0",
  },
];

const connectors = [
  {
    src: "/top-left.svg",
    className: "lg:left-[calc(300px_-_2.03%)] lg:top-[100px]",
    height: 137,
  },
  {
    src: "/top-right.svg",
    className: "lg:right-[calc(300px_-_2.03%)] lg:top-[100px]",
    height: 137,
  },
  {
    src: "/bottom-left.svg",
    className: "lg:bottom-[118px] lg:left-[calc(300px_-_2.03%)] lg:scale-[-1]",
    height: 100,
  },
  {
    src: "/bottom-right.svg",
    className: "lg:bottom-[118px] lg:right-[calc(300px_-_2.03%)]",
    height: 100,
  },
];

export default function MyCreativeProcess() {
  return (
    <section className="min-h-screen overflow-hidden bg-[#FAFAFA] px-4 py-12 sm:px-6 sm:py-14 lg:px-4 lg:py-12">
      <header className="mx-auto mb-0 max-w-3xl text-center">
        <div className="flex items-center justify-center gap-2">
          <span className="h-3 w-3 rounded-full border-2 border-[#D4A373]" />
          <span className="urbanist text-sm font-light tracking-wide text-[#777777] sm:text-base">
            My Creative Process
          </span>
        </div>
        <h1 className="clash-display my-4 text-[clamp(2.4rem,4.6vw,2.8rem)] font-medium leading-tight text-[#282828] sm:my-4">
          From Ideas To Real Impact
        </h1>
        <p className="urbanist mx-auto max-w-[600px] px-2 text-sm leading-relaxed text-[#777777] sm:text-[15px]">
          A simple, creative, and strategic approach to building engaging
          content, strengthening brand identity, and growing your social media
          presence.
        </p>
      </header>

      <div className="relative mx-auto mt-6 grid max-w-[1200px] grid-cols-1 gap-5 lg:mt-0 lg:block lg:h-[443px]">
        {connectors.map((connector) => (
          <Image
            key={connector.src}
            src={connector.src}
            alt=""
            aria-hidden="true"
            width={491}
            height={261}
            style={{ height: connector.height }}
            className={`pointer-events-none absolute z-0 hidden w-[25%] object-fill lg:block ${connector.className}`}
          />
        ))}

        {steps.slice(0, 2).map((step) => (
          <article
            key={step.title}
            className={`relative z-10 w-full rounded-[24px] border border-[#E5E5E5] bg-[#FBFBFB] px-4 py-5 shadow-[0_2px_3px_rgba(0,0,0,0.10)] lg:absolute lg:h-[120px] lg:w-[300px] ${step.position}`}
          >
            <h2 className="clash-display text-lg font-medium leading-tight text-[#282828]">
              {step.title}
            </h2>
            <p className="urbanist mt-2 max-w-[260px] text-[13px] leading-[1.6] text-[#777777]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </article>
        ))}

        <div className="relative z-20 flex justify-center py-3 lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:py-0">
          <a
            href="/contact"
            className="urbanist flex items-center gap-2.5 rounded-full bg-[#D4A373] py-1.5 pl-4 pr-1.5 text-sm font-medium text-white shadow-[0_8px_18px_rgba(0,0,0,0.18)] transition-colors hover:bg-[#c69260]"
          >
            Let&apos;s Create Together
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg leading-none text-[#D4A373]">
              <GoArrowUpRight />
            </span>
          </a>
        </div>

        {steps.slice(2).map((step) => (
          <article
            key={step.title}
            className={`relative z-10 w-full rounded-[24px] border border-[#E5E5E5] bg-[#FBFBFB] px-4 py-5 shadow-[0_2px_3px_rgba(0,0,0,0.10)] lg:absolute lg:h-[120px] lg:w-[300px] ${step.position}`}
          >
            <h2 className="clash-display text-lg font-medium leading-tight text-[#282828]">
              {step.title}
            </h2>
            <p className="urbanist mt-2 max-w-[260px] text-[13px] leading-[1.6] text-[#777777]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
