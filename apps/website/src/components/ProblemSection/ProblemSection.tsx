import SectionLabel from "@/components/SectionLabel/SectionLabel";

const ProblemSection = () => {
  return (
    <section className="border-y border-[#eeeaf2] bg-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-10 lg:py-28">
        <div>
          <SectionLabel>The problem</SectionLabel>
          <h2 className="max-w-[440px] text-3xl font-semibold leading-[1.06] tracking-[-.055em] sm:text-4xl">
            You came to learn something. Not to scroll forever.
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {[
            ["01", "Important information", "buried in long pages."],
            ["02", "Repeated scrolling", "just to find one specific section."],
            ["03", "Useful resources", "scattered throughout the content."],
          ].map(([num, title, desc]) => (
            <div key={num} className="border-t border-[#dcd6e8] pt-4">
              <span className="text-[11px] font-semibold text-[#8068cc]">
                {num}
              </span>
              <h3 className="mt-7 text-[15px] font-semibold">{title}</h3>
              <p className="mt-2 text-[13px] leading-6 text-[#817987]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
