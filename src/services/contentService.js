import { supabase } from '../lib/supabase';

export const contentService = {
  async getContent(filters = {}) {
    let query = supabase?.from('ai_content')?.select(`
        id,
        title,
        content,
        excerpt,
        content_type,
        is_featured,
        tags,
        published_at,
        created_at,
        user_profiles (
          full_name
        )
      `)?.order('published_at', { ascending: false });

    if (filters?.type) {
      query = query?.eq('content_type', filters?.type);
    }

    if (filters?.featured) {
      query = query?.eq('is_featured', true);
    }

    if (filters?.limit) {
      query = query?.limit(filters?.limit);
    }

    const { data, error } = await query;

    if (error) throw error;
    return data || [];
  },

  async getContentById(id) {
    const { data, error } = await supabase?.from('ai_content')?.select(`
        *,
        user_profiles (
          full_name
        )
      `)?.eq('id', id)?.single();

    if (error) throw error;
    return data;
  },

  async getFeaturedContent(limit = 5) {
    const { data, error } = await supabase?.from('ai_content')?.select(`
        id,
        title,
        excerpt,
        content_type,
        tags,
        published_at,
        user_profiles (
          full_name
        )
      `)?.eq('is_featured', true)?.order('published_at', { ascending: false })?.limit(limit);

    if (error) throw error;
    return data || [];
  },

  async getLatestNews(limit = 10) {
    const { data, error } = await supabase?.from('ai_content')?.select(`
        id,
        title,
        excerpt,
        published_at,
        user_profiles (
          full_name
        )
      `)?.eq('content_type', 'news')?.order('published_at', { ascending: false })?.limit(limit);

    if (error) throw error;
    return data || [];
  },

  async getDailyTips(limit = 5) {
    const { data, error } = await supabase?.from('ai_content')?.select(`
        id,
        title,
        excerpt,
        content,
        published_at
      `)?.eq('content_type', 'tip')?.order('published_at', { ascending: false })?.limit(limit);

    if (error) throw error;
    return data || [];
  },

  async getArticles(limit = 10) {
    const { data, error } = await supabase?.from('ai_content')?.select(`
        id,
        title,
        excerpt,
        tags,
        published_at,
        user_profiles (
          full_name
        )
      `)?.eq('content_type', 'article')?.order('published_at', { ascending: false })?.limit(limit);

    if (error) throw error;
    return data || [];
  }
};