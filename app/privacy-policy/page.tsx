import PageHero from "@/components/PageHero";
import React from "react";

const page = () => {
  return (
    <section className="bg-white">
      <PageHero
        heading="Privacy Policy"
        text="This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website. We are committed to ensuring that your privacy is protected and that your personal information is handled responsibly."
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
    </section>
  );
};

export default page;
