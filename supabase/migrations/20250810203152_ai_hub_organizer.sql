-- Location: supabase/migrations/20250810203152_ai_hub_organizer.sql
-- Schema Analysis: Fresh project, no existing schema
-- Integration Type: Complete AI Hub Organizer system
-- Dependencies: Auth system with user profiles

-- 1. Types and Enums
CREATE TYPE public.user_role AS ENUM ('admin', 'premium', 'free');
CREATE TYPE public.ai_tool_category AS ENUM ('writing', 'coding', 'image', 'video', 'audio', 'productivity', 'research', 'design', 'other');
CREATE TYPE public.ai_tool_pricing AS ENUM ('free', 'freemium', 'paid');
CREATE TYPE public.content_type AS ENUM ('news', 'article', 'tip', 'tutorial', 'update');

-- 2. Core User Table
CREATE TABLE public.user_profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id),
    email TEXT NOT NULL UNIQUE,
    full_name TEXT NOT NULL,
    role public.user_role DEFAULT 'free'::public.user_role,
    preferences JSONB DEFAULT '{}'::JSONB,
    chrome_extension_id TEXT,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 3. AI Tools Table
CREATE TABLE public.ai_tools (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    category public.ai_tool_category NOT NULL,
    pricing public.ai_tool_pricing NOT NULL,
    website_url TEXT NOT NULL,
    logo_url TEXT,
    tags TEXT[] DEFAULT '{}',
    features TEXT[] DEFAULT '{}',
    is_featured BOOLEAN DEFAULT false,
    rating DECIMAL(3,2) DEFAULT 0.0,
    review_count INTEGER DEFAULT 0,
    popularity_score INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 4. User Favorites
CREATE TABLE public.user_favorites (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES public.user_profiles(id) ON DELETE CASCADE,
    ai_tool_id UUID REFERENCES public.ai_tools(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, ai_tool_id)
);

-- 5. AI Content/Blog Posts
CREATE TABLE public.ai_content (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    excerpt TEXT,
    content_type public.content_type NOT NULL,
    author_id UUID REFERENCES public.user_profiles(id) ON DELETE SET NULL,
    is_featured BOOLEAN DEFAULT false,
    tags TEXT[] DEFAULT '{}',
    published_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 6. AI Tool Reviews
CREATE TABLE public.ai_tool_reviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    ai_tool_id UUID REFERENCES public.ai_tools(id) ON DELETE CASCADE,
    user_id UUID REFERENCES public.user_profiles(id) ON DELETE CASCADE,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    title TEXT,
    review_text TEXT,
    is_verified BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(ai_tool_id, user_id)
);

-- 7. User Collections/Folders
CREATE TABLE public.user_collections (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES public.user_profiles(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    description TEXT,
    is_public BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 8. Collection Items (Junction Table)
CREATE TABLE public.collection_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    collection_id UUID REFERENCES public.user_collections(id) ON DELETE CASCADE,
    ai_tool_id UUID REFERENCES public.ai_tools(id) ON DELETE CASCADE,
    added_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(collection_id, ai_tool_id)
);

-- 9. Essential Indexes
CREATE INDEX idx_user_profiles_email ON public.user_profiles(email);
CREATE INDEX idx_ai_tools_category ON public.ai_tools(category);
CREATE INDEX idx_ai_tools_pricing ON public.ai_tools(pricing);
CREATE INDEX idx_ai_tools_featured ON public.ai_tools(is_featured);
CREATE INDEX idx_ai_tools_popularity ON public.ai_tools(popularity_score DESC);
CREATE INDEX idx_user_favorites_user_id ON public.user_favorites(user_id);
CREATE INDEX idx_user_favorites_tool_id ON public.user_favorites(ai_tool_id);
CREATE INDEX idx_ai_content_type ON public.ai_content(content_type);
CREATE INDEX idx_ai_content_featured ON public.ai_content(is_featured);
CREATE INDEX idx_ai_content_published ON public.ai_content(published_at DESC);
CREATE INDEX idx_ai_tool_reviews_tool_id ON public.ai_tool_reviews(ai_tool_id);
CREATE INDEX idx_ai_tool_reviews_rating ON public.ai_tool_reviews(rating);
CREATE INDEX idx_user_collections_user_id ON public.user_collections(user_id);
CREATE INDEX idx_collection_items_collection_id ON public.collection_items(collection_id);

-- 10. Functions for Triggers
CREATE OR REPLACE FUNCTION public.update_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
SECURITY DEFINER
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO public.user_profiles (id, email, full_name, role)
    VALUES (
        NEW.id, 
        NEW.email, 
        COALESCE(NEW.raw_user_meta_data->>'full_name', split_part(NEW.email, '@', 1)),
        COALESCE(NEW.raw_user_meta_data->>'role', 'free')::public.user_role
    );
    RETURN NEW;
END;
$$;

-- 11. Enable RLS
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_tools ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_tool_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_collections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.collection_items ENABLE ROW LEVEL SECURITY;

-- 12. RLS Policies

-- User Profiles - Pattern 1: Core user table
CREATE POLICY "users_manage_own_user_profiles"
ON public.user_profiles
FOR ALL
TO authenticated
USING (id = auth.uid())
WITH CHECK (id = auth.uid());

-- AI Tools - Pattern 4: Public read, admin write
CREATE POLICY "public_can_read_ai_tools"
ON public.ai_tools
FOR SELECT
TO public
USING (true);

CREATE POLICY "admins_manage_ai_tools"
ON public.ai_tools
FOR ALL
TO authenticated
USING (EXISTS (
    SELECT 1 FROM public.user_profiles up
    WHERE up.id = auth.uid() AND up.role = 'admin'
))
WITH CHECK (EXISTS (
    SELECT 1 FROM public.user_profiles up
    WHERE up.id = auth.uid() AND up.role = 'admin'
));

-- User Favorites - Pattern 2: Simple user ownership
CREATE POLICY "users_manage_own_favorites"
ON public.user_favorites
FOR ALL
TO authenticated
USING (user_id = auth.uid())
WITH CHECK (user_id = auth.uid());

-- AI Content - Pattern 4: Public read, authenticated write
CREATE POLICY "public_can_read_ai_content"
ON public.ai_content
FOR SELECT
TO public
USING (true);

CREATE POLICY "authenticated_users_create_content"
ON public.ai_content
FOR INSERT
TO authenticated
WITH CHECK (author_id = auth.uid());

CREATE POLICY "users_manage_own_content"
ON public.ai_content
FOR UPDATE
TO authenticated
USING (author_id = auth.uid())
WITH CHECK (author_id = auth.uid());

CREATE POLICY "users_delete_own_content"
ON public.ai_content
FOR DELETE
TO authenticated
USING (author_id = auth.uid());

-- AI Tool Reviews - Pattern 2: Simple user ownership
CREATE POLICY "users_manage_own_reviews"
ON public.ai_tool_reviews
FOR ALL
TO authenticated
USING (user_id = auth.uid())
WITH CHECK (user_id = auth.uid());

CREATE POLICY "public_can_read_reviews"
ON public.ai_tool_reviews
FOR SELECT
TO public
USING (true);

-- User Collections - Pattern 2: Simple user ownership
CREATE POLICY "users_manage_own_collections"
ON public.user_collections
FOR ALL
TO authenticated
USING (user_id = auth.uid())
WITH CHECK (user_id = auth.uid());

-- Collection Items - Pattern 7: Complex relationship
CREATE OR REPLACE FUNCTION public.can_manage_collection_items(collection_uuid UUID)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
SELECT EXISTS (
    SELECT 1 FROM public.user_collections uc
    WHERE uc.id = collection_uuid AND uc.user_id = auth.uid()
)
$$;

CREATE POLICY "users_manage_collection_items"
ON public.collection_items
FOR ALL
TO authenticated
USING (public.can_manage_collection_items(collection_id))
WITH CHECK (public.can_manage_collection_items(collection_id));

-- 13. Triggers
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

CREATE TRIGGER update_user_profiles_updated_at
    BEFORE UPDATE ON public.user_profiles
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

CREATE TRIGGER update_ai_tools_updated_at
    BEFORE UPDATE ON public.ai_tools
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

CREATE TRIGGER update_ai_content_updated_at
    BEFORE UPDATE ON public.ai_content
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

CREATE TRIGGER update_ai_tool_reviews_updated_at
    BEFORE UPDATE ON public.ai_tool_reviews
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

CREATE TRIGGER update_user_collections_updated_at
    BEFORE UPDATE ON public.user_collections
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

-- 14. Sample Data
DO $$
DECLARE
    admin_uuid UUID := gen_random_uuid();
    user_uuid UUID := gen_random_uuid();
    tool1_uuid UUID := gen_random_uuid();
    tool2_uuid UUID := gen_random_uuid();
    tool3_uuid UUID := gen_random_uuid();
    content1_uuid UUID := gen_random_uuid();
    collection1_uuid UUID := gen_random_uuid();
BEGIN
    -- Create auth users
    INSERT INTO auth.users (
        id, instance_id, aud, role, email, encrypted_password, email_confirmed_at,
        created_at, updated_at, raw_user_meta_data, raw_app_meta_data,
        is_sso_user, is_anonymous, confirmation_token, confirmation_sent_at,
        recovery_token, recovery_sent_at, email_change_token_new, email_change,
        email_change_sent_at, email_change_token_current, email_change_confirm_status,
        reauthentication_token, reauthentication_sent_at, phone, phone_change,
        phone_change_token, phone_change_sent_at
    ) VALUES
        (admin_uuid, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated',
         'admin@aihub.com', crypt('admin123', gen_salt('bf', 10)), now(), now(), now(),
         '{"full_name": "Admin User", "role": "admin"}'::jsonb, '{"provider": "email", "providers": ["email"]}'::jsonb,
         false, false, '', null, '', null, '', '', null, '', 0, '', null, null, '', '', null),
        (user_uuid, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated',
         'user@aihub.com', crypt('user123', gen_salt('bf', 10)), now(), now(), now(),
         '{"full_name": "John Doe"}'::jsonb, '{"provider": "email", "providers": ["email"]}'::jsonb,
         false, false, '', null, '', null, '', '', null, '', 0, '', null, null, '', '', null);

    -- AI Tools
    INSERT INTO public.ai_tools (id, name, description, category, pricing, website_url, logo_url, tags, features, is_featured, rating, review_count, popularity_score)
    VALUES
        (tool1_uuid, 'ChatGPT', 'Advanced conversational AI for writing, coding, and problem-solving', 'writing'::public.ai_tool_category, 'freemium'::public.ai_tool_pricing, 'https://chat.openai.com', '/images/tools/chatgpt.png', '{"writing", "coding", "conversation"}', '{"text generation", "code assistance", "Q&A"}', true, 4.8, 15420, 98),
        (tool2_uuid, 'Midjourney', 'AI-powered image generation from text descriptions', 'image'::public.ai_tool_category, 'paid'::public.ai_tool_pricing, 'https://midjourney.com', '/images/tools/midjourney.png', '{"art", "design", "creativity"}', '{"image generation", "art styles", "high quality"}', true, 4.7, 8930, 95),
        (tool3_uuid, 'GitHub Copilot', 'AI pair programmer that helps write code faster', 'coding'::public.ai_tool_category, 'paid'::public.ai_tool_pricing, 'https://github.com/features/copilot', '/images/tools/copilot.png', '{"coding", "productivity", "development"}', '{"code completion", "suggestions", "multiple languages"}', true, 4.6, 12580, 92);

    -- AI Content
    INSERT INTO public.ai_content (id, title, content, excerpt, content_type, author_id, is_featured, tags)
    VALUES
        (content1_uuid, 'Top 10 AI Tools That Will Replace Your Job (And How to Use Them Instead)', 'In this comprehensive guide, we explore the AI tools that are transforming various industries and how you can leverage them to enhance your career rather than fear replacement...', 'Discover how to work with AI tools instead of being replaced by them', 'article'::public.content_type, admin_uuid, true, '{"career", "productivity", "future"}');

    -- User Collections
    INSERT INTO public.user_collections (id, user_id, name, description, is_public)
    VALUES
        (collection1_uuid, user_uuid, 'My Writing Tools', 'Collection of AI tools for content creation and writing', false);

    -- User Favorites
    INSERT INTO public.user_favorites (user_id, ai_tool_id)
    VALUES
        (user_uuid, tool1_uuid),
        (user_uuid, tool3_uuid);

    -- Collection Items
    INSERT INTO public.collection_items (collection_id, ai_tool_id)
    VALUES
        (collection1_uuid, tool1_uuid);

    -- Reviews
    INSERT INTO public.ai_tool_reviews (ai_tool_id, user_id, rating, title, review_text, is_verified)
    VALUES
        (tool1_uuid, user_uuid, 5, 'Game changer for productivity', 'ChatGPT has completely transformed how I approach writing and coding tasks. Highly recommended!', true);

END $$;