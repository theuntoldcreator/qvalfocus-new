import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast"; // Corrected import path
import { supabase } from "@/integrations/supabase/client";
import type { Job } from "@shared/schema"; // Assuming Job type is available from shared schema

interface ApplyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  job: Job;
}

export default function ApplyModal({ open, onOpenChange, job }: ApplyModalProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
    resumeUrl: "", // Placeholder for resume upload URL
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const { fullName, email, phone, coverLetter, resumeUrl } = formData;
    const [firstName, ...lastNameParts] = fullName.split(" ");
    const lastName = lastNameParts.join(" ");

    try {
      const { error } = await supabase.from("applications").insert({
        job_id: job.id,
        first_name: firstName,
        last_name: lastName,
        email,
        phone: phone || null,
        cover_letter: coverLetter || null,
        resume_url: resumeUrl || null, // In a real app, this would come from an upload
        experience_level: "Mid Level", // Placeholder, would come from form
        current_role: "Software Engineer", // Placeholder, would come from form
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Application Submitted!",
        description: "Your application has been successfully sent.",
      });
      onOpenChange(false); // Close modal on success
      setFormData({ // Reset form
        fullName: "",
        email: "",
        phone: "",
        coverLetter: "",
        resumeUrl: "",
      });
    } catch (error: unknown) { // Catch error as unknown
      toast({
        title: "An Error Occurred",
        description: (error as Error).message || "Please try again.", // Type assertion for error message
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Apply for {job.title}</DialogTitle>
          <DialogDescription>
            Fill in your details to apply for this position.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="fullName" className="text-right">
              Full Name
            </label>
            <Input
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="email" className="text-right">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="phone" className="text-right">
              Phone
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="coverLetter" className="text-right">
              Cover Letter
            </label>
            <Textarea
              id="coverLetter"
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              className="col-span-3"
              rows={4}
            />
          </div>
          {/* In a real application, you'd have a file upload component here */}
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="resume" className="text-right">
              Resume
            </label>
            <Input
              id="resume"
              name="resumeUrl"
              type="url"
              placeholder="Link to your resume (e.g., Google Drive, Dropbox)"
              value={formData.resumeUrl}
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
          <Button type="submit" className="w-full mt-4" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}