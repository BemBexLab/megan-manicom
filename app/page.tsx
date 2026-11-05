import Hero from "@/components/Hero";
import WhyChooseMe from "@/components/WhyChooseMe";
import WhatIDo from "@/components/WhatIDo";

export default function Home() {
  return (
    <section className="bg-[#FFFFF3]">
      <Hero />
      <WhatIDo />
      <WhyChooseMe />
    </section>
  );
}
