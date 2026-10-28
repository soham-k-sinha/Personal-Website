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
  I&apos;m a Computer Science and Mathematics double major at UMass Amherst, with a Business minor and a 4.0 GPA. I enjoy working on problems that force me to learn something new—whether that&apos;s figuring out how to build a search engine in Java, designing a backend that connects multiple services, or testing why one machine-learning model works better than another.
</p>

<p>
  Over the past couple of years, I&apos;ve had the chance to work on some very different engineering problems. At Siemens Energy, I built tools to extract structured information from complicated documents. At LUME Global, I worked on backend architecture and AWS infrastructure for a platform supporting more than 10,000 members. I&apos;m also building NullifAI, a startup I co-founded to automate product feedback using AI agents and browser automation. I like being involved in the whole process, from understanding the problem to getting something working.
</p>

<p>
  Outside of internships and projects, I&apos;m a Head Undergraduate Course Assistant for CICS 240, where I help support more than 300 students, and back in Mumbai I volunteered with Teach for Fun, helping students build their first small websites and games. I&apos;m also an AI4ALL Ignite Fellow, and I spend a lot of my spare curiosity on machine learning and information retrieval—lately, on what actually changes inside a language model when it&apos;s fine-tuned for retrieval and reranking. When I&apos;m not coding, you&apos;ll probably find me playing soccer or pickleball, running, or at the gym.
</p>

<p>
  I&apos;m looking for a Summer 2027 Software Engineering internship where I can work on challenging problems, learn from experienced engineers, and contribute to something people actually use. I enjoy building, I&apos;m willing to put in the work to understand difficult systems, and I want to keep getting better at what I do.
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
