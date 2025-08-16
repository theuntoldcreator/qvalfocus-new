import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useCreateContact } from "@/lib/hooks";
import { useToast } from "@/hooks/use-toast";
import type { InsertContact } from "@shared/schema";

const clientSchema = z.object({
  type: z.literal("client"),
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company name is required"),
  hiring_need: z.string().min(1, "Please select your hiring timeline"),
  message: z.string().min(10, "Please provide more details about your needs"),
});

const candidateSchema = z.object({
  type: z.literal("candidate"),
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  current_role: z.string().optional(),
  experience_level: z.string().min(1, "Experience level is required"),
  message: z.string().optional(),
});

type ClientFormData = z.infer<typeof clientSchema>;
type CandidateFormData = z.infer<typeof candidateSchema>;
type ContactFormData = ClientFormData | CandidateFormData;

interface ContactFormProps {
  type: "client" | "candidate";
  onSuccess?: () => void;
}

export function ContactForm({ type, onSuccess }: ContactFormProps) {
  const createContact = useCreateContact();
  const { toast } = useToast();

  const schema = type === "client" ? clientSchema : candidateSchema;

  const form = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      type,
      first_name: "",
      last_name: "",
      email: "",
      ...(type === "client" 
        ? { company: "", hiring_need: "", message: "" }
        : { current_role: "", experience_level: "", message: "" }
      ),
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const payload: InsertContact = {
        type: data.type,
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        company: data.type === 'client' ? data.company : null,
        hiring_need: data.type === 'client' ? data.hiring_need : null,
        message: data.message || null,
        current_role: data.type === 'candidate' ? data.current_role || null : null,
        experience_level: data.type === 'candidate' ? data.experience_level : null,
        resume_url: null,
      };

      await createContact.mutateAsync(payload);

      toast({
        title: "Thank you for your interest!",
        description: "We'll be in touch with you soon.",
      });

      form.reset();
      onSuccess?.();
    } catch (error) {
      toast({
        title: "Error submitting form",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField control={form.control} name="first_name" render={({ field }) => ( <FormItem><FormControl><Input placeholder="First Name" {...field} /></FormControl><FormMessage /></FormItem>)} />
          <FormField control={form.control} name="last_name" render={({ field }) => ( <FormItem><FormControl><Input placeholder="Last Name" {...field} /></FormControl><FormMessage /></FormItem>)} />
        </div>
        <FormField control={form.control} name="email" render={({ field }) => ( <FormItem><FormControl><Input type="email" placeholder={type === "client" ? "Work Email" : "Email Address"} {...field} /></FormControl><FormMessage /></FormItem>)} />
        {type === "client" ? (
          <>
            <FormField control={form.control} name="company" render={({ field }) => ( <FormItem><FormControl><Input placeholder="Company Name" {...field} /></FormControl><FormMessage /></FormItem>)} />
            <FormField control={form.control} name="hiring_need" render={({ field }) => ( <FormItem><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Hiring Need" /></SelectTrigger></FormControl><SelectContent><SelectItem value="immediate">Immediate (0-2 weeks)</SelectItem><SelectItem value="planned">Planned (1-3 months)</SelectItem><SelectItem value="strategic">Strategic (3+ months)</SelectItem></SelectContent></Select><FormMessage /></FormItem>)} />
            <FormField control={form.control} name="message" render={({ field }) => ( <FormItem><FormControl><Textarea placeholder="Tell us about your hiring goals and team needs..." rows={4} {...field} /></FormControl><FormMessage /></FormItem>)} />
          </>
        ) : (
          <>
            <FormField control={form.control} name="current_role" render={({ field }) => ( <FormItem><FormControl><Input placeholder="Current Role" {...field} /></FormControl><FormMessage /></FormItem>)} />
            <FormField control={form.control} name="experience_level" render={({ field }) => ( <FormItem><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Experience Level" /></SelectTrigger></FormControl><SelectContent><SelectItem value="entry">Entry Level (0-2 years)</SelectItem><SelectItem value="mid">Mid Level (3-7 years)</SelectItem><SelectItem value="senior">Senior Level (8-15 years)</SelectItem><SelectItem value="executive">Executive Level (15+ years)</SelectItem></SelectContent></Select><FormMessage /></FormItem>)} />
          </>
        )}
        <Button type="submit" className="w-full" disabled={createContact.isPending}>
          {createContact.isPending ? "Submitting..." : type === "client" ? "Start Hiring Process" : "Submit Application"}
        </Button>
      </form>
    </Form>
  );
}