"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/data/projects";
import { useState } from "react";

interface ProjectCardProps {
  project: Project;
  onDetailsClick: () => void;
}

export function ProjectCard({ project, onDetailsClick }: ProjectCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="h-full"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="h-full flex flex-col bg-white/[0.02] border-white/10 hover:border-white/30 transition-all duration-500 rounded-2xl relative overflow-hidden group">
        {/* Spotlight effect following cursor */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`,
            }}
          />
        )}

        {/* Animated border glow */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 via-white/10 to-white/20 blur-sm" style={{
            animation: 'borderGlow 3s linear infinite',
          }} />
        </div>

        <CardHeader className="relative z-10">
          <CardTitle className="text-2xl text-white group-hover:text-white transition-colors duration-300">
            {project.title}
          </CardTitle>
          <CardDescription className="text-base text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
            {project.oneLiner}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col justify-between gap-4 relative z-10">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 hover:border-white/30 text-zinc-300 transition-all duration-300 cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-2">
            {project.links.demo && (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="sm" className="bg-white text-black hover:bg-white/90 rounded-full font-semibold" asChild>
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </motion.div>
            )}
            {project.links.github && (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="sm" variant="outline" className="border-white/10 hover:border-white/30 hover:bg-white/5 text-white rounded-full" asChild>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </motion.div>
            )}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="sm" variant="ghost" className="hover:bg-white/5 text-zinc-300 hover:text-white" onClick={onDetailsClick}>
                View Details →
              </Button>
            </motion.div>
          </div>
        </CardContent>

        <style jsx>{`
          @keyframes borderGlow {
            0%, 100% { transform: translateX(-100%); }
            50% { transform: translateX(100%); }
          }
        `}</style>
      </Card>
    </motion.div>
  );
}
