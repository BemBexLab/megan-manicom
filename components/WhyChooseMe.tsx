
const features = [
  {
    number: "01",
    title: "Creative Thinking",
    description:
      "Fresh ideas and thoughtful designs tailored to your unique vision.",
  },
  {
    number: "02",
    title: "Personal Approach",
    description:
      "Every project receives individual attention, clear communication, and genuine care.",
  },
  {
    number: "03",
    title: "Detail-Oriented Work",
    description:
      "From typography to final presentation, every small detail matters.",
  },
  {
    number: "04",
    title: "End-to-End Support",
    description:
      "Creative guidance from initial ideas through design, publishing, and promotion.",
  },
];

export default function WhyChooseMe() {
  return (
    <section className="w-full bg-[#fffef5] px-6 py-16 sm:px-10 lg:px-[46px]">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 md:grid-cols-[1fr_1.1fr] md:gap-16">

        {/* Left Content */}
        <div className="pt-0 md:pt-[1px]">
          <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.2px] text-[#ff683c]">
            <span className="mr-1">⌁</span>
            WHY CHOOSE ME
          </p>

          <h2 className="refuseniks max-w-[540px] font-sans text-[42px] font-semibold leading-[1.12] tracking-[-1.7px] text-[#292929] lg:text-[46px]">
            MORE THAN JUST GOOD DESIGN.
          </h2>
        </div>

        {/* Right Feature Cards */}
        <div className="flex flex-col pt-[18px]">
          {features.map((feature, index) => (
            <div
              key={feature.number}
              className={`relative min-h-[135px] rounded-[14px] px-6 pt-[32px] ${
                index !== 0 ? "-mt-[15px]" : ""
              } ${
                index % 2 === 0
                  ? "bg-[#fceade]"
                  : "bg-white"
              }`}
            >
              {/* Number Tab */}
              <div
                className={`absolute -top-[15px] left-0 z-0 flex h-[32px] w-[62px] items-center justify-center rounded-t-[13px] ${
                  index % 2 === 0
                    ? "bg-[#fceade]"
                    : "bg-white"
                }`}
              >
                <span className="text-[17px] font-semibold text-[#ff5933]">
                  {feature.number}
                </span>
              </div>

              {/* Feature Content */}
              <div className="relative z-10">
                <h3 className="mb-3 text-[18px] font-semibold tracking-[-0.4px] text-[#303030]">
                  {feature.title}
                </h3>

                <p className="text-[12px] font-normal leading-[1.8] text-[#66615e]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}