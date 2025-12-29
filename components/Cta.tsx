"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Building,
  ShoppingBag,
  Users,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export function CTAPricing() {
  const pricingFactors = [
    "Machine configuration",
    "Purchase vs. operated placement",
    "Software and support requirements",
    "Fleet size and rollout timeline",
  ];

  const ctaCards = [
    {
      icon: ShoppingBag,
      title: "Get a Machine Quote",
      description: "Looking to purchase hardware?",
      details: [
        "Number of machines",
        "Intended use (snacks, drinks, mixed, fresh)",
        "Location type",
        "Timeline",
      ],
      buttonText: "Get Quote",
      gradient: "from-[#1F3D2B] to-[#274F38]",
    },
    {
      icon: Building,
      title: "Place a Vending Machine",
      description: "Have a location that needs vending?",
      details: [
        "Installation",
        "Stocking",
        "Ongoing operations",
        "Maintenance",
      ],
      buttonText: "Request Placement",
      gradient: "from-[#1F3D2B] to-[#274F38]",
    },
    {
      icon: Users,
      title: "Talk With Sales",
      description: "Get a custom walkthrough.",
      details: [
        "See how the system works",
        "Hardware and software demo",
        "Tailored to your needs",
        "No commitments",
      ],
      buttonText: "Book a Demo",
      gradient: "from-[#1F3D2B] to-[#274F38]",
    },
  ];

  return (
    <section
      id="pricing"
      className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden"
    >
      {/* Animated orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-0 w-96 h-96 bg-[#3E6B53]/20 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pricing Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
            Better vending at{" "}
            <span className="bg-gradient-to-r from-[#1F3D2B] to-[#274F38] bg-clip-text text-transparent">
              better costs.
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Pricing varies based on your specific needs:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            {pricingFactors.map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-3 bg-white border border-[#3E6B53]/30 rounded-xl p-4 text-left hover:border-[#1F3D2B]/50 hover:shadow-md transition-all"
              >
                <CheckCircle2 className="w-5 h-5 text-[#1F3D2B] flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm">{factor}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-slate-500">
            We keep pricing straightforward and aligned with long-term operator
            success.
          </p>
        </motion.div>

        {/* CTA Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {ctaCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl from-[#3E6B53]/20 to-[#1F3D2B]/10" />

              <div className="relative bg-white border border-[#3E6B53]/30 rounded-2xl p-8 h-full hover:border-[#1F3D2B]/50 hover:shadow-2xl transition-all">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <card.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-slate-600 mb-6">{card.description}</p>

                {/* Details */}
                <ul className="space-y-2 mb-8">
                  {card.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#1F3D2B] to-[#274F38]" />
                      <span className="text-slate-700 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <Link href="#contact">
                  <Button
                    className={`w-full bg-gradient-to-r ${card.gradient} hover:opacity-90 text-white shadow-lg group/btn transition-all`}
                  >
                    {card.buttonText}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}