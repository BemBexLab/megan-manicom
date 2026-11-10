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
      <FAQs />
      <ContactUs />
    </section>
  );
}
