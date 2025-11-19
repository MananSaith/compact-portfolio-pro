import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Flutter Developer",
    company: "XcellMobi",
    period: "2023 - Present",
    description: "Leading Flutter development for cross-platform applications"
  },
  {
    title: "Junior Developer",
    company: "DigixValley",
    period: "2022 - 2023",
    description: "Developed and maintained mobile applications"
  },
  {
    title: "Junior Developer",
    company: "Aylvah",
    period: "2021 - 2022",
    description: "Worked on multiple client projects and app features"
  },
  {
    title: "Flutter Intern",
    company: "Advisable Technology",
    period: "2021",
    description: "Started professional journey learning Flutter development"
  }
];

const Experience = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-secondary">
      <div className="container mx-auto">
        <div className="mb-10">
          <h2 className="text-4xl font-bold mb-2">Experience</h2>
          <p className="text-muted-foreground">Professional journey and roles</p>
        </div>
        
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-20">
                <div className="absolute left-5 w-6 h-6 bg-primary rounded-full border-4 border-background" />
                <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-3 mb-3">
                    <Briefcase className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-primary">{exp.company}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
