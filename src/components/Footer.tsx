import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const links = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/raksha-sg-420018229", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/raksha0609", label: "GitHub" },
  { icon: Mail, href: "mailto:sgraksha1@gmail.com", label: "Email" },
];

const Footer = () => (
  <footer className="py-8 px-4 sm:px-6 bg-background border-t border-border">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} Raksha Shivamogga Gopalakrishna</p>
      <div className="flex items-center gap-2">
        {links.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={label}
            className="p-2 rounded-full hover:text-primary transition-colors"
          >
            <Icon size={16} />
          </a>
        ))}
        <a
          href="#top"
          aria-label="Back to top"
          className="ml-2 p-2 rounded-full border border-border hover:border-primary/50 hover:text-primary transition-colors"
        >
          <ArrowUp size={16} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
