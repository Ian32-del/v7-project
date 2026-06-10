import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import logo2 from "@/assets/logo2.png";

const links = [
  { to: "/", label: "HOME" },
  { to: "/products", label: "PRODUCTS" },
  { to: "/about", label: "ABOUT US" },
  { to: "/contact", label: "CONTACT" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-soft" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo2}
              alt="V7 Kenya Logo"
              className="h-7 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />

            <span className="font-display font-bold text-lg">
              V7 <span className="text-primary">Kenya</span>
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="px-4 py-2 rounded-full text-sm font-medium text-foreground/80 hover:text-primary hover:bg-accent transition-colors"
                  activeProps={{ className: "px-4 py-2 rounded-full text-sm font-semibold text-primary bg-accent" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="/products"
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-full gradient-primary text-primary-foreground text-sm font-semibold shadow-soft hover:shadow-glow transition-all hover:-translate-y-0.5"
          >
            View Drinks
          </Link>

          <button
            className="md:hidden size-10 grid place-items-center rounded-full bg-accent text-primary"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden bg-background border-t border-border animate-fade-in">
            <ul className="px-6 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-xl font-medium hover:bg-accent hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
      <div className="h-16" />
    </>

  );
}