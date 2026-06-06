import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Moon, Sun, Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";
import { cn } from "@/lib/utils";
import resume from "../../assets/resume.pdf";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "glass border-b border-border/60 py-3"
          : "py-5"
      )}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-display font-bold text-gradient"
        >
          VH
        </Link>

        {/* Desktop Navbar */}
        <ul className="hidden lg:flex items-center gap-8 text-lg font-semibold">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {l.label}

                <span className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-violet to-cyan transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-2">
          
          {/* Resume Button */}
          <Button
            variant="outline"
            size="sm"
            className="hidden sm:inline-flex border-cyan/50 text-cyan hover:bg-cyan/10 hover:text-cyan text-base px-5 py-5"
            asChild
          >
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="size-4" />
              Resume
            </a>
          </Button>

          {/* Theme Toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded-full hover:bg-secondary transition-colors"
          >
            {theme === "dark" ? (
              <Sun className="size-6" />
            ) : (
              <Moon className="size-6" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden p-2"
            aria-label="Menu"
          >
            {open ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden glass border-t border-border/60 mt-3">
          <ul className="px-6 py-5 flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}