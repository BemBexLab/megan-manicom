import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

type PageHeroProps = {
  heading: string;
  text: string;
  buttonLabel: string;
  buttonHref: string;
  rating?: string;
  clientLabel?: string;
  clientAvatars?: string[];
  partnersHeading?: string;
  partnerLogos?: {
    name: string;
    src: string;
    width: number;
    height: number;
  }[];
};

export default function PageHero({
  heading,
  text,
  buttonLabel,
  buttonHref,
  rating,
  clientLabel,
  clientAvatars = [],
  partnersHeading,
  partnerLogos = [],
}: PageHeroProps) {
  return (
    <section
      aria-labelledby="page-hero-title"
      className="relative isolate mt-[72px] min-h-[620px] w-full overflow-hidden bg-white px-5 pb-8 pt-12 sm:px-8 sm:pt-14 md:mt-[90px] min-[900px]:min-h-[clamp(458px,44.8vw,640px)] min-[900px]:!px-0 min-[900px]:!pt-0 min-[900px]:!pb-0"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[58%] z-0 h-[280%] w-[140%] -translate-x-1/2 rounded-[50%] bg-[#F8F8F8]"
      />

      <div className="relative mx-auto flex w-full max-w-[1420px] flex-col items-center text-center min-[900px]:container-type-inline-size min-[900px]:block min-[900px]:min-h-[clamp(458px,44.8vw,640px)]">
        <header className="relative z-10 mx-auto w-full min-[900px]:absolute min-[900px]:left-1/2 min-[900px]:top-[14%] min-[900px]:w-[90%] min-[900px]:-translate-x-1/2">
          <h1
            id="page-hero-title"
            className="clash-display text-balance text-[clamp(2.25rem,8.5vw,3.5rem)] font-medium leading-[1.16] text-[#282828] min-[900px]:text-[clamp(48px,6cqw,85px)] min-[900px]:leading-[1.2]"
          >
            {heading}
          </h1>
          <p className="urbanist mx-auto mt-4 max-w-[700px] text-[14px] leading-[1.65] text-[#777777] sm:text-[15px] min-[900px]:mt-[1.6cqw] min-[900px]:max-w-[66%] min-[900px]:!text-[clamp(12px,1.22cqw,17px)] min-[900px]:leading-[1.7]">
            {text}
          </p>
          <Link
            href={buttonHref}
            className="urbanist mx-auto mt-5 inline-flex h-9 items-center justify-start gap-2 whitespace-nowrap rounded-full bg-[#282828] py-1 pl-3 pr-1 text-[12px] font-normal text-[#D9B061] shadow-[0_6px_12px_rgba(0,0,0,0.2)] transition-colors hover:bg-[#F8F2EC] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a36e3d] min-[900px]:mt-[1.8cqw] min-[900px]:h-auto min-[900px]:w-fit min-[900px]:gap-[0.45cqw] min-[900px]:py-[0.48cqw] min-[900px]:pl-[0.8cqw] min-[900px]:pr-[0.4cqw] min-[900px]:text-[clamp(10px,0.98cqw,14px)]"
          >
            {buttonLabel}
            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#D9B061] text-[#282828] min-[900px]:h-[1.5cqw] min-[900px]:w-[1.5cqw]">
              <FiArrowUpRight
                aria-hidden="true"
                size={12}
                className="min-[900px]:h-[0.9cqw] min-[900px]:w-[0.9cqw]"
              />
            </span>
          </Link>
        </header>

        {(rating || clientLabel || clientAvatars.length > 0) && (
          <div className="relative z-10 mt-12 self-start text-left min-[900px]:absolute min-[900px]:bottom-[5.3%] min-[900px]:left-[5.2%] min-[900px]:mt-0">
            {clientAvatars.length > 0 && (
              <div className="mb-2 flex" aria-hidden="true">
                {clientAvatars.map((avatar) => (
                  <Image
                    key={avatar}
                    src={avatar}
                    alt=""
                    width={40}
                    height={40}
                    quality={100}
                    sizes="(min-width: 1024px) 3cqw, 32px"
                    className="relative h-8 w-8 rounded-full border border-white object-cover first:z-10 [&:not(:first-child)]:-ml-[7px] min-[900px]:h-[2.75cqw] min-[900px]:w-[2.75cqw] min-[900px]:[&:not(:first-child)]:-ml-[0.65cqw]"
                  />
                ))}
              </div>
            )}
            <div className="flex items-center gap-3 min-[900px]:gap-[1.1cqw]">
              {rating && (
                <span className="urbanist text-[44px] font-semibold leading-none tracking-[-0.04em] text-[#282828] min-[900px]:text-[4.7cqw]">
                  {rating}
                </span>
              )}
              {clientLabel && (
                <p className="urbanist whitespace-pre-line text-[12px] leading-[1.5] text-[#282828] min-[900px]:text-[clamp(12px,1.27cqw,18px)]">
                  {clientLabel}
                </p>
              )}
            </div>
          </div>
        )}

        {partnersHeading && partnerLogos.length > 0 && (
        <div className="relative z-10 mt-10 w-full max-w-[360px] min-[900px]:absolute min-[900px]:bottom-[5.3%] min-[900px]:right-[5.2%] min-[900px]:mt-0 min-[900px]:w-[29%] min-[900px]:max-w-none">
          <p className="urbanist flex items-center justify-center gap-2 text-[13px] leading-[1.4] text-[#282828] min-[900px]:gap-[0.65cqw] min-[900px]:text-[clamp(12px,1.15cqw,16px)]">
            <span aria-hidden="true" className="h-px flex-1 bg-gradient-to-r from-transparent to-[#AFAFAF]" />
            {partnersHeading}
            <span aria-hidden="true" className="h-px flex-1 bg-gradient-to-l from-transparent to-[#AFAFAF]" />
          </p>
          <div className="mt-4 flex items-center justify-center gap-4 sm:gap-5 min-[900px]:mt-[1.5cqw] min-[900px]:gap-[1.55cqw]">
            {partnerLogos.map((logo) => (
              <Image
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                quality={100}
                className="h-[14px] w-auto object-contain min-[900px]:h-[1.37cqw]"
              />
            ))}
          </div>
        </div>
        )}
      </div>
    </section>
  );
}
