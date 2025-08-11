import { supabaseAdmin } from "./supabase";
import type { InsertJob, Job, InsertApplication, Application, InsertContact, Contact } from "@shared/schema";

function toSlug(text: string) {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

export const db = {
  async getJobs(): Promise<Job[]> {
    const { data, error } = await supabaseAdmin
      .from("jobs")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw error;
    return data as Job[];
  },

  async getJobBySlug(slug: string): Promise<Job | undefined> {
    const { data, error } = await supabaseAdmin
      .from("jobs")
      .select("*")
      .eq("slug", slug)
      .single();
    if (error && error.code !== 'PGRST116') { // Ignore 'not found' error
        throw error;
    }
    return data as Job | undefined;
  },

  async createJob(jobData: InsertJob): Promise<Job> {
    const slug = toSlug(jobData.title);
    const { data, error } = await supabaseAdmin
      .from("jobs")
      .insert([{ ...jobData, slug }])
      .select()
      .single();
    if (error) throw error;
    return data as Job;
  },

  async deleteJob(id: string): Promise<{ id: string }> {
    const { error } = await supabaseAdmin
      .from("jobs")
      .delete()
      .eq("id", id);
    if (error) throw error;
    return { id };
  },

  async createApplication(applicationData: InsertApplication): Promise<Application> {
    const { data, error } = await supabaseAdmin
      .from("applications")
      .insert([applicationData])
      .select()
      .single();
    if (error) throw error;
    return data as Application;
  },

  async getApplicationsByJob(jobId: string) {
    const { data, error } = await supabaseAdmin
        .from('applications')
        .select('*')
        .eq('job_id', jobId)
        .order('created_at', { ascending: false });
    if (error) throw error;
    return data;
  },

   async deleteApplication(id: string) {
    const { error } = await supabaseAdmin
        .from('applications')
        .delete()
        .eq('id', id);
    if (error) throw error;
    return { id };
  },

  async getContacts(): Promise<Contact[]> {
    const { data, error } = await supabaseAdmin
      .from("contacts")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw error;
    return data as Contact[];
  },

  async createContact(contactData: InsertContact): Promise<Contact> {
    const { data, error } = await supabaseAdmin
      .from("contacts")
      .insert([contactData])
      .select()
      .single();
    if (error) throw error;
    return data as Contact;
  }
};