"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiPlay,
} from "react-icons/fi";
import styles from "./VideoTestimonials.module.css";

export type VideoTestimonial = {
  id: string;
  name: string;
  detail: string;
  quote: string;
  videoSrc: string;
  posterSrc?: string;
  captionsSrc?: string;
};

// Add your videos, posters, and approved client quotes here, or pass testimonials as a prop.
const defaultTestimonials: VideoTestimonial[] = [
  {
    id: "author",
    name: "Client name",
    detail: "Book design & publishing",
    quote:
      "An author's story, in their own words. Client testimonial coming soon.",
    videoSrc: "",
    posterSrc: "",
  },
  {
    id: "brand",
    name: "Client name",
    detail: "Branding & creative direction",
    quote: "The people behind the brands. Client testimonial coming soon.",
    videoSrc: "",
    posterSrc: "",
  },
  {
    id: "social",
    name: "Client name",
    detail: "Social media & content strategy",
    quote:
      "A closer look at a creative collaboration. Client testimonial coming soon.",
    videoSrc: "",
    posterSrc: "",
  },
];

function FeaturedVideo({ testimonial }: { testimonial: VideoTestimonial }) {
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative isolate aspect-[5/4] overflow-hidden rounded-[16px] bg-[#282828] lg:aspect-[9/10]">
      {playing ? (
        <video
          className="absolute inset-0 h-full w-full object-contain"
          src={testimonial.videoSrc}
          poster={testimonial.posterSrc || undefined}
          controls
          autoPlay
          playsInline
          preload="none"
          aria-label={`Video testimonial from ${testimonial.name}`}
          onError={() => {
            setPlaying(false);
            setFailed(true);
          }}
        >
          {testimonial.captionsSrc && (
            <track
              kind="captions"
              src={testimonial.captionsSrc}
              srcLang="en"
              label="English"
              default
            />
          )}
        </video>
      ) : (
        <>
          {testimonial.posterSrc?.trim() ? (
            <Image
              src={testimonial.posterSrc}
              alt={`Video portrait of ${testimonial.name}`}
              fill
              sizes="(min-width: 1024px) 414px, (min-width: 688px) 640px, calc(100vw - 32px)"
              className="object-cover"
            />
          ) : (
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[#282828]"
            >
              <span className="absolute left-5 top-12 font-serif text-[110px] leading-none text-[#D9B061]/60">
                “
              </span>
            </div>
          )}
          {testimonial.posterSrc?.trim() && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#282828]/80 via-transparent to-transparent"
            />
          )}
          <span className="urbanist absolute left-5 top-5 text-[10px] font-medium tracking-[0.16em] text-white/80">
            IN THEIR OWN WORDS
          </span>
          {testimonial.videoSrc.trim() && !failed ? (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label={`Play ${testimonial.name}'s testimonial`}
              className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#D9B061] text-[#282828] hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-white"
            >
              <FiPlay aria-hidden="true" className="ml-1 h-5 w-5" />
            </button>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center px-6">
              <span
                role="status"
                className="urbanist px-4 py-2 text-xs text-[#D9B061]"
              >
                {failed
                  ? "This video is currently unavailable"
                  : "Client story coming soon"}
              </span>
            </div>
          )}
          <div className="absolute inset-x-5 bottom-5 text-white">
            <p className="urbanist text-xs text-white/65">
              A creative collaboration
            </p>
            <p className="clash-display mt-1 text-base font-medium sm:text-lg">
              {testimonial.detail}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default function VideoTestimonials({
  testimonials = defaultTestimonials,
}: {
  testimonials?: VideoTestimonial[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const headingId = useId();
  const slideId = useId();
  if (!testimonials.length) return null;
  const index = activeIndex % testimonials.length;
  const active = testimonials[index];
  const changeSlide = (direction: number) =>
    setActiveIndex(
      (index + direction + testimonials.length) % testimonials.length,
    );

  return (
    <section
      aria-labelledby={headingId}
      className="section-spacing w-full overflow-hidden bg-[#F7F7F7] px-4 text-[#282828] sm:px-6 lg:px-[5%]"
    >
      <div className="mx-auto grid w-full max-w-[1420px] gap-8 lg:grid-cols-[minmax(0,1fr)_min(52%,700px)] lg:items-center lg:gap-12">
        <header className="w-full min-w-0">
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-4 w-4 shrink-0 rounded-full border-3 border-[#282828] bg-[#D9B061]"
            />
            <span className="urbanist text-base text-[#777777]">
              Client Stories
            </span>
          </div>
          <h2
            id={headingId}
            className="clash-display mt-4 max-w-[42rem] text-balance text-[2rem] font-medium leading-[1.12] tracking-tight sm:text-[clamp(2.25rem,4.2vw,3.5rem)]"
          >
            The People Behind The Projects.
          </h2>
          <p className="urbanist mt-5 max-w-[32rem] text-[15px] leading-[1.8] text-[#777777] sm:text-base">
            Every project is a collaboration. Get to know the authors, creators,
            and brands I work with, and hear their stories in their own words.
          </p>
          <Link
            href="/contact"
            className="urbanist mt-7 inline-flex items-center gap-3 rounded-full bg-[#D9B061] py-1.5 pl-5 pr-1.5 text-[15px] font-medium shadow-[0_6px_14px_rgba(40,40,40,0.12)] hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#282828]"
          >
            Let’s Create Together
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#282828] text-[#D9B061]">
              <FiArrowUpRight aria-hidden="true" size={21} />
            </span>
          </Link>
        </header>

        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Video testimonials"
          className="w-full min-w-0 max-w-[640px] justify-self-center lg:max-w-[700px] lg:justify-self-end"
        >
          <div
            id={slideId}
            key={active.id}
            className={`${styles.slide} grid min-w-0 items-center lg:grid-cols-[1.3fr_0.9fr]`}
          >
            <FeaturedVideo testimonial={active} />
            <figure className="relative z-10 -mt-4 mx-3 flex flex-col rounded-[12px] bg-[#D9B061] p-5 sm:mx-5 lg:-ml-8 lg:mr-0 lg:mt-8 lg:min-h-[250px] lg:p-6">
              <span
                aria-hidden="true"
                className="h-8 font-serif text-[56px] leading-none text-[#282828]/60"
              >
                “
              </span>
              <blockquote className="clash-display mt-2 text-base font-medium leading-[1.5] sm:text-lg">
                {active.quote}
              </blockquote>
              <figcaption className="mt-4 border-t border-[#282828]/15 pt-3">
                <p className="clash-display text-sm font-medium">
                  {active.name}
                </p>
                <p className="urbanist mt-1 text-xs leading-relaxed text-[#282828]/75">
                  {active.detail}
                </p>
              </figcaption>
            </figure>
          </div>
          <p aria-live="polite" aria-atomic="true" className="sr-only">
            Testimonial {index + 1} of {testimonials.length}: {active.name}.{" "}
            {active.detail}. {active.quote}
          </p>
          {testimonials.length > 1 && (
            <div className="mt-3 flex items-center justify-between gap-4">
              <span className="urbanist text-sm tabular-nums text-[#777777]">
                <span className="font-semibold text-[#282828]">
                  {String(index + 1).padStart(2, "0")}
                </span>{" "}
                / {String(testimonials.length).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  aria-controls={slideId}
                  onClick={() => changeSlide(-1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#282828]/25 hover:bg-[#D9B061] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#282828]"
                >
                  <FiArrowLeft aria-hidden="true" size={20} />
                </button>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  aria-controls={slideId}
                  onClick={() => changeSlide(1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#282828] text-[#D9B061] hover:bg-[#333333] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#282828]"
                >
                  <FiArrowRight aria-hidden="true" size={20} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
