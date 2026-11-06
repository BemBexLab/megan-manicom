import AboutSection from "./components/AboutMe";
import HeroSection from "./components/Hero";
import ServicesSection from "./components/MyServices";

export default function Home() {
  return (
    <section className="bg-[#FFFFF3]">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
    </section>
  );
}
