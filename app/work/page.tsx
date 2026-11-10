import ContactUs from "@/components/ContactUs";
import ExploreMyWork from "@/components/ExploreMyWork";
import FAQs from "@/components/FAQs";
import MyCreativeProcess from "@/components/MyCreativeProcess";
import PageHero from "@/components/PageHero";
import React from "react";

const page = () => {
  return (
    <section className="bg-white">
      <PageHero
        heading="Creative Work, Meaningful Impact."
        text="Explore a collection of creative projects where thoughtful design, storytelling, and strategy come together. Each piece reflects my passion for transforming ideas into engaging experiences that connect, inspire, and leave a lasting impression."
        buttonLabel="Work With Me"
        buttonHref="/contact"
        rating="4.8/5"
        clientLabel={"500+ Happy\nClient Worldwide"}
        clientAvatars={[
          "/home/Ellipse 5.webp",
          "/home/Ellipse 6.webp",
          "/home/Ellipse 7.webp",
          "/home/Ellipse 8.webp",
        ]}
        partnersHeading="Our Trusted Partners"
        partnerLogos={[
          { name: "LOCO", src: "/home/Logo (4).png", width: 112, height: 26 },
          {
            name: "Infinity",
            src: "/home/Logo (1).png",
            width: 50,
            height: 20,
          },
          { name: "N", src: "/home/Logo (2).png", width: 33, height: 28 },
          { name: "IPSUM", src: "/home/Logo (3).png", width: 108, height: 26 },
        ]}
      />
      <ExploreMyWork />
      <MyCreativeProcess
        eyebrowText="My Creative Process"
        heading="From Ideas To Real Impact"
        text="A simple, creative, and strategic approach to building engaging content, strengthening brand identity, and growing your social media presence."
        buttonLabel="Start A Project"
        buttonHref="/contact"
        steps={[
          {
            title: "Brand Discovery",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
          {
            title: "Content Creation",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
          {
            title: "Strategy & Planning",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
          {
            title: "Launch & Growth",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
        ]}
      />
      <FAQs
        eyebrowText="FAQs"
        heading="Got Questions? I've Got Answers!"
        description="Everything you need to know about my creative services, working process, and how I can help bring your brand's vision to life."
        questions={[
          {
            question: "Can I see examples of your previous work?",
            answer:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966.",
          },
          {
            question: "Do you offer customized solutions for each project?",
            answer:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966.",
          },
          {
            question: "What is your creative process like?",
            answer:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966.",
          },
          {
            question: "Can you handle both social media strategy and content creation?",
            answer:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966.",
          },
          {
            question: "How can I start a project with you?",
            answer:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966.",
          },
        ]}
      />
      <ContactUs />
    </section>
  );
};

export default page;
