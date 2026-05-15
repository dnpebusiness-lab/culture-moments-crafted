import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Index" },
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/latest", label: "Latest" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          scrolled ? "bg-charcoal/85 backdrop-blur-md border-b border-white/5" : ""
        }`}
        style={{ mixBlendMode: scrolled || open ? "normal" : "difference" }}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-10 py-5">
          <Link
            to="/"
            className="font-serif text-xl tracking-tight text-paper"
            aria-label="Milestone Inventive — home"
          >
            Milestone<span className="text-gold">.</span>
          </Link>
          <nav
            className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.22em] font-medium text-paper"
            aria-label="Primary"
          >
            {links.slice(1).map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="hover:text-gold transition-colors duration-300 gold-underline"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-paper text-[11px] uppercase tracking-[0.22em]"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal text-paper transition-opacity duration-500 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="h-full flex flex-col justify-center px-8 gap-6" aria-label="Mobile">
          {links.slice(1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-serif text-5xl text-paper hover:text-gold transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <p className="mt-12 font-mono text-[10px] uppercase tracking-[0.3em] text-paper/40">
            11 Henry Street · Galway
          </p>
        </nav>
      </div>
    </>
  );
}
