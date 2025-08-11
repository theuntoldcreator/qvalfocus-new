import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useCreateApplication } from "@/lib/hooks";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import type { Job, InsertApplication } from "@shared/schema";
import { Upload, CheckCircle } from "lucide-react";

const applicationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  currentRole: z.string().optional(),
  experienceLevel: z.string().min(1, "Experience level is required"),
  linkedin: z.string().url().optional().or(z.literal("")),
  github: z.string().url().optional().or(z.literal("")),
  portfolio: z.string().url().optional().or(z.literal("")),
  coverLetter: z.string().optional(),
  resumeFile: z.instanceof(File).optional(),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

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
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      firstName: "", lastName: "", email: "", phone: "", currentRole: "",
      experienceLevel: "", linkedin: "", github: "", portfolio: "", coverLetter: "",
    },
  });

  const onSubmit = async (data: ApplicationFormData) => {
    if (job.applicationType === 'external' && job.externalApplicationUrl) {
        window.open(job.externalApplicationUrl, '_blank');
        return;
    }

    let resumeUrl: string | null = null;
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
      resumeUrl = publicUrl;
      setUploadProgress(100);
      setIsUploading(false);
    }

    try {
      const payload: InsertApplication = {
        jobId: job.id,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        experienceLevel: data.experienceLevel,
        phone: data.phone || null,
        currentRole: data.currentRole || null,
        linkedin: data.linkedin || null,
        github: data.github || null,
        portfolio: data.portfolio || null,
        coverLetter: data.coverLetter || null,
        resumeUrl: resumeUrl,
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

      <div className="glass dark:glass-dark rounded-xl p-8">
        <h3 className="text-2xl font-bold mb-6">Apply for this position</h3>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {job.applicationType === 'internal' ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField control={form.control} name="firstName" render={({ field }) => ( <FormItem><FormLabel>First Name *</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
                  <FormField control={form.control} name="lastName" render={({ field }) => ( <FormItem><FormLabel>Last Name *</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
                </div>
                <FormField control={form.control} name="email" render={({ field }) => ( <FormItem><FormLabel>Email *</FormLabel><FormControl><Input type="email" {...field} /></FormControl><FormMessage /></FormItem>)} />
                <FormField control={form.control} name="phone" render={({ field }) => ( <FormItem><FormLabel>Phone</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
                <FormField control={form.control} name="experienceLevel" render={({ field }) => ( <FormItem><FormLabel>Experience Level *</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Select your experience level" /></SelectTrigger></FormControl><SelectContent><SelectItem value="entry">Entry Level (0-2 years)</SelectItem><SelectItem value="mid">Mid Level (3-7 years)</SelectItem><SelectItem value="senior">Senior Level (8-15 years)</SelectItem><SelectItem value="executive">Executive Level (15+ years)</SelectItem></SelectContent></Select><FormMessage /></FormItem>)} />
                <FormField control={form.control} name="resumeFile" render={({ field: { onChange, ...rest } }) => ( <FormItem><FormLabel>Resume (PDF, DOCX)</FormLabel><FormControl><div className="relative"><Upload className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" /><Input type="file" accept=".pdf,.doc,.docx" className="pl-10" onChange={(e) => onChange(e.target.files?.[0])} {...rest} /></div></FormControl><FormMessage /></FormItem>)} />
                {isUploading && <Progress value={uploadProgress} className="w-full" />}
                <FormField control={form.control} name="coverLetter" render={({ field }) => ( <FormItem><FormLabel>Cover Letter</FormLabel><FormControl><Textarea placeholder="Tell us why you're interested in this role..." rows={4} {...field} /></FormControl><FormMessage /></FormItem>)} />
              </>
            ) : null}

            <Button type="submit" className="w-full" disabled={createApplication.isPending || isUploading}>
              {isUploading ? `Uploading... ${uploadProgress}%` : createApplication.isPending ? "Submitting..." : (job.applicationType === 'external' ? 'Apply on Company Site' : 'Submit Application')}
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}