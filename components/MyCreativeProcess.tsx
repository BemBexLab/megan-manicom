import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

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
    width: 491,
    height: 261,
    className: "lg:left-[18.593%] lg:top-[14.865%] lg:w-[29.287%]",
  },
  {
    src: "/top-right.svg",
    width: 491,
    height: 261,
    className: "lg:right-[18.593%] lg:top-[14.865%] lg:w-[29.287%]",
  },
  {
    src: "/bottom-left.svg",
    width: 411,
    height: 180,
    className: "lg:left-[21.098%] lg:top-[48.649%] lg:w-[24.470%] lg:drop-shadow-[0_8px_10px_rgba(212,163,115,0.20)]",
  },
  {
    src: "/bottom-right.svg",
    width: 491,
    height: 260,
    className: "lg:right-[18.593%] lg:top-[41.892%] lg:w-[29.287%]",
  },
];

const paragraphTypography = "text-[16px] leading-[1.6]";

type Step = (typeof steps)[number];

function StepCard({ step }: { step: Step }) {
  return (
    <article
      className={`relative z-10 flex min-h-[140px] w-full min-w-0 flex-col justify-center rounded-[24px] border border-[#E5E5E5] bg-[#FBFBFB] px-4 py-5 shadow-[0_2px_3px_rgba(0,0,0,0.10)] lg:absolute lg:h-[27.027%] lg:min-h-0 lg:w-[24.663%] lg:rounded-[1.93cqw] lg:p-[1.16cqw] ${step.position}`}
    >
      <h3 className="clash-display text-lg font-medium leading-tight text-[#282828] lg:text-[clamp(15px,1.45cqw,21px)]">
        {step.title}
      </h3>
      <p className="urbanist mt-2 text-[15px] leading-[1.6] text-[#777777] lg:mt-[0.39cqw] lg:text-[clamp(12px,1.16cqw,17px)] lg:leading-[1.5]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </article>
  );
}

export default function MyCreativeProcess() {
  return (
    <section className="w-full min-w-0 overflow-hidden bg-[#FBFBFB] px-4 py-12 sm:px-6 sm:py-14 lg:px-4 lg:py-14">
      <div className="mx-auto w-full max-w-[1420px] lg:[container-type:inline-size]">
        <header className="mx-auto mb-0 w-full min-w-0 max-w-5xl text-center lg:max-w-none">
          <div className="flex items-center justify-center gap-2">
            <span className="h-4 w-4 rounded-full border-3 border-[#D4A373] lg:h-[1.15cqw] lg:w-[1.15cqw]" />
            <span className="urbanist text-sm font-light tracking-wide text-[#777777] sm:text-base lg:text-[clamp(14px,1.16cqw,17px)] lg:font-normal lg:tracking-normal">
              My Creative Process
            </span>
          </div>
          <h2 className="clash-display my-2 max-w-full break-words text-balance text-[2rem] font-medium leading-tight text-[#282828] sm:text-[clamp(2.25rem,4.2vw,3.5rem)] lg:mt-[1.25cqw] lg:mb-[1.06cqw] lg:text-[clamp(2.25rem,3.82cqw,3.5rem)]">
            From Ideas To Real Impact
          </h2>
          <p className={`urbanist mx-auto mb-10 w-full max-w-5xl px-2 text-[#777777] lg:mb-0 lg:max-w-[46.25cqw] lg:text-[clamp(12px,1.16cqw,17px)] lg:leading-[1.7] ${paragraphTypography}`}>
            A simple, creative, and strategic approach to building engaging content, strengthening brand identity, and growing your social media presence.
          </p>
        </header>

        <div className="relative mx-auto mt-6 grid w-full min-w-0 max-w-md grid-cols-1 gap-5 sm:max-w-[960px] sm:grid-cols-2 sm:gap-6 lg:mt-[0.1cqw] lg:block lg:aspect-[1038/370] lg:max-w-none">
          {connectors.map((connector) => (
            <Image
              key={connector.src}
              src={connector.src}
              alt=""
              aria-hidden="true"
              width={connector.width}
              height={connector.height}
              className={`pointer-events-none absolute z-0 hidden h-auto lg:block ${connector.className}`}
            />
          ))}

          {steps.slice(0, 2).map((step) => (
            <StepCard key={step.title} step={step} />
          ))}

          <div className="relative z-20 order-last flex justify-center py-3 sm:col-span-2 lg:absolute lg:left-1/2 lg:top-[50.811%] lg:order-none lg:-translate-x-1/2 lg:-translate-y-1/2 lg:py-0">
            <a
              href="/contact"
              className="urbanist flex items-center justify-between gap-2 rounded-full bg-[#D4A373] py-1.5 pl-3 pr-1.5 text-base font-medium text-white shadow-[0_8px_18px_rgba(0,0,0,0.18)] transition-colors hover:bg-[#c69260] lg:w-[clamp(169px,16.28cqw,232px)] lg:gap-[0.77cqw] lg:py-[0.58cqw] lg:pl-[1.16cqw] lg:pr-[0.58cqw] lg:text-[clamp(12px,1.16cqw,17px)] lg:font-normal"
            >
              Let&apos;s Create Together
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-lg leading-none text-[#D4A373] lg:h-[2.7cqw] lg:w-[2.7cqw]">
                <FiArrowUpRight aria-hidden="true" size={18} className="lg:h-[1.74cqw] lg:w-[1.74cqw]" />
              </span>
            </a>
          </div>

          {steps.slice(2).map((step) => (
            <StepCard key={step.title} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}

