import { BlogPostItem, BLOG_POSTS } from '../data/blogData';

const STORAGE_KEY = 'elixir_blog_posts_v1';
const AUTH_KEY = 'elixir_admin_auth_session';
const PASS_KEY = 'elixir_admin_password_v1';

const DEFAULT_ADMIN_PASSWORD = 'elixir2026';

/**
 * Retrieve all blog posts from dynamic storage or fallback to initial data
 */
export function getStoredPosts(): BlogPostItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      // Initialize with default posts
      localStorage.setItem(STORAGE_KEY, JSON.stringify(BLOG_POSTS));
      return BLOG_POSTS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : BLOG_POSTS;
  } catch (error) {
    console.error('Error loading blog posts from localStorage:', error);
    return BLOG_POSTS;
  }
}

/**
 * Find a post by its ID
 */
export function getPostById(id: string): BlogPostItem | undefined {
  const posts = getStoredPosts();
  return posts.find((p) => p.id === id);
}

/**
 * Find a post by its slug
 */
export function getPostBySlug(slug: string): BlogPostItem | undefined {
  const posts = getStoredPosts();
  return posts.find((p) => p.slug === slug);
}

/**
 * Save (create or update) a post
 */
export function savePost(post: BlogPostItem): BlogPostItem {
  const posts = getStoredPosts();
  const existingIndex = posts.findIndex((p) => p.id === post.id);

  const updatedPost: BlogPostItem = {
    ...post,
    updatedAt: new Date().toISOString(),
  };

  if (existingIndex >= 0) {
    posts[existingIndex] = updatedPost;
  } else {
    posts.unshift(updatedPost);
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  return updatedPost;
}

/**
 * Delete a post by ID
 */
export function deletePost(id: string): boolean {
  const posts = getStoredPosts();
  const filtered = posts.filter((p) => p.id !== id);
  if (filtered.length !== posts.length) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    return true;
  }
  return false;
}

/**
 * Reset posts to default initial dataset
 */
export function resetPostsToDefault(): BlogPostItem[] {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(BLOG_POSTS));
  return BLOG_POSTS;
}

/* --- ADMIN AUTHENTICATION HELPERS --- */

export function isAdminAuthenticated(): boolean {
  return localStorage.getItem(AUTH_KEY) === 'true';
}

export function getAdminPassword(): string {
  return localStorage.getItem(PASS_KEY) || DEFAULT_ADMIN_PASSWORD;
}

export function setAdminPassword(newPass: string): void {
  localStorage.setItem(PASS_KEY, newPass);
}

export function loginAdmin(passwordInput: string): boolean {
  const currentPass = getAdminPassword();
  if (passwordInput.trim() === currentPass) {
    localStorage.setItem(AUTH_KEY, 'true');
    return true;
  }
  return false;
}

export function logoutAdmin(): void {
  localStorage.removeItem(AUTH_KEY);
}
