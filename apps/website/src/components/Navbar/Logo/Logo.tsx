const Logo = () => {
  return (
    <a
      href="#top"
      className="flex items-center gap-2.5"
      aria-label="Briefly home"
    >
      <span className="flex size-8 items-center justify-center rounded-[9px] bg-[#5c3bd2] text-white shadow-[0_5px_12px_rgba(92,59,210,.22)]">
        <span className="text-[15px] font-bold tracking-[-.12em]">b.</span>
      </span>
      <span className="text-[17px] font-semibold tracking-[-.04em] text-[#26222c]">
        briefly
      </span>
    </a>
  );
};

export default Logo;
