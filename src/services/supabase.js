import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://bhumpwkraraqznktkqkr.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJodW1wd2tyYXJhcXpua3RrcWtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYyNDM4ODQsImV4cCI6MjAxMTgxOTg4NH0.Uhk7PWc41rQVSVF_GhCfYWEXw4UfH0pd8zew4CRYI7Y";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
