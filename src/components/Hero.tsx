import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-bg">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-5%] right-[-5%] w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[300px] h-[300px] bg-brand-accent/5 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 z-10">
          <div className="inline-flex items-center space-x-2 bg-brand-primary/5 border border-brand-primary/10 px-4 py-2 rounded-full mb-8 shadow-xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-secondary"></span>
            </span>
            <span className="text-[11px] font-black uppercase tracking-widest text-brand-primary">
              Excellence Académique & Professionnelle
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black font-sans leading-[1.05] tracking-tight text-brand-primary mb-8">
            Propulsez votre <br />
            <span className="text-brand-secondary underline decoration-brand-accent decoration-8 underline-offset-8">Avenir Business</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-12 font-normal leading-relaxed">
            Elixir Business School forme les leaders de demain. Une expertise métier pour une employabilité immédiate et durable dans le commerce et le digital.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
            <Link
              to="/formations"
              className="w-full sm:w-auto bg-brand-primary hover:bg-brand-secondary text-white px-8 py-4 sm:px-10 sm:py-5 rounded-2xl text-base sm:text-lg font-extrabold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center group"
            >
              <span>Découvrir nos formations</span>
              <ArrowRight className="ml-3 w-5 h-5 text-brand-accent group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
            <Link
              to="/admission"
              className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 rounded-2xl text-base sm:text-lg font-extrabold border-2 border-brand-primary/20 hover:border-brand-secondary hover:text-brand-secondary hover:bg-brand-primary/5 hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] text-brand-primary text-center justify-center flex items-center shadow-md"
            >
              Prendre rendez-vous
            </Link>
          </div>

          <div className="mt-16 flex items-center space-x-12 opacity-80">
            <div className="text-xs font-black uppercase tracking-widest text-brand-primary">Partenaires Certifiés</div>
            <div className="h-6 w-px bg-brand-primary/20" />
            <div className="flex space-x-8 italic font-serif text-lg text-brand-primary font-bold">
              <span>Qualiopi</span>
              <span>Eduform</span>
              <span>France Compétences</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative z-10">
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative group border-2 border-brand-primary/15">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                alt="Elixir Business School Excellence"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-primary/5 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Floating Card - High contrast badge */}
            <div className="absolute -bottom-8 -left-4 sm:-left-8 bg-white p-5 sm:p-6 rounded-3xl shadow-2xl border-2 border-brand-primary/15 max-w-[310px] z-20 hover:-translate-y-2 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group cursor-pointer">
              <div className="flex items-center space-x-2.5 mb-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-900 bg-emerald-100 border border-emerald-300 px-2.5 py-1 rounded-lg">
                  Inscriptions Ouvertes
                </span>
              </div>
              
              <div className="text-base font-extrabold text-brand-primary mb-2">
                Session Septembre 2025
              </div>
              
              <div className="bg-amber-100/90 text-amber-950 border border-amber-300 p-3.5 rounded-xl text-xs font-bold leading-snug shadow-xs">
                ⚡ <span className="font-extrabold">Important :</span> Plus que quelques places disponibles en alternance.
              </div>
            </div>
          </div>

          {/* Abstract Shape */}
          <div className="absolute -top-10 -right-10 w-32 h-32 border-[20px] border-brand-primary/10 rounded-full" />
        </div>
      </div>
    </section>
  );
}
