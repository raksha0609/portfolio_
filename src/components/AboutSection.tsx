import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm mb-2 tracking-widest uppercase font-medium">About Me</p>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-8 text-foreground">
            Hello, There!
          </h2>
          <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
            <p>
              I am <span className="text-foreground font-semibold">Raksha Shivamogga Gopalakrishna</span>, 
              an AI Software Engineering professional with a strong foundation in designing and deploying 
              intelligent systems in cloud and on-premise environments.
            </p>
            <p>
              Currently pursuing my <span className="text-primary font-medium">Master's in AI and Data Science</span> at 
              Technische Hochschule Deggendorf, Germany, with hands-on experience in LLM integration, 
              containerization, and cloud-native AI solutions.
            </p>
            <p>
              I am actively seeking opportunities to apply and enhance my skills in the dynamic field of 
              Artificial Intelligence and Data Science. Explore my portfolio to discover my academic journey, 
              skills, and work experience.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
