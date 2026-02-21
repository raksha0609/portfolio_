import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Brain, Code, Paintbrush, Shield, Dna, Eye, ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "AFFAIR",
    subtitle: "A Framework for Arbitrary Image Registration",
    description: "Master's Thesis — Advanced image registration framework using deep learning techniques.",
    icon: Brain,
    tags: ["Deep Learning", "Computer Vision", "Research"],
    link: "#",
    comingSoon: true,
  },
  {
    title: "DevPrompter",
    subtitle: "AI-Based Prompt Engineering Tool",
    description: "Intelligent tool for generating and optimizing prompts for various AI models and use cases.",
    icon: Code,
    tags: ["LLM", "Prompt Engineering", "NLP"],
    link: "https://github.com/raksha0609/DevPrompter",
    comingSoon: false,
  },
  {
    title: "Virtual Air Canvas",
    subtitle: "Real-Time Gesture-Based Drawing",
    description: "Gesture-based drawing system using computer vision for real-time hand tracking and drawing.",
    icon: Paintbrush,
    tags: ["OpenCV", "MediaPipe", "Real-Time"],
    link: "https://github.com/raksha0609/Virtual-Air-Canvas",
    comingSoon: false,
  },
  {
    title: "Network Security",
    subtitle: "Traffic Monitoring & Threat Detection",
    description: "System for monitoring network traffic and detecting security threats in real-time.",
    icon: Shield,
    tags: ["Cybersecurity", "Monitoring", "Python"],
    link: "https://drive.google.com/file/d/1wUpg1NU_6qAxMlweHJ3mGe2H0sxpoDG3/view",
    comingSoon: false,
  },
  {
    title: "Gene Expression Analysis",
    subtitle: "RNA-Seq Differential Expression Pipeline",
    description: "Bioinformatics pipeline for analyzing RNA-Seq data and identifying differentially expressed genes.",
    icon: Dna,
    tags: ["Bioinformatics", "RNA-Seq", "Data Analysis"],
    link: "https://github.com/raksha0609/Gene-Expression-Analysis",
    comingSoon: false,
  },
  {
    title: "Face Detection",
    subtitle: "Real-Time Computer Vision Application",
    description: "Real-time face detection application built with OpenCV for accurate face recognition.",
    icon: Eye,
    tags: ["OpenCV", "Computer Vision", "Real-Time"],
    link: "https://drive.google.com/file/d/1Ej-AqZ_ge-f0vMCitPmhTAEd4jFhlc5x/view",
    comingSoon: false,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding bg-card" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm mb-2 tracking-widest uppercase font-medium">Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4 text-foreground">
            Personal Projects
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            A collection of my work in AI, computer vision, and software engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.a
                key={project.title}
                href={project.comingSoon ? undefined : project.link}
                target={project.comingSoon ? undefined : "_blank"}
                rel={project.comingSoon ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative p-6 rounded-2xl bg-background border border-border hover:border-primary/40 transition-all duration-300 card-elevated ${project.comingSoon ? 'cursor-default' : 'cursor-pointer'}`}
                style={{
                  transform: hoveredIndex === i ? 'translateY(-4px)' : 'translateY(0)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                }}
              >
                {/* Gradient top bar */}
                <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'var(--gradient-primary)' }} />

                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon size={22} className="text-primary" />
                  </div>
                  {project.comingSoon ? (
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2 py-0.5">
                      Soon
                    </span>
                  ) : (
                    <ArrowUpRight
                      size={18}
                      className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                    />
                  )}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors font-display">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground font-mono mb-3">{project.subtitle}</p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground text-[11px] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
