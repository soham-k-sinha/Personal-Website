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
          description="Computer Science and Math student at UMass Amherst. I like understanding how things work, building them from scratch, and solving problems that actually bother me."
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
              I&apos;m Soham, a Computer Science and Mathematics student at UMass Amherst with a 4.0 GPA. I&apos;ve always been curious about how things work, and I love the challenge of figuring them out for myself. Whether it&apos;s building something from scratch, debugging a problem that makes absolutely no sense, or learning a technology I&apos;ve never touched before, I genuinely enjoy the process of getting better at what I do.
            </p>

            <p>
              I&apos;ve been fortunate to work on some pretty interesting problems. At Siemens Energy, I built AI-powered document processing tools for over 30 enterprise clients. At LUME Global, I designed backend systems and AWS infrastructure for a platform supporting over 10,000 members. I also co-founded NullifAI, where we&apos;re building AI agents that interact with websites and test digital products. Each experience has taught me something different, but what I&apos;ve enjoyed most is getting to take ownership of difficult problems and figure out how to solve them.
            </p>

            <p>
              A lot of my favorite projects started with simple curiosity. I built a search engine from scratch in Java because finding off-campus housing was frustrating and I wanted to understand how search engines actually worked. I&apos;ve also spent more than a few sleepless weekends building with friends at hackathons, including winning at HackHarvard and TartanHacks in 2026. I love the feeling of starting with an idea and seeing how far we can take it.
            </p>

            <p>
              Outside of building things, I&apos;m the Head Undergraduate Course Assistant for CICS 240, helping support over 300 students, and an AI4ALL Ignite Fellow. I&apos;ve also volunteered to teach coding to school students in Mumbai, which reminded me how much I enjoy helping others learn. More recently, I&apos;ve been exploring information retrieval and how language models learn to rank information. When I&apos;m away from my laptop, you&apos;ll usually find me playing soccer, pickleball, running, or at the gym.
            </p>

            <p>
              Right now, I&apos;m looking for a Summer 2027 Software Engineering internship. More than anything, I want to work alongside people who challenge me, tackle problems I haven&apos;t seen before, and build things that people genuinely find useful. I know there&apos;s a lot I still have to learn, and that&apos;s probably what excites me most.
            </p>
          </motion.div>

          {/* Values */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-white">What I Value</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {["Understand the Fundamentals", "Build Things People Can Use", "Learn With Others"].map((value, index) => {
                const descriptions = {
                  "Understand the Fundamentals": "I like knowing why something works, not just getting it to run. Building my Java search engine from scratch was as much about learning concurrency, indexing, and networking as it was about the finished product.",
                  "Build Things People Can Use": "I'm most motivated when a project solves a real problem. That could mean simplifying housing searches, improving enterprise workflows, or building tools that help teams make better decisions.",
                  "Learn With Others": "Some of my favorite experiences have come from working with good teammates, competing at hackathons, and helping students work through problems. I learn a lot from the people around me."
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
