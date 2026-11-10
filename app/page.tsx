import AboutSection from "@/components/AboutMe";
import HeroSection from "@/components/Hero";
import MyCreativeProcess from "@/components/MyCreativeProcess";
import ServicesSection from "@/components/MyServices";
import OurPortfolio from "@/components/OurPortfolio";
import CustomerTestimonials from "@/components/CustomerTestimonials";
import FAQs from "@/components/FAQs";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <section className="bg-[#FFFFF3]">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MyCreativeProcess
        eyebrowText="My Creative Process"
        heading="From Ideas To Real Impact"
        text="A simple, creative, and strategic approach to building engaging content, strengthening brand identity, and growing your social media presence."
        buttonLabel="Let's Create Together"
        buttonHref="/contact"
        steps={[
          { title: "Brand Discovery", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
          { title: "Content Creation", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
          { title: "Strategy & Planning", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
          { title: "Launch & Growth", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
        ]}
      />
      <OurPortfolio />
      <CustomerTestimonials />
      <FAQs
        eyebrowText="FAQs"
        heading="Got Questions? I've Got Answers!"
        description="Everything you need to know about my creative services, working process, and how I can help bring your brand's vision to life."
        questions={[
          {
            question: "What social media services do you offer?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966.",
          },
          {
            question: "How do you approach a new project?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966.",
          },
          {
            question: "Can you create content for different social media platforms?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966.",
          },
          {
            question: "Do you offer custom social media packages?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966.",
          },
          {
            question: "How long does it take to complete a project?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966.",
          },
        ]}
      />
      <ContactUs />
    </section>
  );
}
