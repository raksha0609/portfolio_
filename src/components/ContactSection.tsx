import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Download, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { handleSpotlight } from "@/lib/spotlight";

const contactItems = [
  { icon: Mail, label: "Email", value: "sgraksha1@gmail.com", href: "mailto:sgraksha1@gmail.com" },
  { icon: Phone, label: "Phone", value: "+49 176 1945 5248", href: "tel:+4917619455248" },
  { icon: Linkedin, label: "LinkedIn", value: "raksha-sg", href: "https://www.linkedin.com/in/raksha-sg-420018229" },
  { icon: MapPin, label: "Location", value: "Deggendorf, Germany", href: "https://share.google/Kwpmd8W8rVqJYyjMJ" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding relative bg-card/40 border-t border-border/60 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-dots pointer-events-none" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 h-[28rem] w-[40rem] max-w-full rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto">
        <SectionHeading
          index="06"
          label="Contact"
          title="Let's build something intelligent"
          subtitle="I'm open to AI engineering, MLOps and data science roles. Whether you have an opportunity, a collaboration or just want to talk AI, my inbox is open."
          inView={isInView}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {contactItems.map(({ icon: Icon, label, value, href }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              onMouseMove={handleSpotlight}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="spotlight group p-5 rounded-2xl border border-border bg-background/80 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon size={18} className="text-primary" />
                </div>
                <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-1">{label}</p>
              <p className="text-sm text-foreground font-medium group-hover:text-primary transition-colors break-all">{value}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative overflow-hidden rounded-2xl p-[1px] bg-gradient-primary"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl bg-background/95 px-6 py-8 sm:px-10">
            <div className="text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1">Want the full picture?</h3>
              <p className="text-sm text-muted-foreground">Download my resume for a one-page overview of my experience and skills.</p>
            </div>
            <a
              href="/Raksha_SG_Resume.pdf"
              download
              className="shrink-0 inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-primary-foreground font-semibold glow hover:brightness-110 hover:scale-105 transition-all duration-200"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
