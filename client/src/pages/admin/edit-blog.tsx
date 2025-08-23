import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BlogForm } from "@/components/admin/blog-form";
import { useBlog, useUpdateBlog } from "@/lib/hooks";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { InsertBlog } from "@shared/schema";

export default function EditBlogPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { data: blogPost, isLoading } = useBlog(slug || "");
  const updateBlogMutation = useUpdateBlog();

  const handleSubmit = (values: InsertBlog) => {
    if (!blogPost) return;
    updateBlogMutation.mutate({ ...blogPost, ...values }, {
      onSuccess: () => {
        toast({ title: "Blog post updated successfully!" });
        navigate("/admin/dashboard/blog");
      },
      onError: (error: Error) => {
        toast({
          title: "Error updating blog post",
          description: error.message,
          variant: "destructive",
        });
      },
    });
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <Link to="/admin/dashboard/blog" className="flex items-center text-sm text-gray-500 hover:text-gray-700 mb-4">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Blog Management
      </Link>
      <Card>
        <CardHeader>
          <CardTitle>Edit Blog Post</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <Skeleton className="h-96 w-full" />
          ) : blogPost ? (
            <BlogForm
              blog={blogPost}
              onSubmit={handleSubmit}
              isSubmitting={updateBlogMutation.isPending}
            />
          ) : (
            <p>Blog post not found.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}