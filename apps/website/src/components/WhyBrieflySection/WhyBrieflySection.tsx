import {
  Check
} from "lucide-react";

import SectionLabel from "@/components/SectionLabel/SectionLabel";

const WhyBrieflySection = () => {
  return (
    <section
      id="why-briefly"
      className="mx-auto grid max-w-6xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:px-10 lg:py-32"
    >
      <div>
        <SectionLabel>A better reading workflow</SectionLabel>
        <h2 className="max-w-[430px] text-3xl font-semibold leading-[1.05] tracking-[-.055em] sm:text-5xl">
          Understand first. Dive deeper when you’re ready.
        </h2>
        <p className="mt-6 max-w-[390px] text-sm leading-7 text-[#817987]">
          Briefly helps you decide where to focus your attention. You stay in
          control of what you read, what you skip, and what you explore next.
        </p>
      </div>
      <div className="flex items-center">
        <div className="w-full border-y border-[#ddd7e8] py-6">
          <div className="flex items-start gap-4 py-3">
            <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-[#eeeafa] text-[#6c4bd1]">
              <Check className="size-4" />
            </span>
            <div>
              <h3 className="text-[15px] font-semibold">
                Get oriented before you dive in
              </h3>
              <p className="mt-1 text-sm leading-6 text-[#817987]">
                See the main idea before deciding what deserves your
                attention.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 py-3">
            <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-[#eeeafa] text-[#6c4bd1]">
              <Check className="size-4" />
            </span>
            <div>
              <h3 className="text-[15px] font-semibold">
                Stay in your reading flow
              </h3>
              <p className="mt-1 text-sm leading-6 text-[#817987]">
                Use Briefly alongside the webpage you already have open.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 py-3">
            <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-[#eeeafa] text-[#6c4bd1]">
              <Check className="size-4" />
            </span>
            <div>
              <h3 className="text-[15px] font-semibold">
                Go deeper whenever you need
              </h3>
              <p className="mt-1 text-sm leading-6 text-[#817987]">
                The overview is a starting point, not a replacement for the
                details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyBrieflySection;