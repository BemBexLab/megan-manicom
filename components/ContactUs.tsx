"use client";

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowUpRight, FiChevronDown } from "react-icons/fi";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const fieldClassName =
  "h-[42px] w-full rounded-[13px] border border-[#C8C8C8] bg-transparent px-3 text-[13px] text-[#333333] outline-none placeholder:text-[#C6C6C6] focus:border-[#D9B061] focus:ring-1 focus:ring-[#D9B061]/30";

const services = [
  { value: "social-media", label: "Social Media Management" },
  { value: "content-creation", label: "Content Creation & Design" },
  { value: "strategy", label: "Social Media Strategy" },
  { value: "ebook", label: "Ebook Design" },
];

export default function ContactUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedService, setSelectedService] = useState("");
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [serviceError, setServiceError] = useState(false);
  const serviceDropdownRef = useRef<HTMLDivElement>(null);
  const serviceButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);

    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        const details = section.querySelector("[data-contact-details]");
        const form = section.querySelector("[data-contact-form]");
        const links = section.querySelectorAll("[data-contact-link]");

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            once: true,
          },
        });

        if (details) {
          timeline.from(details, {
            x: -18,
            autoAlpha: 0,
            duration: 0.6,
            ease: "power2.out",
          });
        }

        if (form) {
          timeline.from(
            form,
            {
              x: 18,
              autoAlpha: 0,
              duration: 0.6,
              ease: "power2.out",
            },
            "-=0.4",
          );
        }

        if (links.length) {
          timeline.from(
            links,
            {
              y: 10,
              autoAlpha: 0,
              duration: 0.4,
              stagger: 0.08,
              ease: "power2.out",
            },
            "-=0.3",
          );
        }
      }, section);

      return () => context.revert();
    });

    return () => media.revert();
  }, []);

  useEffect(() => {
    if (!isServiceOpen) return;

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!serviceDropdownRef.current?.contains(event.target as Node)) {
        setIsServiceOpen(false);
      }
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () =>
      document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, [isServiceOpen]);

  const chooseService = (index: number) => {
    const service = services[index];
    if (!service) return;

    setSelectedService(service.value);
    setServiceError(false);
    setIsServiceOpen(false);
    serviceButtonRef.current?.focus();
  };

  const handleServiceKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (!isServiceOpen) {
        const selectedIndex = services.findIndex(
          (service) => service.value === selectedService,
        );
        setActiveServiceIndex(selectedIndex >= 0 ? selectedIndex : 0);
        setIsServiceOpen(true);
      } else {
        setActiveServiceIndex((index) => (index + 1) % services.length);
      }
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (!isServiceOpen) {
        const selectedIndex = services.findIndex(
          (service) => service.value === selectedService,
        );
        setActiveServiceIndex(
          selectedIndex >= 0 ? selectedIndex : services.length - 1,
        );
        setIsServiceOpen(true);
      } else {
        setActiveServiceIndex(
          (index) => (index - 1 + services.length) % services.length,
        );
      }
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (isServiceOpen) {
        chooseService(activeServiceIndex);
      } else {
        const selectedIndex = services.findIndex(
          (service) => service.value === selectedService,
        );
        setActiveServiceIndex(selectedIndex >= 0 ? selectedIndex : 0);
        setIsServiceOpen(true);
      }
    } else if (event.key === "Escape" && isServiceOpen) {
      event.preventDefault();
      setIsServiceOpen(false);
    } else if (event.key === "Home" && isServiceOpen) {
      event.preventDefault();
      setActiveServiceIndex(0);
    } else if (event.key === "End" && isServiceOpen) {
      event.preventDefault();
      setActiveServiceIndex(services.length - 1);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedService) {
      setServiceError(true);
      serviceButtonRef.current?.focus();
    }
  };

  const selectedLabel =
    services.find((service) => service.value === selectedService)?.label ??
    "Select Service";

  return (
    <section ref={sectionRef} className="section-spacing w-full bg-[#F7F7F7] px-4 sm:px-6 lg:px-8 2xl:px-6">
      <div className="mx-auto grid w-full max-w-[1420px] grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
        <div data-contact-details className="flex min-w-0 flex-col">
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-4 w-4 rounded-full border-3 border-[#282828] bg-[#D9B061]"
            />
            <span className="urbanist text-[16px] text-[#777777]">
              Contact Us
            </span>
          </div>

          <h2 className="clash-display my-2 max-w-[600px] text-[2rem] sm:text-[clamp(2.25rem,4.2vw,3.5rem)] font-medium leading-[1.05] text-[#282828]">
            Let&apos;s Talk About Your Ideas
          </h2>

          <p className="urbanist mt-3 max-w-[600px] text-[16px] leading-[1.7] text-[#777777]">
            Whether you&apos;re launching something new or refreshing your
            social media presence, I&apos;d love to hear about it. Let&apos;s
            create something worth sharing.
          </p>

          <div className="mt-10 flex flex-col gap-3">
            <a
              data-contact-link
              href="tel:+01234567890"
              className="group flex w-fit items-center gap-4 rounded-full text-[#777777] transition-colors hover:text-[#D9B061] focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a36e3d]"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#D9B061] text-[#282828] transition-colors group-hover:bg-accent-hover">
                <FaPhoneAlt aria-hidden="true" size={14} />
              </span>
              <span className="urbanist text-[16px]">(0) 123 456 789 0</span>
            </a>
            <a
              data-contact-link
              href="mailto:info@meganmanicom.com"
              className="group flex w-fit items-center gap-4 rounded-full text-[#777777] transition-colors hover:text-[#D9B061] focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a36e3d]"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#D9B061] text-[#282828] transition-colors group-hover:bg-accent-hover">
                <FaEnvelope aria-hidden="true" size={14} />
              </span>
              <span className="urbanist text-[16px]">
                info@meganmanicom.com
              </span>
            </a>
          </div>
        </div>

        <div data-contact-form className="min-w-0">
          <h3 className="clash-display break-words text-[clamp(1.125rem,2vw,1.375rem)] font-medium leading-tight text-[#282828]">
            Fill This Form To Get Faster Response
          </h3>

          <form
            onSubmit={handleSubmit}
            className="mt-5 flex flex-col gap-[10px]"
          >
            <div className="grid grid-cols-1 gap-[10px] sm:grid-cols-2">
              <input
                className={fieldClassName}
                type="text"
                name="firstName"
                placeholder="First Name"
                aria-label="First name"
                autoComplete="given-name"
                required
              />
              <input
                className={fieldClassName}
                type="text"
                name="lastName"
                placeholder="Last Name"
                aria-label="Last name"
                autoComplete="family-name"
                required
              />
            </div>
            <input
              className={fieldClassName}
              type="email"
              name="email"
              placeholder="Email"
              aria-label="Email"
              autoComplete="email"
              required
            />
            <input
              className={fieldClassName}
              type="tel"
              name="phone"
              placeholder="Phone Number"
              aria-label="Phone number"
              autoComplete="tel"
            />

            <div className="relative" ref={serviceDropdownRef}>
              <input type="hidden" name="service" value={selectedService} />
              <button
                ref={serviceButtonRef}
                type="button"
                role="combobox"
                aria-label="Select service"
                aria-haspopup="listbox"
                aria-expanded={isServiceOpen}
                aria-controls="contact-service-options"
                aria-activedescendant={
                  isServiceOpen
                    ? `contact-service-option-${activeServiceIndex}`
                    : undefined
                }
                aria-required="true"
                aria-invalid={serviceError}
                aria-describedby={
                  serviceError ? "contact-service-error" : undefined
                }
                onClick={() => {
                  if (!isServiceOpen) {
                    const selectedIndex = services.findIndex(
                      (service) => service.value === selectedService,
                    );
                    setActiveServiceIndex(
                      selectedIndex >= 0 ? selectedIndex : 0,
                    );
                  }
                  setIsServiceOpen((open) => !open);
                }}
                onKeyDown={handleServiceKeyDown}
                style={{ color: selectedService ? "#333333" : "#C6C6C6" }}
                className={`flex ${fieldClassName} items-center justify-between text-left transition-[background-color,border-color,box-shadow] hover:border-[#D9B061] hover:bg-[#FFFCF7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a36e3d] ${
                  isServiceOpen || serviceError
                    ? "border-[#D9B061] ring-1 ring-[#D9B061]/30"
                    : ""
                }`}
              >
                <span>{selectedLabel}</span>
                <FiChevronDown
                  aria-hidden="true"
                  size={14}
                  className={`shrink-0 text-[#C6C6C6] transition-transform duration-200 ${
                    isServiceOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isServiceOpen && (
                <div
                  id="contact-service-options"
                  role="listbox"
                  aria-label="Available services"
                  className="absolute left-0 right-0 top-[calc(100%+6px)] z-30 max-h-[min(220px,40vh)] max-w-full overflow-y-auto overscroll-contain rounded-[13px] border border-[#E5E5E5] bg-white p-1.5 shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
                >
                  {services.map((service, index) => {
                    const isSelected = selectedService === service.value;
                    const isActive = activeServiceIndex === index;

                    return (
                      <div
                        id={`contact-service-option-${index}`}
                        key={service.value}
                        role="option"
                        aria-selected={isSelected}
                        onMouseEnter={() => setActiveServiceIndex(index)}
                        onClick={() => chooseService(index)}
                        className={`urbanist cursor-pointer rounded-[9px] px-3 py-2.5 text-[13px] transition-colors ${
                          isActive || isSelected
                            ? "bg-[#F8F2EC] text-[#8F633D]"
                            : "text-[#444444] hover:bg-[#FAF7F3]"
                        }`}
                      >
                        {service.label}
                      </div>
                    );
                  })}
                </div>
              )}

              {serviceError && (
                <p
                  id="contact-service-error"
                  className="urbanist mt-1 text-[11px] text-red-600"
                >
                  Please select a service.
                </p>
              )}
            </div>

            <textarea
              className="h-[97px] w-full resize-none rounded-[13px] border border-[#C8C8C8] bg-transparent px-3 py-3 text-[13px] text-[#333333] outline-none placeholder:text-[#C6C6C6] focus:border-[#D9B061] focus:ring-1 focus:ring-[#D9B061]/30"
              name="message"
              placeholder="Message"
              aria-label="Message"
              required
            />

            <label className="mt-1 flex items-center gap-2 text-[13px] leading-[1.5] text-[#444444]">
              <input
                type="checkbox"
                name="agreeToTerms"
                required
                className="h-4 w-4 shrink-0 rounded-[3px] accent-[#D9B061]"
              />
              <span className="urbanist">
                Submitting You Agree With{" "}
                <a
                  href="/privacy-policy"
                  className="transition-colors hover:text-[#A87932] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#a36e3d]"
                >
                  Privacy Policy
                </a>{" "}
                And{" "}
                <a
                  href="/terms-of-service"
                  className="transition-colors hover:text-[#A87932] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#a36e3d]"
                >
                  Terms Of Service.
                </a>
              </span>
            </label>

            <button
              type="submit"
              className="urbanist mt-3 inline-flex w-fit items-center gap-2 rounded-full bg-[#D9B061] py-1.5 pl-4 pr-1.5 text-[16px] font-medium text-[#282828] shadow-[0_8px_18px_rgba(0,0,0,0.18)] transition-all duration-200 hover:bg-accent-hover hover:shadow-[0_11px_20px_rgba(0,0,0,0.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#282828] "
            >
              Let&apos;s Get Connected
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#282828] text-lg leading-none text-[#D9B061]">
                <FiArrowUpRight aria-hidden="true" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
