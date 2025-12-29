"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    href: string
  ) => {
    e.preventDefault();

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const headerOffset = 100;
      const y =
        element.getBoundingClientRect().top +
        window.scrollY -
        headerOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }

    // ✅ FIX: close mobile menu AFTER scroll starts
    if (isOpen) {
      setTimeout(() => {
        setIsOpen(false);
      }, 300);
    }
  };

  const navItems = [
    { name: "Solutions", href: "#solutions" },
    { name: "Hardware", href: "#hardware" },
    { name: "Software", href: "#software" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-[#3E6B53]/40 shadow-lg shadow-black/5"
          : "bg-white/80 backdrop-blur-md border-b border-[#3E6B53]/20"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center gap-1 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <Image src="/block.png" height={20} width={50} alt="logo" />
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-[#1F3D2B] hover:text-[#274F38] transition-colors text-sm font-medium relative group cursor-pointer"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1F3D2B] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              onClick={(e) => scrollToSection(e, "#contact")}
              className="bg-[#1F3D2B] hover:bg-[#274F38] text-white shadow-lg transition-all"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#1F3D2B] p-2 hover:bg-[#3E6B53]/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden border-t border-[#3E6B53]/20 bg-white"
        >
          <div className="py-5 px-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="block px-4 py-3 text-base font-medium text-[#1F3D2B] hover:text-[#274F38] hover:bg-[#3E6B53]/10 rounded-lg transition-colors cursor-pointer"
              >
                {item.name}
              </a>
            ))}

            <div className="pt-4 px-4">
              <Button
                onClick={(e) => scrollToSection(e, "#contact")}
                className="w-full bg-[#1F3D2B] hover:bg-[#274F38] text-white shadow-md transition-all py-6 text-base"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
}
