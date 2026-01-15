import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/workflow';

const SUPABASE_URL = "https://tjm-supabase.laiye.com";
const SUPABASE_PUBLISHABLE_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzY4Mjk1MDA3LCJleHAiOjEzMjc4OTM1MDA3fQ.EI1f4mdT26L1fTj5-fgq4mCiuhfgDUdOCVFJ8B2koK4";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
