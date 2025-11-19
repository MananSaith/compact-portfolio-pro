import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogs } from "@/data/blogs";
import { Link } from "react-router-dom";

const Blogs = () => {
  const featuredBlogs = blogs.slice(0, 3);
  
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="mb-10">
          <h2 className="text-4xl font-bold mb-2">Blog & Research</h2>
          <p className="text-muted-foreground">Insights and articles on development</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {featuredBlogs.map((blog) => (
            <Card key={blog.id} className="overflow-hidden hover:shadow-lg transition-all group bg-card border-border">
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
                
                <div>
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">{blog.category}</span>
                </div>
                
                <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>
                
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {blog.excerpt}
                </p>
                
                <Link to={`/blog/${blog.id}`}>
                  <Button variant="ghost" className="w-full group/btn">
                    Read More
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

export default Blogs;
