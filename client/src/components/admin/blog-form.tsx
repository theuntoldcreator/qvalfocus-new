import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { type Blog, type InsertBlog } from "@shared/schema";
import { useEffect } from "react";

const blogFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  subtitle: z.string().optional(),
  author: z.string().min(1, "Author is required"),
  authorAvatar: z.string().url().optional(),
  publishDate: z.string().min(1, "Publish date is required"),
  imageUrl: z.string().url().optional(),
  category: z.string().min(1, "Category is required"),
  content: z.string().min(1, "Content is required"),
  tags: z.string().optional(),
  readTimeMinutes: z.string().optional(),
  featured: z.boolean().default(false),
  status: z.enum(["draft", "published"]).default("draft"),
});

type BlogFormValues = z.infer<typeof blogFormSchema>;

interface BlogFormProps {
  blog?: Blog;
  onSubmit: (values: InsertBlog) => void;
  isSubmitting: boolean;
}

export function BlogForm({ blog, onSubmit, isSubmitting }: BlogFormProps) {
  const isEditing = !!blog;

  const form = useForm<BlogFormValues>({
    resolver: zodResolver(blogFormSchema),
    defaultValues: {
      title: "",
      slug: "",
      subtitle: "",
      author: "",
      authorAvatar: "",
      publishDate: new Date().toISOString().split('T')[0],
      imageUrl: "",
      category: "",
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
        subtitle: blog.subtitle ?? undefined,
        tags: Array.isArray(blog.tags) ? blog.tags.join(", ") : undefined,
        publishDate: blog.publish_date ? new Date(blog.publish_date).toISOString().split('T')[0] : '',
        readTimeMinutes: blog.read_time_minutes?.toString() ?? undefined,
        authorAvatar: blog.author_avatar ?? undefined,
        imageUrl: blog.image_url ?? undefined,
      });
    }
  }, [blog, form, isEditing]);

  const handleSubmit = (values: BlogFormValues) => {
    const processedValues: InsertBlog = {
      ...values,
      tags: values.tags ? values.tags.split(",").map(tag => tag.trim()) : [],
      read_time_minutes: values.readTimeMinutes ? parseInt(values.readTimeMinutes, 10) : undefined,
      publish_date: values.publishDate,
      author_avatar: values.authorAvatar,
      image_url: values.imageUrl,
    };
    onSubmit(processedValues);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Blog post title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="slug"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Slug</FormLabel>
                <FormControl>
                  <Input placeholder="blog-post-title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="subtitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subtitle</FormLabel>
              <FormControl>
                <Input placeholder="A catchy subtitle" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea placeholder="Write your blog post here..." {...field} rows={10} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Author</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Input placeholder="Technology" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="publishDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Publish Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image URL</FormLabel>
                <FormControl>
                  <Input placeholder="https://example.com/image.jpg" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="authorAvatar"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Author Avatar URL</FormLabel>
                <FormControl>
                  <Input placeholder="https://example.com/avatar.jpg" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tags (comma-separated)</FormLabel>
                <FormControl>
                  <Input placeholder="react, typescript, tailwind" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="readTimeMinutes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Read Time (minutes)</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="5" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="featured"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Featured Post
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : isEditing ? "Update Blog Post" : "Create Blog Post"}
        </Button>
      </form>
    </Form>
  );
}