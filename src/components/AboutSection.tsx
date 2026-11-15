import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BrainCircuit, Workflow, Cloud, HeartHandshake } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { handleSpotlight } from "@/lib/spotlight";

const focusAreas = [
  {
    icon: BrainCircuit,
    title: "LLMs & NLP",
    text: "Integrating language models into backends with LangChain, Hugging Face and FastAPI.",
  },
  {
    icon: Workflow,
    title: "Data Pipelines",
    text: "ETL workflows and data models that turn raw data into analysis-ready datasets.",
  },
  {
    icon: Cloud,
    title: "MLOps & Cloud",
    text: "Containerised, cloud-native deployment with Docker, Kubernetes, Terraform and CI/CD on AWS & Azure.",
  },
  {
    icon: HeartHandshake,
    title: "Beyond code",
    text: "I run clubs that empower women and promote digital skills in my community.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading index="01" label="About" title="From raw data to deployed AI" inView={isInView} />

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-5 text-muted-foreground leading-relaxed text-base sm:text-lg"
          >
            <p>
              I'm <span className="text-foreground font-semibold">Raksha</span>, an AI & Data Science engineer
              completing a <span className="text-primary">dual-degree M.Sc. in Artificial Intelligence and Data Science</span>{" "}
              at Technische Hochschule Deggendorf (Germany) and the University of South Bohemia (Czech Republic),
              graduating in March 2027.
            </p>
            <p>
              I enjoy the whole journey of an AI product: building data pipelines, integrating NLP and LLM models
              into production backends, and deploying them with containerised, cloud-native workflows.
            </p>
            <p>
              Most recently I worked as an <span className="text-foreground font-medium">AI Software Engineer</span> at
              PraxioTech in Frankfurt. I'm looking for roles in{" "}
              <span className="text-foreground font-medium">AI engineering, MLOps and data science</span> where I can
              turn models into products people use.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {focusAreas.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={title}
                onMouseMove={handleSpotlight}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.25 + i * 0.08 }}
                className="spotlight p-5 rounded-2xl border border-border bg-card/70 hover:border-primary/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1.5">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
