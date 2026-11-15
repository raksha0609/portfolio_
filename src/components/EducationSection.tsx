import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { handleSpotlight } from "@/lib/spotlight";

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading index="05" label="Education" title="Academic background" inView={isInView} />

        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-5">
          {/* Dual degree */}
          <motion.div
            onMouseMove={handleSpotlight}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="spotlight relative overflow-hidden p-6 sm:p-8 rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/[0.08] via-card/70 to-card/70 card-elevated"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
                <GraduationCap size={16} /> Dual Degree Programme
              </span>
              <span className="font-mono text-xs sm:text-sm text-foreground/80 px-3 py-1 rounded-full border border-border bg-background/60">
                Expected Mar 2027
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 leading-tight">
              M.Sc. Artificial Intelligence <span className="text-gradient">& Data Science</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { school: "Technische Hochschule Deggendorf", country: "Germany" },
                { school: "University of South Bohemia", country: "Czech Republic" },
              ].map(({ school, country }) => (
                <div key={school} className="p-4 rounded-xl border border-border bg-background/60">
                  <p className="font-semibold text-foreground">{school}</p>
                  <p className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                    <MapPin size={12} className="text-primary" /> {country}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bachelor's */}
          <motion.div
            onMouseMove={handleSpotlight}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="spotlight flex flex-col p-6 sm:p-8 rounded-2xl border border-border bg-card/70 card-elevated"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                <GraduationCap size={16} /> Bachelor's
              </span>
              <span className="font-mono text-xs sm:text-sm text-foreground/80 px-3 py-1 rounded-full border border-border bg-background/60">
                Jul 2022
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 leading-tight">
              B.E. Electronics and Communication
            </h3>
            <p className="font-semibold text-foreground/90">Jawaharlal Nehru College of Engineering</p>
            <p className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
              <MapPin size={12} className="text-primary" /> India
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
