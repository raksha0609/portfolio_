import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { handleSpotlight } from "@/lib/spotlight";

const experiences = [
  {
    role: "Working Student, AI Software Engineer",
    company: "PraxioTech",
    location: "Frankfurt am Main, Germany",
    period: "Feb 2026 – Apr 2026",
    points: [
      "Built structured data models for restaurant benchmarking and competitive analysis.",
      "Developed ETL workflows to clean, validate and transform raw data into analysis-ready datasets.",
      "Contributed multi-dimensional scoring logic for evaluating restaurant performance.",
      "Supported web-based dashboards that visualise benchmarking insights.",
    ],
    tags: ["Python", "ETL", "Data Modelling", "Dashboards"],
  },
  {
    role: "Software Developer Intern, AI",
    company: "Ausbildungsbasis",
    location: "Frankfurt (Remote)",
    period: "Aug 2024 – Nov 2024",
    points: [
      "Designed a modular AI architecture connecting NLP models to backend systems via REST APIs.",
      "Translated business hiring requirements into scalable AI candidate-matching workflows.",
      "Worked with the founders on the technical roadmap for AI integration: data pipelines, model deployment and scalability.",
    ],
    tags: ["NLP", "REST APIs", "AI Architecture"],
  },
  {
    role: "Technical Intern",
    company: "10 Seconds",
    location: "Bangalore, India",
    period: "Aug 2021 – Nov 2021",
    points: ["Contributed to modular backend and API workflows for web-based systems; took part in agile delivery cycles."],
    tags: ["Backend", "APIs", "Agile"],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative bg-card/40 border-y border-border/60" ref={ref}>
      <div className="absolute inset-0 bg-dots pointer-events-none" />
      <div className="relative max-w-6xl mx-auto">
        <SectionHeading
          index="02"
          label="Experience"
          title="Where I've built things"
          subtitle="Hands-on industry work across AI integration, data engineering and backend systems."
          inView={isInView}
        />

        <ol className="relative border-l border-border ml-3 sm:ml-4 space-y-10">
          {/* Animated gradient rail */}
          <motion.span
            aria-hidden="true"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute -left-px top-0 w-px h-full origin-top bg-gradient-to-b from-primary via-accent to-transparent"
          />
          {experiences.map((exp, i) => (
            <motion.li
              key={exp.company}
              initial={{ opacity: 0, x: 24 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="relative pl-8 sm:pl-10"
            >
              <span className="absolute -left-[13px] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-primary/50 bg-background">
                <Briefcase size={12} className="text-primary" />
              </span>
              <div
                onMouseMove={handleSpotlight}
                className="spotlight p-5 sm:p-6 rounded-2xl border border-border bg-background/80 hover:border-primary/40 transition-colors card-elevated"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <p className="font-mono text-xs sm:text-sm text-foreground/80">{exp.period}</p>
                    <p className="flex sm:justify-end items-center gap-1 text-xs text-muted-foreground mt-0.5">
                      <MapPin size={11} /> {exp.location}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  {exp.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-secondary font-mono text-[11px] text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ExperienceSection;
