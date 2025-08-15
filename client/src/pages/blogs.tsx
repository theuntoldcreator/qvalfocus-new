import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useBlogs } from "@/lib/hooks";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Calendar, Clock } from "lucide-react";

export default function BlogsPage() {
  const { data: blogs, isLoading, error } = useBlogs();

  const stats = [
    { icon: BookOpen, label: "Total Articles", value: "20+" },
    { icon: Calendar, label: "Monthly Insights", value: "New" },
    { icon: Clock, label: "Avg. Read Time", value: "5 min" },
    { icon: ArrowRight, label: "Topics Covered", value: "Diverse" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-20 md:pt-28 pb-16 overflow-hidden">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1504711432882-b861107f2db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
            }}
          >
            <div className="absolute inset-0 bg-slate-900/70"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                Our Blog
              </Badge>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                Latest <span className="text-gradient">Insights</span> & News
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto">
                Stay informed with expert articles on industry trends, career advice, and company updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">Suggest a Topic</Link>
                </Button>
                <Button variant="outline" size="lg" className="text-white border-white/20 hover:bg-white/10" asChild>
                  <Link to="/jobs">Explore Careers</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-16 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-slate-600 dark:text-slate-300">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-slate-100 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">All Blog Posts</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Dive deeper into our articles covering a range of topics relevant to your career and business.
              </p>
            </div>

            {error && (
              <div className="text-center py-12">
                <div className="text-red-500 mb-4">Failed to load blog posts</div>
                <Button onClick={() => window.location.reload()}>Try Again</Button>
              </div>
            )}

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Array.from({ length: 4 }).map((_, i) => (
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
                ))}
              </div>
            ) : blogs && blogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogs.map((blog) => (
                  <Link key={blog.id} to={`/blogs/${blog.slug}`}>
                    <div className="glass dark:glass-dark rounded-2xl p-8 hover:scale-105 transition-all duration-300 group h-full">
                      <div className="w-full h-48 rounded-xl mb-6 overflow-hidden">
                        {blog.imageUrl ? (
                          <img 
                            src={blog.imageUrl} 
                            alt={blog.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400">
                            No Image
                          </div>
                        )}
                      </div>
                      
                      <Badge className="mb-4 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400">
                        {blog.category}
                      </Badge>
                      
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {blog.title}
                      </h3>
                      
                      {blog.subtitle && (
                        <div className="text-sm font-semibold text-primary mb-2">{blog.subtitle}</div>
                      )}
                      
                      <p className="text-slate-600 dark:text-slate-300 mb-6 line-clamp-3">
                        {blog.content.substring(0, 150)}...
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
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
                        <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <BookOpen className="w-16 h-16 text-slate-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">No blog posts available</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-md mx-auto">
                  We're currently preparing new content. Check back soon for fresh insights!
                </p>
                <Button asChild>
                  <Link to="/contact">Suggest a Topic</Link>
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Categories Focus */}
        <section className="py-20 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Explore by Category</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Find articles relevant to your interests and industry.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { name: "Artificial Intelligence", count: "3 articles" },
                { name: "Life Sciences", count: "2 articles" },
                { name: "Cybersecurity", count: "1 article" },
                { name: "Career Advice", count: "5 articles" },
                { name: "Industry Trends", count: "4 articles" },
                { name: "Company News", count: "2 articles" }
              ].map((category, index) => (
                <div key={index} className="glass dark:glass-dark rounded-xl p-6 text-center hover:scale-105 transition-all duration-300">
                  <h3 className="font-bold mb-2">{category.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{category.count}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Never Miss an Update
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Subscribe to our newsletter for the latest articles and exclusive insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-white text-primary hover:bg-slate-200" asChild>
                <Link to="/contact">Subscribe Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10" asChild>
                <Link to="/jobs">View Open Positions</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}