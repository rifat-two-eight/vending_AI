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
      color: "from-[#1F3D2B] to-[#274F38]",
    },
    {
      number: "02",
      title: "Grab",
      description: "AI detects products automatically",
      color: "from-[#1F3D2B] to-[#274F38]",
    },
    {
      number: "03",
      title: "Go",
      description: "Payment processed, inventory logged",
      color: "from-[#1F3D2B] to-[#274F38]",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background pattern */}
      <div 
  className="absolute inset-0 opacity-30 pointer-events-none"
  style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23e5e5e5' fill-opacity='0.4'%3E%3Cpath d='M0 0h40v40H0zM40 40h40v40H40z'/%3E%3C/g%3E%3C/svg%3E")`,
    backgroundSize: "80px 80px",
  }}
/>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3E6B53]/10 border border-[#3E6B53]/30 mb-6">
              <Zap className="w-4 h-4 text-[#1F3D2B]" />
              <span className="text-sm text-[#1F3D2B] font-medium">
                Zero Friction Checkout
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
              Simple for customers.{" "}
              <span className="text-[#1F3D2B]">
                Profitable for operators.
              </span>
            </h2>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              No apps. No scanning. No friction. Customers tap, grab, and go.
              The system automatically detects products, processes payment, and
              logs inventory in real time.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white rounded-xl p-4 border border-[#3E6B53]/30 hover:border-[#1F3D2B]/50 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#3E6B53]/20 to-[#1F3D2B]/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-[#1F3D2B]" />
                  </div>
                  <div>
                    <h3 className="text-slate-800 font-semibold mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-700 text-sm">{benefit.description}</p>
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
                  {/* Connection line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-6 bg-gradient-to-b from-[#3E6B53]/30 to-transparent" />
                  )}

                  <div className="relative bg-white border border-[#3E6B53]/30 rounded-2xl p-6 hover:border-[#1F3D2B]/50 hover:shadow-lg transition-all">
                    <div className="flex items-center gap-4">
                      {/* Number */}
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                      >
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

                    {/* Animated glow */}
                    <motion.div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating decoration */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#3E6B53]/20 to-[#1F3D2B]/10 rounded-full blur-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}