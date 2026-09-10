import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { BlogPostItem } from '../../data/blogData';
import { getPostById, savePost, isAdminAuthenticated } from '../../services/blogService';
import { generateSlug, estimateReadingTime } from '../../utils/seoUtils';
import SeoAssistant from '../../components/admin/SeoAssistant';
import MediaManagerModal from '../../components/admin/MediaManagerModal';
import {
  ArrowLeft,
  Save,
  Image as ImageIcon,
  Plus,
  Trash2,
  Sparkles,
  Search,
  Globe,
  FileText,
  CheckCircle,
  HelpCircle
} from 'lucide-react';

export default function ArticleEditor() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isEditing = Boolean(id);

  const [activeTab, setActiveTab] = useState<'content' | 'seo'>('content');
  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);

  // Form State
  const [postData, setPostData] = useState<Partial<BlogPostItem>>({
    id: id || Date.now().toString(),
    title: '',
    slug: '',
    category: 'Alternance & Carrière',
    readTime: '5 min de lecture',
    date: new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' }),
    author: 'Équipe Pédagogique',
    authorRole: 'Elixir Business School',
    excerpt: '',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
    imageAlt: 'Étudiants d Elixir Business School Toulouse',
    targetKeyword: '',
    metaTitle: '',
    metaDescription: '',
    canonicalUrl: '',
    ogTitle: '',
    ogDescription: '',
    content: {
      intro: '',
      sections: [
        {
          title: '1. Titre de la section principale (H2)',
          text: 'Rédigez ici le premier paragraphe détaillé de votre section.',
          bullets: ['Point clé 1', 'Point clé 2'],
        },
      ],
      conclusion: '',
    },
  });

  useEffect(() => {
    if (!isAdminAuthenticated()) {
      navigate('/admin');
      return;
    }
    if (id) {
      const existing = getPostById(id);
      if (existing) {
        setPostData(existing);
      } else {
        alert('Article non trouvé.');
        navigate('/admin/dashboard');
      }
    }
  }, [id, navigate]);

  // Handle Title change & Auto Slug
  const handleTitleChange = (newTitle: string) => {
    setPostData((prev) => {
      const autoSlug = prev.slug && prev.slug !== generateSlug(prev.title || '') ? prev.slug : generateSlug(newTitle);
      const autoMetaTitle = prev.metaTitle && prev.metaTitle !== prev.title ? prev.metaTitle : newTitle;
      const updated = {
        ...prev,
        title: newTitle,
        slug: autoSlug,
        metaTitle: autoMetaTitle,
      };
      updated.readTime = estimateReadingTime(updated);
      return updated;
    });
  };

  // Section Handlers
  const handleAddSection = () => {
    setPostData((prev) => ({
      ...prev,
      content: {
        ...prev.content!,
        sections: [
          ...(prev.content?.sections || []),
          {
            title: `Nouvelle section ${ (prev.content?.sections?.length || 0) + 1 }`,
            text: '',
          },
        ],
      },
    }));
  };

  const handleUpdateSection = (index: number, field: 'title' | 'text', value: string) => {
    setPostData((prev) => {
      const sections = [...(prev.content?.sections || [])];
      sections[index] = { ...sections[index], [field]: value };
      const updated = {
        ...prev,
        content: {
          ...prev.content!,
          sections,
        },
      };
      updated.readTime = estimateReadingTime(updated);
      return updated;
    });
  };

  const handleDeleteSection = (index: number) => {
    setPostData((prev) => {
      const sections = [...(prev.content?.sections || [])];
      sections.splice(index, 1);
      const updated = {
        ...prev,
        content: {
          ...prev.content!,
          sections,
        },
      };
      updated.readTime = estimateReadingTime(updated);
      return updated;
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postData.title?.trim()) {
      alert('Veuillez renseigner un titre pour l\'article.');
      return;
    }
    if (!postData.slug?.trim()) {
      alert('Veuillez renseigner un slug URL.');
      return;
    }

    const fullPost: BlogPostItem = {
      id: postData.id || Date.now().toString(),
      slug: generateSlug(postData.slug),
      title: postData.title,
      category: postData.category || 'Alternance & Carrière',
      readTime: estimateReadingTime(postData),
      date: postData.date || new Date().toLocaleDateString('fr-FR'),
      author: postData.author || 'Elixir Business School',
      authorRole: postData.authorRole || 'Équipe Pédagogique',
      excerpt: postData.excerpt || '',
      image: postData.image || '',
      imageAlt: postData.imageAlt || postData.title,
      targetKeyword: postData.targetKeyword,
      metaTitle: postData.metaTitle || postData.title,
      metaDescription: postData.metaDescription || postData.excerpt,
      canonicalUrl: postData.canonicalUrl,
      ogTitle: postData.ogTitle || postData.metaTitle || postData.title,
      ogDescription: postData.ogDescription || postData.metaDescription || postData.excerpt,
      content: {
        intro: postData.content?.intro || '',
        sections: postData.content?.sections || [],
        conclusion: postData.content?.conclusion || '',
      },
    };

    savePost(fullPost);
    navigate('/admin/dashboard');
  };

  return (
    <main className="min-h-screen pt-28 pb-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              to="/admin/dashboard"
              className="p-3 bg-white border border-gray-200 hover:border-brand-primary rounded-2xl text-brand-primary shadow-sm hover:shadow transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-accent bg-brand-primary px-2.5 py-0.5 rounded-full">
                {isEditing ? 'Édition Article' : 'Nouvel Article SEO'}
              </span>
              <h1 className="text-2xl font-black text-brand-primary mt-1">
                {postData.title || 'Nouvel Article'}
              </h1>
            </div>
          </div>

          <button
            onClick={handleSave}
            className="w-full sm:w-auto px-8 py-3.5 bg-brand-primary hover:bg-brand-primary-dark text-white font-black text-sm uppercase tracking-wider rounded-2xl shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
          >
            <Save className="w-4 h-4 text-brand-accent" />
            <span>Enregistrer & Publier</span>
          </button>
        </div>

        {/* Form & SEO Assistant Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Editor Form (8 cols) */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-6">
            {/* Tab Navigation */}
            <div className="bg-white p-2 rounded-2xl border border-gray-200 shadow-sm flex gap-2">
              <button
                type="button"
                onClick={() => setActiveTab('content')}
                className={`flex-1 py-3 text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'content'
                    ? 'bg-brand-primary text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <FileText className="w-4 h-4" /> Contenu de l'article
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('seo')}
                className={`flex-1 py-3 text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'seo'
                    ? 'bg-brand-primary text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Globe className="w-4 h-4 text-brand-accent" /> Balises & Méta SEO
              </button>
            </div>

            {/* TAB 1: ARTICLE CONTENT & STRUCTURE */}
            {activeTab === 'content' && (
              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
                {/* Title */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                    Titre Principal (H1) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Pourquoi choisir l'alternance en école de commerce à Toulouse ?"
                    value={postData.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    className="w-full px-4 py-3.5 border border-gray-300 rounded-2xl font-bold text-base focus:ring-2 focus:ring-brand-secondary focus:outline-none"
                  />
                </div>

                {/* Category, Author, Date */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Catégorie
                    </label>
                    <select
                      value={postData.category}
                      onChange={(e) => setPostData({ ...postData, category: e.target.value })}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-brand-secondary focus:outline-none"
                    >
                      <option value="Alternance & Carrière">Alternance & Carrière</option>
                      <option value="Formations & BTS">Formations & BTS</option>
                      <option value="Marketing & Innovation">Marketing & Innovation</option>
                      <option value="Conseils Recrutement">Conseils Recrutement</option>
                      <option value="Vie Étudiante Toulouse">Vie Étudiante Toulouse</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Auteur
                    </label>
                    <input
                      type="text"
                      value={postData.author}
                      onChange={(e) => setPostData({ ...postData, author: e.target.value })}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-xl text-xs font-medium focus:ring-2 focus:ring-brand-secondary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Date de Publication
                    </label>
                    <input
                      type="text"
                      value={postData.date}
                      onChange={(e) => setPostData({ ...postData, date: e.target.value })}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-xl text-xs font-medium focus:ring-2 focus:ring-brand-secondary focus:outline-none"
                    />
                  </div>
                </div>

                {/* Image Cover Selector */}
                <div className="space-y-2 border-t border-b border-gray-100 py-6">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                      Image de Couverture & Balise Alt SEO
                    </label>
                    <button
                      type="button"
                      onClick={() => setIsMediaModalOpen(true)}
                      className="px-4 py-2 bg-brand-primary/5 hover:bg-brand-primary text-brand-primary hover:text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
                    >
                      <ImageIcon className="w-4 h-4" /> Choisir / Téléverser une Photo
                    </button>
                  </div>

                  {postData.image ? (
                    <div className="relative rounded-2xl overflow-hidden border border-gray-200 group">
                      <img
                        src={postData.image}
                        alt={postData.imageAlt || ''}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 text-white text-xs text-center">
                        <div>
                          <p className="font-bold">Balise Alt SEO :</p>
                          <p className="italic font-mono mt-1">"{postData.imageAlt || 'Aucun alt défini'}"</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      onClick={() => setIsMediaModalOpen(true)}
                      className="border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center cursor-pointer hover:border-brand-secondary text-gray-500 text-xs"
                    >
                      Cliquez pour sélectionner l'image principale de l'article
                    </div>
                  )}
                </div>

                {/* Excerpt */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                    Chapeau / Extrait de l'article (Résumé pour cartes et Google)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Bref résumé accrocheur de 2 à 3 phrases..."
                    value={postData.excerpt}
                    onChange={(e) => setPostData({ ...postData, excerpt: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl text-xs focus:ring-2 focus:ring-brand-secondary focus:outline-none"
                  />
                </div>

                {/* Intro */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                    Paragraphe d'Introduction
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Introduction développée qui pose la problématique et contient vos mots-clés..."
                    value={postData.content?.intro}
                    onChange={(e) =>
                      setPostData({
                        ...postData,
                        content: { ...postData.content!, intro: e.target.value },
                      })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl text-xs focus:ring-2 focus:ring-brand-secondary focus:outline-none"
                  />
                </div>

                {/* Sections H2 */}
                <div className="space-y-6 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <h3 className="font-extrabold text-sm uppercase tracking-wider text-brand-primary">
                      Sections Principales (H2)
                    </h3>
                    <button
                      type="button"
                      onClick={handleAddSection}
                      className="px-3.5 py-1.5 bg-brand-secondary/10 text-brand-secondary hover:bg-brand-secondary hover:text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1"
                    >
                      <Plus className="w-4 h-4" /> Ajouter une Section (H2)
                    </button>
                  </div>

                  {(postData.content?.sections || []).map((sec, idx) => (
                    <div key={idx} className="p-5 rounded-2xl border border-gray-200 bg-gray-50/50 space-y-4 relative">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-brand-primary bg-white px-3 py-1 rounded-lg border">
                          Section H2 #{idx + 1}
                        </span>
                        {(postData.content?.sections?.length || 0) > 1 && (
                          <button
                            type="button"
                            onClick={() => handleDeleteSection(idx)}
                            className="p-1.5 text-rose-500 hover:bg-rose-100 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>

                      <input
                        type="text"
                        placeholder="Titre H2 de la section..."
                        value={sec.title}
                        onChange={(e) => handleUpdateSection(idx, 'title', e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-xl font-bold text-sm bg-white focus:ring-2 focus:ring-brand-secondary focus:outline-none"
                      />

                      <textarea
                        rows={4}
                        placeholder="Paragraphe explicatif de la section H2..."
                        value={sec.text}
                        onChange={(e) => handleUpdateSection(idx, 'text', e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-xs bg-white focus:ring-2 focus:ring-brand-secondary focus:outline-none"
                      />
                    </div>
                  ))}
                </div>

                {/* Conclusion */}
                <div className="space-y-2 pt-4 border-t border-gray-100">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                    Conclusion & Appel à l'action
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Synthèse et invitation à découvrir les formations d'Elixir Business School..."
                    value={postData.content?.conclusion}
                    onChange={(e) =>
                      setPostData({
                        ...postData,
                        content: { ...postData.content!, conclusion: e.target.value },
                      })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl text-xs focus:ring-2 focus:ring-brand-secondary focus:outline-none"
                  />
                </div>
              </div>
            )}

            {/* TAB 2: META SEO & SOCIAL MEDIA */}
            {activeTab === 'seo' && (
              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
                <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                  <p>
                    Ces métadonnées sont directement injectées dans le code HTML (`head`) pour indexer parfaitement votre article sur Google et maximiser le taux de clic (CTR).
                  </p>
                </div>

                {/* Target Keyword */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-primary">
                    Mot-clé Principal Cible (SEO Target Keyword)
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: alternance toulouse ou bts mco"
                    value={postData.targetKeyword || ''}
                    onChange={(e) => setPostData({ ...postData, targetKeyword: e.target.value })}
                    className="w-full px-4 py-3 border border-brand-accent/40 rounded-2xl text-xs font-bold focus:ring-2 focus:ring-brand-accent focus:outline-none bg-amber-50/20"
                  />
                  <p className="text-[11px] text-gray-500">
                    L'assistant SEO analysera la présence de ce mot-clé dans votre titre, votre méta description et votre contenu.
                  </p>
                </div>

                {/* Slug */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                    URL de l'article (Slug URL)
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-gray-400 bg-gray-100 px-3 py-3 rounded-xl">
                      /blog/
                    </span>
                    <input
                      type="text"
                      placeholder="pourquoi-choisir-alternance-ecole-de-commerce-toulouse"
                      value={postData.slug}
                      onChange={(e) => setPostData({ ...postData, slug: generateSlug(e.target.value) })}
                      className="flex-grow px-4 py-3 border border-gray-300 rounded-xl text-xs font-mono focus:ring-2 focus:ring-brand-secondary focus:outline-none"
                    />
                  </div>
                </div>

                {/* Meta Title */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                      Meta Titre Google (`&lt;title&gt;`)
                    </label>
                    <span className={`text-xs font-bold ${
                      (postData.metaTitle?.length || 0) >= 50 && (postData.metaTitle?.length || 0) <= 60
                        ? 'text-emerald-600'
                        : 'text-amber-600'
                    }`}>
                      {postData.metaTitle?.length || 0} / 60 car.
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Titre optimisé pour les résultats de recherche (50-60 car.)"
                    value={postData.metaTitle}
                    onChange={(e) => setPostData({ ...postData, metaTitle: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl text-xs font-medium focus:ring-2 focus:ring-brand-secondary focus:outline-none"
                  />
                </div>

                {/* Meta Description */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                      Meta Description (`&lt;meta name="description"&gt;`)
                    </label>
                    <span className={`text-xs font-bold ${
                      (postData.metaDescription?.length || 0) >= 120 && (postData.metaDescription?.length || 0) <= 160
                        ? 'text-emerald-600'
                        : 'text-amber-600'
                    }`}>
                      {postData.metaDescription?.length || 0} / 160 car.
                    </span>
                  </div>
                  <textarea
                    rows={3}
                    placeholder="Description incitative qui apparaîtra sous le titre dans Google (120-160 car.)..."
                    value={postData.metaDescription}
                    onChange={(e) => setPostData({ ...postData, metaDescription: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl text-xs focus:ring-2 focus:ring-brand-secondary focus:outline-none"
                  />
                </div>

                {/* Open Graph Titles */}
                <div className="pt-4 border-t border-gray-100 space-y-4">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-brand-primary">
                    Partage Réseaux Sociaux (Open Graph)
                  </h4>
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Titre de partage (OG Title)"
                      value={postData.ogTitle}
                      onChange={(e) => setPostData({ ...postData, ogTitle: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-xs focus:ring-2 focus:ring-brand-secondary focus:outline-none"
                    />
                    <textarea
                      rows={2}
                      placeholder="Description de partage (OG Description)"
                      value={postData.ogDescription}
                      onChange={(e) => setPostData({ ...postData, ogDescription: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-xs focus:ring-2 focus:ring-brand-secondary focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Interactive Real-Time SEO Assistant (4 cols) */}
          <div className="lg:col-span-5 xl:col-span-4">
            <SeoAssistant post={postData} />
          </div>
        </div>
      </div>

      {/* Media Manager Modal */}
      <MediaManagerModal
        isOpen={isMediaModalOpen}
        onClose={() => setIsMediaModalOpen(false)}
        currentImage={postData.image || ''}
        currentAlt={postData.imageAlt || ''}
        onSelectMedia={(url, alt) => setPostData({ ...postData, image: url, imageAlt: alt })}
      />
    </main>
  );
}

