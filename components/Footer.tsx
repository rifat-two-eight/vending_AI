"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-[#3E6B53]/20 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.a
          href="/"
          className="flex items-center justify-center gap-1 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-10 h-10 rounded-lg flex items-center justify-center">
            <Image src="/block.png" height={20} width={50} alt="logo" />
          </div>
          <span 
            className="text-xl font-bold text-[#1F3D2B] group-hover:text-[#274F38] transition-colors"
          >
            Block Provisions
          </span>
        </motion.a>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-5 text-center text-sm text-[#3E6B53]/80"
        >
          Copyright © {new Date().getFullYear()} Block Provisions. All rights reserved
        </motion.div>
      </div>
    </footer>
  );
}