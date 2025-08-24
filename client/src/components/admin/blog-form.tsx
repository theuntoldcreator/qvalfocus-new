"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { supabase } from "../../integrations/supabase/client";
import { Database } from "../../types/supabase";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Switch } from "../ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type Blog = Database["public"]["Tables"]["blogs"]["Row"];

const blogFormSchema = z.object({
  title: z.string().min(2, { message: "Title must be at least 2 characters." }),
  slug: z.string().min(2, { message: "Slug must be at least 2 characters." }),
  subtitle: z.string().optional(),
  author: z.string().min(2, { message: "Author name is required." }),
  author_avatar: z.string().url({ message: "Please enter a valid URL." }).optional(),
  publish_date: z.string().optional(),
  image_url: z.string().url({ message: "Please enter a valid URL." }).optional(),
  category: z.string().min(2, { message: "Category is required." }),
  content: z.string().min(10, { message: "Content must be at least 10 characters." }),
  tags: z.string().optional(),
  read_time_minutes: z.coerce.number().int().positive().optional(),
  featured: z.boolean().default(false),
  status: z.enum(["draft", "published"]).default("draft"),
});

type BlogFormValues = z.infer<typeof blogFormSchema>;

interface BlogFormProps {
  blog?: Blog | null;
}

export function BlogForm({ blog }: BlogFormProps) {
  const isEditing = !!blog;
  const navigate = useNavigate();

  const form = useForm<BlogFormValues>({
    resolver: zodResolver(blogFormSchema),
    defaultValues: {
      title: "",
      slug: "",
      subtitle: "",
      author: "",
      author_avatar: "",
      publish_date: new Date().toISOString(),
      image_url: "",
      category: "",
      content: "",
      tags: "",
      read_time_minutes: undefined,
      featured: false,
      status: "draft",
    },
  });

  useEffect(() => {
    if (isEditing && blog) {
      form.reset({
        ...blog,
        tags: Array.isArray(blog.tags) ? blog.tags.join(", ") : "",
        subtitle: blog.subtitle ?? undefined,
        author_avatar: blog.author_avatar ?? undefined,
        image_url: blog.image_url ?? undefined,
        read_time_minutes: blog.read_time_minutes ?? undefined,
      });
    }
  }, [blog, isEditing, form]);

  const onSubmit = async (values: BlogFormValues) => {
    const transformedValues = {
      ...values,
      tags: values.tags ? values.tags.split(",").map((tag) => tag.trim()) : [],
    };

    const { error } = isEditing
      ? await supabase.from("blogs").update(transformedValues).eq("id", blog!.id)
      : await supabase.from("blogs").insert(transformedValues);

    if (error) {
      toast.error(`Failed to ${isEditing ? "update" : "create"} blog: ${error.message}`);
    } else {
      toast.success(`Blog ${isEditing ? "updated" : "created"} successfully!`);
      navigate("/admin/blogs");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter blog title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subtitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subtitle</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter blog subtitle (optional)" {...field} />
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
                    <Textarea placeholder="Write your blog post here..." {...field} rows={15} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-8">
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
            <FormField
              control={form.control}
              name="slug"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Slug</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., my-awesome-post" {...field} />
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
                    <Input placeholder="e.g., Technology" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter author's name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image_url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image URL</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com/image.png" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Input placeholder="Comma-separated tags" {...field} />
                  </FormControl>
                  <FormDescription>
                    Separate tags with a comma (e.g., React, TypeScript).
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="featured"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel>Featured Post</FormLabel>
                    <FormDescription>
                      Display this post prominently.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Saving..." : isEditing ? "Update Blog Post" : "Create Blog Post"}
        </Button>
      </form>
    </Form>
  );
}