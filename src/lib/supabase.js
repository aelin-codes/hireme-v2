import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://demo.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'demo-key';

const isDemoMode = supabaseUrl === 'https://demo.supabase.co' || supabaseAnonKey === 'demo-key';

let supabase = null;

if (!isDemoMode) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

export { supabase, isDemoMode };

// Auth helpers
export async function signUpWithEmail(email, password, metadata = {}) {
  if (isDemoMode) {
    return { data: { user: { id: 'demo-user', email, user_metadata: metadata } }, error: null };
  }
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: metadata },
  });
  return { data, error };
}

export async function signInWithEmail(email, password) {
  if (isDemoMode) {
    return { data: { user: { id: 'demo-user', email, user_metadata: {} } }, error: null };
  }
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  return { data, error };
}

export async function signInWithGoogle() {
  if (isDemoMode) {
    return { data: { user: { id: 'demo-google-user', email: 'demo@gmail.com' } }, error: null };
  }
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: window.location.origin + '/student',
    },
  });
  return { data, error };
}

export async function signOut() {
  if (isDemoMode) return { error: null };
  const { error } = await supabase.auth.signOut();
  return { error };
}

export async function getSession() {
  if (isDemoMode) return { data: { session: null }, error: null };
  const { data, error } = await supabase.auth.getSession();
  return { data, error };
}
