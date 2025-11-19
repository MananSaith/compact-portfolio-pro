import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 md:px-8 bg-secondary">
      <div className="container mx-auto">
        <div className="mb-10">
          <h2 className="text-4xl font-bold mb-2">Featured Projects</h2>
          <p className="text-muted-foreground">Explore my recent work and applications</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border bg-card">
              <div className="aspect-video overflow-hidden bg-muted">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">{project.category}</span>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {project.shortDescription}
                </p>
                <Link to={`/project/${project.id}`}>
                  <Button variant="ghost" className="w-full group/btn">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
