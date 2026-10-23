import ExtensionPanel from "@/components/HeroSection/ExtensionPanel/ExtensionPanel";

const BrowserMockup = () => {
  return (
    <div className="relative mx-auto w-full max-w-[590px] rounded-[18px] border border-[#dbd5e5] bg-white p-2 shadow-[0_30px_80px_rgba(48,32,88,.14)] sm:p-3">
      <div className="flex h-8 items-center gap-1.5 border-b border-[#f0edf4] px-2">
        <span className="size-2 rounded-full bg-[#e5e0eb]" />
        <span className="size-2 rounded-full bg-[#e5e0eb]" />
        <span className="size-2 rounded-full bg-[#e5e0eb]" />
        <div className="ml-4 flex h-5 flex-1 items-center rounded-md bg-[#f7f5f9] px-3 text-[8px] text-[#ada7b5]">
          developer.mozilla.org/en-US/docs/Web/Performance
        </div>
      </div>
      <div className="relative grid min-h-[360px] grid-cols-[1fr_276px] gap-5 overflow-hidden rounded-b-[10px] bg-[#fcfbfd] p-5 max-[640px]:grid-cols-1 max-[640px]:min-h-[420px]">
        <div className="pt-3 max-[640px]:pr-[150px]">
          <div className="mb-3 h-2 w-24 rounded bg-[#dfd9e8]" />
          <div className="mb-4 h-6 w-4/5 rounded bg-[#292432]" />
          <div className="mb-7 h-2 w-3/5 rounded bg-[#ddd8e5]" />
          <div className="flex flex-col gap-3">
            <div className="h-2 w-full rounded bg-[#e7e3eb]" />
            <div className="h-2 w-[92%] rounded bg-[#e7e3eb]" />
            <div className="h-2 w-[78%] rounded bg-[#e7e3eb]" />
          </div>
          <div className="my-7 h-20 rounded border border-[#e9e4ef] bg-white" />
          <div className="mb-3 h-3 w-2/5 rounded bg-[#cfc8da]" />
          <div className="flex flex-col gap-3">
            <div className="h-2 w-full rounded bg-[#e7e3eb]" />
            <div className="h-2 w-[85%] rounded bg-[#e7e3eb]" />
          </div>
        </div>
        <ExtensionPanel />
      </div>
    </div>
  );
};

export default BrowserMockup;
