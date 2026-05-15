import { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const navItems = [
  { path: "/", label: "Overview" },
  { path: "/operator-lab", label: "Case Study" },
  { path: "/cv", label: "CV" },
  { path: "/contact", label: "Contact" },
];

export function Layout() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col relative bg-zinc-50 dark:bg-zinc-950 dossier-grid text-zinc-900 dark:text-zinc-100 transition-colors duration-300 overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] dark:opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      <div className="fixed inset-0 pointer-events-none z-[9998] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[size:100%_4px,3px_100%] opacity-[0.03] dark:opacity-[0.07]" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/88 dark:bg-zinc-950/84 shadow-[0_10px_40px_rgba(24,24,27,0.06)] backdrop-blur-md md:sticky">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-default">
            <div className="w-2.5 h-2.5 bg-blue-600 rounded-sm group-hover:rotate-45 transition-transform" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
              HoangPham_Portfolio
            </span>
          </div>

          <div className="flex items-center gap-3 md:gap-8">
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      "relative font-mono text-[11px] font-bold uppercase tracking-widest transition-all hover:text-blue-600 dark:hover:text-blue-400",
                      isActive
                        ? "text-blue-600 dark:text-blue-400 after:absolute after:left-0 after:right-0 after:-bottom-2 after:h-px after:bg-current after:opacity-100"
                        : "text-zinc-500 dark:text-zinc-400"
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all border border-zinc-200 dark:border-zinc-800 shadow-sm"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="md:hidden inline-flex items-center gap-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 px-3 py-2 text-zinc-500 dark:text-zinc-400"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest">Menu</span>
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md">
            <nav className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "rounded-lg px-3 py-3 font-mono text-[11px] font-bold uppercase tracking-widest transition-all",
                      isActive
                        ? "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
                        : "text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-blue-600 dark:hover:text-blue-400"
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main
        className={cn(
          "flex-1 max-w-5xl mx-auto w-full px-6",
          isHome ? "pt-20 pb-10 md:pt-20 md:pb-18" : "pt-26 pb-10 md:pt-20 md:pb-18"
        )}
      >
        <Outlet />
      </main>

      <footer className="border-t border-zinc-200/80 dark:border-zinc-800/80 py-10 bg-white/92 dark:bg-zinc-950/92 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-600">
            SYS.VER.1.0.0 // {new Date().getFullYear()}
          </div>
          <div className="rounded-full border border-emerald-200/80 bg-emerald-50 px-4 py-2 flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            Open for selected product work
          </div>
        </div>
      </footer>
    </div>
  );
}
