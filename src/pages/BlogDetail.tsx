import { useParams, Link } from "react-router-dom";
import { blogs } from "@/data/blogs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Footer from "@/components/Footer";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === id);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <Link to="/">
            <Button>Go Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-8 py-12 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <article className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{blog.readTime}</span>
              </div>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">{blog.category}</span>
            </div>

            <h1 className="text-5xl font-bold leading-tight">{blog.title}</h1>
            <p className="text-xl text-muted-foreground">{blog.excerpt}</p>
          </div>

          <div className="h-px bg-border my-8" />

          <div className="prose prose-invert max-w-none">
            <div className="text-foreground leading-relaxed space-y-4 whitespace-pre-line">
              {blog.content}
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetail;
