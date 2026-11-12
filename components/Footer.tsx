import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#FBFBFB] px-4 pt-14 pb-2 sm:px-6 sm:pt-16 sm:pb-3 lg:px-8 lg:pt-[60px] lg:pb-4 2xl:px-6">
      <div className="mx-auto w-full max-w-[1420px]">
        <div className="flex flex-col items-center pb-7 sm:pb-8">
          <Link
            href="/"
            className="flex items-center gap-3 transition-opacity hover:opacity-80 focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#282828]"
            aria-label="Megan Manicom home"
          >
            <span className="relative h-[68px] w-[68px] shrink-0 overflow-hidden rounded-full border border-[#282828] sm:h-[84px] sm:w-[84px]">
              <Image
                src="/image-2-2048x1946.png"
                alt="Megan Manicom"
                fill
                sizes="(max-width: 639px) 68px, 84px"
                className="object-cover"
              />
            </span>
            <span className="clash-display text-[40px] font-medium leading-none tracking-tight text-[#282828] sm:text-[50px]">
              Megan
            </span>
          </Link>

          <nav aria-label="Footer navigation" className="mt-7 w-full">
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:gap-x-11">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="urbanist text-[16px] text-[#777777] transition-colors hover:text-[#A87932] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a36e3d]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-8 flex items-center gap-2.5">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D9B061] text-[#282828] transition-all duration-200 hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#282828]"
            >
              <FaFacebookF aria-hidden="true" size={15} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D9B061] text-[#282828] transition-all duration-200 hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#282828]"
            >
              <FaInstagram aria-hidden="true" size={15} />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-[#DADADA] py-5 text-center sm:flex-row sm:text-left">
          <p className="archivo text-[16px] text-[#777777]">
            © 2026 · Megan Manicom · All Rights Reserved
          </p>
          <nav aria-label="Legal links" className="flex items-center gap-3">
            <Link
              href="/privacy-policy"
              className="archivo text-[16px] text-[#777777] transition-colors hover:text-[#A87932] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a36e3d]"
            >
              Privacy Policy
            </Link>
            <span aria-hidden="true" className="text-[16px] text-[#777777]">
              |
            </span>
            <Link
              href="/terms-of-service"
              className="archivo text-[16px] text-[#777777] transition-colors hover:text-[#A87932] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a36e3d]"
            >
              Terms &amp; Conditions
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
