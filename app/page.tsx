import type { Metadata } from "next";
import AboutSection from "@/components/AboutMe";
import HeroSection from "@/components/Hero";
import MyCreativeProcess from "@/components/MyCreativeProcess";
import ServicesSection from "@/components/MyServices";
import OurPortfolio from "@/components/OurPortfolio";
import CustomerTestimonials from "@/components/CustomerTestimonials";
import FAQs from "@/components/FAQs";
import ContactUs from "@/components/ContactUs";
import AboutMe2 from "@/components/AboutMe2";
import Books from "@/components/Books";
import VideoTestimonials from "@/components/VideoTestimonials";

export const metadata: Metadata = {
  title: "Social Media Marketing & Content Strategy",
  description:
    "Build a stronger online presence with Megan Manicom's social media marketing, content creation, launch planning, and audience-focused strategy.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <section className="bg-[#FFFFF3]">
      <HeroSection />
      <AboutSection />
      <OurPortfolio />
      
      <MyCreativeProcess
        eyebrowText="My Creative Process"
        heading="From Ideas To Real Impact"
        text="A simple, creative, and strategic approach to building engaging content, strengthening brand identity, and growing your social media presence."
        buttonLabel="Let's Create Together"
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
      <ServicesSection />
      <Books />
      <VideoTestimonials />
      <AboutMe2
        eyebrowText="Why Choose"
        heading="Why Choose Megan"
        imageSrc="/Gemini_Generated_Image_kc0kikc0kikc0kik.png"
        imageAlt="Megan Manicom"
        text={[
          "Hi, I'm Megan!",
          "I've always believed that every great idea deserves the opportunity to shine. Whether it's a story waiting to be published, a brand looking to grow, or a creative concept ready to take shape, I love being part of the journey that brings it to life.",
          "My work brings together design, storytelling, and digital marketing to help authors, entrepreneurs, and brands communicate their ideas with confidence.",
          "I enjoy the details that make each project unique, from selecting the right visual elements to creating content that truly resonates with an audience.",
          "For me, it's not just about creating something that looks beautiful. It's about creating something that feels authentic, serves a purpose, and makes a difference.",
        ]}
        stats={[
          { value: 100, suffix: "+", label: "Projects Completed" },
          { value: 500, suffix: "+", label: "Happy Clients" },
          { value: 10, suffix: "+", label: "Years of Experience" },
        ]}
        buttonLabel="Explore My Work"
        buttonHref="/work"
      />
      <CustomerTestimonials />
      <ContactUs />
      <FAQs
        eyebrowText="FAQs"
        heading="Got Questions? I've Got Answers!"
        description="Everything you need to know about my creative services, working process, and how I can help bring your brand's vision to life."
        questions={[
          {
            question: "What social media services do you offer?",
            answer:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966.",
          },
          {
            question: "How do you approach a new project?",
            answer:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966.",
          },
          {
            question:
              "Can you create content for different social media platforms?",
            answer:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966.",
          },
          {
            question: "Do you offer custom social media packages?",
            answer:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966.",
          },
          {
            question: "How long does it take to complete a project?",
            answer:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966.",
          },
        ]}
      />
    </section>
  );
}
