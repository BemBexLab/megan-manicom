import Image from "next/image";
import { Outfit, Gochi_Hand } from "next/font/google";

/* ------------------------------------------------------------------ */
/*  Fonts                                                              */
/* ------------------------------------------------------------------ */
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

// Handwritten "Marketing Specialist" – swap for any marker/script font you prefer
const script = Gochi_Hand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

/* ------------------------------------------------------------------ */
/*  Images – put these in /public/images/hero/                         */
/* ------------------------------------------------------------------ */
const IMG = {
  zigzag: "/Vector 2.webp", // full-section background pattern
  girl: "/hero.webp", // transparent PNG, cropped at the waist
  bookLeft: "/Stephen 2.webp", // flat cover, rotation is done in CSS
  bookRight: "/Stephen 1.webp", // flat cover, rotation is done in CSS
  avatar: "/Vector 2.webp", // small round face (badge + the "O")
};

const SERVICES = [
  "Book Marketing",
  "Author Visibility",
  "Publishing Support",
  "Launch Content",
  "Social Media Strategy",
];

const INTRO =
  "I'm Megan Manicom, a social media marketing specialist helping authors, coaches, creators, and growing brands build visibility through clear content, launch planning, and audience-focused strategy.";

/* ------------------------------------------------------------------ */
/*  Small shared pieces (all sized in em so parents control scale)     */
/* ------------------------------------------------------------------ */
function Avatar({ className = "" }: { className?: string }) {
  return (
    <span
      className={`relative inline-block shrink-0 overflow-hidden rounded-full bg-[#e9d9c8] ${className}`}
    >
      <Image src={IMG.avatar} alt="" fill sizes="64px" className="object-cover" />
    </span>
  );
}

function Name({
  className = "",
  stacked = false,
}: {
  className?: string;
  stacked?: boolean;
}) {
  return (
    <h1
      className={`font-semibold uppercase leading-none tracking-[-0.01em] text-[#2b2b2b] ${className}`}
    >
      <span className={stacked ? "block" : ""}>Megan</span>
      {!stacked && " "}
      <span className="whitespace-nowrap">
        Manic
        {/* the "O" is a ring with the face inside */}
        <span className="relative mx-[0.015em] inline-block h-[0.74em] w-[0.74em] overflow-hidden rounded-full border-[0.12em] border-[#2b2b2b] bg-[#f3e3d3] align-baseline">
          <Image src={IMG.avatar} alt="" fill sizes="64px" className="object-cover" />
        </span>
        m
      </span>
    </h1>
  );
}

function Role({ className = "" }: { className?: string }) {
  return (
    <p
      className={`-rotate-2 font-[family-name:var(--font-script)] leading-none text-[#ff4a00] [-webkit-text-stroke:0.6px_#ff4a00] ${className}`}
    >
      Marketing Specialist
    </p>
  );
}

function Spark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 84 84"
      aria-hidden
      className={`fill-[#fce3d8] ${className}`}
    >
      <polygon points="0,0 72,52 4,48" />
      <polygon points="34,60 84,70 36,80" />
    </svg>
  );
}

function Cta({ className = "" }: { className?: string }) {
  return (
    <a
      href="#about"
      className={`inline-flex items-center gap-[1em] rounded-full bg-[#ff4a00] px-[1.2em] py-[0.62em] font-medium leading-none text-white transition-colors hover:bg-[#e04200] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4a00] ${className}`}
    >
      Learn More About Me
      <svg
        viewBox="0 0 16 12"
        aria-hidden
        className="h-[1.1em] w-[1.45em] fill-none stroke-white"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 1.5 6.5 6 2 10.5" />
        <path d="M8.5 1.5 13 6 8.5 10.5" />
      </svg>
    </a>
  );
}

