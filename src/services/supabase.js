import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://gidgkyitbehdkovwrsow.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBmFzZSIsInJlZiI6ImdpZGdreWl0YmVoZGtvdndyc293Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg5NDc3MjYsImV4cCI6MjAyNDUyMzcyNn0.z88RyPi4civdsZTwoVk6OvRXao4UBk-yXZrFyURK6a0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
