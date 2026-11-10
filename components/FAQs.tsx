"use client";

import { useState } from "react";
import { FiPlus } from "react-icons/fi";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQsProps = {
  eyebrowText: string;
  heading: string;
  description: string;
  questions: FAQItem[];
};

export default function FAQs({
  eyebrowText,
  heading,
  description,
  questions,
}: FAQsProps) {
  const [activeQuestion, setActiveQuestion] = useState(0);

  return (
    <section
      aria-labelledby="faq-heading"
      className="w-full bg-[#FAFAFA] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-[60px] 2xl:px-6"
    >
      <div className="mx-auto grid w-full max-w-[1420px] grid-cols-1 gap-9 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <header className="lg:pt-1">
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-[9px] w-[9px] rounded-full border-3 border-[#282828] bg-[#D9B061] min-[850px]:h-[0.95cqw] min-[850px]:w-[0.95cqw]"
            />
            <span className="urbanist text-[16px] text-[#777777]">
              {eyebrowText}
            </span>
          </div>
          <h2
            id="faq-heading"
            className="clash-display my-2 max-w-full break-words text-balance text-[2rem] sm:text-[clamp(2.25rem,4.2vw,3.5rem)] font-medium leading-[1.05] text-[#282828]"
          >
            {heading}
          </h2>
          <p className="urbanist mt-3 max-w-[470px] text-[16px] leading-[1.7] text-[#777777]">
            {description}
          </p>
        </header>

        <div className="flex flex-col gap-[9px]">
          {questions.map((item, index) => {
            const isOpen = activeQuestion === index;
            const answerId = `faq-answer-${index + 1}`;

            return (
              <article
                key={item.question}
                className={`rounded-[20px] border border-[#E5E5E5] bg-[#FBFBFB] px-3 py-3.5 transition-shadow ${
                  isOpen ? "shadow-[0_2px_3px_rgba(0,0,0,0.1)]" : ""
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setActiveQuestion(isOpen ? -1 : index)}
                  className="group flex w-full min-w-0 items-center gap-4 text-left focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a36e3d]"
                >
                  <span className="clash-display w-5 shrink-0 text-[16px] font-medium leading-none text-[#282828]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="clash-display min-w-0 flex-1 text-[18px] font-medium leading-[1.35] text-[#282828] transition-colors duration-200 group-hover:text-[#A87932] 2xl:text-[20px]">
                    {item.question}
                  </span>
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D9B061] text-white transition-colors duration-200 group-hover:bg-accent-hover">
                    <FiPlus
                      aria-hidden="true"
                      size={14}
                      className={`transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                    />
                  </span>
                </button>
                <div
                  id={answerId}
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="urbanist ml-9 mt-2 max-w-[500px] text-[13px] leading-[1.55] text-[#777777] 2xl:text-[16px] sm:ml-9">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