function Pill({ children, className = "" }: { children: string; className?: string }) {
  return (
    <li
      className={`whitespace-nowrap rounded-full bg-[#f3f2e2] font-normal leading-none text-[#444] ${className}`}
    >
      {children}
    </li>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */
export default function Hero() {
  return (
    <section
      className={`${outfit.variable} ${script.variable} relative isolate overflow-hidden bg-[#fdfdec] font-[family-name:var(--font-outfit)]`}
    >
      {/* Zigzag / squiggle background pattern */}
      <Image
        src={IMG.zigzag}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 select-none object-cover object-bottom"
      />

      {/* ============================================================ */}
      {/*  DESKTOP / TABLET  (md and up)                                */}
      {/*  Built on a 911 × 523 stage; every size scales with the       */}
      {/*  stage width (cqw) so it stays identical to the design.       */}
      {/* ============================================================ */}
      <div className="mx-auto hidden max-w-[1440px] md:block">
        <div className="relative aspect-[911/523] w-full [container-type:inline-size]">
          {/* decorative triangles */}
          <Spark className="absolute left-[8.5%] top-[10.5%] w-[8.7%]" />
          <Spark className="absolute left-[82.8%] top-[10.5%] w-[8.7%] -scale-x-100" />

          {/* badge */}
          <div className="absolute left-1/2 top-[7.2%] flex -translate-x-1/2 items-center gap-[0.55cqw] whitespace-nowrap rounded-full bg-[#ececdc] p-[0.5cqw] pr-[1.1cqw] text-[1.15cqw] font-normal leading-none text-[#444]">
            <Avatar className="h-[2.1cqw] w-[2.1cqw]" />
            Hy There,
          </div>

          {/* name + role */}
          <Name className="absolute inset-x-0 top-[14.5%] text-center text-[6.3cqw]" />
          <Role className="absolute inset-x-0 top-[25.2%] text-center text-[5.2cqw]" />

          {/* left: intro + CTA */}
          <div className="absolute left-[5.2%] top-[46.4%] w-[29%]">
            <p className="text-[1.3cqw] font-normal leading-[1.32] text-[#2f2f2f]">
              {INTRO}
            </p>
            <Cta className="mt-[1.75cqw] text-[1.1cqw]" />
          </div>

          {/* right: service pills */}
          <ul className="absolute left-[72.8%] top-[47%] flex w-[23%] flex-wrap gap-x-[0.8cqw] gap-y-[1cqw] text-[1.1cqw]">
            {SERVICES.map((s) => (
              <Pill key={s} className="px-[1.3cqw] py-[0.9cqw]">
                {s}
              </Pill>
            ))}
          </ul>

          {/* books (behind) */}
          <Image
            src={IMG.bookLeft}
            alt="Book cover: Growing"
            width={400}
            height={580}
            className="absolute left-[22.8%] top-[63.5%] z-10 h-auto w-[19%] -rotate-[14deg]"
          />
          <Image
            src={IMG.bookRight}
            alt="Book cover: Don't Cut the Grass on Sunday"
            width={400}
            height={580}
            className="absolute left-[57.6%] top-[65%] z-10 h-auto w-[18.8%] rotate-[9deg]"
          />

          {/* Megan (front) */}
          <Image
            src={IMG.girl}
            alt="Megan Manicom smiling in a cap and glasses"
            width={560}
            height={660}
            priority
            className="absolute bottom-0 left-[36.2%] z-20 h-auto w-[30.8%]"
          />
        </div>
      </div>

      {/* ============================================================ */}
      {/*  MOBILE  (below md)                                           */}
      {/* ============================================================ */}
      <div className="relative px-5 pt-7 text-center md:hidden">
        <Spark className="absolute left-3 top-14 w-[13vw]" />
        <Spark className="absolute right-3 top-14 w-[13vw] -scale-x-100" />

        <div className="mx-auto flex w-fit items-center gap-2 rounded-full bg-[#ececdc] p-1.5 pr-3 text-xs leading-none text-[#444]">
          <Avatar className="h-5 w-5" />
          Hy There,
        </div>

        <Name stacked className="mt-5 text-[clamp(2.75rem,15vw,4.5rem)]" />
        <Role className="mt-3 text-[clamp(1.75rem,9.5vw,2.75rem)]" />

        <p className="mx-auto mt-6 max-w-[34ch] text-[0.9rem] leading-[1.5] text-[#2f2f2f]">
          {INTRO}
        </p>

        <Cta className="mt-5 text-[0.8rem]" />

        <ul className="mx-auto mt-6 flex max-w-sm flex-wrap justify-center gap-2 text-[0.75rem]">
          {SERVICES.map((s) => (
            <Pill key={s} className="px-3.5 py-2.5">
              {s}
            </Pill>
          ))}
        </ul>

        {/* image composition */}
        <div className="relative mx-auto mt-8 aspect-[375/330] w-full max-w-[520px]">
          <Image
            src={IMG.bookLeft}
            alt="Book cover: Growing"
            width={400}
            height={580}
            className="absolute left-[2%] top-[34%] z-10 h-auto w-[36%] -rotate-[14deg]"
          />
          <Image
            src={IMG.bookRight}
            alt="Book cover: Don't Cut the Grass on Sunday"
            width={400}
            height={580}
            className="absolute right-[2%] top-[36%] z-10 h-auto w-[36%] rotate-[9deg]"
          />
          <Image
            src={IMG.girl}
            alt="Megan Manicom smiling in a cap and glasses"
            width={560}
            height={660}
            priority
            className="absolute bottom-0 left-1/2 z-20 h-auto w-[62%] -translate-x-1/2"
          />
        </div>
      </div>
    </section>
  );
}