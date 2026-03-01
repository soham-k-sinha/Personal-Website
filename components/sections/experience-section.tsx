"use client";

import { AnimatedSection } from "@/components/animated-section";
import { Section, SectionHeader } from "@/components/section";
import { experienceItems } from "@/data/experience";
import { motion } from "framer-motion";

export function ExperienceSection() {
  return (
    <Section id="experience">
      <AnimatedSection>
        <SectionHeader
          title="Experience"
          description="Building scalable systems and shipping AI products at top companies and startups."
        />
        <div className="max-w-4xl mx-auto space-y-12">
          {experienceItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 pb-12 border-l-2 border-white/10 last:border-l-0 last:pb-0 group"
            >
              {/* Animated timeline dot */}
              <motion.div 
                className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-black"
                whileHover={{ scale: 1.5 }}
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(255,255,255,0)",
                    "0 0 0 8px rgba(255,255,255,0.1)",
                    "0 0 0 0 rgba(255,255,255,0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-all duration-300">
                    {item.role}
                  </h3>
                  <p className="text-zinc-400">
                    {item.organization}
                    {item.location && ` • ${item.location}`}
                  </p>
                  <p className="text-sm text-zinc-500 font-mono">{item.dateRange}</p>
                </div>

                {item.description && (
                  <p className="text-zinc-400">{item.description}</p>
                )}

                <ul className="space-y-2">
                  {item.bullets.map((bullet, bulletIndex) => (
                    <motion.li 
                      key={bulletIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: bulletIndex * 0.05 }}
                      className="flex gap-3 text-sm text-zinc-400"
                    >
                      <span className="text-white mt-1">•</span>
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </ul>

                {item.technologies && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: techIndex * 0.03 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 hover:border-white/30 text-zinc-300 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </Section>
  );
}
