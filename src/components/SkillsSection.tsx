import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Code2, Cloud, Database, Server, Award } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { handleSpotlight } from "@/lib/spotlight";

const groups = [
  {
    title: "ML & GenAI",
    icon: Sparkles,
    skills: ["PyTorch", "TensorFlow", "Hugging Face", "LangChain", "NLP", "LLMs", "Prompt Engineering"],
    span: "lg:col-span-2",
  },
  { title: "Languages", icon: Code2, skills: ["Python", "SQL", "Java", "Bash"], span: "" },
  {
    title: "MLOps & Cloud",
    icon: Cloud,
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "GitLab CI/CD", "Jenkins"],
    span: "lg:col-span-2",
  },
  { title: "Data & Big Data", icon: Database, skills: ["ETL pipelines", "Spark", "Hadoop", "Data modelling"], span: "" },
  { title: "Serving", icon: Server, skills: ["FastAPI", "REST APIs"], span: "" },
];

const certifications = [
  "LangChain for LLM Applications",
  "Fundamentals of LLMs",
  "TensorFlow & Keras Introduction",
  "Python for Machine Learning",
  "AI Architecture Fundamentals",
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative bg-card/40 border-y border-border/60" ref={ref}>
      <div className="absolute inset-0 bg-dots pointer-events-none" />
      <div className="relative max-w-6xl mx-auto">
        <SectionHeading
          index="04"
          label="Skills"
          title="My toolkit"
          subtitle="The languages, frameworks and platforms I use to take AI from notebook to production."
          inView={isInView}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map(({ title, icon: Icon, skills, span }, i) => (
            <motion.div
              key={title}
              onMouseMove={handleSpotlight}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`${span} spotlight p-6 rounded-2xl border border-border bg-background/80 hover:border-primary/40 transition-colors`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon size={18} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg border border-border bg-secondary/60 text-sm text-secondary-foreground hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div
            onMouseMove={handleSpotlight}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: groups.length * 0.08 }}
            className="lg:col-span-2 spotlight p-6 rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/[0.08] to-background/80"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award size={18} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Certifications</h3>
            </div>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  {cert}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
