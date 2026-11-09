"use client";

import { useState } from "react";
import { FiPlus } from "react-icons/fi";

const questions = [
  {
    question: "What social media services do you offer?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry?s standard dummy text ever since 1966.",
  },
  {
    question: "How do you approach a new project?",
    answer:
      "We begin by learning about your goals, audience, and brand. From there, I create a clear plan and work with you through each step of the project.",
  },
  {
    question: "Can you create content for different social media platforms?",
    answer:
      "Yes. I tailor the content and creative direction to fit each platform while keeping your brand voice and message consistent.",
  },
  {
    question: "Do you offer custom social media packages?",
    answer:
      "Every brand has different needs, so services can be combined into a package that fits your goals, schedule, and budget.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Timelines depend on the project scope. After our initial conversation, I?ll share a schedule with clear milestones and delivery dates.",
  },
];

export default function FAQs() {
  const [activeQuestion, setActiveQuestion] = useState(0);

  return (
    <section className="w-full bg-[#FAFAFA] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-[60px] 2xl:px-6">
      <div className="mx-auto grid w-full max-w-[1420px] grid-cols-1 gap-9 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <header className="lg:pt-1">
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 rounded-full border-3 border-[#D4A373]" />
            <span className="urbanist text-[16px] text-[#777777]">FAQs</span>
          </div>
          <h2 className="clash-display my-2 max-w-full break-words text-balance text-[2rem] sm:text-[clamp(2.25rem,4.2vw,3.5rem)] font-medium leading-[1.05] text-[#282828]">
            Got Questions? I&apos;ve Got Answers!
          </h2>
          <p className="urbanist mt-3 max-w-[470px] text-[16px] leading-[1.7] text-[#777777]">
            Everything you need to know about my creative services, working
            process, and how I can help bring your brand&apos;s vision to life.
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
                  className="flex w-full min-w-0 items-center gap-4 text-left"
                >
                  <span className="urbanist w-5 shrink-0 text-[15px] font-medium leading-none text-[#282828]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="clash-display min-w-0 flex-1 text-[18px] font-medium leading-[1.35] text-[#282828] 2xl:text-[20px]">
                    {item.question}
                  </span>
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D4A373] text-white">
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
