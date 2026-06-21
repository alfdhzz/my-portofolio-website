"use client";

import { motion } from "framer-motion";

const skills = [
  { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"] },
  { category: "Backend & Database", items: ["Node.js", "Express.js", "PHP", "Laravel", "Python", "MySQL", "Oracle", "Firebase", "Supabase"] },
  { category: "Tools & Others", items: ["Git", "GitHub", "Vercel", "Postman", "Figma", "Canva", "CapCut", "Microsoft Office", "Cisco", "Windows Terminal"] }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:shadow-[0_0_20px_rgba(217,199,163,0.15)] hover:bg-white/10 hover:border-primary/50 transition-all"
            >
              <h3 className="text-2xl font-semibold mb-6 text-foreground text-center">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skillGroup.items.map((item, itemIdx) => (
                  <span
                    key={itemIdx}
                    className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-lg border border-primary/30"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

