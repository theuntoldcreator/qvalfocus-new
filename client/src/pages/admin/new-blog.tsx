import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";
import { AdminLayout } from "@/components/admin/layout";
import { BlogForm, formSchema } from "@/components/admin/blog-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NewBlogPage() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    const { error } = await supabase.from("blogs").insert({
      ...values,
      tags: values.tags?.split(",").map((tag) => tag.trim()) || null,
      read_time_minutes: values.read_time_minutes
        ? parseInt(values.read_time_minutes, 10)
        : null,
      publish_date: values.publish_date.toISOString(),
    });
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