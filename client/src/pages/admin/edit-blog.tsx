import { Card, CardContent, CardHeader, CardTitle } => "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { BlogForm } from "@/components/admin/blog-form";
import { useBlogPostBySlug } from "@/lib/hooks";
import { Skeleton } from "@/components/ui/skeleton";

export default function EditBlogPage() {
  const { slug } = useParams<{ slug: string }>();
  const { data: blogPost, isLoading } = useBlogPostBySlug(slug || "");

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Edit Blog Post</h1>
        <Button asChild variant="outline">
          <Link to="/admin/dashboard/blogs">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blogs
          </Link>
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Blog Post Details</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="space-y-4">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-10 w-24" />
            </div>
          ) : blogPost ? (
            <BlogForm blog={blogPost} />
          ) : (
            <p>Blog post not found.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}