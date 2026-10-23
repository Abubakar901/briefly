const CTASection = () => {
  return (
    <section id="get-briefly" className="bg-[#292331] text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-9 px-5 py-24 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-10 lg:py-28">
        <div>
          <div className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.18em] text-[#b8a6ef]">
            <span className="size-1.5 rounded-full bg-[#b8a6ef]" />
            Start with the big picture
          </div>
          <h2 className="max-w-[590px] text-4xl font-semibold leading-[1] tracking-[-.06em] sm:text-6xl">
            Your next deep dive starts with the big picture.
          </h2>
          <p className="mt-6 max-w-[450px] text-[15px] leading-7 text-[#b8b1c1]">
            Spend less time finding your way through a page and more time
            learning what brought you there.
          </p>
        </div>
        <div className="flex flex-col items-start gap-3">
          <button
            disabled
            className="h-12 cursor-not-allowed rounded-lg bg-white/80 px-5 text-sm font-semibold text-[#30283a] opacity-90"
          >
            Early access coming soon
          </button>
          <p className="text-xs text-[#b8b1c1]">
            We’re getting Briefly ready for its first testers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
