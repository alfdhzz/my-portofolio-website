"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mengatur lama animasi preloader (2 detik)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Mencegah scrolling saat preloader aktif
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Animasi Teks Utama */}
          <div className="flex items-center justify-center z-10 px-4">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center max-w-[90vw] leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-primary">
                Welcome to my portfolio website
              </span>
              <span className="text-primary">.</span>
            </motion.div>
          </div>
          
          {/* Animasi Nama Anda */}
          <div className="mt-4 z-10">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="text-lg md:text-xl text-text-secondary font-light tracking-widest uppercase text-center"
            >
              Alif Fajdhan Yudhistiro
            </motion.div>
          </div>

          {/* Animasi Loading Bar */}
          <motion.div 
            className="mt-12 w-64 h-1 bg-foreground/10 rounded-full overflow-hidden z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div 
              className="h-full bg-gradient-to-r from-primary to-primary-light"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
