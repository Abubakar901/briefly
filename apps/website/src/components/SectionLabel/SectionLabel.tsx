import { type ReactNode } from "react";

const SectionLabel = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.18em] text-[#8068cc]">
      <span className="size-1.5 rounded-full bg-[#8068cc]" />
      {children}
    </div>
  );
}

export default SectionLabel;