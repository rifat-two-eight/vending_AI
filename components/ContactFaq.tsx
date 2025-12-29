"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, MessageSquare, Plus, Minus, Loader2 } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export function ContactFAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const faqs = [
    {
      question: "How does it work?",
      answer:
        "Our AI-powered vending machine uses computer vision and artificial intelligence to automatically detect which items a customer takes. The system charges the customer accurately and updates inventory in real time—without traditional buttons, product selections, or manual input.",
    },
    {
      question:
        "Do customers need a specific app or any setup to make a purchase?",
      answer:
        "No. Customers simply tap their phone using Apple Pay or tap a credit card to pay. There is no app, account, or setup required. They tap to unlock the fridge, take what they want, and walk away—fast and seamless.",
    },
    {
      question: "What types of products can I sell?",
      answer:
        "Because the machine uses computer vision rather than fixed slots or scales, it supports a wide range of products. You can sell snacks, beverages, electronics, personal care items, and more. As long as the product is registered in our system, it can be sold accurately.",
    },
    {
      question: "Can I add my own logo or branding?",
      answer:
        "Yes. We offer custom-wrapped samples and fully branded machines. Our team can also assist with graphic design if needed. Contact us to discuss branding options and timelines.",
    },
    {
      question: "What is the warranty and support coverage?",
      answer:
        "We provide a one-year warranty on parts and lifetime technical support. If you need help with software issues or hardware installation, our support team is available to assist.",
    },
    {
      question:
        "Are there any fees to place a machine, and do I have input on product selection?",
      answer:
        "There is no placement fee. We handle installation, stocking, and refills as part of the agreement. Product selection is guided by sales data from similar locations and local demand, but we actively consider feedback and preferences whenever possible. Placement is subject to location fit and performance criteria.",
    },
    {
      question:
        "Do I need to sign a contract to place a machine at my location?",
      answer:
        "No long-term contract is required for machine placement. You are free to try the system, and if it does not meet your expectations, you may cancel at any time with 30 days’ notice. This allows us to coordinate removal of the machine and transition out smoothly.",
    },
    {
      question: "What is your return policy if I purchase a machine?",
      answer:
        "We offer a 30-day money-back guarantee on purchased machines. The machine must be returned in the same condition as delivered, with no damage or modifications. All purchased machines include a one-year parts warranty and lifetime technical support.",
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast.success("Message sent successfully!", {
        description: "We’ll get back to you shortly.",
      });

      formRef.current.reset();
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message", {
        description:
          error?.text || "Recipient email is not configured in EmailJS.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background blur */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-slate-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-200/40 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3E6B53]/10 border border-[#3E6B53]/30 mb-6">
              <Mail className="w-4 h-4 text-[#1F3D2B]" />
              <span className="text-sm font-medium text-[#1F3D2B]">
                Get in Touch
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
              Contact <span className="text-[#1F3D2B]">Us</span>
            </h2>

            <p className="text-xl text-slate-600 mb-8">
              Fill out the form below and we’ll get back to you shortly.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  name="user_email"
                  required
                  placeholder="your@email.com"
                  className="focus:border-[#1F3D2B] focus:ring-[#1F3D2B]/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Company / Location
                </label>
                <Input
                  type="text"
                  name="company"
                  placeholder="Company name or location"
                  className="focus:border-[#1F3D2B] focus:ring-[#1F3D2B]/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <Textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="focus:border-[#1F3D2B] focus:ring-[#1F3D2B]/20"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-[#1F3D2B] hover:bg-[#274F38] text-white transition-colors"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </motion.div>

          {/* FAQ SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3E6B53]/10 border border-[#3E6B53]/30 mb-6">
              <MessageSquare className="w-4 h-4 text-[#1F3D2B]" />
              <span className="text-sm font-medium text-[#1F3D2B]">
                Frequently Asked Questions
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
              Common <span className="text-[#1F3D2B]">Questions</span>
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-[#3E6B53]/30 rounded-xl overflow-hidden hover:border-[#1F3D2B]/50 transition-colors"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-start justify-between p-6 text-left gap-6"
                  >
                    {/* Question text - takes all available space */}
                    <span className="font-semibold text-slate-800 flex-1 text-left">
                      {faq.question}
                    </span>

                    {/* Icon - fixed size container, always visible */}
                    <div className="flex items-center justify-center min-w-[32px] h-8 flex-shrink-0">
                      {openFAQ === index ? (
                        <Minus className="w-6 h-6 text-[#1F3D2B]" />
                      ) : (
                        <Plus className="w-6 h-6 text-[#3E6B53]" />
                      )}
                    </div>
                  </button>

                  {openFAQ === index && (
                    <div className="px-6 pb-6 text-slate-600">{faq.answer}</div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
