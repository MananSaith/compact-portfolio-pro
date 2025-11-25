import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Lahore Garrison University",
    period: "2024 - 2026",
    type: "degree"
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Lahore Garrison University",
    period: "2020 - 2024",
    type: "degree"
  },
 
  {
    degree: "App Development Certificate",
    institution: "Professional Development Program",
    period: "2022",
    type: "certificate"
  }
];

const Education = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-secondary">
      <div className="container mx-auto">
        <div className="mb-10">
          <h2 className="text-4xl font-bold mb-2">Education</h2>
          <p className="text-muted-foreground">Academic background and certifications</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {education.map((item, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  {item.type === "degree" ? (
                    <GraduationCap className="h-6 w-6 text-primary" />
                  ) : (
                    <Award className="h-6 w-6 text-primary" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-lg mb-1">{item.degree}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.institution}</p>
                  <span className="text-xs text-primary">{item.period}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
