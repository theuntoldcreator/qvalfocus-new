"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

export default function ApplyModal({ open, onOpenChange, job }) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setResumeFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!resumeFile) {
      toast({
        title: "Resume Required",
        description: "Please select your resume file to upload.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const formData = new FormData(event.target);
      const formValues = Object.fromEntries(formData.entries());

      // 1. Upload resume to Supabase Storage
      const fileExt = resumeFile.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `public/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('resumes')
        .upload(filePath, resumeFile);

      if (uploadError) {
        throw new Error(`Resume Upload Failed: ${uploadError.message}`);
      }

      // 2. Get the public URL of the uploaded file
      const { data: urlData } = supabase.storage
        .from('resumes')
        .getPublicUrl(filePath);

      if (!urlData?.publicUrl) {
        throw new Error("Could not get the resume URL after upload.");
      }

      // 3. Submit application to the database
      const { error: insertError } = await supabase.from('applications').insert([
        {
          job_id: job.id,
          first_name: formValues.first_name,
          last_name: formValues.last_name,
          email: formValues.email,
          phone: formValues.phone,
          current_role: formValues.current_role,
          experience_level: formValues.experience_level,
          linkedin: formValues.linkedin,
          github: formValues.github,
          portfolio: formValues.portfolio,
          cover_letter: formValues.cover_letter,
          resume_url: urlData.publicUrl,
        },
      ]);

      if (insertError) {
        throw new Error(`Application Submission Failed: ${insertError.message}`);
      }

      toast({
        title: "Success!",
        description: "Your application has been submitted successfully.",
      });
      onOpenChange(false);
    } catch (error) {
      toast({
        title: "An Error Occurred",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Apply for {job.title}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first_name">First Name</Label>
              <Input id="first_name" name="first_name" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last_name">Last Name</Label>
              <Input id="last_name" name="last_name" required />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" type="tel" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="current_role">Current Role</Label>
              <Input id="current_role" name="current_role" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="experience_level">Experience Level</Label>
              <Input id="experience_level" name="experience_level" required />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="linkedin">LinkedIn Profile</Label>
              <Input id="linkedin" name="linkedin" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="github">GitHub Profile</Label>
              <Input id="github" name="github" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="portfolio">Portfolio URL</Label>
            <Input id="portfolio" name="portfolio" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="cover_letter">Cover Letter</Label>
            <Textarea id="cover_letter" name="cover_letter" placeholder="Tell us why you're a great fit for this role." />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="resume">Resume</Label>
            <Input id="resume" name="resume" type="file" required onChange={handleFileChange} />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="secondary">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Submit Application
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}