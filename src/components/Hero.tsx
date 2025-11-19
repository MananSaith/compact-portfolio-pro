import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Abdul Manan
              <span className="block text-primary">Flutter Developer</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Cross-platform app developer specializing in Android, iOS, Web, and Desktop applications. 
              Building scalable, performant solutions with modern technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="#projects">
                <Button size="lg" className="group">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Download CV
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end">
            <div className="relative w-80 h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-transparent border border-primary/20">
              <img 
                src="/placeholder.svg" 
                alt="Abdul Manan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
