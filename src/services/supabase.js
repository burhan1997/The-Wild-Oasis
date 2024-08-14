import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://zgpcwrjynypfayzbkuah.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpncGN3cmp5bnlwZmF5emJrdWFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkxNTk4NDksImV4cCI6MjAzNDczNTg0OX0.iylwFTm6kw4PceaH-r0vJV19ssx1hRir4w-aTC-dLQg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
