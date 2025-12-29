"use client"
import { motion } from "framer-motion";
import {
  Monitor,
  TrendingUp,
  Package,
  DollarSign,
  Bell,
  BarChart3,
  Clock,
  MapPin,
  Shield,
  Video,
  AlertTriangle,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function VMSAnalytics() {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    { icon: Monitor, title: "Monitor Status", description: "Track machine uptime in real-time" },
    { icon: TrendingUp, title: "Track Sales", description: "View revenue and performance metrics" },
    { icon: Package, title: "Manage Inventory", description: "Product-level stock tracking" },
    { icon: DollarSign, title: "Adjust Pricing", description: "Update prices remotely" },
    { icon: Bell, title: "Get Alerts", description: "Restock and maintenance notifications" },
  ];

  const analytics = [
    { icon: BarChart3, title: "Product Performance", description: "Identify top sellers and underperformers" },
    { icon: MapPin, title: "Location Insights", description: "Sell-through rates by placement" },
    { icon: Clock, title: "Time Patterns", description: "Peak demand hours and trends" },
  ];

  const security = [
    { icon: Shield, title: "Transaction Trails", description: "Complete audit history" },
    { icon: Video, title: "Security Footage", description: "Optional per-purchase recording" },
    { icon: AlertTriangle, title: "Loss Detection", description: "Anomaly monitoring and alerts" },
  ];

  const tabs = [
    { name: "Management", data: features },
    { name: "Analytics", data: analytics },
    { name: "Security", data: security },
  ];

  return (
    <section id="software" className="py-24 bg-white relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#3E6B53]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#3E6B53]/10 rounded-full blur-3xl" />
      </div>

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
            <Monitor className="w-4 h-4 text-[#1F3D2B]" />
            <span className="text-sm text-[#1F3D2B] font-medium">Full Control</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
            Vending Management{" "}
            <span className="text-[#1F3D2B]">
              Software
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-4">
            Control your operation from anywhere.
          </p>

          <p className="text-slate-500 max-w-2xl mx-auto">
            Our software platform connects every machine into a single
            operational view—whether you run one unit or an entire fleet.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === index
                  ? "bg-[#1F3D2B] hover:bg-[#274F38] text-white shadow-lg"
                  : "bg-white border border-[#3E6B53]/30 text-[#1F3D2B] hover:bg-[#3E6B53]/10 hover:text-[#274F38]"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </motion.div>

        {/* Content Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {tabs[activeTab].data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white border border-[#3E6B53]/30 rounded-xl p-6 hover:border-[#1F3D2B]/50 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#3E6B53]/20 to-[#1F3D2B]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-[#1F3D2B]" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Dashboard Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="mx-auto max-w-3xl">
            <Image
              src="/vending3.webp"
              alt="VMS Analytics Dashboard - Real-time vending management interface"
              width={1200}
              height={800}
              className="w-full h-auto"
              sizes="(max-width: 1280px) 100vw, 1200px"
            />
          </div>
          
          <p className="text-center text-slate-500 mt-6 text-sm">
            Modern dashboard — real-time insights at your fingertips
          </p>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-br from-[#3E6B53]/5 to-white border border-[#3E6B53]/20 rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-slate-700 mb-2">
              <span className="font-semibold text-[#1F3D2B]">
                Make decisions based on data,
              </span>{" "}
              not guesswork.
            </p>
            <p className="text-slate-600">
              Use real data to reduce waste, improve margins, and scale
              efficiently.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}