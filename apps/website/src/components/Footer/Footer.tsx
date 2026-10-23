import Logo from "@/components/Navbar/Logo/Logo";

const Footer = () => {
  return (
    <footer className="bg-[#292331] text-[#b8b1c1]">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 border-t border-white/10 px-5 py-10 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-10">
        <div>
          <Logo />
          <p className="mt-4 text-xs text-[#938b9f]">
            Understand more. Read less.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-7 gap-y-3 text-xs">
          <a href="#how-it-works" className="hover:text-white">
            How it works
          </a>
          <a href="#features" className="hover:text-white">
            Features
          </a>
          <a href="#why-briefly" className="hover:text-white">
            Why Briefly
          </a>
          <span className="text-[#6f6877]">Privacy policy coming soon</span>
          <span className="text-[#6f6877]">Contact coming soon</span>
        </div>
        <p className="text-[11px] text-[#756d7e]">© 2026 Briefly</p>
      </div>
    </footer>
  );
};

export default Footer;
