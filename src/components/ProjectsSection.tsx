import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Code, Paintbrush, Shield, Dna, Eye, Network, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { handleSpotlight } from "@/lib/spotlight";

const projects = [
  {
    title: "Stability of Transformer",
    subtitle: "Embedding Map Stability Under Corpus Updates",
    description: "Studies how stable transformer-based document maps are when the corpus is updated, using arXiv abstracts and university publications.",
    icon: Network,
    tags: ["Transformers", "Embeddings", "Clustering"],
    link: "#",
    comingSoon: true,
    research: true,
  },
  {
    title: "AFFAIR",
    subtitle: "A Framework for Arbitrary Image Registration",
    description: "Advanced image registration framework using deep learning techniques.",
    icon: Brain,
    tags: ["Deep Learning", "Computer Vision", "Research"],
    link: "https://github.com/raksha0609/affair-mosaic",
    comingSoon: false,
    research: true,
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

// 6-column grid on desktop: 2 wide research cards, then 3, then 2 — no orphan card.
const spanClass = (i: number) => {
  if (i < 2) return "lg:col-span-3";
  if (i < 5) return "lg:col-span-2";
  return i === projects.length - 1 ? "lg:col-span-3 md:col-span-2" : "lg:col-span-3";
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          index="03"
          label="Projects"
          title="Personal projects"
          subtitle="Research and hands-on builds in AI, computer vision, NLP and data analysis."
          inView={isInView}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-5">
          {projects.map((project, i) => {
            const Icon = project.icon;
            const clickable = !project.comingSoon;
            return (
              <motion.a
                key={project.title}
                id={project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                href={clickable ? project.link : undefined}
                target={clickable ? "_blank" : undefined}
                rel={clickable ? "noopener noreferrer" : undefined}
                onMouseMove={handleSpotlight}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className={`${spanClass(i)} spotlight group relative flex flex-col scroll-mt-24 target:border-primary target:ring-2 target:ring-primary/40 p-6 rounded-2xl border border-border bg-card/70 hover:border-primary/40 transition-all duration-300 card-elevated ${
                  clickable ? "cursor-pointer hover:-translate-y-1" : "cursor-default"
                } ${project.research ? "bg-gradient-to-br from-primary/[0.07] to-card/70" : ""}`}
              >
                <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <div className="flex items-center gap-2">
                    {project.research && (
                      <span className="font-mono text-[10px] uppercase tracking-wider text-accent border border-accent/30 rounded-full px-2 py-0.5">
                        Research
                      </span>
                    )}
                    {project.comingSoon ? (
                      <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2 py-0.5">
                        Soon
                      </span>
                    ) : (
                      <ArrowUpRight
                        size={18}
                        className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                      />
                    )}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground font-mono mb-3">{project.subtitle}</p>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-secondary font-mono text-[11px] text-secondary-foreground">
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
