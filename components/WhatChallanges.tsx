type Challenge = {
  number: string;
  title: string;
  description: string;
};

type WhatChallangesProps = {
  eyebrowText: string;
  heading: string;
  description: string;
  challenges: Challenge[];
};

export default function WhatChallanges({
  eyebrowText,
  heading,
  description,
  challenges,
}: WhatChallangesProps) {
  return (
    <section className="section-spacing w-full bg-[#FCFCFC] px-4 sm:px-6 lg:px-[5%]">
      <div className="mx-auto grid w-full max-w-[1420px] grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.9fr] lg:gap-[9%]">
        <div>
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-4 w-4 rounded-full border-3 border-[#282828] bg-[#D9B061]"
            />
            <span className="urbanist text-[16px] leading-[1.4] text-[#777777]">
              {eyebrowText}
            </span>
          </div>

          <h2 className="clash-display font-clash mt-4 max-w-[540px] text-[clamp(2.25rem,4.2vw,3.5rem)] font-medium leading-[1.15] tracking-tight text-[#2b2b2b]">
            {heading}
          </h2>

          <p className="urbanist mt-2 max-w-[620px] text-[13px] leading-[1.8] text-[#777777] lg:text-[clamp(12px,1.08vw,16px)]">
            {description}
          </p>
        </div>

        <ol className="space-y-5 lg:space-y-[1.9vw]">
          {challenges.map((challenge) => (
            <li
              key={challenge.number}
              className="grid grid-cols-[24px_minmax(0,1fr)] gap-3 sm:grid-cols-[26px_minmax(0,1fr)] sm:gap-3.5"
            >
              <span className="clash-display font-medium pt-0.5 text-[12px] leading-[1.5] text-[#D9A441] lg:text-[clamp(11px,0.98vw,14px)]">
                {challenge.number}
              </span>
              <div>
                <h3 className="clash-display font-clash text-[14px] font-medium leading-[1.4] text-[#D9A441] lg:text-[clamp(13px,1.17vw,17px)]">
                  {challenge.title}
                </h3>
                <p className="urbanist mt-1 text-[12px] leading-[1.5] text-[#777777] lg:text-[clamp(11px,0.98vw,14px)]">
                  {challenge.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
