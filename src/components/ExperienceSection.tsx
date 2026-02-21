import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    period: "Feb 2026 – Present",
    role: "Working Student - AI Software Engineer",
    company: "PraxioTech, Frankfurt Am Main",
    bullets: [
      "Built structured restaurant data models for benchmarking and competitive analysis",
      "Developed ETL workflows for data cleaning, validation, and transformation",
      "Contributed to multi-dimensional scoring logic for performance evaluation",
      "Supported web-based dashboards for visualizing benchmarking insights",
    ],
  },
  {
    period: "Aug 2024 – Nov 2024",
    role: "Software Developer Intern",
    company: "Ausbildungsbasis, Frankfurt (Remote)",
    bullets: [
      "Designed modular AI architecture connecting NLP models with backend via REST APIs",
      "Translated business hiring requirements into scalable AI matching workflows",
      "Collaborated with founders to define technical roadmap for AI integration",
      "Contributed to system-level decisions involving data pipelines and model deployment",
    ],
  },
  {
    period: "Aug 2021 – Nov 2021",
    role: "Technical Intern",
    company: "10 Seconds, Bangalore",
    bullets: [
      "Contributed to modular backend and API workflows for web-based systems",
      "Participated in project delivery planning and agile cycles",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-card" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Career</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-12 text-foreground">
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border md:left-[19px]" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-12"
              >
                {/* Dot */}
                <div className="absolute left-2.5 top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-background" />

                <p className="text-primary font-mono text-xs mb-1">{exp.period}</p>
                <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                <p className="text-muted-foreground text-sm mb-3 flex items-center gap-2">
                  <Briefcase size={14} className="text-primary" />
                  {exp.company}
                </p>
                <ul className="space-y-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="text-muted-foreground text-sm flex gap-2">
                      <span className="text-primary mt-1.5 shrink-0">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
