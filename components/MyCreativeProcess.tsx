import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

const steps = [
  {
    title: "Brand Discovery",
    position: "xl:left-0 xl:top-0",
  },
  {
    title: "Content Creation",
    position: "xl:right-0 xl:top-0",
  },
  {
    title: "Strategy & Planning",
    position: "xl:bottom-0 xl:left-0",
  },
  {
    title: "Launch & Growth",
    position: "xl:bottom-0 xl:right-0",
  },
];

const connectors = [
  {
    src: "/top-left.svg",
    className: "xl:left-[calc(300px_-_2.03%)] xl:top-[98px]",
  },
  {
    src: "/top-right.svg",
    className: "xl:right-[calc(300px_-_2.03%)] xl:top-[100px]",
  },
  {
    src: "/bottom-left.svg",
    className: "xl:bottom-[120px] xl:left-[calc(300px_-_0.88%)] xl:w-[calc(25%_-_34px)] xl:h-[120px]",
  },
  {
    src: "/bottom-right.svg",
    className: "xl:bottom-[95px] xl:right-[calc(300px_-_2.03%)]",
  },
];

const paragraphTypography = "text-[16px] leading-[1.6]";

type Step = (typeof steps)[number];

function StepCard({ step }: { step: Step }) {
  return (
    <article
      className={`relative z-10 flex min-w-0 w-full min-h-[140px] flex-col justify-center rounded-[24px] border border-[#E5E5E5] bg-[#FBFBFB] px-4 py-5 shadow-[0_2px_3px_rgba(0,0,0,0.10)] xl:absolute xl:min-h-0 xl:h-[120px] xl:w-[300px] xl:py-3.5 ${step.position}`}
    >
      <h3 className="clash-display text-lg font-medium leading-tight text-[#282828]">
        {step.title}
      </h3>
      <p className="urbanist mt-2 xl:max-w-[260px] text-[15px] leading-[1.6] text-[#777777] xl:leading-[1.3]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </article>
  );
}

export default function MyCreativeProcess() {
  return (
    <section className="w-full xl:min-h-screen min-w-0 overflow-hidden bg-[#FBFBFB] px-4 py-12 sm:px-6 sm:py-14 xl:px-4 xl:py-12">
      <header className="mx-auto mb-0 w-full min-w-0 max-w-5xl text-center">
        <div className="flex items-center justify-center gap-2">
          <span className="h-4 w-4 rounded-full border-3 border-[#D4A373]" />
          <span className="urbanist text-sm font-light tracking-wide text-[#777777] sm:text-base">
            My Creative Process
          </span>
        </div>
        <h2 className="clash-display my-2 max-w-full break-words text-balance text-[2rem] sm:text-[clamp(2.25rem,4.2vw,3.5rem)] font-medium leading-tight text-[#282828]">
          From Ideas To Real Impact
        </h2>
        <p className={`urbanist mx-auto mb-10 w-full max-w-5xl px-2 text-[#777777] ${paragraphTypography}`}>
          A simple, creative, and strategic approach to building engaging content, strengthening brand identity, and growing your social media presence.
        </p>
      </header>

      <div className="relative mx-auto mt-6 grid w-full min-w-0 max-w-md grid-cols-1 gap-5 sm:max-w-[960px] sm:grid-cols-2 sm:gap-6 xl:max-w-7xl xl:mt-0 xl:block xl:h-[443px]">
        {connectors.map((connector) => (
          <Image
            key={connector.src}
            src={connector.src}
            alt=""
            aria-hidden="true"
            width={491}
            height={261}
            className={`pointer-events-none absolute z-0 hidden h-auto w-[25%] object-fill xl:block ${connector.className}`}
          />
        ))}

        {steps.slice(0, 2).map((step) => (
          <StepCard key={step.title} step={step} />
        ))}

        <div className="relative z-20 order-last flex justify-center py-3 sm:col-span-2 xl:order-none xl:absolute xl:left-1/2 xl:top-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2 xl:py-0">
          <a
            href="/contact"
            className="urbanist flex items-center gap-2.5 rounded-full bg-[#D4A373] py-1.5 pl-4 pr-1.5 text-base font-medium text-white shadow-[0_8px_18px_rgba(0,0,0,0.18)] transition-colors hover:bg-[#c69260]"
          >
            Let&apos;s Create Together
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-lg leading-none text-[#D4A373]">
              <FiArrowUpRight size={20} />
            </span>
          </a>
        </div>

        {steps.slice(2).map((step) => (
          <StepCard key={step.title} step={step} />
        ))}
      </div>
    </section>
  );
}

