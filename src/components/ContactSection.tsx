import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Download, ArrowUpRight } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "sgraksha1@gmail.com",
    href: "mailto:sgraksha1@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+49 17619455248",
    href: "tel:+4917619455248",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Deggendorf, Germany",
    href: "https://share.google/Kwpmd8W8rVqJYyjMJ",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "raksha-sg",
    href: "https://linkedin.com/in/raksha-sg-",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-card" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm mb-2 tracking-widest uppercase font-medium">Connect</p>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4 text-foreground">
            Let's Get in Touch
          </h2>
          <p className="text-muted-foreground mb-12 max-w-lg mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat about AI and tech.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {contactItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group p-5 rounded-2xl bg-background border border-border hover:border-primary/40 transition-all duration-300 card-elevated text-left hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-3">
                  <Icon size={20} className="text-primary" />
                  <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                <p className="text-sm text-foreground font-medium group-hover:text-primary transition-colors break-all">
                  {item.value}
                </p>
              </motion.a>
            );
          })}
        </div>

        {/* Resume Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="p-8 rounded-2xl bg-background border border-primary/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-5" style={{ background: 'var(--gradient-warm)' }} />
          <div className="relative">
            <h3 className="text-xl font-bold text-foreground mb-2 font-display">Check out my Resume</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Download my full resume for a detailed overview of my experience and skills.
            </p>
            <a
              href="/Raksha_SG_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all glow hover:scale-105 duration-200"
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
