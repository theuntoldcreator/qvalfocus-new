import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "../../lib/supabase";
import { AdminLayout } from "../../components/admin/Layout";
import { BlogForm, formSchema } from "../../components/admin/blog-form";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";

export default function NewBlogPage() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    
    const insertData = {
      title: values.title,
      slug: values.slug,
      subtitle: values.subtitle,
      author: values.author,
      author_avatar: values.author_avatar,
      image_url: values.image_url,
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

    const { error } = await supabase.from("blogs").insert(insertData as any);
    
    setIsLoading(false);

    if (error) {
      toast.error(`Failed to create blog post: ${error.message}`);
    } else {
      toast.success("Blog post created successfully!");
      navigate("/admin/blog");
    }
  };

  return (
    <AdminLayout>
      <Card>
        <CardHeader>
          <CardTitle>Create New Blog Post</CardTitle>
        </CardHeader>
        <CardContent>
          <BlogForm
            onSubmit={handleSubmit}
            isEditing={false}
            isLoading={isLoading}
          />
        </CardContent>
      </Card>
    </AdminLayout>
  );
}