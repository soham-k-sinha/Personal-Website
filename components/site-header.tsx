"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Github, Linkedin, Download } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/data/site";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="container flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo/Name with glow effect */}
        <Link href="/" className="flex items-center space-x-2 group">
          <span className="font-bold text-xl text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300">
            SS
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-all duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white hover:scale-110 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white hover:scale-110 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="sm" 
              className="bg-white text-black hover:bg-white/90 rounded-full font-semibold relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center">
                <Download className="h-4 w-4 mr-2" />
                Resume
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-white via-zinc-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
          </a>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="hover:bg-white/10" aria-label="Open menu">
              <Menu className="h-5 w-5 text-white" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-black border-white/10">
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-zinc-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={siteConfig.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                <Button className="w-full mt-4 bg-white text-black hover:bg-white/90 rounded-full font-semibold">
                  <Download className="h-4 w-4 mr-2" />
                  Resume
                </Button>
              </a>
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/10">
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
