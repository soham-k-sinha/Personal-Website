"use client";

import { AnimatedSection } from "@/components/animated-section";
import { Section, SectionHeader } from "@/components/section";
import { skillGroups } from "@/data/skills";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <Section id="about">
      <AnimatedSection>
        <SectionHeader
          title="About"
          description="Analytical and research oriented, passionate about AI, natural language, and practical solutions to meaningful problems."
        />
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Story */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-zinc-400 leading-relaxed"
          >
            <p>
  I am a Computer Science and Mathematics double major at UMass Amherst, with a Business minor, building a strong foundation in data structures and algorithms, system design, computational reasoning, and linear algebra. I am especially interested in artificial intelligence and natural language systems, and I enjoy turning complex ideas into practical, production-ready solutions that create real impact.
</p>

<p>
  I have built and shipped AI systems in fast-moving startup environments. At Finarkein, I worked on improving text classification pipelines. At A79.ai, I helped deploy agentic AI solutions for pharmaceutical workflows. At Rubix, I led a team building a structured PDF parsing system that transformed unstructured documents into usable data. Alongside this, I support over 300 students as an Undergraduate Course Assistant for introductory computer science, where I focus on teaching, mentorship, and building strong problem-solving foundations.
</p>

<p>
  I am currently seeking a summer internship in technology with a focus on data and computer science, where I can continue building systems that are both technically rigorous and genuinely useful. Outside of engineering, I am competitive and team-oriented by nature. You will usually find me playing basketball, cricket, table tennis, badminton, chess, or pickleball, or contributing to open source and side projects.
</p>
          </motion.div>

          {/* Values */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-white">What I Value</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {["Growth Mindset", "Integrity", "Commitment"].map((value, index) => {
                const descriptions = {
                  "Growth Mindset": "Always learning. Curious about new tech, papers, and better ways to build and ship.",
                  "Integrity": "Doing the right thing. Clear communication, respect for others, and honest collaboration.",
                  "Commitment": "Seeing projects through. Building things that matter and delivering measurable impact."
                };
                return (
                  <motion.div
                    key={value}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="space-y-3 p-6 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/30 transition-all duration-300"
                  >
                    <h4 className="font-semibold text-lg text-white">{value}</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {descriptions[value as keyof typeof descriptions]}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-white">Skills & Technologies</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {skillGroups.map((group, groupIndex) => (
                <motion.div 
                  key={group.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: groupIndex * 0.1 }}
                  className="space-y-4"
                >
                  <h4 className="font-semibold text-sm text-zinc-500 uppercase tracking-wider">
                    {group.label}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.02 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 hover:border-white/30 text-zinc-300 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Section>
  );
}
