"use client";

import { Menu, ShoppingCart, X } from "lucide-react";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black shadow-lg" : "bg-black/90"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* TOP BAR */}
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <h1 className="text-2xl font-black tracking-tighter text-white">
            WESTERNISH
          </h1>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10 text-sm">
            {["WOMEN", "COLLECTIONS", "ACCESSORIES"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white font-medium tracking-wide hover:text-gray-300 transition"
              >
                {item}
              </a>
            ))}
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-white/10 transition">
              <ShoppingCart className="w-5 h-5 text-white" />
            </button>

            {/* MOBILE TOGGLE */}
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 pb-6 pt-2">
            {["MEN", "WOMEN", "COLLECTIONS", "ACCESSORIES"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white font-medium hover:text-gray-300 transition"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
