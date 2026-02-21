import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master of AI & Data Science",
    school: "Technische Hochschule Deggendorf, Germany",
    period: "Expected Nov 2026",
    note: "Double degree program",
  },
  {
    degree: "Master of AI & Data Science",
    school: "University of South Bohemia, Czech Republic",
    period: "Expected Nov 2026",
    note: "Double degree program",
  },
  {
    degree: "Bachelor of Engineering: ECE",
    school: "Jawaharlal Nehru College of Engineering, India",
    period: "July 2022",
    note: "OOP, Embedded Systems, Cloud Tools",
  },
];

const certifications = [
  "LangChain for LLM Applications",
  "AI Architecture Fundamentals",
  "Python for Machine Learning",
  "TensorFlow & Keras Introduction",
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding bg-background" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Learning</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-12 text-foreground">
            Education & Certifications
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border card-elevated"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <GraduationCap size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{edu.degree}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{edu.school}</p>
                    <p className="text-xs text-primary font-mono">{edu.period}</p>
                    {edu.note && <p className="text-xs text-muted-foreground mt-2 italic">{edu.note}</p>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-xl bg-card border border-border card-elevated"
          >
            <h3 className="text-primary font-mono text-sm font-semibold mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span className="text-sm text-muted-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
