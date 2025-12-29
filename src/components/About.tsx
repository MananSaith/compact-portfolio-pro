import { MapPin, Phone, Mail } from "lucide-react";
import p1 from "@/assets/profileImage/p1.png";
const About = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full aspect-square rounded-2xl overflow-hidden border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent">
              <img 
                // src="/placeholder.svg" 
                src={p1}
                alt="Abdul Manan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold mb-4">About Me</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I’m a Flutter Developer with 4+ years of experience building reliable, scalable, 
                and business-focused cross-platform apps. I turn designs and ideas into production-ready
                 Flutter applications across Android, iOS, Web, and Desktop, focusing on clean, 
                 maintainable code, Firebase and API integration, and performance-optimized, 
                 pixel-perfect designs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
               I build apps that help businesses grow from concept to launch, ensuring high quality and 
               real-world impact. I prioritize quality over quantity, delivering error-free, lasting 
               solutions, and collaborating only with clients who value long-term results.
                </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>Lahore, Pakistan</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+923710751715" className="hover:text-primary transition-colors">
                  +92 371 0751715
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:mrmanan143@gmail.com" className="hover:text-primary transition-colors">
                  mrmanan143@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
