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

export function JobForm() {
  const createJob = useCreateJob();
  const { toast } = useToast();

  const form = useForm<InsertJob>({
    resolver: zodResolver(insertJobSchema),
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
      tags: [],
      skills: [],
    },
  });

  const applicationType = form.watch("applicationType");

  const onSubmit = async (data: InsertJob) => {
    await createJob.mutateAsync(data, {
      onSuccess: () => {
        toast({ title: "Job posted successfully!" });
        form.reset();
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
        <div className="grid grid-cols-2 gap-4">
            <FormField name="location" control={form.control} render={({ field }) => (
            <FormItem><FormLabel>Location</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField name="type" control={form.control} render={({ field }) => (
            <FormItem><FormLabel>Type</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl><SelectContent><SelectItem value="full-time">Full-time</SelectItem><SelectItem value="contract">Contract</SelectItem><SelectItem value="part-time">Part-time</SelectItem></SelectContent></Select><FormMessage /></FormItem>
            )} />
        </div>
        <FormField name="description" control={form.control} render={({ field }) => (
            <FormItem><FormLabel>Description</FormLabel><FormControl><Textarea {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField name="applicationType" control={form.control} render={({ field }) => (
            <FormItem><FormLabel>Application Type</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl><SelectContent><SelectItem value="internal">Internal</SelectItem><SelectItem value="external">External</SelectItem></SelectContent></Select><FormMessage /></FormItem>
        )} />
        {applicationType === 'external' && (
            <FormField name="externalApplicationUrl" control={form.control} render={({ field }) => (
                <FormItem><FormLabel>External URL</FormLabel><FormControl><Input {...field} placeholder="https://example.com/apply" /></FormControl><FormMessage /></FormItem>
            )} />
        )}
        <Button type="submit" disabled={createJob.isPending}>
          {createJob.isPending ? "Posting..." : "Post Job"}
        </Button>
      </form>
    </Form>
  );
}