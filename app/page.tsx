import AboutSection from "@/components/AboutMe";
import HeroSection from "@/components/Hero";
import MyCreativeProcess from "@/components/MyCreativeProcess";
import ServicesSection from "@/components/MyServices";

export default function Home() {
  return (
    <section className="bg-[#FFFFF3]">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MyCreativeProcess />
    </section>
  );
}
