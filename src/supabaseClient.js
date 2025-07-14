import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jygsjskriyjrmlvxcsle.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5Z3Nqc2tyaXlqcm1sdnhjc2xlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI0ODMxODAsImV4cCI6MjA2ODA1OTE4MH0.TdqWZpAtMBlsHLDzl4nWb-fJKQLb5N_OEb-KaJEZZ24"; // Replace this

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
