import SectionHeading from '../components/SectionHeading';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, Heart, Globe } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Intégrité & Rigueur",
      desc: "Nous maintenons des standards académiques élevés pour garantir la valeur de votre diplôme."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Agilité & Innovation",
      desc: "Nos programmes évoluent en temps réel avec les tendances du marché mondial."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Engagement & Passion",
      desc: "Chaque étudiant bénéficie d'une attention particulière pour révéler son plein potentiel."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Ouverture d'Esprit",
      desc: "Nous formons des profils curieux, capables de s'adapter à des environnements variés."
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="L'excellence comme signature"
          subtitle="NOTRE HISTOIRE & VISION"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl relative border border-brand-border"
          >
            <img
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop"
              alt="Premium Education Atmosphere and Success"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <div>
            <h3 className="text-4xl font-bold text-brand-text mb-8 leading-tight italic">
              Bienvenue chez <br />
              <span className="text-brand-secondary">Elixir Business School</span>
            </h3>
            <div className="space-y-6 text-lg text-brand-text/60 font-light leading-relaxed">
              <p>
                Fondée sur la conviction que la formation est le socle de toute ascension sociale et professionnelle, Elixir Business School s'impose comme un centre de formation de référence au cœur de l'écosystème commercial moderne.
              </p>
              <p>
                Nous ne sommes pas seulement une école ; nous sommes un incubateur de talents. Notre approche pédagogique fusionne l'expertise académique de pointe avec les réalités du terrain vécues par nos intervenants professionnels.
              </p>
            </div>
            <div className="mt-12 p-8 border-l-4 border-brand-secondary bg-brand-surface shadow-sm rounded-tr-3xl rounded-br-3xl italic">
              "L'éducation n'est pas la préparation à la vie ; l'éducation est la vie elle-même."
            </div>
          </div>
        </div>

        {/* Values section */}
        <section className="py-24 bg-brand-text rounded-[80px] text-white px-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-secondary-soft/20 blur-[120px] rounded-full" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-5xl font-bold mb-4 text-white">Nos Valeurs Fondamentales</h3>
              <p className="text-white/50 text-lg font-light max-w-2xl mx-auto">
                Ce qui nous anime au quotidien pour offrir une expérience éducative inégalée.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all text-center"
                >
                  <div className="text-brand-secondary mb-6 flex justify-center">{v.icon}</div>
                  <h4 className="font-bold text-xl mb-4 italic text-white">{v.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed font-light">
                    {v.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
