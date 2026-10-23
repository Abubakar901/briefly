import {
  FileText,
  MousePointer2,
  Sparkles
} from "lucide-react";

import SectionLabel from "@/components/SectionLabel/SectionLabel";

const HowItWorksSection = () => {
  return (
    <section
      id="how-it-works"
      className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
    >
      <SectionLabel>How Briefly works</SectionLabel>
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <h2 className="max-w-[580px] text-3xl font-semibold leading-[1.05] tracking-[-.055em] sm:text-5xl">
          From too much information to just what matters.
        </h2>
        <p className="max-w-[250px] text-sm leading-6 text-[#817987]">
          A faster first pass for the pages you actually need to understand.
        </p>
      </div>
      <div className="mt-16 grid gap-8 border-t border-[#ddd7e8] pt-8 md:grid-cols-3">
        {[
          {
            num: "01",
            title: "Open any webpage",
            desc: "Start with the article, tutorial, or documentation you want to understand.",
            Icon: FileText,
          },
          {
            num: "02",
            title: "Get the big picture",
            desc: "Understand the main idea in two or three sentences.",
            Icon: Sparkles,
          },
          {
            num: "03",
            title: "Go straight to what matters",
            desc: "Jump to sections and discover useful links.",
            Icon: MousePointer2,
          },
        ].map(({ num, title, desc, Icon }) => (
          <div key={num} className="relative">
            <div className="mb-10 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-[#8068cc]">
                {num}
              </span>
              <Icon className="size-5 text-[#8068cc]" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold tracking-[-.025em]">
              {title}
            </h3>
            <p className="mt-3 max-w-[260px] text-sm leading-6 text-[#817987]">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>

  )
}

export default HowItWorksSection;