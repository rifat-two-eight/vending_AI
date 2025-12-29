"use client";
import { motion } from "framer-motion";
import { ShoppingCart, Store, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export function ProductOverview() {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const products = [
    {
      icon: ShoppingCart,
      title: "Machine Sales",
      description:
        "Purchase AI-powered vending hardware and run it yourself. Full ownership, complete control.",
      features: [
        "One-time purchase",
        "Complete hardware ownership",
        "Self-operated model",
      ],
      gradient: "from-[#1F3D2B] to-[#274F38]",
    },
    {
      icon: Store,
      title: "Machine Placement & Operations",
      description:
        "We place, stock, and operate machines in qualified locations. You provide the space, we handle everything else.",
      features: [
        "Zero upfront cost",
        "Full-service operations",
        "Revenue sharing model",
      ],
      gradient: "from-[#1F3D2B] to-[#274F38]",
    },
  ];

  return (
    <section ref={ref} id="solutions" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3E6B53]/5 via-white to-white" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3E6B53]/10 border border-[#3E6B53]/30 mb-4"
          >
            <Sparkles className="w-4 h-4 text-[#1F3D2B]" />
            <span className="text-sm text-[#1F3D2B] font-medium">
              Flexible Solutions
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4"
          >
            One Platform.{" "}
            <span className="text-[#1F3D2B]">Two Ways to Work With Us.</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            We support both sides of unattended retail. Same technology.
            Different business models.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
              {/* Hover gradient blur */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl from-[#3E6B53]/20 to-[#1F3D2B]/10" />

              <div className="relative bg-white border border-[#3E6B53]/30 rounded-2xl p-8 hover:border-[#1F3D2B]/50 hover:shadow-xl transition-all duration-300">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1F3D2B] to-[#274F38] flex items-center justify-center mb-6 shadow-lg">
                  <product.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                  {product.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3E6B53]" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1F3D2B] to-[#274F38] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}