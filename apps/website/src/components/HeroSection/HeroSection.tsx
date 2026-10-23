import { ArrowRight, ChevronRight } from "lucide-react";

import BrowserMockup from "@/components/HeroSection/BrowserMockup/BrowserMockup";
import SectionLabel from "@/components/SectionLabel/SectionLabel";

const HeroSection = () => {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-24 pt-20 sm:px-8 sm:pt-28 lg:grid-cols-[.84fr_1.16fr] lg:gap-12 lg:px-10 lg:pb-32 lg:pt-32">
      <div>
        <SectionLabel>A better way to read the web</SectionLabel>
        <h1 className="max-w-[570px] text-[clamp(3.15rem,6vw,5.8rem)] font-semibold leading-[.96] tracking-[-.07em] text-[#28232e]">
          The big picture, <span className="text-[#8068cc]">without</span> the
          big read.
        </h1>
        <p className="mt-7 max-w-[480px] text-[16px] leading-[1.7] text-[#716a79]">
          Long articles. Endless documentation. Briefly gives you the gist,
          helps you find the right section, and gets you to the information you
          need.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#get-briefly"
            className="inline-flex h-12 items-center gap-2 rounded-lg bg-[#5c3bd2] px-5 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(92,59,210,.2)] hover:bg-[#4d31bc]"
          >
            Get Briefly <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href="#how-it-works"
            className="flex items-center gap-2 text-sm font-medium text-[#5d5668] hover:text-[#5c3bd2]"
          >
            See how it works <ChevronRight className="size-4" />
          </a>
        </div>
        <p className="mt-6 text-[11px] text-[#a49daa]">
          Your reading assistant, right in your browser.
        </p>
      </div>
      <div className="relative lg:pl-5">
        <div className="absolute -inset-8 -z-10 rounded-full bg-[#eeeafa] blur-3xl" />
        <BrowserMockup />
      </div>
    </section>
  );
};

export default HeroSection;
