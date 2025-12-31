"use client";
import { motion } from "framer-motion";
import { Zap, TrendingUp, Repeat, Clock } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export function FrictionlessExperience() {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const benefits = [
    {
      icon: Clock,
      title: "Faster Transactions",
      description: "Shorter dwell time means higher throughput",
    },
    {
      icon: TrendingUp,
      title: "Higher Basket Sizes",
      description: "Customers buy more with frictionless checkout",
    },
    {
      icon: Repeat,
      title: "Repeat Usage",
      description: "Familiar, modern experience drives loyalty",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Tap",
      description: "Customer taps their card or phone",
    },
    {
      number: "02",
      title: "Grab",
      description: "AI detects products automatically",
    },
    {
      number: "03",
      title: "Go",
      description: "Payment processed, inventory logged",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden bg-gradient-to-br from-white via-slate-50/70 to-gray-50"
    >
      {/* ===== Very soft, low-contrast blurred orbs (same as Hero) ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[5%] left-[10%] w-[700px] h-[700px] bg-emerald-400/5 rounded-full blur-[120px]"
          animate={{
            x: [0, 90, 0],
            y: [0, 70, 0],
            scale: [1, 1.07, 1],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-[10%] right-[12%] w-[650px] h-[650px] bg-teal-400/6 rounded-full blur-[130px]"
          animate={{
            x: [0, -100, 0],
            y: [0, -80, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />

        <motion.div
          className="absolute top-[60%] left-[55%] w-[500px] h-[500px] bg-green-300/4 rounded-full blur-[100px]"
          animate={{
            x: [0, 120, 0],
            y: [0, 80, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 38,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-slate-200/50 mb-6 backdrop-blur-sm">
              <Zap className="w-4 h-4 text-emerald-600/80" />
              <span className="text-sm font-medium text-slate-700">
                Zero Friction Checkout
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6 leading-tight">
              Simple for customers.{" "}
              <span className="text-[#1F3D2B]">Profitable for operators.</span>
            </h2>

            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              No apps. No scanning. No friction. Customers tap, grab, and go.
              The system automatically detects products, processes payment, and
              logs inventory in real time.
            </p>

            {/* Benefits */}
            <div className="space-y-5">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white/80 rounded-xl p-5 border border-slate-200/50 hover:border-emerald-300/50 hover:shadow-md transition-all backdrop-blur-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-[#1F3D2B]" />
                  </div>
                  <div>
                    <h3 className="text-slate-800 font-semibold mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual steps */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative group"
                >
                  {/* Connection line - subtle */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-6 bg-gradient-to-b from-slate-300 to-transparent" />
                  )}

                  <div className="relative bg-white/90 border border-slate-200/50 rounded-2xl p-6 hover:border-emerald-300/50 hover:shadow-lg transition-all backdrop-blur-sm">
                    <div className="flex items-center gap-5">
                      {/* Number */}
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#1F3D2B] to-[#274F38] flex items-center justify-center flex-shrink-0 shadow-md">
                        <span className="text-2xl font-bold text-white">
                          {step.number}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-800 mb-1">
                          {step.title}
                        </h3>
                        <p className="text-slate-600">{step.description}</p>
                      </div>
                    </div>

                    {/* Very subtle glow on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#1F3D2B]/5 to-[#274F38]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating soft orb decoration (matching background theme) */}
            <motion.div
              animate={{
                y: [0, -25, 0],
                rotate: [0, 4, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-12 -right-12 w-40 h-40 bg-emerald-400/6 rounded-full blur-3xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}