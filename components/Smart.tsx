"use client";
import { motion } from "framer-motion";
import {
  Brain,
  CreditCard,
  Activity,
  Grid3x3,
  Database,
  Shield,
} from "lucide-react";
import Image from "next/image";

export function SmartHardware() {
  const capabilities = [
    {
      icon: Brain,
      title: "AI-Powered Recognition",
      description: "Visual product detection without barcodes",
      color: "from-[#1F3D2B] to-[#274F38]",
    },
    {
      icon: CreditCard,
      title: "Cashless Payments",
      description: "Apple Pay, Google Pay, contactless cards",
      color: "from-[#1F3D2B] to-[#274F38]",
    },
    {
      icon: Activity,
      title: "Remote Diagnostics",
      description: "Real-time health monitoring and alerts",
      color: "from-[#1F3D2B] to-[#274F38]",
    },
    {
      icon: Grid3x3,
      title: "Modular Shelving",
      description: "Flexible configuration for any product type",
      color: "from-[#1F3D2B] to-[#274F38]",
    },
    {
      icon: Database,
      title: "Large Catalogs",
      description: "Support for evolving product inventories",
      color: "from-[#1F3D2B] to-[#274F38]",
    },
    {
      icon: Shield,
      title: "Built to Last",
      description: "Engineered for real environments",
      color: "from-[#1F3D2B] to-[#274F38]",
    },
  ];

  return (
    <section id="hardware" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#3E6B53]/20 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3E6B53]/10 border border-[#3E6B53]/30 mb-6">
            <Brain className="w-4 h-4 text-[#1F3D2B]" />
            <span className="text-sm text-[#1F3D2B] font-medium">Enterprise Grade</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
            Smart Hardware,{" "}
            <span className="text-[#1F3D2B]">Built to Perform</span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-4">
            Designed to scale. Built to last.
          </p>

          <p className="text-slate-500 max-w-2xl mx-auto">
            Our machines are engineered for reliability, flexibility, and
            long-term operation in real environments—not demos.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-xl from-[#3E6B53]/20 to-[#1F3D2B]/10" />

              <div className="relative bg-white border border-[#3E6B53]/30 rounded-xl p-6 h-full hover:border-[#1F3D2B]/50 hover:shadow-lg transition-all">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${capability.color} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <capability.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {capability.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {capability.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Highlight with Image on left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-[#3E6B53]/5 to-white border border-[#3E6B53]/20 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left - Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative rounded-xl overflow-hidden shadow-xl order-1 lg:order-none"
              >
                <div className="aspect-[3/4] sm:aspect-[5/6] lg:aspect-[6/7] relative">
                  <Image
                    src="/vending2.jpg"
                    alt="Smart vending machine with flexible product capacity"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </motion.div>

              {/* Right - Text & Stats */}
              <div className="order-2 lg:order-none">
                <h3 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
                  Flexible Capacity.
                  <br />
                  <span className="text-[#1F3D2B]">Endless Variety.</span>
                </h3>

                <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                  Fit 75+ unique SKUs and 300+ total items in a single compact
                  footprint. Support snacks, drinks, fresh items, and everyday
                  essentials like toiletries or convenience goods.
                </p>

                <p className="text-slate-500 mb-8">
                  Configure each machine to match the location, not the other
                  way around.
                </p>

                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {[
                    { label: "Unique SKUs", value: "75+" },
                    { label: "Total Items", value: "300+" },
                    { label: "Product Types", value: "All" },
                    { label: "Setup Time", value: "<1hr" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white rounded-xl p-5 sm:p-6 border border-[#3E6B53]/30 shadow-md text-center hover:border-[#1F3D2B]/50 transition-colors"
                    >
                      <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-[#1F3D2B] to-[#274F38] bg-clip-text text-transparent mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm sm:text-base text-slate-700 font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}