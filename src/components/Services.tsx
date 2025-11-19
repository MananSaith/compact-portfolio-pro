import { Card } from "@/components/ui/card";
import { Smartphone, Monitor, Globe, Server, Database, Palette } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native Android & iOS apps with Flutter"
  },
  {
    icon: Monitor,
    title: "Desktop Apps",
    description: "Cross-platform desktop applications"
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Responsive websites built with Flutter"
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Node.js APIs and server solutions"
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Firebase, MongoDB, MySQL integration"
  },
  {
    icon: Palette,
    title: "UI/UX Support",
    description: "Designer collaboration available"
  }
];

const Services = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-secondary">
      <div className="container mx-auto">
        <div className="mb-10">
          <h2 className="text-4xl font-bold mb-2">Services</h2>
          <p className="text-muted-foreground">What I can help you with</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
