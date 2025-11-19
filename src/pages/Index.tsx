import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import Education from "@/components/Education";
import Blogs from "@/components/Blogs";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Stats />
      <Projects />
      <Services />
      <Technologies />
      <Education />
      <About />
      <Experience />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
