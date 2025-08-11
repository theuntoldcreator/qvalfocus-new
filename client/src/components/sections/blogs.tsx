import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useFeaturedBlogs } from "@/lib/hooks";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, Clock } from "lucide-react";

export function Blogs() {
  const { data: blogs, isLoading } = useFeaturedBlogs();

  return (
    <section id="blogs" className="py-20 bg-slate-100 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Latest Insights</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Stay informed with our expert articles on industry trends and career advice.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {isLoading ? (
            Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="glass dark:glass-dark rounded-2xl p-8">
                <Skeleton className="w-full h-48 rounded-xl mb-6" />
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-8 w-3/4 mb-4" />
                <Skeleton className="h-20 w-full mb-6" />
                <div className="flex gap-4 mb-6">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-24" />
                </div>
                <Skeleton className="h-6 w-40" />
              </div>
            ))
          ) : (
            blogs?.slice(0, 2).map((blog) => (
              <div key={blog.id} className="glass dark:glass-dark rounded-2xl p-8 hover:scale-105 transition-all duration-300">
                <div className="w-full h-48 rounded-xl mb-6 overflow-hidden">
                  <img 
                    src={blog.imageUrl || "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"} 
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-sm text-primary font-semibold mb-2">{blog.category}</div>
                <h3 className="text-2xl font-bold mb-4">{blog.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  {blog.content.substring(0, 150)}...
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1.5" />
                    {new Date(blog.publishDate).toLocaleDateString()}
                  </div>
                  {blog.readTimeMinutes && (
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1.5" />
                      {blog.readTimeMinutes} min read
                    </div>
                  )}
                </div>
                <Button variant="ghost" className="text-primary hover:text-primary/80 p-0" asChild>
                  <Link href={`/blogs/${blog.slug}`}>
                    Read More →
                  </Link>
                </Button>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}