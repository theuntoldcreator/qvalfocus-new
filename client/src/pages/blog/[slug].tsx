import { useParams, Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useBlog } from "@/lib/hooks";
import {
  Calendar,
  User,
  Clock,
  Tag,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const { data: blogPost, isLoading } = useBlog(slug || "");

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4">
        <Skeleton className="h-8 w-3/4 mb-4" />
        <Skeleton className="h-96 w-full mb-8" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6 mb-2" />
      </div>
    );
  }

  if (!blogPost) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Blog Post Not Found</h1>
        <p className="text-slate-500 mt-2">
          Sorry, we couldn't find the post you're looking for.
        </p>
        <Button asChild className="mt-6">
          <Link to="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{blogPost.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-12 px-4">
        <article>
          <header className="mb-8">
            <Badge className="mb-4">{blogPost.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
              {blogPost.title}
            </h1>
            {blogPost.subtitle && (
              <p className="text-xl text-slate-600">{blogPost.subtitle}</p>
            )}
            <div className="mt-6 flex items-center space-x-6 text-sm text-slate-500">
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={blogPost.authorAvatar} alt={blogPost.author} />
                  <AvatarFallback>{blogPost.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <span>{blogPost.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{new Date(blogPost.publishDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{blogPost.readTimeMinutes} min read</span>
              </div>
            </div>
          </header>

          {blogPost.imageUrl && (
            <img
              src={blogPost.imageUrl}
              alt={blogPost.title}
              className="w-full h-auto rounded-2xl object-cover mb-8"
            />
          )}

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />

          <footer className="mt-12 pt-8 border-t">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <Tag className="w-4 h-4 mr-2" />
                  Tags
                </h4>
                <div className="flex flex-wrap gap-2">
                  {blogPost.tags.map((tag: string, index: number) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Share this post</h4>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon">
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </footer>
        </article>
      </div>
    </>
  );
}