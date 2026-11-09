import AboutSection from "@/components/AboutMe";
import HeroSection from "@/components/Hero";
import MyCreativeProcess from "@/components/MyCreativeProcess";
import ServicesSection from "@/components/MyServices";
import OurPortfolio from "@/components/OurPortfolio";

export default function Home() {
  return (
    <section className="bg-[#FFFFF3]">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MyCreativeProcess />
      <OurPortfolio />
    </section>
  );
}
