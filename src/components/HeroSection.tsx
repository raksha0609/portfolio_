import { motion } from "framer-motion";
import { MapPin, ArrowRight, Download, Linkedin, Github, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import profileImg from "@/assets/profile.jpeg";
import NeuralBackground from "./NeuralBackground";

const phrases = [
  "integrate LLMs into production backends.",
  "ship ML models with cloud-native MLOps.",
  "turn raw data into analysis-ready pipelines.",
];


const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/raksha-sg-420018229", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/raksha0609", label: "GitHub" },
  { icon: Mail, href: "mailto:sgraksha1@gmail.com", label: "Email" },
];

const chips = [
  { label: "LLMs", className: "-left-4 top-8 sm:-left-10", delay: 0 },
  { label: "MLOps", className: "-right-2 top-1/3 sm:-right-8", delay: 1.2 },
  { label: "Data Pipelines", className: "left-0 bottom-6 sm:-left-6", delay: 2.4 },
];

const TypingAnimation = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];

    if (!isDeleting && text === current) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }
    if (isDeleting && text === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
      return;
    }
    const timeout = setTimeout(
      () => setText(current.substring(0, text.length + (isDeleting ? -1 : 1))),
      isDeleting ? 25 : 55,
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);

  return (
    <span className="text-primary">
      {text}
      <span className="inline-block w-[2px] h-[1.1em] bg-primary align-middle ml-0.5 animate-pulse" />
    </span>
  );
};

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
});

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      <NeuralBackground />
      {/* Colour washes */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-accent/10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[1.25fr_1fr] gap-12 lg:gap-8 items-center">
        {/* Text */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <motion.div
            {...fadeUp(0.1)}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-xs sm:text-sm text-primary mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Open to opportunities · M.Sc. graduating Mar 2027
          </motion.div>

          <motion.p {...fadeUp(0.2)} className="font-mono text-sm text-muted-foreground mb-3">
            Hi, I'm
          </motion.p>

          <motion.h1
            {...fadeUp(0.3)}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-foreground mb-5"
          >
            Raksha Shivamogga <span className="text-gradient">Gopalakrishna</span>
          </motion.h1>

          <motion.p {...fadeUp(0.4)} className="text-xl sm:text-2xl font-display font-medium text-foreground/90 mb-3">
            AI & Data Science Engineer
          </motion.p>

          <motion.p {...fadeUp(0.5)} className="font-mono text-sm sm:text-base text-muted-foreground mb-8 min-h-[3em] sm:min-h-[1.6em]">
            I <TypingAnimation />
          </motion.p>

          <motion.div {...fadeUp(0.6)} className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold glow hover:brightness-110 transition-all"
            >
              View my work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/Raksha_SG_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card/60 backdrop-blur text-foreground font-semibold hover:border-primary/50 hover:text-primary transition-colors"
            >
              <Download size={16} />
              Resume
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.7)} className="flex items-center justify-center lg:justify-start gap-4 text-muted-foreground">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="p-2.5 rounded-full border border-border hover:border-primary/50 hover:text-primary transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
            <span className="flex items-center gap-1.5 text-sm ml-1">
              <MapPin size={14} className="text-primary" /> Deggendorf, Germany
            </span>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="order-1 lg:order-2 relative mx-auto w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80"
        >
          <div className="absolute inset-0 rounded-full ring-conic animate-spin-slow blur-md opacity-60" />
          {/* Only the ring spins — the photo stays upright on top of it */}
          <div className="absolute inset-0 rounded-full ring-conic animate-spin-slow" />
          <div className="absolute inset-[3px] rounded-full bg-background p-2">
            <img
              src={profileImg}
              alt="Raksha Shivamogga Gopalakrishna"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          {chips.map((chip) => (
            <motion.span
              key={chip.label}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: chip.delay }}
              className={`absolute ${chip.className} px-3 py-1.5 rounded-full border border-primary/30 bg-background/80 backdrop-blur font-mono text-[11px] sm:text-xs text-primary shadow-lg`}
            >
              {chip.label}
            </motion.span>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
