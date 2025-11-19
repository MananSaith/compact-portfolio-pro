import { MapPin, Phone, Mail } from "lucide-react";

const About = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full aspect-square rounded-2xl overflow-hidden border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent">
              <img 
                src="/placeholder.svg" 
                alt="Abdul Manan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold mb-4">About Me</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Flutter Developer with 2+ years of experience building reliable cross-platform applications. 
                Skilled in UI building, Firebase, APIs, and scalable app architecture.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in creating seamless user experiences across Android, iOS, Web, and Desktop platforms. 
                My focus is on writing clean, maintainable code while delivering pixel-perfect designs.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>Lahore, Pakistan</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+923019102785" className="hover:text-primary transition-colors">
                  +92 301 9102785
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:abdulmanan@linzatechhive.com" className="hover:text-primary transition-colors">
                  abdulmanan@linzatechhive.com
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
