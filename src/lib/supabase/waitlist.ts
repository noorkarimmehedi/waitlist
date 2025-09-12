'use server';

import { createClient } from './server';

export async function addToWaitlist(email: string) {
  const supabase = await createClient();
  
  // First check if email already exists
  const { data: existing } = await supabase
    .from('waitlist')
    .select('email')
    .eq('email', email)
    .single();

  if (existing) {
    return { success: false, error: 'Email already exists in waitlist' };
  }

  const { error } = await supabase
    .from('waitlist')
    .insert([
      { 
        email,
        created_at: new Date().toISOString()
      }
    ]);

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}

export async function getWaitlistCount() {
  const supabase = await createClient();
  const { count, error } = await supabase
    .from('waitlist')
    .select('*', { count: 'exact', head: true });

  if (error) {
    console.error('Error getting waitlist count:', error);
    return 0;
  }

  return count || 0;
}
