import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useCreateApplication } from "@/lib/hooks";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import type { Job, InsertApplication } from "@shared/schema";
import { CheckCircle } from "lucide-react";

const applicationFormSchema = z.object({
  full_name: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  resumeFile: z.instanceof(File).optional(),
  portfolio_link: z.string().url().optional().or(z.literal("")),
  linkedin_profile: z.string().url().optional().or(z.literal("")),
});

type ApplicationFormData = z.infer<typeof applicationFormSchema>;

interface ApplyFormProps {
  job: Job;
}

export function ApplyForm({ job }: ApplyFormProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const createApplication = useCreateApplication();
  const { toast } = useToast();

  const form = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationFormSchema),
    defaultValues: {
      full_name: "",
      email: "",
      phone: "",
      portfolio_link: "",
      linkedin_profile: "",
    },
  });

  const onSubmit = async (data: ApplicationFormData) => {
    let resume_url: string | null = null;
    if (data.resumeFile) {
      setIsUploading(true);
      setUploadProgress(0);
      const file = data.resumeFile;
      const filePath = `public/${Date.now()}-${file.name}`;
      
      const { error: uploadError } = await supabase.storage.from('resumes').upload(filePath, file, {
        cacheControl: '3600',
        upsert: false,
      });

      if (uploadError) {
        toast({ title: "Resume Upload Failed", description: uploadError.message, variant: "destructive" });
        setIsUploading(false);
        return;
      }
      
      const { data: { publicUrl } } = supabase.storage.from('resumes').getPublicUrl(filePath);
      resume_url = publicUrl;
      setUploadProgress(100);
      setIsUploading(false);
    }

    const nameParts = data.full_name.trim().split(/\s+/);
    const first_name = nameParts.shift() || "";
    const last_name = nameParts.join(" ");

    try {
      const payload: InsertApplication = {
        job_id: job.id,
        first_name,
        last_name,
        email: data.email,
        experience_level: null,
        phone: data.phone || null,
        current_role: null,
        linkedin: data.linkedin_profile || null,
        github: null,
        portfolio: data.portfolio_link || null,
        cover_letter: null,
        resume_url: resume_url,
      };

      await createApplication.mutateAsync(payload);
      setIsSuccess(true);
      form.reset();
    } catch (error) {
      toast({ title: "Error submitting application", description: "Please try again later.", variant: "destructive" });
    }
  };

  return (
    <>
      <Dialog open={isSuccess} onOpenChange={setIsSuccess}>
        <DialogContent>
          <DialogHeader>
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>
            <DialogTitle className="text-center text-2xl">Application Submitted!</DialogTitle>
            <DialogDescription className="text-center">
              Thank you for your interest. We've received your application and will be in touch soon if your profile is a match.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
        <h3 className="text-xl font-bold mb-2">Apply to Job Opening</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-6">Fill the information below to apply for this job</p>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField control={form.control} name="full_name" render={({ field }) => ( <FormItem><FormLabel>Full name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
            <FormField control={form.control} name="email" render={({ field }) => ( <FormItem><FormLabel>Email address</FormLabel><FormControl><Input type="email" {...field} /></FormControl><FormMessage /></FormItem>)} />
            <FormField control={form.control} name="phone" render={({ field }) => ( <FormItem><FormLabel>Phone number (optional)</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
            
            <FormField control={form.control} name="resumeFile" render={({ field: { onChange, ...rest } }) => (
              <FormItem>
                <FormLabel>Resume</FormLabel>
                <FormControl>
                  <label htmlFor="resume-upload" className="flex items-center justify-center w-full px-4 py-2 border-2 border-dashed rounded-lg cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700">
                    <span className="text-primary font-semibold">Upload resume/CV</span>
                    <Input id="resume-upload" type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={(e) => onChange(e.target.files?.[0])} {...rest} />
                  </label>
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            {isUploading && <Progress value={uploadProgress} className="w-full" />}

            <FormField control={form.control} name="portfolio_link" render={({ field }) => ( <FormItem><FormLabel>Portfolio link, Github url</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
            <FormField control={form.control} name="linkedin_profile" render={({ field }) => ( <FormItem><FormLabel>LinkedIn profile (optional)</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormMessage>)} />

            <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={createApplication.isPending || isUploading}>
              {isUploading ? `Uploading...` : createApplication.isPending ? "Submitting..." : 'Submit application'}
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}