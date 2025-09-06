import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ojmiaheeooffjberilkr.supabase.co'
// Note: This is the service_role key and should be kept secret.
// I am informing the user to set this as an environment variable.
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY!

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey)