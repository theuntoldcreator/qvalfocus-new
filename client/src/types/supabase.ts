export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      applications: {
        Row: {
          created_at: string
          cover_letter: string | null
          current_role: string | null
          email: string
          experience_level: string
          first_name: string
          github: string | null
          id: string
          job_id: string
          last_name: string
          linkedin: string | null
          phone: string | null
          portfolio: string | null
          resume_url: string | null
          score: number | null
        }
        Insert: {
          created_at?: string
          cover_letter?: string | null
          current_role?: string | null
          email: string
          experience_level: string
          first_name: string
          github?: string | null
          id?: string
          job_id: string
          last_name: string
          linkedin?: string | null
          phone?: string | null
          portfolio?: string | null
          resume_url?: string | null
          score?: number | null
        }
        Update: {
          created_at?: string
          cover_letter?: string | null
          current_role?: string | null
          email?: string
          experience_level?: string
          first_name?: string
          github?: string | null
          id?: string
          job_id?: string
          last_name?: string
          linkedin?: string | null
          phone?: string | null
          portfolio?: string | null
          resume_url?: string | null
          score?: number | null
        }
      }
      blogs: {
        Row: {
          author: string
          author_avatar: string | null
          category: string
          content: string
          created_at: string | null
          featured: boolean | null
          id: string
          image_url: string | null
          publish_date: string | null
          read_time_minutes: number | null
          slug: string
          status: "draft" | "published"
          subtitle: string | null
          tags: string[] | null
          title: string
        }
        Insert: {
          author: string
          author_avatar?: string | null
          category: string
          content: string
          created_at?: string | null
          featured?: boolean | null
          id?: string
          image_url?: string | null
          publish_date?: string | null
          read_time_minutes?: number | null
          slug: string
          status?: "draft" | "published"
          subtitle?: string | null
          tags?: string[] | null
          title: string
        }
        Update: {
          author?: string
          author_avatar?: string | null
          category?: string
          content?: string
          created_at?: string | null
          featured?: boolean | null
          id?: string
          image_url?: string | null
          publish_date?: string | null
          read_time_minutes?: number | null
          slug?: string
          status?: "draft" | "published"
          subtitle?: string | null
          tags?: string[] | null
          title?: string
        }
      }
      jobs: {
        Row: {
          application_type: string
          benefits: string | null
          company: string
          company_logo: string | null
          created_at: string | null
          description: string
          external_application_url: string | null
          featured: boolean | null
          id: string
          industry: string
          level: string
          location: string
          recruiter_email: string | null
          recruiter_name: string | null
          recruiter_phone: string | null
          remote: boolean | null
          requirements: string
          responsibilities: string
          salary: string | null
          skills: string[] | null
          slug: string
          tags: string[] | null
          title: string
          type: string
          updated_at: string | null
        }
        Insert: {
          application_type?: string
          benefits?: string | null
          company: string
          company_logo?: string | null
          created_at?: string | null
          description: string
          external_application_url?: string | null
          featured?: boolean | null
          id?: string
          industry: string
          level: string
          location: string
          recruiter_email?: string | null
          recruiter_name?: string | null
          recruiter_phone?: string | null
          remote?: boolean | null
          requirements: string
          responsibilities: string
          salary?: string | null
          skills?: string[] | null
          slug: string
          tags?: string[] | null
          title: string
          type: string
          updated_at?: string | null
        }
        Update: {
          application_type?: string
          benefits?: string | null
          company?: string
          company_logo?: string | null
          created_at?: string | null
          description?: string
          external_application_url?: string | null
          featured?: boolean | null
          id?: string
          industry?: string
          level?: string
          location?: string
          recruiter_email?: string | null
          recruiter_name?: string | null
          recruiter_phone?: string | null
          remote?: boolean | null
          requirements?: string
          responsibilities?: string
          salary?: string | null
          skills?: string[] | null
          slug?: string
          tags?: string[] | null
          title?: string
          type?: string
          updated_at?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}