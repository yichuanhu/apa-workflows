import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/workflow';

const SUPABASE_URL = "https://zauifbgyiurxvsooutgj.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InphdWlmYmd5aXVyeHZzb291dGdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzNjU5MzksImV4cCI6MjA4Mzk0MTkzOX0.w9icEN0WG5ntqQdTUpucYfCw5_sbZ6mEdI6h002pxXU";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
