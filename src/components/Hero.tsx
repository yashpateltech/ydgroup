import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f2f2f2] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
              Build in the cloud with a YDGROUPS account
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              Get started creating, deploying, and managing applications—across multiple clouds, on-premises, and at the edge—with scalable and cost-efficient services.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#0078d4] hover:bg-[#005a9e] text-white px-8 py-6 text-lg">
                Try YDGROUPS for free
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg border-gray-300">
                Pay as you go
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-lg shadow-2xl overflow-hidden border border-gray-200 bg-white">
              <img
                src="https://picsum.photos/seed/cloud/800/500"
                alt="Cloud Dashboard"
                className="w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-[#0078d4]/10 blur-2xl" />
            <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-blue-400/10 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
