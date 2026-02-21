import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "SQL", "Bash"],
  },
  {
    title: "Frameworks",
    skills: ["PyTorch", "TensorFlow", "Hugging Face", "LangChain", "FastAPI"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "GitLab CI/CD", "Jenkins", "Terraform"],
  },
  {
    title: "Big Data",
    skills: ["Spark", "Hadoop"],
  },
  {
    title: "Concepts",
    skills: ["AI Architecture", "Cloud MLOps", "NLP Pipelines", "On-premise AI", "Prompt Engineering"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-background" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Tech Stack</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-12 text-foreground">
            Skills & Tools
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors card-elevated"
            >
              <h3 className="text-primary font-mono text-sm font-semibold mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
