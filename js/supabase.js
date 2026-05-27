import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

const supabaseUrl =
  "https://bjpnhnzjyetwqbazlkht.supabase.co"

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqcG5obnpqeWV0d3FiYXpsa2h0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgwMDc3OTksImV4cCI6MjA5MzU4Mzc5OX0.HXPiMRwK9xaHkrUWOQx6G-fqv2D8kBWnZBfGZm0NoZk"

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)