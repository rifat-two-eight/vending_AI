import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Block Provisions",
  description: "Intelligent unattended retail solutions powered by AI",
   icons: {
    icon: "/block.png",         
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  );
}