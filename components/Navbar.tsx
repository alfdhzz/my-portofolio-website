"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/40 backdrop-blur-xl shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link
          href="#home"
          className="text-2xl font-black tracking-tighter group flex items-center"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-primary group-hover:opacity-80 transition-opacity">
            AFY<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-base font-medium text-text-secondary hover:text-primary transition-colors group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
          ))}
          <ThemeToggle />
          <a
            href="#contact"
            className="px-6 py-2.5 text-base font-medium text-background bg-primary hover:bg-primary-light rounded-full transition-colors shadow-[0_0_15px_rgba(217,199,163,0.3)]"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            className="text-foreground p-2 hover:text-primary transition-colors cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background/90 backdrop-blur-xl border-b border-border-color shadow-lg md:hidden"
          >
            <div className="flex flex-col py-4 px-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-text-secondary hover:text-primary transition-all duration-300 hover:translate-x-2"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex justify-center px-6 py-3 mt-2 text-base font-medium text-background bg-primary hover:bg-primary-light rounded-full shadow-[0_0_15px_rgba(217,199,163,0.3)]"
              >
                Hire Me
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
