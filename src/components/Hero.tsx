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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-brand-text/5 border border-brand-text/10 px-3 py-1 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-brand-secondary rounded-full animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-text/60">
              Excellence Académique & Professionnelle
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold font-sans leading-[1.05] tracking-tight text-brand-text mb-8"
          >
            Propulsez votre <br />
            <span className="text-gradient underline decoration-brand-secondary-soft decoration-8 underline-offset-16">Avenir Business</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-brand-text/60 max-w-xl mb-12 font-light leading-relaxed"
          >
            Elixir Business School forme les leaders de demain. Une expertise métier pour une employabilité immédiate et durable dans le commerce et le digital.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:row items-start space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link
              to="/formations"
              className="bg-brand-text text-white px-10 py-5 rounded-xl text-lg font-bold shadow-xl hover:bg-brand-secondary-hover transition-all flex items-center group"
            >
              Découvrir nos formations
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/admission"
              className="px-10 py-5 rounded-xl text-lg font-bold border border-brand-border hover:bg-brand-bg transition-all text-brand-text"
            >
              Prendre rendez-vous
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 flex items-center space-x-12 opacity-50 grayscale"
          >
            <div className="text-xs font-bold uppercase tracking-widest">Partenaires Certifiés</div>
            <div className="h-6 w-px bg-brand-text/20" />
            <div className="flex space-x-8 italic font-serif text-lg">
              <span>Qualiopi</span>
              <span>Eduform</span>
              <span>France Compétences</span>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative group">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                alt="Elixir Business School Excellence"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-primary/5 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-xl border border-brand-border max-w-[240px]"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-brand-accent-soft rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-brand-accent rounded-full animate-pulse" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-tight text-brand-muted text-[10px]">Inscriptions Ouvertes</div>
                  <div className="text-sm font-bold text-brand-text">Session Septembre 2025</div>
                </div>
              </div>
              <div className="text-xs text-brand-muted">Plus que quelques places disponibles en alternance.</div>
            </motion.div>
          </motion.div>

          {/* Abstract Shape */}
          <div className="absolute -top-10 -right-10 w-32 h-32 border-[20px] border-brand-secondary-soft rounded-full" />
        </div>
      </div>
    </section>
  );
}
