import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const projects = [
  {
    category: "Social Media Marketing",
    title: "Creating Content That Connects",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Laptop and phone on a creative workspace desk",
  },
  {
    category: "Ebook Design & Formatting",
    title: "Bringing Every Page to Life",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Carefully designed book cover and pages",
  },
  {
    category: "Social Media Strategy",
    title: "Turning Ideas Into Impactful Strategies",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Digital marketing analytics on a computer screen",
  },
  {
    category: "Book Cover Design",
    title: "Making Every Story Stand Out",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "An open book among other books",
  },
  {
    category: "Author Branding",
    title: "Building a Memorable Identity",
    image:
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "A book cover held in front of a light background",
  },
  {
    category: "Illustration & Creative Design",
    title: "Turning Imagination Into Art",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Colorful artwork in a gallery",
  },
];

const projectDescription =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.";

export default function ExploreMyWork() {
  return (
    <section
      aria-labelledby="explore-work-title"
      className="w-full bg-[#F5F5F5] px-4 py-10 sm:px-6 sm:py-12 min-[850px]:px-[5%] min-[850px]:pt-[4.1cqw] min-[850px]:pb-[5cqw]"
    >
      <div className="mx-auto w-full max-w-[1420px] min-[850px]:[container-type:inline-size]">
        <header className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-[9px] w-[9px] rounded-full border-[1.5px] border-[#282828] bg-[#D9B061] min-[850px]:h-[0.95cqw] min-[850px]:w-[0.95cqw]"
            />
            <span className="urbanist text-[12px] leading-[1.3] text-[#777777] min-[850px]:text-[clamp(9px,0.98cqw,14px)]">
              Explore My Work
            </span>
          </div>

          <h2
            id="explore-work-title"
            className="clash-display mt-3 text-balance text-[26px] font-medium leading-[1.2] text-[#282828] sm:text-[30px] min-[850px]:mt-[1.1cqw] min-[850px]:text-[clamp(24px,3.4cqw,48px)]"
          >
            A Glimpse Into My Creative World.
          </h2>

          <p className="urbanist mt-2.5 max-w-[650px] text-[13px] leading-[1.65] text-[#777777] sm:text-sm min-[850px]:mt-[0.9cqw] min-[850px]:max-w-[62cqw] min-[850px]:text-[clamp(10px,1.08cqw,15px)] min-[850px]:leading-[1.6]">
            Every project tells a different story. From memorable book covers to
            engaging digital campaigns, here&apos;s a selection of work that brings
            creativity, purpose, and attention to detail together.
          </p>
        </header>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 min-[850px]:mt-[3.15cqw] min-[850px]:grid-cols-3 min-[850px]:gap-[1.2cqw]">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex h-full min-w-0 flex-col rounded-[18px] border border-[#E1E1E1] bg-[#FBFBFB] p-2.5 min-[850px]:min-h-[35.35cqw] min-[850px]:rounded-[1.55cqw] min-[850px]:p-[0.98cqw]"
            >
              <div className="relative aspect-[3/2] w-full shrink-0 overflow-hidden rounded-[13px] min-[850px]:rounded-[1.28cqw]">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  unoptimized
                  sizes="(min-width: 850px) 30vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>

              <p className="urbanist mt-3 text-[10px] leading-[1.3] text-[#D9B061] min-[850px]:mt-[1.45cqw] min-[850px]:text-[clamp(8px,0.98cqw,14px)]">
                {project.category}
              </p>
              <h3 className="clash-display mt-1 text-[16px] font-medium leading-[1.3] text-[#282828] min-[850px]:mt-[0.42cqw] min-[850px]:text-[clamp(12px,1.45cqw,21px)]">
                {project.title}
              </h3>
              <p className="urbanist mt-1.5 text-[12px] leading-[1.55] text-[#777777] min-[850px]:mt-[0.58cqw] min-[850px]:text-[clamp(9px,1.08cqw,15px)] min-[850px]:leading-[1.5]">
                {projectDescription}
              </p>
              <Link
                href="/work"
                className="urbanist mt-2 inline-flex w-fit items-center gap-2 text-[12px] leading-[1.3] text-[#D9B061] transition-colors hover:text-[#bd8957] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a36e3d] min-[850px]:mt-[0.82cqw] min-[850px]:gap-[0.62cqw] min-[850px]:text-[clamp(9px,1.08cqw,15px)]"
              >
                Explore My Work
                <FiArrowRight aria-hidden="true" className="h-3 w-3 min-[850px]:h-[1.12cqw] min-[850px]:w-[1.12cqw]" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
