import React, { useState } from 'react';
import { X, Upload, Image as ImageIcon, CheckCircle, Search } from 'lucide-react';

interface MediaManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentImage: string;
  currentAlt: string;
  onSelectMedia: (imageUrl: string, altText: string) => void;
}

const PRESET_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
    alt: 'Étudiants en alternance travaillant en groupe à Toulouse',
    category: 'Alternance',
  },
  {
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop',
    alt: 'Présentation de projet commercial et management d équipe',
    category: 'Management',
  },
  {
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    alt: 'Tableau de bord de stratégie marketing digital et analytics GA4',
    category: 'Digital',
  },
  {
    url: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop',
    alt: 'Entretien d embauche pour contrat d alternance en entreprise',
    category: 'Recrutement',
  },
  {
    url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
    alt: 'Réunion de stratégie commerciale Elixir Business School Toulouse',
    category: 'Commerce',
  },
  {
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    alt: 'Atelier de négociation et vente conseil B2B',
    category: 'Vente',
  },
];

export default function MediaManagerModal({
  isOpen,
  onClose,
  currentImage,
  currentAlt,
  onSelectMedia,
}: MediaManagerModalProps) {
  const [selectedUrl, setSelectedUrl] = useState(currentImage || '');
  const [altText, setAltText] = useState(currentAlt || '');
  const [customUrl, setCustomUrl] = useState('');
  const [activeTab, setActiveTab] = useState<'presets' | 'url' | 'upload'>('presets');

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 3 * 1024 * 1024) {
        alert('L\'image dépasse 3 Mo. Veuillez utiliser une image optimisée.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setSelectedUrl(result);
        if (!altText) {
          setAltText(file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApplyCustomUrl = () => {
    if (customUrl.trim()) {
      setSelectedUrl(customUrl.trim());
      setCustomUrl('');
    }
  };

  const handleConfirm = () => {
    if (!selectedUrl) {
      alert('Veuillez sélectionner ou saisir une image.');
      return;
    }
    if (!altText.trim()) {
      alert('⚠️ Règle SEO importante : La balise Alt Text (texte alternatif) est obligatoire pour le référencement Google.');
      return;
    }
    onSelectMedia(selectedUrl, altText.trim());
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
      <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-brand-primary text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-accent/20 flex items-center justify-center text-brand-accent">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Gestionnaire d'Images & Média SEO</h3>
              <p className="text-xs text-amber-100/70">Sélectionnez une illustration et renseignez son texte alternatif (Alt Text)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-grow">
          {/* Navigation Tabs */}
          <div className="flex gap-2 border-b border-gray-100 pb-3">
            <button
              onClick={() => setActiveTab('presets')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'presets'
                  ? 'bg-brand-primary text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Galerie Recommandée (Unsplash)
            </button>
            <button
              onClick={() => setActiveTab('url')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'url'
                  ? 'bg-brand-primary text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Saisir une URL d'image
            </button>
            <button
              onClick={() => setActiveTab('upload')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'upload'
                  ? 'bg-brand-primary text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Fichier Local
            </button>
          </div>

          {/* Tab 1: Presets */}
          {activeTab === 'presets' && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {PRESET_IMAGES.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setSelectedUrl(img.url);
                    if (!altText) setAltText(img.alt);
                  }}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer border-2 transition-all ${
                    selectedUrl === img.url
                      ? 'border-brand-accent ring-4 ring-brand-accent/20 shadow-lg scale-[1.02]'
                      : 'border-gray-200 hover:border-brand-secondary hover:shadow-md'
                  }`}
                >
                  <img src={img.url} alt={img.alt} className="w-full h-32 object-cover" />
                  <div className="p-2 bg-white text-xs">
                    <span className="font-semibold text-brand-primary block truncate">{img.category}</span>
                    <span className="text-gray-500 text-[10px] block truncate">{img.alt}</span>
                  </div>
                  {selectedUrl === img.url && (
                    <div className="absolute top-2 right-2 bg-brand-accent text-brand-primary rounded-full p-1 shadow">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Tab 2: Custom URL */}
          {activeTab === 'url' && (
            <div className="space-y-4">
              <label className="block text-sm font-semibold text-gray-700">URL web de l'image (ex: Unsplash, CDN, HTTPS)</label>
              <div className="flex gap-2">
                <input
                  type="url"
                  placeholder="https://images.unsplash.com/..."
                  value={customUrl}
                  onChange={(e) => setCustomUrl(e.target.value)}
                  className="flex-grow px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-secondary focus:outline-none"
                />
                <button
                  onClick={handleApplyCustomUrl}
                  className="px-5 py-3 bg-brand-secondary text-white font-semibold rounded-xl hover:bg-brand-secondary-hover transition-colors"
                >
                  Appliquer
                </button>
              </div>
            </div>
          )}

          {/* Tab 3: Upload Local File */}
          {activeTab === 'upload' && (
            <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-brand-secondary transition-colors cursor-pointer bg-gray-50/50">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                id="file-upload-input"
                className="hidden"
              />
              <label htmlFor="file-upload-input" className="cursor-pointer block">
                <Upload className="w-12 h-12 text-brand-secondary mx-auto mb-3" />
                <span className="font-bold text-gray-800 block text-base">Cliquez ici pour téléverser une photo</span>
                <span className="text-xs text-gray-500 block mt-1">Formats supportés : WEBP, JPG, PNG (Max 3 Mo)</span>
              </label>
            </div>
          )}

          {/* SEO ALT TEXT INPUT (MANDATORY REGLE SEO) */}
          <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <label className="font-bold text-sm text-brand-primary flex items-center gap-2">
                <span>Balise Alt Text (Texte alternatif SEO)</span>
                <span className="text-xs font-normal text-amber-700 bg-amber-200/60 px-2 py-0.5 rounded-full">Exigence SEO</span>
              </label>
            </div>
            <p className="text-xs text-gray-600">
              Décrivez précisément le contenu de l'image en incluant si possible vos mots-clés (ex: <i>"Alternants en cours de marketing à Elixir Business School Toulouse"</i>).
            </p>
            <input
              type="text"
              placeholder="Description SEO de l'image pour Google Images et l'accessibilité"
              value={altText}
              onChange={(e) => setAltText(e.target.value)}
              className="w-full px-4 py-3 border border-amber-300 rounded-xl focus:ring-2 focus:ring-brand-accent focus:outline-none bg-white text-sm"
            />
          </div>

          {/* Active Preview */}
          {selectedUrl && (
            <div className="border border-gray-200 rounded-2xl p-4 bg-gray-50 flex items-center gap-4">
              <img src={selectedUrl} alt={altText} className="w-24 h-16 object-cover rounded-xl border" />
              <div className="flex-grow overflow-hidden text-xs">
                <span className="font-semibold text-gray-800 block">Image sélectionnée</span>
                <span className="text-gray-500 block truncate">Alt: "{altText || 'Aucun alt défini'}"</span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition-colors text-sm"
          >
            Annuler
          </button>
          <button
            onClick={handleConfirm}
            className="px-6 py-2.5 rounded-xl bg-brand-primary hover:bg-brand-primary-dark text-white font-bold transition-all shadow-md text-sm"
          >
            Valider l'image
          </button>
        </div>
      </div>
    </div>
  );
}
