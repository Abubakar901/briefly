import {
  ChevronRight,
  ExternalLink,
  Link2,
  PanelRight,
  Sparkles,
} from "lucide-react";

import SectionLabel from "@/components/SectionLabel/SectionLabel";

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-[#f2eff8]">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <SectionLabel>Product features</SectionLabel>
        <h2 className="max-w-[520px] text-3xl font-semibold leading-[1.05] tracking-[-.055em] sm:text-5xl">
          Less searching. More understanding.
        </h2>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <div className="flex min-h-[290px] flex-col justify-between rounded-2xl border border-[#dfd9eb] bg-white p-7">
            <div>
              <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-[#f0ecfa] text-[#6c4bd1]">
                <Sparkles className="size-5" />
              </div>
              <h3 className="text-xl font-semibold tracking-[-.035em]">
                Quick overviews
              </h3>
              <p className="mt-3 max-w-[330px] text-sm leading-6 text-[#817987]">
                Understand the main idea in two or three sentences before you
                commit to the read.
              </p>
            </div>
            <div className="mt-8 max-w-[340px] rounded-lg border border-[#eeeaf3] bg-[#fcfbfd] p-4">
              <div className="mb-2 text-[9px] font-semibold uppercase tracking-[.14em] text-[#9b93a6]">
                Overview
              </div>
              <p className="text-[11px] leading-5 text-[#5d5668]">
                A practical guide to building faster, more accessible web
                experiences.
              </p>
            </div>
          </div>
          <div className="flex min-h-[290px] flex-col justify-between rounded-2xl border border-[#dfd9eb] bg-white p-7">
            <div>
              <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-[#f0ecfa] text-[#6c4bd1]">
                <PanelRight className="size-5" />
              </div>
              <h3 className="text-xl font-semibold tracking-[-.035em]">
                Smart section navigation
              </h3>
              <p className="mt-3 max-w-[330px] text-sm leading-6 text-[#817987]">
                Jump straight to the heading you need, without hunting through
                the page.
              </p>
            </div>
            <div className="mt-8 flex max-w-[340px] flex-col gap-2 rounded-lg border border-[#eeeaf3] bg-[#fcfbfd] p-4 text-[11px] text-[#6b4dd0]">
              <span className="flex justify-between">
                How browsers work <ChevronRight className="size-3" />
              </span>
              <span className="flex justify-between">
                The loading process <ChevronRight className="size-3" />
              </span>
            </div>
          </div>
          <div className="flex min-h-[250px] flex-col justify-between rounded-2xl border border-[#dfd9eb] bg-white p-7 md:col-span-2 md:flex-row md:items-end">
            <div>
              <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-[#f0ecfa] text-[#6c4bd1]">
                <Link2 className="size-5" />
              </div>
              <h3 className="text-xl font-semibold tracking-[-.035em]">
                Useful links
              </h3>
              <p className="mt-3 max-w-[330px] text-sm leading-6 text-[#817987]">
                Discover relevant resources without losing your place.
              </p>
            </div>
            <div className="mt-8 flex w-full max-w-[360px] flex-col gap-3 rounded-lg border border-[#eeeaf3] bg-[#fcfbfd] p-4 text-[11px] text-[#6b4dd0] md:mt-0">
              <span className="flex items-center gap-2">
                <ExternalLink className="size-3" /> Web platform docs
              </span>
              <span className="flex items-center gap-2">
                <ExternalLink className="size-3" /> Rendering performance
              </span>
              <span className="flex items-center gap-2">
                <ExternalLink className="size-3" /> Accessibility fundamentals
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
