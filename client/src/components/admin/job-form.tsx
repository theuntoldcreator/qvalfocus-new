import { useEffect } from "react";
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
import { useCreateJob, useUpdateJob } from "@/lib/hooks";
import { useToast } from "@/hooks/use-toast";
import { type Job, type InsertJob } from "@shared/schema";
import { useNavigate } from "react-router-dom";

const jobFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  company: z.string().min(1, "Company is required"),
  location: z.string().min(1, "Location is required"),
  type: z.string().min(1, "Type is required"),
  level: z.string().min(1, "Level is required"),
  industry: z.string().min(1, "Industry is required"),
  description: z.string().min(1, "Description is required"),
  requirements: z.string().min(1, "Requirements are required"),
  responsibilities: z.string().min(1, "Responsibilities are required"),
  salary: z.string().optional(),
  benefits: z.string().optional(),
  skills: z.string().optional(),
  tags: z.string().optional(),
});

type JobFormValues = z.infer<typeof jobFormSchema>;

interface JobFormProps {
  job?: Job;
}

export function JobForm({ job }: JobFormProps) {
  const { toast } = useToast();
  const navigate = useNavigate();
  const createJobMutation = useCreateJob();
  const updateJobMutation = useUpdateJob();

  const isEditing = !!job;

  const form = useForm<JobFormValues>({
    resolver: zodResolver(jobFormSchema),
    defaultValues: {
      title: "",
      company: "",
      location: "",
      type: "",
      level: "",
      industry: "",
      description: "",
      requirements: "",
      responsibilities: "",
      salary: "",
      benefits: "",
      skills: "",
      tags: "",
    },
  });

  useEffect(() => {
    if (isEditing && job) {
      form.reset({
        ...job,
        salary: job.salary ?? undefined,
        benefits: job.benefits ?? undefined,
        skills: Array.isArray(job.skills) ? job.skills.join(", ") : "",
        tags: Array.isArray(job.tags) ? job.tags.join(", ") : "",
      });
    }
  }, [job, form, isEditing]);

  const onSubmit = (values: JobFormValues) => {
    const processedValues = {
      ...values,
      skills: values.skills?.split(",").map((s) => s.trim()) || [],
      tags: values.tags?.split(",").map((t) => t.trim()) || [],
    };

    if (isEditing && job) {
      updateJobMutation.mutate(
        { ...job, ...processedValues },
        {
          onSuccess: () => {
            toast({ title: "Job updated successfully!" });
            navigate("/admin/dashboard/jobs");
          },
          onError: (error: Error) => {
            toast({ title: "Error updating job", description: error.message, variant: "destructive" });
          },
        }
      );
    } else {
      createJobMutation.mutate(processedValues as InsertJob, {
        onSuccess: () => {
          toast({ title: "Job created successfully!" });
          navigate("/admin/dashboard/jobs");
        },
        onError: (error) => {
          toast({ title: "Error creating job", description: error.message, variant: "destructive" });
        },
      });
    }
  };

  const isSubmitting = createJobMutation.isPending || updateJobMutation.isPending;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField control={form.control} name="title" render={({ field }) => (<FormItem><FormLabel>Title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
        <FormField control={form.control} name="company" render={({ field }) => (<FormItem><FormLabel>Company</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
        <FormField control={form.control} name="location" render={({ field }) => (<FormItem><FormLabel>Location</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
        <FormField control={form.control} name="type" render={({ field }) => (<FormItem><FormLabel>Type</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
        <FormField control={form.control} name="level" render={({ field }) => (<FormItem><FormLabel>Level</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
        <FormField control={form.control} name="industry" render={({ field }) => (<FormItem><FormLabel>Industry</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
        <FormField control={form.control} name="description" render={({ field }) => (<FormItem><FormLabel>Description</FormLabel><FormControl><Textarea {...field} /></FormControl><FormMessage /></FormItem>)} />
        <FormField control={form.control} name="requirements" render={({ field }) => (<FormItem><FormLabel>Requirements</FormLabel><FormControl><Textarea {...field} /></FormControl><FormMessage /></FormItem>)} />
        <FormField control={form.control} name="responsibilities" render={({ field }) => (<FormItem><FormLabel>Responsibilities</FormLabel><FormControl><Textarea {...field} /></FormControl><FormMessage /></FormItem>)} />
        <FormField control={form.control} name="salary" render={({ field }) => (<FormItem><FormLabel>Salary</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
        <FormField control={form.control} name="benefits" render={({ field }) => (<FormItem><FormLabel>Benefits</FormLabel><FormControl><Textarea {...field} /></FormControl><FormMessage /></FormItem>)} />
        <FormField control={form.control} name="skills" render={({ field }) => (<FormItem><FormLabel>Skills (comma-separated)</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
        <FormField control={form.control} name="tags" render={({ field }) => (<FormItem><FormLabel>Tags (comma-separated)</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : isEditing ? "Update Job" : "Create Job"}
        </Button>
      </form>
    </Form>
  );
}