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
          job_id: string
          first_name: string
          last_name: string
          email: string
          experience_level: string
          [key: string]: any
        }
        Update: { [key: string]: any }
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
        Insert: { [key: string]: any }
        Update: { [key: string]: any }
      }
      jobs: {
        Row: {
          id: string
          title: string
          slug: string
          [key: string]: any
        }
        Insert: { [key: string]: any }
        Update: { [key: string]: any }
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