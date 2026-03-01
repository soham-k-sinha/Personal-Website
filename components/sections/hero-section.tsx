"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { ArrowDown, Sparkles } from "lucide-react";
import { useState } from "react";

export function HeroSection() {
  const [hoveredMetric, setHoveredMetric] = useState<number | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      }
    },
  };

  const glitchVariants = {
    initial: { x: 0 },
    hover: {
      x: [0, -2, 2, -1, 1, 0],
      transition: {
        duration: 0.3,
        times: [0, 0.2, 0.4, 0.6, 0.8, 1],
      }
    }
  };

  return (
    <Section id="hero" className="pt-32 md:pt-40 pb-24 relative overflow-hidden">
      {/* Animated lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse delay-1000" style={{ animationDelay: '1s' }} />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          <motion.div variants={item} className="space-y-6">
            <motion.h1 
              className="text-6xl md:text-7xl xl:text-8xl font-bold tracking-tighter text-white relative"
              variants={glitchVariants}
              initial="initial"
              whileHover="hover"
            >
              {siteConfig.name}
              <motion.span 
                className="absolute -inset-1 bg-white/5 blur-xl -z-10"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.h1>
            
            <motion.p 
              variants={item}
              className="text-xl md:text-2xl text-zinc-300 leading-relaxed font-light"
            >
              {siteConfig.headline}
            </motion.p>
            
            <motion.p 
              variants={item}
              className="text-lg text-zinc-400 max-w-2xl leading-relaxed"
            >
              {siteConfig.subheadline}
            </motion.p>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-3">
            {siteConfig.proofChips.map((chip, index) => (
              <motion.div
                key={chip}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-white/30 text-sm font-medium text-zinc-300 backdrop-blur-sm transition-all duration-300 cursor-default relative overflow-hidden group"
              >
                <span className="relative z-10">{chip}</span>
                <span className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-white/90 rounded-full font-semibold group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <Sparkles className="h-4 w-4 mr-2" />
                  View Projects
                  <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-white via-zinc-200 to-white"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </Button>
            </motion.a>
            
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-semibold backdrop-blur-sm"
              >
                Contact
              </Button>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Floating Metrics Cards with 3D effect */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:grid grid-cols-2 gap-6 auto-rows-min"
        >
          {siteConfig.metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                delay: 0.5 + index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              onHoverStart={() => setHoveredMetric(index)}
              onHoverEnd={() => setHoveredMetric(null)}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                rotateX: 5,
                rotateY: 5,
              }}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm relative overflow-hidden group cursor-default"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              {/* Animated gradient on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={hoveredMetric === index ? {
                  background: [
                    "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                  ],
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              <div className="relative z-10">
                <div className="text-4xl font-bold text-white mb-2 font-mono">{metric.value}</div>
                <div className="text-sm text-zinc-400 uppercase tracking-wide">{metric.label}</div>
              </div>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Metrics Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:hidden grid grid-cols-2 gap-4"
        >
          {siteConfig.metrics.map((metric) => (
            <div
              key={metric.label}
              className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 text-center transition-all duration-300"
            >
              <div className="text-2xl font-bold text-white mb-1 font-mono">{metric.value}</div>
              <div className="text-xs text-zinc-400 uppercase tracking-wide">{metric.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
