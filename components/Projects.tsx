"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

const projects = [
  {
    title: "PT Alberio Pratama Abadi",
    description: "A modern, responsive corporate website built for PT Alberio Pratama Abadi, featuring a custom welcome screen, company profile, and dark/light mode support.",
    image: "/project-alberio.png",
    tags: ["React", "Next.js", "Tailwind CSS"],
    liveUrl: "https://alberiopratamaabadi.com/",
    githubUrl: "https://github.com/alfdhzz"
  },
  {
    title: "Sports Garage E-Commerce",
    description: "A full-featured sports equipment e-commerce platform with IDR currency formatting, user top-up balance, checkout system, and admin sales analytics.",
    image: "/project-sports.png",
    tags: ["React", "Next.js", "Tailwind CSS", "Supabase"],
    liveUrl: "https://sports-garage-ecommerce.vercel.app/",
    githubUrl: "https://github.com/alfdhzz"
  },
  {
    title: "Nusantara Digital Cashier",
    description: "A comprehensive point-of-sale and inventory management system with real-time margin calculations, CRUD operations, and formatted IDR outputs.",
    image: "/project-cashier.png",
    tags: ["PHP", "MySQL", "Tailwind CSS"],
    liveUrl: "https://nusantara-digital-cashier.vercel.app/",
    githubUrl: "https://github.com/alfdhzz"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card-bg border border-card-border shadow-sm rounded-2xl overflow-hidden hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(217,199,163,0.2)] transition-all duration-300 group flex flex-col"
            >
              <div className="relative h-48 overflow-hidden bg-black/20">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10 mix-blend-overlay" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-text-secondary mb-4 flex-grow font-light">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-xs px-2.5 py-1 bg-primary/10 border border-primary/20 text-primary rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-border-color">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    <FaGithub size={16} />
                    Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="https://github.com/alfdhzz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-primary/50 text-primary hover:bg-primary hover:text-background hover:shadow-[0_0_15px_rgba(217,199,163,0.3)] font-medium rounded-full transition-all"
          >
            View More on GitHub
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
