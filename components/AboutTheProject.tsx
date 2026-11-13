import Image from "next/image";

type ProjectDetail = {
  label: string;
  value: string;
};

type AboutTheProjectProps = {
  eyebrowText: string;
  heading: string;
  imageSrc: string;
  imageAlt: string;
  description: string[];
  details: ProjectDetail[];
};

export default function AboutTheProject({
  eyebrowText,
  heading,
  imageSrc,
  imageAlt,
  description,
  details,
}: AboutTheProjectProps) {
  return (
    <section
      aria-labelledby="about-project-heading"
      className="section-spacing w-full bg-[#F7F7F7] px-4 sm:px-6 lg:px-[5%]"
    >
      <div className="mx-auto w-full">
        <header className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-4 w-4 rounded-full border-3 border-[#282828] bg-[#D9B061]"
            />
            <span className="urbanist text-[1rem] leading-[1.4] text-[#777777]">
              {eyebrowText}
            </span>
          </div>
          <h2
            id="about-project-heading"
            className="clash-display font-clash mt-4 w-full text-[clamp(2.25rem,4.2vw,3.5rem)] font-medium leading-[1.15] tracking-tight text-[#2b2b2b]"
          >
            {heading}
          </h2>
        </header>

        <div className="relative mt-6 aspect-[4/3] w-full overflow-hidden rounded-[1rem] sm:aspect-video lg:mt-[2.7vw] lg:aspect-[2.22/1] lg:rounded-[1.55vw]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 90vw, calc(100vw - 32px)"
            className="object-cover"
          />
        </div>

        <div className="mt-5 grid grid-cols-1 items-start gap-5 sm:mt-6 lg:grid-cols-[2fr_1fr] lg:gap-[2.25%]">
          <div className="space-y-3 pt-1">
            {description.map((paragraph, index) => (
              <p
                key={`${index}-${paragraph.slice(0, 20)}`}
                className="urbanist text-[0.8125rem] leading-[1.8] text-[#777777] lg:text-[clamp(0.75rem,1.08vw,1rem)]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <aside className="rounded-[1.125rem] border border-[#E5E5E5] bg-[#FBFBFB] px-5 py-4 sm:px-6 sm:py-5 lg:rounded-[1.55vw] lg:px-[2.05vw] lg:py-[1.7vw]">
            <h3 className="clash-display mb-2 text-[0.875rem] font-medium leading-[1.4] text-[#D9B061] lg:mb-[0.8vw] lg:text-[clamp(0.8125rem,1.17vw,1.0625rem)]">
              Project Details:
            </h3>
            <dl className="space-y-1.5 lg:space-y-[0.55vw]">
              {details.map((detail) => (
                <div
                  key={detail.label}
                  className="urbanist flex flex-wrap gap-x-1 text-[0.75rem] leading-[1.5] text-[#777777] lg:text-[clamp(0.6875rem,0.98vw,0.875rem)]"
                >
                  <dt className="font-semibold text-[#777777]">
                    {detail.label}:
                  </dt>
                  <dd>{detail.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
