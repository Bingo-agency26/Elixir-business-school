import React, { useState } from 'react';
import { BlogPostItem } from '../../data/blogData';
import { analyzeArticleSeo } from '../../utils/seoUtils';
import { CheckCircle2, AlertTriangle, XCircle, Search, Share2, HelpCircle } from 'lucide-react';

interface SeoAssistantProps {
  post: Partial<BlogPostItem>;
}

export default function SeoAssistant({ post }: SeoAssistantProps) {
  const [activeTab, setActiveTab] = useState<'checklist' | 'serp' | 'social'>('checklist');
  const analysis = analyzeArticleSeo(post);

  const metaTitle = post.metaTitle || post.title || 'Titre de l\'article non défini';
  const metaDescription = post.metaDescription || post.excerpt || 'Saisissez une méta description attrayante pour susciter des clics sur Google...';
  const slug = post.slug || 'slug-article';
  const displayUrl = `https://elixirbusiness-school.fr › blog › ${slug}`;

  return (
    <div className="bg-white rounded-3xl border-2 border-brand-primary/10 shadow-xl overflow-hidden sticky top-8">
      {/* Header with SEO Score */}
      <div className="bg-brand-primary text-white p-6 border-b border-brand-accent/20">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h3 className="font-extrabold text-lg text-white">Assistant & Score SEO</h3>
            <span className="text-xs bg-brand-accent/20 text-brand-accent px-2 py-0.5 rounded-full font-bold">Temps réel</span>
          </div>
          <span className={`text-xs font-extrabold px-3 py-1 rounded-full border ${analysis.statusColor}`}>
            {analysis.statusLabel}
          </span>
        </div>

        {/* Gauge Score Display */}
        <div className="flex items-end justify-between bg-white/10 p-4 rounded-2xl border border-white/15">
          <div>
            <div className="text-xs text-amber-100/80 uppercase tracking-wider font-semibold">Score global Google</div>
            <div className="text-3xl font-extrabold text-brand-accent mt-1">
              {analysis.totalScore} <span className="text-base font-normal text-white/70">/ 100</span>
            </div>
          </div>
          <div className="text-right text-xs text-white/80">
            <div>Total Mots : <strong className="text-white">{analysis.wordCount}</strong></div>
            <div>Statut : <strong className="text-emerald-400">Prêt au référencement</strong></div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-100 bg-gray-50/50 p-2 gap-1">
        <button
          onClick={() => setActiveTab('checklist')}
          className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
            activeTab === 'checklist' ? 'bg-white text-brand-primary shadow-sm' : 'text-gray-500 hover:text-gray-800'
          }`}
        >
          Checklist ({analysis.checks.filter(c => c.status === 'success').length}/{analysis.checks.length})
        </button>
        <button
          onClick={() => setActiveTab('serp')}
          className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1 ${
            activeTab === 'serp' ? 'bg-white text-brand-primary shadow-sm' : 'text-gray-500 hover:text-gray-800'
          }`}
        >
          <Search className="w-3.5 h-3.5" /> Aperçu Google
        </button>
        <button
          onClick={() => setActiveTab('social')}
          className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1 ${
            activeTab === 'social' ? 'bg-white text-brand-primary shadow-sm' : 'text-gray-500 hover:text-gray-800'
          }`}
        >
          <Share2 className="w-3.5 h-3.5" /> Social (OG)
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-5 max-h-[500px] overflow-y-auto space-y-4">
        {/* CHECKLIST TAB */}
        {activeTab === 'checklist' && (
          <div className="space-y-3">
            {analysis.checks.map((check) => (
              <div
                key={check.id}
                className={`p-3.5 rounded-2xl border text-xs space-y-1 transition-all ${
                  check.status === 'success'
                    ? 'bg-emerald-50/60 border-emerald-200 text-emerald-900'
                    : check.status === 'warning'
                    ? 'bg-amber-50/60 border-amber-200 text-amber-900'
                    : 'bg-rose-50/60 border-rose-200 text-rose-900'
                }`}
              >
                <div className="flex items-center justify-between font-bold">
                  <span className="flex items-center gap-1.5">
                    {check.status === 'success' && <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />}
                    {check.status === 'warning' && <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />}
                    {check.status === 'error' && <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />}
                    {check.label}
                  </span>
                  <span className="text-[11px] font-extrabold px-2 py-0.5 rounded-full bg-white/80 border">
                    {check.score}/{check.maxScore} pts
                  </span>
                </div>
                <p className="text-[11px] leading-relaxed opacity-90 pl-5">{check.message}</p>
              </div>
            ))}
          </div>
        )}

        {/* GOOGLE SERP PREVIEW TAB */}
        {activeTab === 'serp' && (
          <div className="space-y-4">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Aperçu du résultat Google</div>
            <div className="p-4 bg-white rounded-2xl border border-gray-200 shadow-sm space-y-1 font-sans">
              <div className="text-xs text-[14px] text-[#202124] flex items-center gap-1 truncate">
                <span className="w-4 h-4 rounded-full bg-brand-primary text-white text-[10px] flex items-center justify-center font-bold">E</span>
                <span className="text-[#202124]">{displayUrl}</span>
              </div>
              <h4 className="text-base text-[#1a0dab] font-normal hover:underline cursor-pointer leading-snug line-clamp-1">
                {metaTitle}
              </h4>
              <p className="text-xs text-[#4d5156] leading-relaxed line-clamp-2">
                {metaDescription}
              </p>
            </div>
            <div className="bg-blue-50 p-3 rounded-xl border border-blue-200 text-xs text-blue-800 space-y-1">
              <p className="font-bold">💡 Conseil d'optimisation SERP :</p>
              <p>Un bon méta titre contient entre 50 et 60 caractères pour ne pas être tronqué par les points de suspension Google (...).</p>
            </div>
          </div>
        )}

        {/* SOCIAL OPEN GRAPH TAB */}
        {activeTab === 'social' && (
          <div className="space-y-4">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Aperçu lors des partages (LinkedIn / Facebook)</div>
            <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm bg-white">
              {post.image ? (
                <img src={post.image} alt={post.imageAlt || ''} className="w-full h-36 object-cover" />
              ) : (
                <div className="w-full h-36 bg-gray-100 flex items-center justify-center text-xs text-gray-400">
                  Aucune image sélectionnée
                </div>
              )}
              <div className="p-3 bg-gray-50 border-t border-gray-100">
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">elixirbusiness-school.fr</span>
                <h5 className="font-bold text-xs text-gray-800 line-clamp-1 mt-0.5">{post.ogTitle || metaTitle}</h5>
                <p className="text-[11px] text-gray-600 line-clamp-2 mt-0.5">{post.ogDescription || metaDescription}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
