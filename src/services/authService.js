import { supabase } from '../lib/supabase';

export const authService = {
  async signIn(email, password) {
    const { data, error } = await supabase?.auth?.signInWithPassword({
      email,
      password
    });
    if (error) throw error;
    return data;
  },

  async signUp(email, password, userData = {}) {
    const { data, error } = await supabase?.auth?.signUp({
      email,
      password,
      options: {
        data: userData
      }
    });
    if (error) throw error;
    return data;
  },

  async signOut() {
    const { error } = await supabase?.auth?.signOut();
    if (error) throw error;
  },

  async getSession() {
    const { data: { session } } = await supabase?.auth?.getSession();
    return session;
  },

  async getUserProfile() {
    const session = await this.getSession();
    if (!session?.user?.id) return null;

    const { data, error } = await supabase?.from('user_profiles')?.select('*')?.eq('id', session?.user?.id)?.single();

    if (error) throw error;
    return data;
  },

  async updateUserProfile(updates) {
    const session = await this.getSession();
    if (!session?.user?.id) throw new Error('No authenticated user');

    const { data, error } = await supabase?.from('user_profiles')?.update(updates)?.eq('id', session?.user?.id)?.select()?.single();

    if (error) throw error;
    return data;
  },

  async resetPassword(email) {
    const { error } = await supabase?.auth?.resetPasswordForEmail(email);
    if (error) throw error;
  }
};