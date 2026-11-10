import type { Metadata } from "next";
import AboutTheProject from "@/components/AboutTheProject";
import ContactUs from "@/components/ContactUs";
import CustomerTestimonials from "@/components/CustomerTestimonials";
import PageHero from "@/components/PageHero";
import WhatChallanges from "@/components/WhatChallanges";
import React from "react";

export const metadata: Metadata = {
  title: "Bloom & Co. Social Media Case Study",
  description:
    "See how Megan Manicom developed a cohesive social media presence for Bloom & Co., pairing wellness-inspired visuals with thoughtful content strategy.",
};

const page = () => {
  return (
    <section className="bg-white">
      <PageHero
        heading="Creativity That Builds Stronger Connections."
        text={`Explore how I bring creative ideas, thoughtful strategies, and engaging content together to help brands strengthen their digital presence and connect with their audience.`}
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
          { name: "LOCO", src: "/home/Logo (4).webp", width: 112, height: 26 },
          {
            name: "Infinity",
            src: "/home/Logo (1).webp",
            width: 50,
            height: 20,
          },
          { name: "N", src: "/home/Logo (2).webp", width: 33, height: 28 },
          { name: "IPSUM", src: "/home/Logo (3).webp", width: 108, height: 26 },
        ]}
      />
      <AboutTheProject
        eyebrowText="About The Project"
        heading="Building a Stronger Digital Presence."
        imageSrc="/5f3cfe8a922f3706cc0bf386d1fc679aed5030d9.webp"
        imageAlt="Laptop displaying a creative brand website on a workspace desk"
        description={[
          "Bloom & Co. is a lifestyle and wellness brand focused on promoting mindful living, self-care, and everyday well-being through thoughtfully curated products and experiences. The goal of this project was to establish a consistent and engaging social media presence that reflected the brand’s calming, nature-inspired identity while building meaningful connections with its wellness-conscious audience.",
          "I worked closely with the client to understand their vision, develop engaging content, and create a cohesive social media experience. From content planning to visual design and ongoing management, every detail was approached with creativity and purpose.",
        ]}
        details={[
          { label: "Client", value: "Bloom & Co." },
          { label: "Industry", value: "Lifestyle & Wellness" },
          { label: "Service", value: "Social Media Management" },
          { label: "Project Year", value: "2025" },
        ]}
      />
      <WhatChallanges
        eyebrowText="What Challenges I Faced"
        heading="Balancing Creativity & Consistency"
        description="Building a recognizable social media presence for Bloom & Co. required balancing a calming, wellness-inspired visual identity with engaging content that would connect with the right audience. The challenge was to maintain consistency while keeping every post fresh, meaningful, and aligned with the brand's values."
        challenges={[
          {
            number: "01",
            title: "Inconsistent Brand Identity",
            description:
              "Establishing a cohesive visual style that reflected Bloom & Co.'s natural, wellness-focused personality across social media platforms.",
          },
          {
            number: "02",
            title: "Limited Audience Engagement",
            description:
              "Creating content that encouraged meaningful interactions and helped build stronger connections with wellness-conscious audiences.",
          },
          {
            number: "03",
            title: "Content Planning & Consistency",
            description:
              "Developing a structured content schedule while keeping posts creative, relevant, and engaging.",
          },
          {
            number: "04",
            title: "Standing Out in a Competitive Market",
            description:
              "Finding fresh ways to communicate the brand's unique value in a crowded lifestyle and wellness industry.",
          },
        ]}
      />
      <CustomerTestimonials />
      <ContactUs />
    </section>
  );
};

export default page;
