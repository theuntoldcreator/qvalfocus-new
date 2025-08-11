import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ojmiaheeooffjberilkr.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qbWlhaGVlb29mZmpiZXJpbGtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ4OTAyNDcsImV4cCI6MjA3MDQ2NjI0N30.XID76y57mLUrlmQxNMZKpV6cO54KbVP5e0c8u-GdlAo'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)