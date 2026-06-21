import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/5 backdrop-blur-md border-t border-white/10 py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <div className="text-2xl font-black tracking-tighter mb-4 group flex items-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-primary group-hover:opacity-80 transition-opacity">
              Alif Fajdhan Yudhistiro<span className="text-primary">.</span>
            </span>
          </div>
          <p className="text-sm text-text-secondary text-center md:text-left max-w-sm font-light">
            Informatics Engineering Student & Fullstack Web Developer focused on building modern and scalable applications.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/alfdhzz"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-secondary hover:text-primary hover:bg-white/10 rounded-full transition-all"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/alif-fajdhan-yudhistiro-922487351"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-secondary hover:text-primary hover:bg-white/10 rounded-full transition-all"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://instagram.com/alfdhzz_"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-secondary hover:text-primary hover:bg-white/10 rounded-full transition-all"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://tiktok.com/@alfdhzz_"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-secondary hover:text-primary hover:bg-white/10 rounded-full transition-all"
            >
              <FaTiktok size={20} />
            </a>
            <a
              href="mailto:liipp1017@gmail.com"
              className="p-2 text-text-secondary hover:text-primary hover:bg-white/10 rounded-full transition-all"
            >
              <Mail size={20} />
            </a>
          </div>
          <p className="text-xs text-text-secondary font-light">
            © {currentYear} Alif Fajdhan Yudhistiro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

