// components/ContactSection.tsx
"use client";

import { useState } from "react";
import { clashDisplay } from "../fonts";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    agreeToTerms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-[#F5F5F5] py-7 lg:py-14">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — Contact Info */}
          <div className="flex flex-col">
            {/* Label */}
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full border-2 border-[#D9A066]" />
              <span className="text-sm text-gray-500 clash-display font-clash">
                Contact Us
              </span>
            </div>

            {/* Heading */}
            <h2 className={`${clashDisplay.className} mt-4 max-w-[480px] text-[clamp(2.25rem,4.2vw,3rem)] font-medium leading-[1.15] tracking-tight text-[#2b2b2b]`}>
              Let&apos;s Talk About Your Ideas
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-[480px] text-sm leading-relaxed text-gray-500 clash-display font-clash">
              Whether you&apos;re launching something new or refreshing your
              social media presence, I&apos;d love to hear about it. Let&apos;s
              create something worth sharing.
            </p>

            {/* Contact Details */}
            <div className="mt-10 flex flex-col gap-5">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D4A373] text-[#ffffff]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-sm text-gray-600 clash-display font-clash">
                    (0) 123 456 789 0
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D4A373] text-[#ffffff]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-sm text-gray-600 clash-display font-clash">
                    info@meganmanicom.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="">
            <h3 className={`${clashDisplay.className} text-lg font-medium text-[#2b2b2b]`}>
              Fill This Form To Get Faster Response
            </h3>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              {/* First Name & Last Name */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 px-5 py-3.5 text-sm text-gray-700 placeholder-gray-400 outline-none transition-all duration-300 focus:border-[#D9A066] focus:ring-2 focus:ring-[#D9A066]/20 clash-display font-clash"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 px-5 py-3.5 text-sm text-gray-700 placeholder-gray-400 outline-none transition-all duration-300 focus:border-[#D9A066] focus:ring-2 focus:ring-[#D9A066]/20 clash-display font-clash"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 px-5 py-3.5 text-sm text-gray-700 placeholder-gray-400 outline-none transition-all duration-300 focus:border-[#D9A066] focus:ring-2 focus:ring-[#D9A066]/20 clash-display font-clash"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 px-5 py-3.5 text-sm text-gray-700 placeholder-gray-400 outline-none transition-all duration-300 focus:border-[#D9A066] focus:ring-2 focus:ring-[#D9A066]/20 clash-display font-clash"
                />
              </div>

              {/* Select Service */}
              <div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 px-5 py-3.5 text-sm text-gray-700 outline-none transition-all duration-300 focus:border-[#D9A066] focus:ring-2 focus:ring-[#D9A066]/20 clash-display font-clash [&>option]:text-gray-700"
                >
                  <option value="" disabled>
                    Select Service
                  </option>
                  <option value="social-media-management">
                    Social Media Management
                  </option>
                  <option value="content-creation">
                    Content Creation & Design
                  </option>
                  <option value="strategy">Social Media Strategy</option>
                  <option value="ebook-design">Ebook Design & Formatting</option>
                  <option value="copywriting">Ghost Writing & Copywriting</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full resize-none rounded-xl border border-gray-200 px-5 py-3.5 text-sm text-gray-700 placeholder-gray-400 outline-none transition-all duration-300 focus:border-[#D9A066] focus:ring-2 focus:ring-[#D9A066]/20 clash-display font-clash"
                  required
                />
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-[#D9A066] focus:ring-[#D9A066]"
                  required
                />
                <label
                  htmlFor="agreeToTerms"
                  className="text-xs leading-relaxed text-gray-500 clash-display font-clash"
                >
                  Submitting You Agree With{" "}
                  <a href="/privacy-policy" className="text-[#D9A066] hover:underline">
                    Privacy Policy
                  </a>{" "}
                  And{" "}
                  <a href="/terms-of-service" className="text-[#D9A066] hover:underline">
                    Terms Of Service
                  </a>
                  .
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 rounded-full bg-[#D4A373] py-1.5 pl-6 pr-1.5 text-sm font-medium text-white shadow-[0_8px_20px_rgba(201,164,122,0.45)] transition-all duration-300 hover:shadow-[0_10px_26px_rgba(201,164,122,0.6)] clash-display font-clash"
                >
                  Let&apos;s Get Connected
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#D4A373]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 17L17 7M17 7H7M17 7V17"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}