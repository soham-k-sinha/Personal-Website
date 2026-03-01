"use client";

import { AnimatedSection } from "@/components/animated-section";
import { Section, SectionHeader } from "@/components/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { whatIBuild } from "@/data/skills";
import { motion } from "framer-motion";

export function WhatIBuildSection() {
  return (
    <Section id="what-i-build">
      <AnimatedSection>
        <SectionHeader
          title="What I Build"
          description="AI/ML systems, full-stack AI products, and impact through teaching and collaboration."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {whatIBuild.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="h-full bg-white/[0.02] border-white/10 hover:border-white/30 transition-all duration-500 rounded-2xl backdrop-blur-sm relative overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.5 }}
                />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-xl text-white">{pillar.title}</CardTitle>
                  <CardDescription className="text-zinc-400">{pillar.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="space-y-2">
                    {pillar.bullets.map((bullet, bulletIndex) => (
                      <motion.li 
                        key={bulletIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: bulletIndex * 0.05 }}
                        className="flex gap-2 text-sm text-zinc-400"
                      >
                        <span className="text-white mt-1">•</span>
                        <span>{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </Section>
  );
}
