import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BlogForm } from "@/components/admin/blog-form";
import { useCreateBlog } from "@/lib/hooks";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { InsertBlog } from "@shared/schema";

export default function NewBlogPage() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const createBlogMutation = useCreateBlog();

  const handleSubmit = (values: InsertBlog) => {
    createBlogMutation.mutate(values, {
      onSuccess: () => {
        toast({ title: "Blog post created successfully!" });
        navigate("/admin/dashboard/blog");
      },
      onError: (error: Error) => {
        toast({
          title: "Error creating blog post",
          description: error.message,
          variant: "destructive",
        });
      },
    });
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <Card>
        <CardHeader>
          <CardTitle>Create New Blog Post</CardTitle>
        </CardHeader>
        <CardContent>
          <BlogForm
            onSubmit={handleSubmit}
            isSubmitting={createBlogMutation.isPending}
          />
        </CardContent>
      </Card>
    </div>
  );
}