import AboutTheProject from "@/components/AboutTheProject";
import ContactUs from "@/components/ContactUs";
import CustomerTestimonials from "@/components/CustomerTestimonials";
import PageHero from "@/components/PageHero";
import React from "react";

const page = () => {
  return (
    <section className="bg-white">
      <PageHero
        heading="Creativity That Builds Stronger Connections."
        text={`Explore how I bring creative ideas, thoughtful strategies, and engaging content together to help brands strengthen their digital presence and connect with their audience.`}
        buttonLabel="Discuss a Project"
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
        <AboutTheProject
          eyebrowText="About The Project"
          heading="Building a Stronger Digital Presence."
          imageSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1800&q=90"
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
      <CustomerTestimonials />
      <ContactUs />
    </section>
  );
};

export default page;
