"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-12 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 z-10">
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary font-semibold tracking-widest mb-3 uppercase text-sm">
              Hello, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-foreground">
              Alif Fajdhan <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-foreground">
                Yudhistiro
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto md:mx-0 mb-8 font-light"
          >
            Informatics Engineering Student | Fullstack Web Developer | AI-Assisted Development
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-3.5 flex items-center justify-center gap-2 text-background bg-primary hover:bg-primary-light rounded-full font-medium transition-all shadow-[0_0_20px_rgba(217,199,163,0.3)] group"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 flex items-center justify-center gap-2 text-foreground bg-white/5 border border-white/20 hover:bg-white/10 hover:border-primary/50 rounded-full font-medium transition-all backdrop-blur-sm group"
            >
              <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
              Download CV
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex-1 flex justify-center md:justify-end relative"
        >
          {/* Profile Image */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96">
            {/* Glowing effect behind the image */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-transparent rounded-full blur-2xl animate-pulse"></div>
            
            {/* Image container */}
            <div className="absolute inset-2 rounded-full border border-white/20 overflow-hidden bg-background/50 backdrop-blur-sm shadow-[0_0_30px_rgba(217,199,163,0.15)] relative group">
              <img 
                src="/profile-alif.jpeg" 
                alt="Alif Fajdhan Yudhistiro"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  // Fallback just in case the image is not placed yet
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center');
                  e.currentTarget.parentElement?.insertAdjacentHTML('beforeend', '<span class="text-2xl text-primary font-light text-center px-4">Place profile-alif.jpeg<br/>in public folder</span>');
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
