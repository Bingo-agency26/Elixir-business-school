import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  BlogPostItem
} from '../../data/blogData';
import {
  getStoredPosts,
  deletePost,
  resetPostsToDefault,
  isAdminAuthenticated,
  logoutAdmin,
  getAdminPassword,
  setAdminPassword
} from '../../services/blogService';
import { analyzeArticleSeo } from '../../utils/seoUtils';
import {
  Plus,
  Search,
  Edit3,
  Trash2,
  ExternalLink,
  RotateCcw,
  LogOut,
  Key,
  CheckCircle,
  FileText,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  Eye
} from 'lucide-react';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPostItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [passSuccessMessage, setPassSuccessMessage] = useState(false);

  useEffect(() => {
    if (!isAdminAuthenticated()) {
      navigate('/admin');
      return;
    }
    setPosts(getStoredPosts());
  }, [navigate]);

  const handleLogout = () => {
    logoutAdmin();
    navigate('/admin');
  };

  const handleDelete = (id: string, title: string) => {
    if (confirm(`Êtes-vous sûr de vouloir supprimer l'article :\n"${title}" ?`)) {
      if (deletePost(id)) {
        setPosts(getStoredPosts());
      }
    }
  };

  const handleResetDefaults = () => {
    if (confirm('Voulez-vous réinitialiser le catalogue d\'articles aux articles par défaut ?')) {
      const reset = resetPostsToDefault();
      setPosts(reset);
    }
  };

  const handleSavePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword.trim().length >= 4) {
      setAdminPassword(newPassword.trim());
      setPassSuccessMessage(true);
      setTimeout(() => {
        setPassSuccessMessage(false);
        setShowPasswordModal(false);
        setNewPassword('');
      }, 1500);
    } else {
      alert('Le mot de passe doit contenir au moins 4 caractères.');
    }
  };

  const categories = Array.from(new Set(posts.map((p) => p.category)));

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (post.targetKeyword && post.targetKeyword.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Calculate Average SEO Score
  const avgSeoScore = Math.round(
    posts.reduce((acc, p) => acc + analyzeArticleSeo(p).totalScore, 0) / (posts.length || 1)
  );

  return (
    <main className="min-h-screen pt-28 pb-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        {/* Top Header Bar */}
        <div className="bg-brand-primary text-white rounded-3xl p-8 border-2 border-brand-accent/20 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="bg-brand-accent text-brand-primary text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                Espace Admin
              </span>
              <span className="text-xs text-amber-100/70 font-semibold">Elixir Business School</span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">Gestionnaire des Articles & SEO Blog</h1>
            <p className="text-sm text-gray-300 font-normal">
              Gérez vos articles, vos balises SEO, vos métadonnées et vos images en temps réel.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setShowPasswordModal(true)}
              className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold transition-all border border-white/20 flex items-center gap-1.5"
            >
              <Key className="w-3.5 h-3.5 text-brand-accent" /> Changer Mot de Passe
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2.5 bg-rose-500/20 hover:bg-rose-500/30 text-rose-200 rounded-xl text-xs font-bold transition-all border border-rose-400/30 flex items-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" /> Déconnexion
            </button>
          </div>
        </div>

        {/* Global Key Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-primary/5 text-brand-primary flex items-center justify-center font-bold">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-brand-primary">{posts.length}</div>
              <div className="text-xs font-semibold text-gray-500">Articles en ligne</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-emerald-600">{avgSeoScore} <span className="text-xs text-gray-400 font-normal">/ 100</span></div>
              <div className="text-xs font-semibold text-gray-500">Score SEO Moyen</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-blue-600">{categories.length}</div>
              <div className="text-xs font-semibold text-gray-500">Catégories d'articles</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-amber-600">100%</div>
              <div className="text-xs font-semibold text-gray-500">Conforme Schema.org</div>
            </div>
          </div>
        </div>

        {/* Action Toolbar & Filters */}
        <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search & Category Filter */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-gray-400 absolute left-4 top-3.5" />
              <input
                type="text"
                placeholder="Rechercher par titre, mot-clé..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs font-medium border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-secondary/20 focus:border-brand-secondary"
              />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-secondary/20 bg-white"
            >
              <option value="all">Toutes les catégories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Create Button & Reset */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <button
              onClick={handleResetDefaults}
              title="Réinitialiser les articles initiaux"
              className="p-3 text-gray-500 hover:text-brand-primary bg-gray-100 hover:bg-gray-200 rounded-xl transition-all"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <Link
              to="/admin/editor"
              className="px-6 py-3 bg-brand-accent hover:bg-white text-brand-primary border border-brand-accent font-black text-xs uppercase tracking-wider rounded-xl shadow-lg hover:scale-105 transition-all flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>Créer un Article SEO</span>
            </Link>
          </div>
        </div>

        {/* Articles Table */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/80 border-b border-gray-100 text-[11px] uppercase font-bold text-gray-500 tracking-wider">
                  <th className="py-4 px-6">Article</th>
                  <th className="py-4 px-4">Catégorie & Auteur</th>
                  <th className="py-4 px-4">Mot-clé Cible</th>
                  <th className="py-4 px-4 text-center">Score SEO</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {filteredPosts.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-12 text-center text-gray-400">
                      Aucun article trouvé. Cliquez sur "Créer un Article SEO" pour publier votre premier contenu !
                    </td>
                  </tr>
                ) : (
                  filteredPosts.map((post) => {
                    const seo = analyzeArticleSeo(post);
                    return (
                      <tr key={post.id} className="hover:bg-gray-50/60 transition-colors group">
                        {/* Title & Image */}
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-4">
                            <img
                              src={post.image}
                              alt={post.imageAlt || post.title}
                              className="w-14 h-14 rounded-2xl object-cover border border-gray-200 shadow-sm flex-shrink-0"
                            />
                            <div className="space-y-1">
                              <span className="font-extrabold text-brand-primary line-clamp-1 block group-hover:text-brand-secondary transition-colors">
                                {post.title}
                              </span>
                              <span className="text-xs text-gray-400 font-mono block">/blog/{post.slug}</span>
                            </div>
                          </div>
                        </td>

                        {/* Category & Author */}
                        <td className="py-4 px-4">
                          <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 mb-1">
                            {post.category}
                          </span>
                          <span className="text-xs text-gray-500 block">{post.author}</span>
                        </td>

                        {/* Keyword */}
                        <td className="py-4 px-4">
                          {post.targetKeyword ? (
                            <span className="text-xs font-mono bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded-md">
                              {post.targetKeyword}
                            </span>
                          ) : (
                            <span className="text-xs text-gray-400 italic">Non spécifié</span>
                          )}
                        </td>

                        {/* SEO Score Badge */}
                        <td className="py-4 px-4 text-center">
                          <div className="inline-flex flex-col items-center">
                            <span className={`px-3 py-1 rounded-full text-xs font-black border ${seo.statusColor}`}>
                              {seo.totalScore} / 100
                            </span>
                            <span className="text-[10px] text-gray-400 mt-1 font-medium">{seo.wordCount} mots</span>
                          </div>
                        </td>

                        {/* Actions */}
                        <td className="py-4 px-6 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Link
                              to={`/blog/${post.slug}`}
                              target="_blank"
                              title="Voir sur le site public"
                              className="p-2 text-gray-400 hover:text-brand-secondary hover:bg-brand-secondary-soft/50 rounded-xl transition-all"
                            >
                              <Eye className="w-4 h-4" />
                            </Link>
                            <Link
                              to={`/admin/editor/${post.id}`}
                              title="Éditer l'article et le SEO"
                              className="p-2 text-brand-primary hover:text-brand-secondary bg-brand-primary/5 hover:bg-brand-primary/10 rounded-xl font-bold transition-all flex items-center gap-1 text-xs"
                            >
                              <Edit3 className="w-4 h-4" /> Éditer
                            </Link>
                            <button
                              onClick={() => handleDelete(post.id, post.title)}
                              title="Supprimer l'article"
                              className="p-2 text-rose-500 hover:bg-rose-50 rounded-xl transition-all"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Change Password Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full border border-gray-200 shadow-2xl space-y-6">
            <h3 className="text-xl font-extrabold text-brand-primary">Changer le mot de passe Admin</h3>
            <form onSubmit={handleSavePassword} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Nouveau mot de passe</label>
                <input
                  type="password"
                  required
                  placeholder="Minimum 4 caractères"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-4 py-3 border rounded-xl text-sm focus:ring-2 focus:ring-brand-secondary focus:outline-none"
                />
              </div>
              {passSuccessMessage && (
                <div className="p-3 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-xl flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> Mot de passe mis à jour avec succès !
                </div>
              )}
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowPasswordModal(false)}
                  className="px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-xl"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-brand-primary text-white text-xs font-bold rounded-xl hover:bg-brand-primary-dark"
                >
                  Enregistrer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
