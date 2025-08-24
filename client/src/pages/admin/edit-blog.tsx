import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "../../lib/supabase";
import { AdminLayout } from "../../components/admin/Layout";
import { BlogForm, formSchema } from "../../components/admin/blog-form";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Skeleton } from "../../components/ui/skeleton";
import { Database } from "../../types/supabase";

type Blog = Database['public']['Tables']['blogs']['Row'];

export default function EditBlogPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [blogPost, setBlogPost] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    const fetchBlogPost = async () => {
      if (!slug) return;
      setLoading(true);
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("slug", slug)
        .single();

      if (error || !data) {
        toast.error("Failed to fetch blog post.");
        navigate("/admin/blog");
      } else {
        setBlogPost(data);
      }
      setLoading(false);
    };
    fetchBlogPost();
  }, [slug, navigate]);

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!blogPost) return;
    setIsUpdating(true);

    const updateData = {
      title: values.title,
      slug: values.slug,
      subtitle: values.subtitle || null,
      author: values.author,
      author_avatar: values.author_avatar || null,
      image_url: values.image_url || null,
      category: values.category,
      content: values.content,
      featured: values.featured,
      status: values.status,
      tags: values.tags?.split(",").map((tag) => tag.trim()) || null,
      read_time_minutes: values.read_time_minutes
        ? parseInt(values.read_time_minutes, 10)
        : null,
      publish_date: values.publish_date.toISOString(),
    };

    const { error } = await supabase
      .from("blogs")
      .update(updateData)
      .eq("id", blogPost.id);
      
    setIsUpdating(false);

    if (error) {
      toast.error(`Failed to update blog post: ${error.message}`);
    } else {
      toast.success("Blog post updated successfully!");
      navigate("/admin/blog");
    }
  };

  return (
    <AdminLayout>
      <Card>
        <CardHeader>
          <CardTitle>Edit Blog Post</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <Skeleton className="h-96 w-full" />
          ) : blogPost ? (
            <BlogForm
              blog={blogPost}
              onSubmit={handleSubmit}
              isEditing={true}
              isLoading={isUpdating}
            />
          ) : (
            <p>Blog post not found.</p>
          )}
        </CardContent>
      </Card>
    </AdminLayout>
  );
}