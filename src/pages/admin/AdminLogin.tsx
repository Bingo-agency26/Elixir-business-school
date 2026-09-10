import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAdmin } from '../../services/blogService';
import { ShieldCheck, Lock, ArrowRight, Sparkles } from 'lucide-react';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginAdmin(password)) {
      setError(false);
      navigate('/admin/dashboard');
    } else {
      setError(true);
    }
  };

  return (
    <main className="min-h-screen pt-28 pb-16 bg-[#F8FAFC] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl border-2 border-brand-primary/10 shadow-2xl p-8 sm:p-10 space-y-8">
        <div className="text-center space-y-3">
          <div className="w-16 h-16 rounded-2xl bg-brand-primary text-brand-accent mx-auto flex items-center justify-center shadow-lg border-2 border-brand-accent/30">
            <ShieldCheck className="w-9 h-9" />
          </div>
          <h1 className="text-2xl font-black text-brand-primary tracking-tight">Espace Administration SEO</h1>
          <p className="text-sm text-gray-500 font-normal">
            Gestionnaire des articles de blog & optimisation SEO d'Elixir Business School
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-brand-primary">
              Mot de passe Administrateur
            </label>
            <div className="relative">
              <Lock className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" />
              <input
                type="password"
                required
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full pl-12 pr-4 py-3.5 border rounded-2xl focus:outline-none transition-all text-sm font-medium ${
                  error
                    ? 'border-rose-400 bg-rose-50/50 focus:ring-2 focus:ring-rose-400'
                    : 'border-gray-200 focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20'
                }`}
              />
            </div>
            {error && (
              <p className="text-xs text-rose-600 font-semibold mt-1">
                Mot de passe incorrect. (Mot de passe par défaut : <code className="bg-rose-100 px-1 py-0.5 rounded text-rose-800">elixir2026</code>)
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-brand-primary hover:bg-brand-primary-dark text-white rounded-2xl font-black text-sm uppercase tracking-wider shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
          >
            <span>Se connecter au Dashboard</span>
            <ArrowRight className="w-4 h-4 text-brand-accent group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="pt-4 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-400 flex items-center justify-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
            Balisage automatique Schema.org & SEO Google
          </p>
        </div>
      </div>
    </main>
  );
}
