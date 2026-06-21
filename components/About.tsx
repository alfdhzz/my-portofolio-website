"use client";

import { motion } from "framer-motion";
import { Code, Server, Cpu, Rocket } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 space-y-6 text-lg text-text-secondary leading-relaxed font-light"
          >
            <p>
              I am an Informatics Engineering student at Universitas Bani Saleh Bekasi with a strong ambition to become a <span className="text-primary font-medium">fullstack web developer</span>. I focus on building modern, scalable, and user-centered web applications that deliver real value.
            </p>
            <p>
              I am currently developing my skills across both frontend and backend technologies, including HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, React, Next.js, Node.js, and PHP. I enjoy transforming ideas into functional applications, from designing intuitive user interfaces to building efficient backend systems.
            </p>
            <p>
              In my learning process, I leverage <span className="text-primary font-medium">AI-assisted development</span> tools to enhance productivity, improve code quality, and accelerate problem-solving. I am continuously strengthening my fundamentals through hands-on projects and practical implementation.
            </p>
            <p>
              I am highly driven to grow, collaborate, and contribute to impactful projects as a future fullstack web developer.
            </p>
            
            <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-white/5 backdrop-blur-sm text-primary font-medium rounded-lg border border-white/10 shadow-sm">
              <Rocket size={18} />
              Open to internships & collaborations
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
          >
            {[
              {
                icon: <Code className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300" size={32} />,
                title: "Frontend",
                desc: "Building responsive, accessible, and dynamic user interfaces.",
              },
              {
                icon: <Server className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300" size={32} />,
                title: "Backend",
                desc: "Developing robust APIs and efficient server-side logic.",
              },
              {
                icon: <Cpu className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300" size={32} />,
                title: "AI-Assisted",
                desc: "Leveraging modern AI tools to accelerate development.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-primary/50 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(217,199,163,0.15)] transition-all group"
              >
                {item.icon}
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
