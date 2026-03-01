"use client";

import { AnimatedSection } from "@/components/animated-section";
import { Section } from "@/components/section";
import { siteConfig } from "@/data/site";
import { motion } from "framer-motion";

export function MetricsSection() {
  return (
    <Section className="py-12 md:py-16">
      <AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {siteConfig.metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring" }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <div className="relative z-10">
                <div className="text-3xl md:text-4xl font-bold mb-2 text-white font-mono">
                  {metric.value}
                </div>
                <div className="text-sm text-zinc-400 uppercase tracking-wide">{metric.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </Section>
  );
}
