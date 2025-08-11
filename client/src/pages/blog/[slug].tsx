import { useParams } from "wouter";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useBlogPostBySlug } from "@/lib/hooks";
import { Link } from "wouter";
import { 
  ArrowLeft,
  Calendar,
  Clock,
  User
} from "lucide-react";

export default function BlogPostPage() {
  const { slug } = useParams();
  const { data: blogPost, isLoading, error } = useBlogPostBySlug(slug || "");

  if (error) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-20 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              The blog post you're looking for doesn't exist or has been removed.
            </p>
            <Link href="/blogs">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Skeleton className="h-8 w-32 mb-4" />
            <Skeleton className="h-12 w-3/4 mb-4" />
            <Skeleton className="h-6 w-1/2 mb-8" />
            <Skeleton className="h-64 w-full mb-8" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!blogPost) return null;

  return (
    <div className="min-h-screen">
      <Header />
      
      <main> {/* Removed pt-20 */}
        {/* Hero Section */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Link href="/blogs">
                <Button variant="ghost" className="mb-6">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Button>
              </Link>
            </div>

            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400">
                {blogPost.category}
              </Badge>
              
              {blogPost.subtitle && (
                <div className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">
                  {blogPost.subtitle}
                </div>
              )}
              
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                {blogPost.title}
              </h1>
              
              <div className="flex items-center justify-center gap-6 text-slate-600 dark:text-slate-300">
                <div className="flex items-center">
                  {blogPost.authorAvatar ? (
                    <img src={blogPost.authorAvatar} alt={blogPost.author} className="w-6 h-6 rounded-full mr-2" />
                  ) : (
                    <User className="w-4 h-4 mr-2" />
                  )}
                  {blogPost.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(blogPost.publishDate).toLocaleDateString()}
                </div>
                {blogPost.readTimeMinutes && (
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {blogPost.readTimeMinutes} min read
                  </div>
                )}
              </div>
            </div>

            {/* Hero Image */}
            {blogPost.imageUrl && (
              <div className="relative rounded-2xl overflow-hidden mb-12">
                <img 
                  src={blogPost.imageUrl}
                  alt={blogPost.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            )}
          </div>
        </section>

        {/* Blog Post Content */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              {blogPost.content.split('\n').map((paragraph: string, index: number) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
            {blogPost.tags && blogPost.tags.length > 0 && (
              <div className="mt-12">
                <h3 className="text-lg font-semibold mb-4">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {blogPost.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Related Blog Posts (Placeholder) */}
        <section className="py-20 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold mb-6">More from Our Blog</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Explore more articles and insights from our experts.
              </p>
            </div>
            
            <div className="text-center">
              <Button size="lg" asChild>
                <Link href="/blogs">View All Blog Posts</Link>
              </Button>
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
                <Link href="/contact">Subscribe Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10" asChild>
                <Link href="/jobs">View Open Positions</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}