"use client";

import { AnimatedSection } from "@/components/animated-section";
import { Section, SectionHeader } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";
import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <Section id="contact">
      <AnimatedSection>
        <SectionHeader
          title="Let's Build Together"
          description="Looking for collaborators on ambitious projects. Reach out if you're working on something interesting."
        />
        <div className="max-w-2xl mx-auto space-y-12">
          {/* Social Links */}
          <div className="flex justify-center gap-4 flex-wrap">
            {[
              { href: siteConfig.socials.github, icon: Github, label: "GitHub" },
              { href: siteConfig.socials.linkedin, icon: Linkedin, label: "LinkedIn" },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white/10 hover:border-white/30 hover:bg-white/5 text-white rounded-full backdrop-blur-sm" 
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="h-5 w-5 mr-2" />
                      {social.label}
                    </a>
                  </Button>
                </motion.div>
              );
            })}
          </div>

          {/* Direct email call-to-action (no form) */}
          <motion.div 
            className="text-center pt-6 border-t border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-sm text-zinc-400 mb-4">
              Prefer email directly?
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                className="hover:bg-white/5 text-zinc-300 hover:text-white"
                asChild
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(siteConfig.socials.email);
                  } catch (error) {
                    console.error("Failed to copy email to clipboard", error);
                  }
                }}
              >
                <a href={`mailto:${siteConfig.socials.email}`}>
                  <Mail className="h-5 w-5 mr-2" />
                  {siteConfig.socials.email}
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>
    </Section>
  );
}
