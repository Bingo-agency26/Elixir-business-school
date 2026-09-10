import { BlogPostItem } from '../data/blogData';

export interface SeoCheckItem {
  id: string;
  label: string;
  status: 'success' | 'warning' | 'error';
  message: string;
  score: number;
  maxScore: number;
}

export interface SeoAnalysis {
  totalScore: number;
  statusLabel: string;
  statusColor: string;
  wordCount: number;
  checks: SeoCheckItem[];
}

/**
 * Generate a clean SEO-friendly slug from text
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-'); // Replace multiple hyphens
}

/**
 * Calculate total word count for an article
 */
export function countWords(post: Partial<BlogPostItem>): number {
  let text = `${post.title || ''} ${post.excerpt || ''} ${post.content?.intro || ''} ${post.content?.conclusion || ''}`;
  if (post.content?.sections) {
    post.content.sections.forEach((sec) => {
      text += ` ${sec.title || ''} ${sec.text || ''}`;
      if (sec.bullets) {
        text += ` ${sec.bullets.join(' ')}`;
      }
    });
  }
  return text.trim().split(/\s+/).filter(Boolean).length;
}

/**
 * Estimate reading time based on 200 words/minute
 */
export function estimateReadingTime(post: Partial<BlogPostItem>): string {
  const words = countWords(post);
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min de lecture`;
}

/**
 * Full SEO Analysis and Score calculation (0 - 100)
 */
export function analyzeArticleSeo(post: Partial<BlogPostItem>): SeoAnalysis {
  const checks: SeoCheckItem[] = [];

  const title = post.title || '';
  const metaTitle = post.metaTitle || title;
  const metaDescription = post.metaDescription || post.excerpt || '';
  const keyword = (post.targetKeyword || '').trim().toLowerCase();
  const slug = post.slug || '';
  const imageAlt = post.imageAlt || '';
  const wordCount = countWords(post);

  // 1. Meta Title Length Check (15 pts)
  const metaTitleLen = metaTitle.length;
  if (metaTitleLen >= 50 && metaTitleLen <= 60) {
    checks.push({
      id: 'meta-title',
      label: 'Meta Titre (Titre Google)',
      status: 'success',
      message: `Longueur optimale (${metaTitleLen} car.). Affichage parfait dans les SERP.`,
      score: 15,
      maxScore: 15,
    });
  } else if (metaTitleLen >= 40 && metaTitleLen <= 70) {
    checks.push({
      id: 'meta-title',
      label: 'Meta Titre (Titre Google)',
      status: 'warning',
      message: `Longueur acceptable (${metaTitleLen} car.). Idéalement entre 50 et 60 caractères.`,
      score: 10,
      maxScore: 15,
    });
  } else {
    checks.push({
      id: 'meta-title',
      label: 'Meta Titre (Titre Google)',
      status: 'error',
      message: metaTitleLen < 40 ? 'Méta titre trop court (min. 40 car.).' : 'Méta titre trop long (risque de coupure sur Google).',
      score: 5,
      maxScore: 15,
    });
  }

  // 2. Meta Description Length Check (15 pts)
  const metaDescLen = metaDescription.length;
  if (metaDescLen >= 120 && metaDescLen <= 160) {
    checks.push({
      id: 'meta-desc',
      label: 'Meta Description',
      status: 'success',
      message: `Longueur idéale (${metaDescLen} car.) pour l'incitation au clic.`,
      score: 15,
      maxScore: 15,
    });
  } else if (metaDescLen >= 90 && metaDescLen <= 170) {
    checks.push({
      id: 'meta-desc',
      label: 'Meta Description',
      status: 'warning',
      message: `Longueur moyenne (${metaDescLen} car.). Visez entre 120 et 160 caractères.`,
      score: 10,
      maxScore: 15,
    });
  } else {
    checks.push({
      id: 'meta-desc',
      label: 'Meta Description',
      status: 'error',
      message: 'Méta description trop courte ou manquante (recommandé: 120-160 car.).',
      score: 3,
      maxScore: 15,
    });
  }

  // 3. Target Keyword in Title (15 pts)
  if (keyword) {
    if (title.toLowerCase().includes(keyword) || metaTitle.toLowerCase().includes(keyword)) {
      checks.push({
        id: 'keyword-title',
        label: 'Mot-clé dans le Titre',
        status: 'success',
        message: `Le mot-clé "${keyword}" figure bien dans le titre principal.`,
        score: 15,
        maxScore: 15,
      });
    } else {
      checks.push({
        id: 'keyword-title',
        label: 'Mot-clé dans le Titre',
        status: 'error',
        message: `Le mot-clé principal "${keyword}" devrait figurer dans le titre.`,
        score: 0,
        maxScore: 15,
      });
    }
  } else {
    checks.push({
      id: 'keyword-title',
      label: 'Mot-clé principal non défini',
      status: 'warning',
      message: 'Définissez un mot-clé cible pour mesurer la pertinence SEO.',
      score: 5,
      maxScore: 15,
    });
  }

  // 4. Target Keyword in Meta Description (10 pts)
  if (keyword) {
    if (metaDescription.toLowerCase().includes(keyword)) {
      checks.push({
        id: 'keyword-desc',
        label: 'Mot-clé dans Meta Description',
        status: 'success',
        message: `Mot-clé "${keyword}" présent dans la méta description.`,
        score: 10,
        maxScore: 10,
      });
    } else {
      checks.push({
        id: 'keyword-desc',
        label: 'Mot-clé dans Meta Description',
        status: 'warning',
        message: `Intégrez le mot-clé "${keyword}" dans la méta description.`,
        score: 3,
        maxScore: 10,
      });
    }
  } else {
    checks.push({
      id: 'keyword-desc',
      label: 'Mot-clé dans Meta Description',
      status: 'warning',
      message: 'Aucun mot-clé cible spécifié.',
      score: 3,
      maxScore: 10,
    });
  }

  // 5. Image Alt Text Check (15 pts)
  if (imageAlt.trim().length >= 5) {
    checks.push({
      id: 'image-alt',
      label: 'Balise Image Alt',
      status: 'success',
      message: `Texte alternatif présent ("${imageAlt}"). Bon pour l'accessibilité et Google Images.`,
      score: 15,
      maxScore: 15,
    });
  } else {
    checks.push({
      id: 'image-alt',
      label: 'Balise Image Alt',
      status: 'error',
      message: 'Texte alternatif d\'image (Alt Text) manquant. Indispensable pour le référencement d\'images.',
      score: 0,
      maxScore: 15,
    });
  }

  // 6. Clean URL Slug Check (10 pts)
  const isCleanSlug = /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);
  if (slug && isCleanSlug) {
    checks.push({
      id: 'slug-format',
      label: 'Format de l\'URL (Slug)',
      status: 'success',
      message: `URL optimisée: /blog/${slug}`,
      score: 10,
      maxScore: 10,
    });
  } else {
    checks.push({
      id: 'slug-format',
      label: 'Format de l\'URL (Slug)',
      status: 'error',
      message: 'Le slug doit contenir uniquement des lettres minuscules, chiffres et tirets.',
      score: 2,
      maxScore: 10,
    });
  }

  // 7. Word Count & Content Depth Check (20 pts)
  if (wordCount >= 500) {
    checks.push({
      id: 'word-count',
      label: 'Profondeur du Contenu',
      status: 'success',
      message: `Contenu riche et détaillé (${wordCount} mots). Recommandé pour positionner l'article.`,
      score: 20,
      maxScore: 20,
    });
  } else if (wordCount >= 300) {
    checks.push({
      id: 'word-count',
      label: 'Profondeur du Contenu',
      status: 'warning',
      message: `Longueur adéquate (${wordCount} mots). Visez 500+ mots pour maximiser l'autorité.`,
      score: 14,
      maxScore: 20,
    });
  } else {
    checks.push({
      id: 'word-count',
      label: 'Profondeur du Contenu',
      status: 'error',
      message: `Contenu trop court (${wordCount} mots). Google favorise les articles d'au moins 300 à 500 mots.`,
      score: 5,
      maxScore: 20,
    });
  }

  const totalScore = checks.reduce((sum, item) => sum + item.score, 0);

  let statusLabel = 'Excellent';
  let statusColor = 'text-green-600 bg-green-50 border-green-200';

  if (totalScore < 60) {
    statusLabel = 'À Optimiser';
    statusColor = 'text-red-600 bg-red-50 border-red-200';
  } else if (totalScore < 85) {
    statusLabel = 'Bon';
    statusColor = 'text-amber-600 bg-amber-50 border-amber-200';
  }

  return {
    totalScore,
    statusLabel,
    statusColor,
    wordCount,
    checks,
  };
}

/**
 * Generate JSON-LD Article Schema for Google Rich Snippets
 */
export function generateJsonLdSchema(post: BlogPostItem, siteUrl = 'https://elixirbusiness-school.fr'): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/#/blog/${post.slug}`,
    },
    headline: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    image: [post.image],
    datePublished: post.date,
    dateModified: post.updatedAt || post.date,
    author: {
      '@type': 'Organization',
      name: post.author || 'Elixir Business School',
    },
    publisher: {
      '@type': 'EducationalOrganization',
      name: 'Elixir Business School',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/Logo.png`,
      },
    },
    keywords: post.keywords || post.targetKeyword || post.category,
  };
}

