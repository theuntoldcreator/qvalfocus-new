import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCreateApplication } from "@/lib/hooks";
import { useToast } from "@/hooks/use-toast";
import { type Job, type InsertApplication } from "@shared/schema";

const applyFormSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email(),
  phone: z.string().optional(),
  resume_url: z.string().url("Please enter a valid URL for your resume.").optional(),
  cover_letter: z.string().optional(),
});

interface ApplyFormProps {
  job: Job;
}

export function ApplyForm({ job }: ApplyFormProps) {
  const { toast } = useToast();
  const createApplicationMutation = useCreateApplication();

  const form = useForm<z.infer<typeof applyFormSchema>>({
    resolver: zodResolver(applyFormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      resume_url: "",
      cover_letter: "",
    },
  });

  function onSubmit(values: z.infer<typeof applyFormSchema>) {
    const applicationData: InsertApplication = {
      ...values,
      job_id: job.id,
      current_role: null,
      experience_level: null,
      linkedin: null,
      github: null,
      portfolio: null,
    };
    createApplicationMutation.mutate(applicationData, {
      onSuccess: () => {
        toast({ title: "Application submitted!", description: "We've received your application and will be in touch soon." });
        form.reset();
      },
      onError: (error: Error) => {
        toast({ title: "Error", description: error.message, variant: "destructive" });
      },
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Apply for this Job</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <FormField control={form.control} name="first_name" render={({ field }) => (<FormItem><FormLabel>First Name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
              <FormField control={form.control} name="last_name" render={({ field }) => (<FormItem><FormLabel>Last Name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
            </div>
            <FormField control={form.control} name="email" render={({ field }) => (<FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" {...field} /></FormControl><FormMessage /></FormItem>)} />
            <FormField control={form.control} name="phone" render={({ field }) => (<FormItem><FormLabel>Phone</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
            <FormField control={form.control} name="resume_url" render={({ field }) => (<FormItem><FormLabel>Resume URL</FormLabel><FormControl><Input placeholder="https://linkedin.com/in/..." {...field} /></FormControl><FormMessage /></FormItem>)} />
            <FormField control={form.control} name="cover_letter" render={({ field }) => (<FormItem><FormLabel>Cover Letter</FormLabel><FormControl><Textarea rows={4} {...field} /></FormControl><FormMessage /></FormItem>)} />
            <Button type="submit" className="w-full" disabled={createApplicationMutation.isPending}>
              {createApplicationMutation.isPending ? "Submitting..." : "Submit Application"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}