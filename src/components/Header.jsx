import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Stay", href: "/stay" },
  { label: "Dining", href: "/dining" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* =====================================================
          DESKTOP / MAIN HEADER
      ===================================================== */}
      <header
        className={`fixed left-0 right-0 top-0 z-50 px-4 transition-all duration-500 sm:px-6 lg:px-8 ${
          isScrolled ? "pt-3" : "pt-4"
        }`}
      >
        <div
          className={`mx-auto flex h-16 max-w-[1500px] items-center justify-between px-5 transition-all duration-500 sm:px-7 ${
            isScrolled
              ? "border border-[var(--color-border)] bg-[var(--color-cream)]/95 shadow-sm backdrop-blur-md"
              : "border border-white/20 bg-[var(--color-forest-dark)]/35 text-white backdrop-blur-sm"
          }`}
        >
          {/* LOGO */}
          <a
            href="/"
            aria-label="Lala's Lagos home"
            className="group flex items-center gap-3"
          >
            <span
              className={`text-2xl font-semibold tracking-[-0.06em] transition-colors duration-500 ${
                isScrolled
                  ? "text-[var(--color-forest)]"
                  : "text-white"
              }`}
            >
              Lala's
            </span>

            <span
              className={`hidden text-[8px] font-medium uppercase tracking-[0.25em] transition-colors duration-500 sm:block ${
                isScrolled
                  ? "text-[var(--color-muted)]"
                  : "text-white/55"
              }`}
            >
              Lagos
            </span>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-7 md:flex lg:gap-9">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`group relative text-[9px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 ${
                  isScrolled
                    ? "text-[var(--color-ink)] hover:text-[var(--color-coral)]"
                    : "text-white/75 hover:text-white"
                }`}
              >
                {item.label}

                {/* Hover indicator */}
                <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 scale-0 rounded-full bg-[var(--color-coral)] transition-transform duration-300 group-hover:scale-100" />
              </a>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <a
            href="/stay"
            className={`hidden items-center gap-3 px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.16em] transition-all duration-300 md:flex ${
              isScrolled
                ? "bg-[var(--color-coral)] text-white hover:bg-[var(--color-forest)]"
                : "bg-[var(--color-butter)] text-[var(--color-forest)] hover:bg-white"
            }`}
          >
            Book a room

            <ArrowUpRight size={13} strokeWidth={1.8} />
          </a>

          {/* MOBILE ACTIONS */}
          <div className="flex items-center gap-2 md:hidden">
            {/* MOBILE BOOKING CTA */}
            <a
              href="/stay"
              className={`flex items-center gap-2 px-3 py-2.5 text-[8px] font-semibold uppercase tracking-[0.13em] transition-all duration-300 ${
                isScrolled
                  ? "bg-[var(--color-coral)] text-white"
                  : "bg-[var(--color-butter)] text-[var(--color-forest)]"
              }`}
            >
              Book a room
              <ArrowUpRight size={12} strokeWidth={1.8} />
            </a>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              className={`flex h-10 w-10 items-center justify-center ${
                isScrolled
                  ? "text-[var(--color-forest)]"
                  : "text-white"
              }`}
              aria-label={isOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X size={21} strokeWidth={1.5} />
              ) : (
                <Menu size={21} strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            className="fixed inset-x-4 top-24 z-40 border border-[var(--color-border)] bg-[var(--color-cream)] p-6 shadow-2xl md:hidden"
          >
            <nav className="flex flex-col">
              {navigation.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                  }}
                  className="group flex items-center justify-between border-b border-[var(--color-border)] py-5 text-3xl font-semibold tracking-[-0.05em] text-[var(--color-forest)]"
                >
                  <span>{item.label}</span>

                  <span className="text-base text-[var(--color-coral)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    ↗
                  </span>
                </motion.a>
              ))}

              {/* Mobile booking CTA inside menu */}
              <motion.a
                href="/stay"
                onClick={closeMenu}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.3,
                }}
                className="mt-6 flex items-center justify-between bg-[var(--color-coral)] px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[var(--color-forest)]"
              >
                Book a room

                <ArrowUpRight size={15} strokeWidth={1.7} />
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;