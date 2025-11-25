// import { Linkedin, Briefcase, DollarSign, Github, Mail, Phone } from "lucide-react";

// const Footer = () => {
//   const socialLinks = [
//     { icon: Linkedin, href: "https://www.linkedin.com/in/abdul-manan-8a9202240/", label: "LinkedIn" },
//     { icon: Briefcase, href: "https://upwork.com", label: "Upwork" },
//     { icon: DollarSign, href: "https://fiverr.com", label: "Fiverr" },
//     { icon: Briefcase, href: "https://www.freelancer.com/u/linzatech?frm=linzatech&sb=t", label: "Freelancer" },
//     { icon: Github, href: "https://github.com/MananSaith", label: "GitHub" },
//     { icon: Mail, href: "mailto:abdulmanan@linzatechhive.com", label: "Email" },
//     { icon: Phone, href: "tel:+923019102785", label: "Phone" }
//   ];

//   return (
//     <footer className="py-8 px-4 md:px-8 bg-background border-t border-border">
//       <div className="container mx-auto">
//         <div className="flex flex-col items-center gap-6">
//           <div className="flex flex-wrap justify-center gap-4">
//             {socialLinks.map((link, index) => {
//               const Icon = link.icon;
//               return (
//                 <a
//                   key={index}
//                   href={link.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={link.label}
//                   className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all group"
//                 >
//                   <Icon className="h-5 w-5 text-muted-foreground group-hover:text-background transition-colors" />
//                 </a>
//               );
//             })}
//           </div>
          
//           <p className="text-sm text-muted-foreground text-center">
//             © {new Date().getFullYear()} Abdul Manan. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import { Linkedin, Github, Mail, Phone } from "lucide-react";
import { SiFiverr, SiUpwork, SiFreelancer } from "react-icons/si"; // Using react-icons for these

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/abdul-manan-8a9202240/", label: "LinkedIn" },
    { icon: SiUpwork, href: "https://www.upwork.com/freelancers/~01e6723d48cc545faa?mp_source=share", label: "Upwork" },
    { icon: SiFiverr, href: "https://www.upwork.com/freelancers/~01e6723d48cc545faa?mp_source=share", label: "Fiverr" },
    { icon: SiFreelancer, href: "https://www.freelancer.com/u/linzatech?frm=linzatech&sb=t", label: "Freelancer" },
    { icon: Github, href: "https://github.com/MananSaith", label: "GitHub" },
    { icon: Mail, href: "mailto:abdulmanan@linzatechhive.com", label: "Email" },
    { icon: Phone, href: "tel:+923019102785", label: "Phone" }
  ];

  return (
    <footer className="py-12 px-6 md:px-16 bg-background border-t border-border">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Branding / Copy */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-foreground">Abdul Manan</h2>
          <p className="text-sm text-muted-foreground mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-4">
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

      </div>
    </footer>
  );
};

export default Footer;
