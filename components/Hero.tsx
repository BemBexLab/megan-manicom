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
  "/home/Ellipse 6.webp",
  "/home/Ellipse 7.webp",
  "/home/Ellipse 8.webp",
];

export default function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-frame">
        <div className="hero-arc" aria-hidden="true" />
        <h1 id="hero-title" className="hero-title text-[#282828] clash-display">
          <span>MEGAN</span>
          <span>MANICOM</span>
        </h1>

        <div className="hero-portrait">
          <Image
            src="/9415e7633ca7fb19f274a37c18a548db84e9b88d.webp"
            alt="Megan Manicom"
            width={739}
            height={852}
            sizes="(min-width: 1500px) 570px, (min-width: 1024px) 38vw, (min-width: 640px) 420px, 380px"
            className="hero-portrait-image"
            preload
          />
        </div>

        <div className="hero-intro urbanist">
          <p>
            I&apos;m Megan Manicom, a social media marketing specialist helping
            authors, coaches, creators, and growing brands build visibility
            through clear content, launch planning, and audience-focused strategy.
          </p>
          <Link href="/work-with-me" className="hero-cta">
            Work With Me
            <span className="hero-cta-icon">
              <FiArrowUpRight aria-hidden="true" size={18} />
            </span>
          </Link>
        </div>

        <div className="hero-rating urbanist">
          <div className="hero-avatars" aria-hidden="true">
            {clientAvatars.map((avatar) => (
              <Image
                key={avatar}
                src={avatar}
                alt=""
                width={40}
                height={40}
                sizes="40px"
                className="hero-avatar"
              />
            ))}
          </div>
          <div className="hero-rating-details">
            <span className="hero-score text-[#282828]">4.8/5</span>
            <p className="hero-rating-caption text-[#282828]">
              500+ Happy<br />Client Worldwide
            </p>
          </div>
        </div>

        <div className="hero-partners urbanist">
          <p className="hero-partners-heading text-[#282828]">Our Trusted Partners</p>
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
