import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://wioukgxxityqxztwsvry.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indpb3VrZ3h4aXR5cXh6dHdzdnJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3MDAxODEsImV4cCI6MjAyMzI3NjE4MX0.RNU4lf41P1vVtB_IsKXGgkbr-q5lkVND9MbtFniZTsU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
