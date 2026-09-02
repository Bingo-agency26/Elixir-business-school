import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-bg">
      {/* Background Decorative Elements - Subtler for white bg */}
      <div className="absolute top-[-5%] right-[-5%] w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[300px] h-[300px] bg-brand-accent/5 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center space-x-2 bg-brand-text/5 border border-brand-text/10 px-3.5 py-1.5 rounded-full mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-secondary"></span>
            </span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-brand-text/70">
              Excellence Académique & Professionnelle
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-bold font-sans leading-[1.05] tracking-tight text-brand-text mb-8"
          >
            Propulsez votre <br />
            <span className="text-gradient underline decoration-brand-secondary-soft decoration-8 underline-offset-16">Avenir Business</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-brand-text/75 max-w-xl mb-12 font-light leading-relaxed"
          >
            Elixir Business School forme les leaders de demain. Une expertise métier pour une employabilité immédiate et durable dans le commerce et le digital.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6"
          >
            <Link
              to="/formations"
              className="w-full sm:w-auto bg-brand-text text-white px-8 py-4 sm:px-10 sm:py-5 rounded-xl text-base sm:text-lg font-bold shadow-lg hover:shadow-2xl hover:bg-brand-secondary-hover hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center group"
            >
              <span>Découvrir nos formations</span>
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              to="/admission"
              className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 rounded-xl text-base sm:text-lg font-bold border-2 border-brand-text/15 hover:border-brand-secondary hover:text-brand-secondary hover:bg-brand-secondary-soft/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-brand-text text-center justify-center flex items-center"
            >
              Prendre rendez-vous
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-16 flex items-center space-x-12 opacity-60"
          >
            <div className="text-xs font-bold uppercase tracking-widest text-brand-text">Partenaires Certifiés</div>
            <div className="h-6 w-px bg-brand-text/20" />
            <div className="flex space-x-8 italic font-serif text-lg text-brand-text font-medium">
              <span>Qualiopi</span>
              <span>Eduform</span>
              <span>France Compétences</span>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative group border border-brand-border/60">
              <motion.img
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                alt="Elixir Business School Excellence"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-primary/5 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Floating Card - High contrast & readable badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="absolute -bottom-8 -left-4 sm:-left-8 bg-white/95 backdrop-blur-xl p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-2xl border border-brand-border/80 max-w-[290px] z-20"
            >
              <div className="flex items-center space-x-2.5 mb-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-md">
                  Inscriptions Ouvertes
                </span>
              </div>
              
              <div className="text-sm font-bold text-slate-900 mb-2">
                Session Septembre 2025
              </div>
              
              <div className="bg-amber-500/10 text-amber-950 border border-amber-500/25 p-3 rounded-xl text-xs font-semibold leading-snug">
                ⚡ <span className="font-bold">Important :</span> Plus que quelques places disponibles en alternance.
              </div>
            </motion.div>
          </motion.div>

          {/* Abstract Shape */}
          <div className="absolute -top-10 -right-10 w-32 h-32 border-[20px] border-brand-secondary-soft rounded-full" />
        </div>
      </div>
    </section>
  );
}
