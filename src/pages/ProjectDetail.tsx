import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!project) return;
    
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/">
            <Button>Go Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="space-y-8">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-secondary border border-border">
            <img
              src={project.images[currentImage]}
              alt={`${project.title} screenshot ${currentImage + 1}`}
              className="w-full h-full object-cover"
            />
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImage ? "bg-primary w-8" : "bg-muted-foreground/50"
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>

            <div className="absolute top-4 left-4 right-4 flex justify-between">
              <button
                onClick={() => setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length)}
                className="w-10 h-10 rounded-lg bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background transition-colors"
                aria-label="Previous image"
              >
                ←
              </button>
              <button
                onClick={() => setCurrentImage((prev) => (prev + 1) % project.images.length)}
                className="w-10 h-10 rounded-lg bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background transition-colors"
                aria-label="Next image"
              >
                →
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
                <p className="text-xl text-primary">{project.shortDescription}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3">About This Project</h2>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-secondary p-6 rounded-xl border border-border">
                <h3 className="font-bold mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <Badge key={index} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>

              {(project.playStoreUrl || project.appStoreUrl) && (
                <div className="bg-secondary p-6 rounded-xl border border-border space-y-3">
                  <h3 className="font-bold">Download</h3>
                  {project.playStoreUrl && (
                    <Button className="w-full" asChild>
                      <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Play Store
                      </a>
                    </Button>
                  )}
                  {project.appStoreUrl && (
                    <Button className="w-full" variant="outline" asChild>
                      <a href={project.appStoreUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        App Store
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
