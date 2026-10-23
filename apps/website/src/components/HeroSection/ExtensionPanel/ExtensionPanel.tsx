import { ChevronRight, ExternalLink, Link2, Sparkles } from "lucide-react";

const ExtensionPanel = ({ compact = false }: { compact?: boolean }) => {
  return (
    <div
      className={`relative overflow-hidden rounded-[14px] border border-[#ded9eb] bg-[#fff] shadow-[0_22px_55px_rgba(38,27,72,.16)] ${compact ? "w-full" : "w-[276px]"}`}
    >
      <div className="flex items-center justify-between border-b border-[#eeeaf3] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="flex size-6 items-center justify-center rounded-[7px] bg-[#5c3bd2] text-[11px] font-bold text-white">
            b.
          </span>
          <span className="text-[12px] font-semibold tracking-[-.02em]">
            briefly
          </span>
        </div>
        <span className="text-[10px] text-[#a39daa]">Reading assistant</span>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div>
          <div className="mb-2 flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[.14em] text-[#8c8499]">
            <Sparkles className="size-3 text-[#7457d6]" /> Overview
          </div>
          <p className="text-[11px] leading-[1.6] text-[#4e4858]">
            This guide explains how modern browsers load a webpage, from the
            initial request to rendering content on screen.
          </p>
        </div>
        <div>
          <div className="mb-2 text-[9px] font-semibold uppercase tracking-[.14em] text-[#8c8499]">
            On this page
          </div>
          <div className="flex flex-col gap-2">
            {[
              "How browsers work",
              "The loading process",
              "Rendering a page",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-2 text-[11px] text-[#5c3bd2]"
              >
                <span className="text-[9px] text-[#b0a9ba]">0{index + 1}</span>
                {item}
                <ChevronRight className="ml-auto size-3" />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-2 flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[.14em] text-[#8c8499]">
            <Link2 className="size-3" /> Key links
          </div>
          <div className="flex flex-col gap-2 text-[10px] text-[#5c3bd2]">
            <span className="flex items-center gap-1.5">
              <ExternalLink className="size-3" /> Web platform docs
            </span>
            <span className="flex items-center gap-1.5">
              <ExternalLink className="size-3" /> Rendering performance
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtensionPanel;
