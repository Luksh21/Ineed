import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bjvyfyohkpqsrbdzxnbi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqdnlmeW9oa3Bxc3JiZHp4bmJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0ODU3MjYsImV4cCI6MjA2MjA2MTcyNn0.QsCre1PTBMD7VoX3Z7wVPupV_wVJtOfEB7x3pF4tbQo';

export const supabase = createClient(supabaseUrl, supabaseKey);
