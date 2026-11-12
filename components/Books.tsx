import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiBookOpen } from "react-icons/fi";

export type Book = {
  id: string;
  src: string;
  alt: string;
  href?: string;
};

// Add your cover paths here, or pass a custom books array to this component.
const bookCovers: Book[] = [
  {
    id: "book-01",
    src: "https://m.media-amazon.com/images/I/71opV+x8R5L._SY425_.jpg",
    alt: "Tales of the Hippie Dippie Gardener",
    href: "",
  },
  {
    id: "book-02",
    src: "https://m.media-amazon.com/images/I/51kKrXJP3ZL._SY522_.jpg",
    alt: "El Color del Renacer: Memorias de Fe, Tierra y Renacimiento (Spanish Edition)",
    href: "",
  },
  {
    id: "book-03",
    src: "https://m.media-amazon.com/images/I/81dKKg+R5EL._SY425_.jpg",
    alt: "FRESH PATHS UNFOLDING: VERA’S JOURNEY CONTINUES",
    href: "",
  },
  {
    id: "book-04",
    src: "https://m.media-amazon.com/images/I/71juM83U+cL._SY466_.jpg",
    alt: "LAFLAPS: Living A Fruitful Life After Prison System",
    href: "",
  },
  {
    id: "book-05",
    src: "https://m.media-amazon.com/images/I/71+QHcaqVKL._SY466_.jpg",
    alt: "Forged in the Mountains: A Family's Resilience",
    href: "",
  },
  {
    id: "book-06",
    src: "https://m.media-amazon.com/images/I/613ypngHL7L._SY466_.jpg",
    alt: "THE TIME CAPSULE",
    href: "",
  },
  {
    id: "book-07",
    src: "https://m.media-amazon.com/images/I/61HZcMSR5EL._SY522_.jpg",
    alt: "Through The Eye of The Storm",
    href: "",
  },
  {
    id: "book-08",
    src: "https://m.media-amazon.com/images/I/61SwnA42oIL._SY466_.jpg",
    alt: "God Carried Me: A Testament to Faith Through Life's Storms",
    href: "",
  },
];

export default function Books({ books = bookCovers }: { books?: Book[] }) {
  return (
    <section
      aria-label="Book design portfolio"
      className="section-spacing w-full bg-[#FBFBFB] px-4 sm:px-6 lg:px-[5%]"
    >
      <div className="mx-auto w-full max-w-[1420px]">
        <header className="mx-auto max-w-[820px] text-center">
          <div className="flex items-center justify-center gap-2">
            <span
              aria-hidden="true"
              className="h-4 w-4 rounded-full border-3 border-[#282828] bg-[#D9B061]"
            />
            <span className="urbanist text-[16px] leading-[1.4] text-[#777777]">
              Books &amp; Creative Projects
            </span>
          </div>
          <h2 className="clash-display mt-3 text-balance text-[2rem] font-medium leading-[1.15] tracking-tight text-[#282828] sm:text-[clamp(2.25rem,4.2vw,3.5rem)]">
            Every Cover Tells A Story.
          </h2>
          <p className="urbanist mx-auto mt-4 max-w-[720px] text-[15px] leading-[1.7] text-[#777777] sm:text-[16px]">
            A selection of book covers, eBooks, and illustrations, thoughtfully
            designed to bring each author&apos;s story to life. Explore the
            details that make every project its own.
          </p>
        </header>

        <ul
          aria-label="Book covers"
          className="mt-8 grid list-none grid-cols-2 gap-x-3 gap-y-5 sm:mt-10 sm:gap-5 md:grid-cols-3 lg:mt-12 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-8"
        >
          {books.map((book, index) => {
            const cover = (
              <div className="relative aspect-[2/3] overflow-hidden rounded-[6px] bg-[#F2F0EB] shadow-[0_4px_12px_rgba(40,40,40,0.08)]">
                {book.src.trim() ? (
                  <Image
                    src={book.src}
                    alt={book.alt}
                    fill
                    sizes="(min-width: 1578px) 337px, (min-width: 1024px) 23vw, (min-width: 768px) 32vw, 50vw"
                    className="object-cover"
                  />
                ) : (
                  <div
                    role="img"
                    aria-label={`${book.alt} placeholder`}
                    className="absolute inset-0 border border-[#E5E0D6] bg-linear-to-br from-[#F8F6F0] to-[#EDE9E1]"
                  >
                    <div
                      aria-hidden="true"
                      className="flex h-full flex-col p-4 sm:p-6"
                    >
                      <span className="urbanist text-[11px] tracking-widest text-[#946A24] sm:text-xs">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="flex flex-1 flex-col items-center justify-center gap-3">
                        <FiBookOpen
                          className="h-7 w-7 text-[#B3935C] sm:h-10 sm:w-10"
                          strokeWidth={1}
                        />
                        <span className="clash-display text-sm font-medium text-[#807664] sm:text-lg">
                          Book cover
                        </span>
                      </div>
                      <span className="mx-auto h-px w-8 bg-[#D9B061] sm:w-12" />
                    </div>
                  </div>
                )}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-0 w-[5px] bg-linear-to-r from-black/10 to-transparent"
                />
              </div>
            );

            return (
              <li key={book.id} className="min-w-0">
                {book.href ? (
                  <Link
                    href={book.href}
                    aria-label={`View ${book.alt}`}
                    className="block rounded-[6px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A87932]"
                  >
                    {cover}
                  </Link>
                ) : (
                  cover
                )}
              </li>
            );
          })}
        </ul>

        <div className="mt-8 flex justify-center sm:mt-10">
          <Link
            href="/contact"
            className="urbanist inline-flex items-center gap-2 rounded-full bg-[#D9B061] py-1.5 pl-4 pr-1.5 text-[15px] font-medium text-[#282828] shadow-[0_8px_16px_rgba(0,0,0,0.16)] hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#282828]"
          >
            Let&apos;s Create Together
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#282828] text-[#D9B061]">
              <FiArrowUpRight aria-hidden="true" size={20} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
