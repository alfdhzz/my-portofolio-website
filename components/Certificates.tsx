"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

// You can edit your certificate data here!
const certificates = [
  {
    title: "JavaScript Essentials 1",
    issuer: "Cisco Networking Academy",
    date: "2025",
    link: "/serti-1.pdf",
  },
  {
    title: "Operator Komputer Madya",
    issuer: "Kominfo (Digital Talent Scholarship)",
    date: "2024",
    link: "/serti-2.pdf",
  },
  {
    title: "AI Productivity & API Integration",
    issuer: "Hacktiv8",
    date: "2026",
    link: "/serti-3.pdf",
  }
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 relative bg-black/5 dark:bg-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Certificates</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card-bg border border-card-border p-6 rounded-2xl flex flex-col items-center text-center hover:border-primary/50 hover:-translate-y-1 transition-all group shadow-sm hover:shadow-[0_8px_30px_rgba(217,199,163,0.15)]"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-text-secondary font-light mb-4 flex-grow">
                {cert.issuer}
              </p>
              <div className="flex items-center justify-between w-full pt-4 border-t border-border-color">
                <span className="text-sm font-medium text-text-secondary">{cert.date}</span>
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-light flex items-center gap-1 text-sm font-medium transition-colors"
                >
                  View <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
