import { motion } from "framer-motion";

interface SectionHeadingProps {
  index: string;
  label: string;
  title: string;
  subtitle?: string;
  inView: boolean;
}

const SectionHeading = ({ index, label, title, subtitle, inView }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6 }}
    className="mb-14"
  >
    <p className="flex items-center gap-3 font-mono text-xs sm:text-sm text-primary mb-3">
      <span className="text-muted-foreground">{index}</span>
      <span className="h-px w-8 bg-primary/60" />
      <span className="uppercase tracking-[0.2em]">{label}</span>
    </p>
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-foreground">{title}</h2>
    {subtitle && <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">{subtitle}</p>}
  </motion.div>
);

export default SectionHeading;
