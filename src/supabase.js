import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://xlhmbzkcoqvuvfcmplfy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsaG1iemtjb3F2dXZmY21wbGZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk4OTkwMTcsImV4cCI6MjAzNTQ3NTAxN30.z76KjxoNMQXKzmX-g9N1tuZfUfH142A2tVibrzwC8PI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
