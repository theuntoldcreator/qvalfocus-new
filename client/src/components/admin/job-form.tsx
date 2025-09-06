"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { supabase } from "@/integrations/supabase/client";
import { Database } from "@/types/supabase";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Job = Database["public"]["Tables"]["jobs"]["Row"];

const jobFormSchema = z.object({
  title: z.string().min(2, { message: "Title must be at least 2 characters." }),
  slug: z.string().min(2, { message: "Slug must be at least 2 characters." }),
  company: z.string().min(2, { message: "Company name is required." }),
  company_logo: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal("")),
  location: z.string().min(2, { message: "Location is required." }),
  type: z.string().min(1, { message: "Job type is required." }),
  level: z.string().min(1, { message: "Experience level is required." }),
  salary: z.string().optional(),
  description: z.string().min(10, { message: "Description must be at least 10 characters." }),
  requirements: z.string().min(10, { message: "Requirements must be at least 10 characters." }),
  responsibilities: z.string().min(10, { message: "Responsibilities must be at least 10 characters." }),
  benefits: z.string().optional(),
  skills: z.string().optional(), // Comma-separated string
  tags: z.string().optional(), // Comma-separated string
  remote: z.boolean().default(false),
  featured: z.boolean().default(false),
  industry: z.string().min(2, { message: "Industry is required." }),
  recruiter_name: z.string().optional(),
  recruiter_email: z.string().email({ message: "Invalid email address." }).optional().or(z.literal("")),
  recruiter_phone: z.string().optional(),
  application_type: z.enum(["internal", "external"]).default("internal"),
  external_application_url: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal("")),
});

type JobFormValues = z.infer<typeof jobFormSchema>;

interface JobFormProps {
  job?: Job | null;
}

export function JobForm({ job }: JobFormProps) {
  const isEditing = !!job;
  const navigate = useNavigate();

  const form = useForm<JobFormValues>({
    resolver: zodResolver(jobFormSchema),
    defaultValues: {
      title: "",
      slug: "",
      company: "",
      company_logo: "",
      location: "",
      type: "Full-time",
      level: "Entry Level",
      salary: "",
      description: "",
      requirements: "",
      responsibilities: "",
      benefits: "",
      skills: "",
      tags: "",
      remote: false,
      featured: false,
      industry: "",
      recruiter_name: "",
      recruiter_email: "",
      recruiter_phone: "",
      application_type: "internal",
      external_application_url: "",
    },
  });

  useEffect(() => {
    if (isEditing && job) {
      form.reset({
        ...job,
        company_logo: job.company_logo ?? undefined,
        salary: job.salary ?? undefined,
        benefits: job.benefits ?? undefined,
        skills: Array.isArray(job.skills) ? job.skills.join(", ") : undefined,
        tags: Array.isArray(job.tags) ? job.tags.join(", ") : undefined,
        remote: job.remote ?? false,
        featured: job.featured ?? false,
        recruiter_name: job.recruiter_name ?? undefined,
        recruiter_email: job.recruiter_email ?? undefined,
        recruiter_phone: job.recruiter_phone ?? undefined,
        external_application_url: job.external_application_url ?? undefined,
      });
    }
  }, [job, isEditing, form]);

  const onSubmit = async (values: JobFormValues) => {
    const transformedValues = {
      ...values,
      skills: values.skills ? values.skills.split(",").map((skill) => skill.trim()) : [],
      tags: values.tags ? values.tags.split(",").map((tag) => tag.trim()) : [],
    };

    const { error } = isEditing
      ? await supabase.from("jobs").update(transformedValues).eq("id", job!.id)
      : await supabase.from("jobs").insert(transformedValues);

    if (error) {
      toast.error(`Failed to ${isEditing ? "update" : "create"} job: ${error.message}`);
    } else {
      toast.success(`Job ${isEditing ? "updated" : "created"} successfully!`);
      navigate("/admin/jobs");
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
                    <Input placeholder="Enter job title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter company name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., New York, NY" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Job description..." {...field} rows={10} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="requirements"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Requirements</FormLabel>
                  <FormControl>
                    <Textarea placeholder="List job requirements..." {...field} rows={5} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="responsibilities"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Responsibilities</FormLabel>
                  <FormControl>
                    <Textarea placeholder="List job responsibilities..." {...field} rows={5} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="benefits"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Benefits (optional)</FormLabel>
                  <FormControl>
                    <Textarea placeholder="List job benefits..." {...field} rows={3} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-8">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select job type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Full-time">Full-time</SelectItem>
                      <SelectItem value="Part-time">Part-time</SelectItem>
                      <SelectItem value="Contract">Contract</SelectItem>
                      <SelectItem value="Internship">Internship</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="level"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Experience Level</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Entry Level">Entry Level</SelectItem>
                      <SelectItem value="Mid Level">Mid Level</SelectItem>
                      <SelectItem value="Senior Level">Senior Level</SelectItem>
                      <SelectItem value="Executive">Executive</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="salary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Salary Range (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., $80,000 - $100,000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="industry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Industry</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Information Technology" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="skills"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Skills (comma-separated)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., React, TypeScript, SQL" {...field} />
                  </FormControl>
                  <FormDescription>
                    Separate skills with a comma.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags (comma-separated)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., remote, startup, AI" {...field} />
                  </FormControl>
                  <FormDescription>
                    Separate tags with a comma.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="remote"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel>Remote Position</FormLabel>
                    <FormDescription>
                      Is this job fully remote?
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
            <FormField
              control={form.control}
              name="featured"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel>Featured Job</FormLabel>
                    <FormDescription>
                      Highlight this job on the homepage.
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
            <FormField
              control={form.control}
              name="application_type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Application Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select application type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="internal">Internal (Apply on site)</SelectItem>
                      <SelectItem value="external">External (Link to another site)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            {form.watch("application_type") === "external" && (
              <FormField
                control={form.control}
                name="external_application_url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>External Application URL</FormLabel>
                    <FormControl>
                      <Input placeholder="https://example.com/apply" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>
        </div>
        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Saving..." : isEditing ? "Update Job Post" : "Create Job Post"}
        </Button>
      </form>
    </Form>
  );
}