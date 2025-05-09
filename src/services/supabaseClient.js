import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bjvyfyohkpqsrbdzxnbi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqdnlmeW9oa3Bxc3JiZHp4bmJpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NjQ4NTcyNiwiZXhwIjoyMDYyMDYxNzI2fQ.6mlLA3o9FBPocTzb_flhvFt4cFw62bf3aIZZ1Omf2mU';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
