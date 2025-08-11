import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertJobSchema, type InsertJob } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useCreateJob } from "@/lib/hooks";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useLocation } from "wouter";

const jobFormSchema = insertJobSchema.extend({
  skills: z.string().optional(),
  tags: z.string().optional(),
  companyLogo: z.string().optional(),
  salary: z.string().optional(),
  benefits: z.string().optional(),
  remote: z.boolean().optional(),
  featured: z.boolean().optional(),
  recruiterName: z.string().optional(),
  recruiterEmail: z.string().optional(),
  recruiterPhone: z.string().optional(),
});
type JobFormData = z.infer<typeof jobFormSchema>;

export function JobForm() {
  const createJob = useCreateJob();
  const { toast } = useToast();
  const [, navigate] = useLocation();

  const form = useForm<JobFormData>({
    resolver: zodResolver(jobFormSchema),
    defaultValues: {
      title: "",
      company: "QvalFocus",
      location: "",
      type: "full-time",
      level: "mid",
      industry: "Information Technology",
      description: "",
      requirements: "",
      responsibilities: "",
      applicationType: "internal",
      externalApplicationUrl: "",
      tags: "",
      skills: "",
      companyLogo: "",
      salary: "",
      benefits: "",
      remote: false,
      featured: false,
      recruiterName: "",
      recruiterEmail: "",
      recruiterPhone: "",
    },
  });

  const applicationType = form.watch("applicationType");

  const onSubmit = async (data: JobFormData) => {
    const payload: InsertJob = {
        title: data.title,
        company: data.company,
        location: data.location,
        type: data.type,
        level: data.level,
        industry: data.industry,
        description: data.description,
        requirements: data.requirements,
        responsibilities: data.responsibilities,
        applicationType: data.applicationType,
        companyLogo: data.companyLogo || null,
        salary: data.salary || null,
        benefits: data.benefits || null,
        remote: data.remote ?? false,
        featured: data.featured ?? false,
        recruiterName: data.recruiterName || null,
        recruiterEmail: data.recruiterEmail || null,
        recruiterPhone: data.recruiterPhone || null,
        externalApplicationUrl: data.externalApplicationUrl || null,
        skills: data.skills ? data.skills.split(',').map(s => s.trim()).filter(Boolean) : null,
        tags: data.tags ? data.tags.split(',').map(t => t.trim()).filter(Boolean) : null,
    };

    await createJob.mutateAsync(payload, {
      onSuccess: () => {
        toast({ title: "Job posted successfully!" });
        form.reset();
        navigate("/admin/dashboard/jobs"); // Redirect to jobs management page
      },
      onError: (error) => {
        toast({ title: "Error posting job", description: error.message, variant: "destructive" });
      },
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField name="title" control={form.control} render={({ field }) => (
          <FormItem><FormLabel>Job Title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField name="company" control={form.control} render={({ field }) => (
          <FormItem><FormLabel>Company</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField name="location" control={form.control} render={({ field }) => (
          <FormItem><FormLabel>Location</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField name="type" control={form.control} render={({ field }) => (
            <FormItem><FormLabel>Type</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl><SelectContent><SelectItem value="full-time">Full-time</SelectItem><SelectItem value="contract">Contract</SelectItem><SelectItem value="part-time">Part-time</SelectItem></SelectContent></Select><FormMessage /></FormItem>
            )} />
            <FormField name="level" control={form.control} render={({ field }) => (
            <FormItem><FormLabel>Level</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl><SelectContent><SelectItem value="entry">Entry</SelectItem><SelectItem value="mid">Mid</SelectItem><SelectItem value="senior">Senior</SelectItem></SelectContent></Select><FormMessage /></FormItem>
            )} />
        </div>
        <FormField name="industry" control={form.control} render={({ field }) => (
            <FormItem><FormLabel>Industry</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl><SelectContent><SelectItem value="Information Technology">Information Technology</SelectItem><SelectItem value="Life Sciences">Life Sciences</SelectItem></SelectContent></Select><FormMessage /></FormItem>
        )} />
        <FormField name="description" control={form.control} render={({ field }) => (
            <FormItem><FormLabel>Description</FormLabel><FormControl><Textarea {...field} rows={5} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField name="responsibilities" control={form.control} render={({ field }) => (
            <FormItem><FormLabel>Responsibilities</FormLabel><FormControl><Textarea {...field} rows={5} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField name="requirements" control={form.control} render={({ field }) => (
            <FormItem><FormLabel>Requirements</FormLabel><FormControl><Textarea {...field} rows={5} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField name="skills" control={form.control} render={({ field }) => (
          <FormItem><FormLabel>Skills (comma-separated)</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField name="applicationType" control={form.control} render={({ field }) => (
            <FormItem><FormLabel>Application Type</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl><SelectContent><SelectItem value="internal">Internal</SelectItem><SelectItem value="external">External</SelectItem></SelectContent></Select><FormMessage /></FormItem>
        )} />
        {applicationType === 'external' && (
            <FormField name="externalApplicationUrl" control={form.control} render={({ field }) => (
                <FormItem><FormLabel>External URL</FormLabel><FormControl><Input {...field} value={field.value || ''} placeholder="https://example.com/apply" /></FormControl><FormMessage /></FormItem>
            )} />
        )}
        <Button type="submit" disabled={createJob.isPending} className="w-full">
          {createJob.isPending ? "Posting..." : "Post Job"}
        </Button>
      </form>
    </Form>
  );
}