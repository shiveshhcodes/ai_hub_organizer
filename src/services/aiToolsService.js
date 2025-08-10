import { supabase } from '../lib/supabase';

export const aiToolsService = {
  async getTools(filters = {}) {
    let query = supabase?.from('ai_tools')?.select(`
        id,
        name,
        description,
        category,
        pricing,
        website_url,
        logo_url,
        tags,
        features,
        is_featured,
        rating,
        review_count,
        popularity_score,
        created_at,
        updated_at
      `)?.order('popularity_score', { ascending: false });

    if (filters?.category) {
      query = query?.eq('category', filters?.category);
    }

    if (filters?.pricing) {
      query = query?.eq('pricing', filters?.pricing);
    }

    if (filters?.featured) {
      query = query?.eq('is_featured', true);
    }

    if (filters?.search) {
      query = query?.or(`name.ilike.%${filters?.search}%,description.ilike.%${filters?.search}%`);
    }

    const { data, error } = await query;

    if (error) throw error;
    return data || [];
  },

  async getToolById(id) {
    const { data, error } = await supabase?.from('ai_tools')?.select(`
        *,
        ai_tool_reviews (
          id,
          rating,
          title,
          review_text,
          is_verified,
          created_at,
          user_profiles (
            full_name
          )
        )
      `)?.eq('id', id)?.single();

    if (error) throw error;
    return data;
  },

  async getFeaturedTools(limit = 10) {
    const { data, error } = await supabase?.from('ai_tools')?.select('*')?.eq('is_featured', true)?.order('popularity_score', { ascending: false })?.limit(limit);

    if (error) throw error;
    return data || [];
  },

  async getTrendingTools(limit = 10) {
    const { data, error } = await supabase?.from('ai_tools')?.select('*')?.order('popularity_score', { ascending: false })?.limit(limit);

    if (error) throw error;
    return data || [];
  },

  async getToolsByCategory(category, limit = 20) {
    const { data, error } = await supabase?.from('ai_tools')?.select('*')?.eq('category', category)?.order('popularity_score', { ascending: false })?.limit(limit);

    if (error) throw error;
    return data || [];
  },

  async searchTools(searchTerm, filters = {}) {
    let query = supabase?.from('ai_tools')?.select('*')?.or(`name.ilike.%${searchTerm}%,description.ilike.%${searchTerm}%,tags.cs.{${searchTerm}}`);

    if (filters?.category) {
      query = query?.eq('category', filters?.category);
    }

    if (filters?.pricing) {
      query = query?.eq('pricing', filters?.pricing);
    }

    query = query?.order('popularity_score', { ascending: false });

    const { data, error } = await query;

    if (error) throw error;
    return data || [];
  }
};

export const favoritesService = {
  async getUserFavorites(userId) {
    const { data, error } = await supabase?.from('user_favorites')?.select(`
        id,
        created_at,
        ai_tools (
          id,
          name,
          description,
          category,
          pricing,
          website_url,
          logo_url,
          rating,
          review_count
        )
      `)?.eq('user_id', userId)?.order('created_at', { ascending: false });

    if (error) throw error;
    return data?.map(fav => fav?.ai_tools) || [];
  },

  async addToFavorites(userId, toolId) {
    const { data, error } = await supabase?.from('user_favorites')?.insert([
        {
          user_id: userId,
          ai_tool_id: toolId
        }
      ])?.select()?.single();

    if (error) throw error;
    return data;
  },

  async removeFromFavorites(userId, toolId) {
    const { error } = await supabase?.from('user_favorites')?.delete()?.eq('user_id', userId)?.eq('ai_tool_id', toolId);

    if (error) throw error;
  },

  async isFavorited(userId, toolId) {
    const { data, error } = await supabase?.from('user_favorites')?.select('id')?.eq('user_id', userId)?.eq('ai_tool_id', toolId)?.single();

    if (error && error?.code !== 'PGRST116') throw error;
    return !!data;
  }
};