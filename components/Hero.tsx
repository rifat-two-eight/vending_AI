"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-slate-50/70 to-gray-50">
      {/* ===== Very soft, low-contrast blurred background orbs ===== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large subtle orb - very low saturation */}
        <motion.div
          className="absolute top-[8%] left-[5%] w-[900px] h-[900px] bg-emerald-400/5 rounded-full blur-[120px]"
          animate={{
            x: [0, 100, 0],
            y: [0, 80, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Secondary orb - even softer */}
        <motion.div
          className="absolute bottom-[12%] right-[6%] w-[800px] h-[800px] bg-teal-400/6 rounded-full blur-[140px]"
          animate={{
            x: [0, -120, 0],
            y: [0, -90, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 34,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
        />

        {/* Tiny accent orb - barely noticeable */}
        <motion.div
          className="absolute top-[52%] left-[48%] w-[600px] h-[600px] bg-green-300/4 rounded-full blur-[100px]"
          animate={{
            x: [0, 140, 0],
            y: [0, 90, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 12,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-20">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/70 border border-slate-200/50 mb-6 mx-auto lg:mx-0 backdrop-blur-sm">
              <Zap className="w-4 h-4 text-emerald-600/80" />
              <span className="text-sm font-medium text-slate-700">
                AI-Powered Retail
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-800 mb-6 leading-tight">
              Next-Gen Unattended Retail.
              <br className="hidden sm:block" />
              <span className="text-[#1F3D2B]">Powered by AI.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We build and operate intelligent vending systems that combine modern hardware, AI-driven analytics, and frictionless checkout. Deploy smarter retail with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-[#1F3D2B] hover:bg-[#2A4A37] text-white px-9 py-7 text-lg group min-h-14 shadow-md hover:shadow-xl transition-all duration-300"
              >
                Book a Demo
                <ArrowRight className="ml-2.5 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Button>

              <Link href="#contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#3E6B53]/60 text-[#1F3D2B] hover:bg-[#3E6B53]/5 hover:text-[#274F38] px-9 py-7 text-lg min-h-14 shadow-sm hover:shadow transition-all duration-300"
                >
                  Request a Quote
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex-1 w-full lg:w-auto max-w-[400px] lg:max-w-[440px] xl:max-w-[480px]"
          >
            <div className="relative aspect-[3/4] sm:aspect-[4/6] rounded-3xl overflow-hidden shadow-2xl border border-gray-200/20 bg-white/60 backdrop-blur-sm">
              <Image
                src="/vending.jpg"
                alt="Modern AI-powered smart vending machine"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1024px) 100vw, 44vw"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-2.5 bg-gray-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}