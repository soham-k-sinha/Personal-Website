"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";

const footerLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteFooter() {
  const socialLinks = [
    { href: siteConfig.socials.github, icon: Github, label: "GitHub" },
    { href: siteConfig.socials.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: `mailto:${siteConfig.socials.email}`, icon: Mail, label: "Email" },
  ];

  return (
    <footer className="w-full border-t border-white/10 bg-black/50 backdrop-blur-sm">
      <div className="container max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="font-bold text-lg text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300">
              Soham Sinha
            </Link>
            <p className="text-sm text-zinc-400 mt-2">
              {siteConfig.headline}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors relative group inline-block"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={siteConfig.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-400 hover:text-white transition-colors relative group inline-block"
                >
                  Resume
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-semibold mb-4 text-white">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                const isEmail = social.href.startsWith("mailto:");
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-zinc-400 hover:text-white hover:scale-110 transition-all duration-300"
                    aria-label={social.label}
                    whileHover={{ y: -2 }}
                    onClick={async () => {
                      if (isEmail) {
                        try {
                          await navigator.clipboard.writeText(siteConfig.socials.email);
                        } catch (error) {
                          console.error("Failed to copy email to clipboard", error);
                        }
                      }
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-zinc-500"
        >
          <p>Built with Next.js + Vercel • © {new Date().getFullYear()}</p>
        </motion.div>
      </div>
    </footer>
  );
}
