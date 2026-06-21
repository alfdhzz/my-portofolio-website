"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-10 h-10" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2.5 rounded-full bg-card-bg border border-card-border hover:bg-card-bg/80 hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-sm cursor-pointer"
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
