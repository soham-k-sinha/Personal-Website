"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Video } from "lucide-react";
import { Project } from "@/data/projects";
import { useMediaQuery } from "@/hooks/use-media-query";
import { motion } from "framer-motion";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function ProjectDetails({ project }: { project: Project }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      {/* Links */}
      <div className="flex flex-wrap gap-2">
        {project.links.demo && (
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="sm" className="bg-white text-black hover:bg-white/90 rounded-full font-semibold" asChild>
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            </Button>
          </motion.div>
        )}
        {project.links.github && (
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="sm" variant="outline" className="border-white/10 hover:border-white/30 hover:bg-white/5 text-white rounded-full" asChild>
              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
          </motion.div>
        )}
        {project.links.video && (
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="sm" variant="outline" className="border-white/10 hover:border-white/30 hover:bg-white/5 text-white rounded-full" asChild>
              <a href={project.links.video} target="_blank" rel="noopener noreferrer">
                <Video className="h-4 w-4 mr-2" />
                Video
              </a>
            </Button>
          </motion.div>
        )}
      </div>

      {/* Problem */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
        <h3 className="text-lg font-semibold mb-3 text-white relative z-10">Problem</h3>
        <p className="text-zinc-400 leading-relaxed relative z-10">{project.problem}</p>
      </motion.div>

      {/* Solution */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
        <h3 className="text-lg font-semibold mb-3 text-white relative z-10">Solution</h3>
        <p className="text-zinc-400 leading-relaxed relative z-10">{project.solution}</p>
      </motion.div>

      {/* Outcome */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
        <h3 className="text-lg font-semibold mb-3 text-white relative z-10">Outcome</h3>
        <p className="text-zinc-400 leading-relaxed relative z-10">{project.outcome}</p>
      </motion.div>

      {/* Tradeoffs (if any) */}
      {project.tradeoffs && project.tradeoffs.length > 0 && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300"
        >
          <h3 className="text-lg font-semibold mb-4 text-white">Tradeoffs</h3>
          <ul className="space-y-3">
            {project.tradeoffs.map((tradeoff, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="flex gap-3"
              >
                <span className="text-white mt-1">•</span>
                <span className="text-zinc-400 leading-relaxed">{tradeoff}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="text-lg font-semibold mb-4 text-white">Tech Stack</h3>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.03 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 hover:border-white/30 text-zinc-300 transition-all duration-300 cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (!project) return null;

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-black border border-white/10 backdrop-blur-xl">
          <DialogHeader>
            <DialogTitle className="text-2xl text-white font-bold tracking-tight">{project.title}</DialogTitle>
            <p className="text-zinc-400 text-sm mt-2">{project.oneLiner}</p>
          </DialogHeader>
          <ProjectDetails project={project} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-h-[90vh] bg-black border-t border-white/10 backdrop-blur-xl">
        <DrawerHeader>
          <DrawerTitle className="text-2xl text-white font-bold tracking-tight">{project.title}</DrawerTitle>
          <p className="text-zinc-400 text-sm mt-2">{project.oneLiner}</p>
        </DrawerHeader>
        <div className="overflow-y-auto px-4 pb-8">
          <ProjectDetails project={project} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
