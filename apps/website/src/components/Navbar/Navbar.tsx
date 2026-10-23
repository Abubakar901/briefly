import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

import Logo from "@/components/Navbar/Logo/Logo";

const navItems = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Why Briefly", href: "#why-briefly" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-20 border-b border-[#eeeaf2]/90 bg-[#fbfafc]/90 backdrop-blur-md shadow-lg">
      <div className="mx-auto flex h-[76px] max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Logo />
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[13px] text-[#77717f] transition-colors hover:text-[#5c3bd2]"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#get-briefly"
            className="hidden h-10 items-center gap-2 rounded-lg bg-[#5c3bd2] px-4 text-[12px] font-semibold text-white shadow-[0_5px_14px_rgba(92,59,210,.18)] hover:bg-[#4d31bc] sm:inline-flex"
          >
            Get Briefly <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <button
            className="inline-flex size-10 items-center justify-center rounded-lg border border-[#e6e1ec] text-[#5d5668] md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="border-t border-[#eeeaf2] bg-[#fbfafc] px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-[#625b6d]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#get-briefly"
              className="text-sm font-semibold text-[#5c3bd2]"
            >
              Get Briefly <ArrowRight className="ml-1 inline size-3" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
