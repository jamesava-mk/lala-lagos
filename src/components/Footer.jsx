import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Stay", href: "/stay" },
  { label: "Dining", href: "/dining" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

function Footer() {
  return (
    <footer className="bg-[var(--color-forest-dark)] px-6 py-8 text-white sm:px-10 lg:px-12 lg:py-10">
      <div className="mx-auto max-w-[1500px]">
        {/* Main footer */}
        <div className="grid gap-8 border-b border-white/15 pb-8 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link
              to="/"
              className="inline-block text-3xl font-semibold tracking-[-0.07em] transition-opacity hover:opacity-80 sm:text-4xl"
              aria-label="Lala's Lagos home"
            >
              Lala's
            </Link>

            <p className="mt-3 max-w-xs text-xs leading-6 text-white/50">
              A place to stay, eat, meet and experience Lagos from Victoria
              Island.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[var(--color-butter)]">
              Explore
            </span>

            <nav
              aria-label="Footer navigation"
              className="mt-4 flex flex-wrap gap-x-5 gap-y-2"
            >
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-xs text-white/55 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-butter)] focus:ring-offset-2 focus:ring-offset-[var(--color-forest-dark)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[var(--color-butter)]">
              Find us
            </span>

            <p className="mt-4 text-xs leading-6 text-white/55">
              251A Sapara Williams Close
              <br />
              Victoria Island, Lagos
              <br />
              Nigeria
            </p>

            <Link
              to="/contact"
              className="group mt-4 inline-flex items-center gap-3 border-b border-white/25 pb-1.5 text-[8px] font-semibold uppercase tracking-[0.18em] transition-colors hover:border-[var(--color-butter)] hover:text-[var(--color-butter)] focus:outline-none focus:ring-2 focus:ring-[var(--color-butter)] focus:ring-offset-2 focus:ring-offset-[var(--color-forest-dark)]"
            >
              Get in touch

              <ArrowUpRight
                size={12}
                strokeWidth={1.7}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-2 pt-5 text-[7px] uppercase tracking-[0.18em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Lala's Lagos</span>

          <span>Victoria Island · Lagos · Nigeria</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;