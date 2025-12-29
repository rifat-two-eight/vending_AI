"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-slate-50 to-gray-100">
      {/* Animated background grid */}
      <div 
  className="absolute inset-0 opacity-30 pointer-events-none"
  style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23e5e5e5' fill-opacity='0.4'%3E%3Cpath d='M0 0h40v40H0zM40 40h40v40H40z'/%3E%3C/g%3E%3C/svg%3E")`,
    backgroundSize: "80px 80px",
  }}
/>

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-48 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"
        animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 xl:gap-20">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center lg:text-left max-w-3xl lg:max-w-none"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6 mx-auto lg:mx-0">
              <Zap className="w-4 h-4 text-slate-600" />
              <span className="text-sm font-medium text-slate-700">
                AI-Powered Retail
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-800 mb-6 leading-tight">
              Next-Gen Unattended Retail.
              <br className="hidden sm:block" />
              <span style={{ color: "#1F3D2B" }}>Powered by AI.</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-700 mb-10 max-w-2xl mx-auto lg:mx-0">
              We build and operate intelligent vending systems that combine
              modern hardware, AI-driven analytics, and frictionless checkout.
              Deploy smarter retail with confidence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-[#1F3D2B] hover:bg-[#274F38] text-white px-8 py-6 text-lg group transition-colors"
              >
                Book a Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#3E6B53] text-[#1F3D2B] hover:bg-[#3E6B53]/10 hover:text-[#274F38] px-8 py-6 text-lg transition-colors"
                >
                  Request a Quote
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right - Image (narrower width, taller height on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="flex-1 w-full lg:w-auto max-w-[380px] lg:max-w-[420px]"
          >
            <div className="relative aspect-[3/4] sm:aspect-[4/6] lg:aspect-[4/6] rounded-3xl overflow-hidden shadow-2xl border border-gray-200/60">
              <Image
                src="/vending.jpg"
                alt="Modern AI-powered smart vending machine"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-gray-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}