import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useState, FormEvent } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Generate mailto link
    const mailtoLink = `mailto:abdulmanan@linzatechhive.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;

    // Open default mail client
    window.location.href = mailtoLink;

    // Clear form fields
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-secondary">
      <div className="container mx-auto max-w-2xl">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold mb-2">Get In Touch</h2>
          <p className="text-muted-foreground">Let's discuss your next project</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-background border-border"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-background border-border"
            />
          </div>

          <Input
            placeholder="Subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            required
            className="bg-background border-border"
          />

          <Textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            rows={6}
            className="bg-background border-border resize-none"
          />

          <Button type="submit" size="lg" className="w-full">
            Send Message
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
