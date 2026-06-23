import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/src/lib/utils";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-4 left-4 right-4 z-50 transition-all duration-500 rounded-full",
          scrolled ? "glass shadow-lg py-3 px-6" : "bg-transparent py-4 px-6"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="font-serif text-xl font-bold tracking-widest uppercase text-luxury">
            Zoe Styles
          </a>

          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8 font-sans text-xs font-medium uppercase tracking-[0.15em] text-muted">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-luxury transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#appointment"
              className="gold-gradient text-white px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-md hover:shadow-lg transition-all hover:scale-105"
            >
              BOOK APPOINTMENT
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-luxury"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-ivory/95 backdrop-blur-xl flex flex-col items-center justify-center pt-20"
          >
            <ul className="flex flex-col items-center gap-6">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-serif text-3xl text-luxury hover:text-champagne transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#appointment"
                  onClick={() => setIsOpen(false)}
                  className="bg-champagne text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md mt-4 inline-block"
                >
                  BOOK APPOINTMENT
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
