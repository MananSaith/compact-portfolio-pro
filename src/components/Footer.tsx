import { Linkedin, Briefcase, DollarSign, Github, Mail, Phone } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Briefcase, href: "https://upwork.com", label: "Upwork" },
    { icon: DollarSign, href: "https://fiverr.com", label: "Fiverr" },
    { icon: Briefcase, href: "https://freelancer.com", label: "Freelancer" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Mail, href: "mailto:abdulmanan@linzatechhive.com", label: "Email" },
    { icon: Phone, href: "tel:+923019102785", label: "Phone" }
  ];

  return (
    <footer className="py-8 px-4 md:px-8 bg-background border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all group"
                >
                  <Icon className="h-5 w-5 text-muted-foreground group-hover:text-background transition-colors" />
                </a>
              );
            })}
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Abdul Manan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
