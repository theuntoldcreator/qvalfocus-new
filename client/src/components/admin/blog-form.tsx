import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { useCreateBlog, useUpdateBlog } from "@/lib/hooks";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import type { Blog } from "@shared/schema";

const blogFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  subtitle: z.string().optional(),
  author: z.string().min(1, "Author is required"),
  authorAvatar: z.string().url("Invalid URL").optional().or(z.literal("")),
  publishDate: z.string().min(1, "Publish date is required"),
  imageUrl: z.string().url("Invalid URL").optional().or(z.literal("")),
  category: z.string().min(1, "Category is required"),
  content: z.string().min(1, "Content is required"),
  tags: z.string().optional(), // Comma-separated string
  readTimeMinutes: z.string().optional(), // Will convert to number
  featured: z.boolean().optional(),
  status: z.enum(["draft", "published"]).default("draft"),
});

type BlogFormData = z.infer<typeof blogFormSchema>;

interface BlogFormProps {
  blog?: Blog;
}

export function BlogForm({ blog }: BlogFormProps) {
  const createBlog = useCreateBlog();
  const updateBlog = useUpdateBlog();
  const { toast } = useToast();
  const navigate = useNavigate();

  const isEditing = !!blog;

  const form = useForm<BlogFormData>({
    resolver: zodResolver(blogFormSchema),
    defaultValues: {
      title: "",
      subtitle: "",
      author: "Admin", // Default author
      authorAvatar: "",
      publishDate: new Date().toISOString().split('T')[0], // Default to today
      imageUrl: "",
      category: "General",
      content: "",
      tags: "",
      readTimeMinutes: "",
      featured: false,
      status: "draft",
    },
  });

  useEffect(() => {
    if (isEditing && blog) {
      form.reset({
        ...blog,
        subtitle: blog.subtitle || undefined, // Convert null to undefined
        authorAvatar: blog.authorAvatar || undefined, // Convert null to undefined
        imageUrl: blog.imageUrl || undefined, // Convert null to undefined
        tags: blog.tags?.join(', ') || undefined,
        readTimeMinutes: blog.readTimeMinutes?.toString() || undefined,
        publishDate: blog.publishDate.split('T')[0], // Format date for input type="date"
        featured: blog.featured ?? false,
        status: blog.status, // Ensure status is correctly assigned
      });
    }
  }, [isEditing, blog, form]);

  const onSubmit = async (data: BlogFormData) => {
    const payload = {
      title: data.title,
      subtitle: data.subtitle || null,
      author: data.author,
      authorAvatar: data.authorAvatar || null,
      publishDate: new Date(data.publishDate).toISOString(),
      imageUrl: data.imageUrl || null,
      category: data.category,
      content: data.content,
      tags: data.tags ? data.tags.split(',').map(s => s.trim()).filter(Boolean) : null,
      readTimeMinutes: data.readTimeMinutes ? parseInt(data.readTimeMinutes, 10) : null,
      featured: data.featured ?? false,
      status: data.status,
    };

    try {
      if (isEditing && blog) {
        await updateBlog.mutateAsync({ id: blog.id, updatedBlog: payload }, {
          onSuccess: () => {
            toast({ title: "Blog post updated successfully!" });
            navigate("/admin/dashboard/blogs");
          },
        });
      } else {
        await createBlog.mutateAsync(payload, {
          onSuccess: () => {
            const message = payload.status === 'published' 
              ? "Blog post published successfully!" 
              : "Blog post saved as draft successfully!";
            toast({ title: message });
            form.reset();
            navigate("/admin/dashboard/blogs");
          },
        });
      }
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField name="title" control={form.control} render={({ field }) => (
          <FormItem><FormLabel>Title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField name="subtitle" control={form.control} render={({ field }) => (
          <FormItem><FormLabel>Subtitle (optional)</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField name="author" control={form.control} render={({ field }) => (
            <FormItem><FormLabel>Author</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField name="authorAvatar" control={form.control} render={({ field }) => (
            <FormItem><FormLabel>Author Avatar URL (optional)</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
          )} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField name="publishDate" control={form.control} render={({ field }) => (
            <FormItem><FormLabel>Publish Date</FormLabel><FormControl><Input type="date" {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField name="category" control={form.control} render={({ field }) => (
            <FormItem><FormLabel>Category</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl><SelectContent><SelectItem value="General">General</SelectItem><SelectItem value="Technology">Technology</SelectItem><SelectItem value="Life Sciences">Life Sciences</SelectItem><SelectItem value="Career Advice">Career Advice</SelectItem></SelectContent></Select><FormMessage /></FormItem>
          )} />
        </div>
        <FormField name="imageUrl" control={form.control} render={({ field }) => (
          <FormItem><FormLabel>Image URL (optional)</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField name="content" control={form.control} render={({ field }) => (
          <FormItem><FormLabel>Content</FormLabel><FormControl><Textarea {...field} rows={10} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField name="tags" control={form.control} render={({ field }) => (
          <FormItem><FormLabel>Tags (comma-separated, optional)</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField name="readTimeMinutes" control={form.control} render={({ field }) => (
            <FormItem><FormLabel>Read Time (minutes, optional)</FormLabel><FormControl><Input type="number" {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField name="status" control={form.control} render={({ field }) => (
            <FormItem><FormLabel>Status</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl><SelectContent><SelectItem value="draft">Draft</SelectItem><SelectItem value="published">Published</SelectItem></SelectContent></Select><FormMessage /></FormItem>
          )} />
        </div>
        <FormField name="featured" control={form.control} render={({ field }) => (
          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <FormLabel className="text-base">Featured Post</FormLabel>
              <FormMessage />
            </div>
            <FormControl>
              <Switch checked={field.value} onCheckedChange={field.onChange} />
            </FormControl>
          </FormItem>
        )} />
        <Button type="submit" disabled={createBlog.isPending || updateBlog.isPending} className="w-full">
          {isEditing ? (updateBlog.isPending ? "Updating..." : "Update Blog Post") : (createBlog.isPending ? "Creating..." : "Create Blog Post")}
        </Button>
      </form>
    </Form>
  );
}