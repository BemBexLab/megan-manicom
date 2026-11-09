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
      <MyCreativeProcess />
      <OurPortfolio />
      <CustomerTestimonials />
      <FAQs />
      <ContactUs />
    </section>
  );
}
