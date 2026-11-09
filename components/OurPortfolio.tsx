import Image from "next/image";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    category: "Social Media Design",
    title: "Social Media Campaigns",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
    alt: "Portrait for a social media campaign",
  },
  {
    category: "Brand Identity",
    title: "Building Brand Identities",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=85",
    alt: "Minimal branded product packaging",
  },
  {
    category: "Content Strategy",
    title: "Strategic Content",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85",
    alt: "Laptop displaying a digital workspace",
  },
  {
    category: "Ebook Design",
    title: "Stories Brought To Life",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=85",
    alt: "Books arranged as an editorial design collection",
  },
];

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <article className="min-w-0 rounded-[22px] border border-[#E5E5E5] bg-[#FBFBFB] p-2 sm:p-[9px]">
      <div className="relative aspect-[1.52] overflow-hidden rounded-[19px] shadow-[0_8px_13px_rgba(0,0,0,0.18)]">
        <Image
          src={project.image}
          alt={project.alt}
          width={900}
          height={592}
          unoptimized
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
          className="h-full w-full object-cover"
        />
      </div>
      <p className="urbanist mt-3 text-[14px] leading-[1.4] text-[#D4A373]">
        {project.category}
      </p>
      <h3 className="clash-display mt-1 text-[20px] font-medium leading-tight text-[#282828]">
        {project.title}
      </h3>
      <p className="urbanist mt-2 text-[14px] leading-[1.55] text-[#777777]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <a
        href="/contact"
        className="urbanist mt-3 inline-flex items-center gap-3 text-[14px] text-[#D4A373] transition-colors hover:text-[#bd8957] pb-1"
      >
        Explore My Work
        <FiArrowRight aria-hidden="true" className="text-[19px]" />
      </a>
    </article>
  );
}

export default function OurPortfolio() {
  return (
    <section className="w-full bg-[#F5F5F5] px-4 py-14 sm:px-6 sm:py-16 lg:px-4 lg:py-[60px]">
      <div className="mx-auto w-full max-w-[1420px]">
        <header className="mx-auto mb-7 max-w-7xl text-center sm:mb-8">
          <div className="flex items-center justify-center gap-2">
            <span className="h-4 w-4 rounded-full border-3 border-[#D4A373]" />
            <span className="urbanist text-[16px] font-light text-[#777777]">
              Portfolio
            </span>
          </div>
          <h2 className="clash-display mt-3 text-balance text-[clamp(2rem,4.2vw,2.75rem)] font-medium leading-[1.12] text-[#282828]">
            Creative Work That Speaks Volumes
          </h2>
          <p className="urbanist mx-auto mt-3 max-w-5xl text-[16px] leading-[1.6] text-[#777777]">
            A collection of social media campaigns, creative visuals, and content
            designed to make brands stand out. Explore how I turn fresh ideas
            into engaging digital experiences.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href="/portfolio"
            className="urbanist inline-flex items-center gap-2 rounded-full bg-[#D4A373] py-1.5 pl-4 pr-1.5 text-[14px] font-medium text-white shadow-[0_8px_16px_rgba(0,0,0,0.2)] transition-colors hover:bg-[#c69260]"
          >
            View All Projects
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-lg leading-none text-[#D4A373]">
              <FiArrowUpRight aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

