"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import "./Hero.css";

const partnerLogos = [
  { name: "LOCO", src: "/home/Logo (4).webp", width: 112, height: 26 },
  { name: "Infinity", src: "/home/Logo (1).webp", width: 50, height: 20 },
  { name: "N", src: "/home/Logo (2).webp", width: 33, height: 28 },
  { name: "IPSUM", src: "/home/Logo (3).webp", width: 108, height: 26 },
];

const clientAvatars = [
  "/home/Ellipse 5.webp",
  "/home/Ellipse 7.webp",
  "/home/Ellipse 8.webp",
  "/home/Ellipse 6.webp",
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);

    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        const timeline = gsap.timeline({ delay: 0.1 });

        timeline
          .from("[data-hero-title] span", {
            y: 28,
            autoAlpha: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
          })
          .from(
            "[data-hero-portrait]",
            {
              y: 24,
              autoAlpha: 0,
              duration: 0.8,
              ease: "power2.out",
            },
            "-=0.45",
          )
          .from(
            "[data-hero-intro]",
            {
              y: 18,
              autoAlpha: 0,
              duration: 0.6,
              ease: "power2.out",
            },
            "-=0.4",
          )
          .from(
            ["[data-hero-rating]", "[data-hero-partners]"],
            {
              y: 14,
              autoAlpha: 0,
              duration: 0.5,
              stagger: 0.1,
              ease: "power2.out",
            },
            "-=0.25",
          );

        const parallax = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

        parallax
          .to("[data-hero-title]", { yPercent: -2, ease: "none" })
          .to("[data-hero-portrait]", { yPercent: -3.5, ease: "none" }, 0)
          .to("[data-hero-intro]", { yPercent: -2, ease: "none" }, 0)
          .to("[data-hero-rating]", { yPercent: -1.5, ease: "none" }, 0)
          .to("[data-hero-partners]", { yPercent: -1.5, ease: "none" }, 0)
          .to(".hero-arc", { yPercent: -5, ease: "none" }, 0);
      }, section);

      return () => context.revert();
    });

    return () => media.revert();
  }, []);

  return (
    <section ref={sectionRef} className="hero-section" aria-labelledby="hero-title">
      <div className="hero-frame">
        <div className="hero-arc" aria-hidden="true" />
        <h1 id="hero-title" data-hero-title className="hero-title text-[#282828] clash-display">
          <span>MEGAN</span>
          <span>MANICOM</span>
        </h1>

        <div className="hero-portrait" data-hero-portrait>
          <Image
            src="/image 1.png"
            alt="Megan Manicom"
            width={882}
            height={857}
            sizes="(min-width: 1500px) 690px, (min-width: 1024px) 46vw, (min-width: 640px) 443px, 453px"
            className="hero-portrait-image"
            preload
          />
        </div>

        <div className="hero-intro urbanist" data-hero-intro>
          <p>
            I&apos;m Megan Manicom, a social media marketing specialist helping
            authors, coaches, creators, and growing brands build visibility
            through clear content, launch planning, and audience-focused
            strategy.
          </p>
          <Link href="/work-with-me" className="hero-cta group">
            Work With Me
            <span className="hero-cta-icon">
              <FiArrowUpRight aria-hidden="true" size={18} />
            </span>
          </Link>
        </div>

        <div className="hero-rating urbanist" data-hero-rating>
          <div className="hero-avatars" aria-hidden="true">
            {clientAvatars.map((avatar) => (
              <Image
                key={avatar}
                src={avatar}
                alt=""
                width={40}
                height={40}
                sizes="(min-width: 1500px) 42px, (min-width: 1024px) 2.8vw, 36px"
                className="hero-avatar"
              />
            ))}
          </div>
          <div className="hero-rating-details">
            <span className="hero-score text-[#282828]">4.8/5</span>
            <p className="hero-rating-caption text-[#282828]">
              500+ Happy
              <br />
              Client Worldwide
            </p>
          </div>
        </div>

        <div className="hero-partners urbanist" data-hero-partners>
          <p className="hero-partners-heading text-[#282828]">
            Our Trusted Partners
          </p>
          <div className="hero-partner-logos">
            {partnerLogos.map((logo) => (
              <Image
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="hero-partner-logo"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
