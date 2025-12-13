"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "COLLECTIONS", href: "/collections" },
  { label: "ABOUT US", href: "/about" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-black/70 backdrop-blur-md shadow-lg" : "bg-black/40"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* TOP BAR */}
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <Link
            href="/"
            className="text-2xl font-black tracking-tighter
              bg-linear-to-r from-[#C47BE4] via-[#D78FEE] to-white
              bg-clip-text text-transparent"
          >
            WESTERNISH
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium tracking-wide transition
                    ${
                      active
                        ? "text-white underline underline-offset-8"
                        : "text-white/80 hover:text-white"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-white/10 transition">
              <ShoppingCart className="w-5 h-5 text-white" />
            </button>

            {/* MOBILE TOGGLE */}
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300
            ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="flex flex-col gap-4 pb-6 pt-2">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium transition
                    ${
                      active
                        ? "text-white underline underline-offset-8"
                        : "text-white/80 hover:text-white"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
