import SectionHeading from '../components/SectionHeading';
import { motion } from 'motion/react';
import { Briefcase, Handshake, TrendingUp, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Business() {
  const customEase = [0.16, 1, 0.3, 1];

  const benefits = [
    {
      icon: <Handshake className="w-6 h-6 text-brand-accent group-hover:scale-110 transition-transform" />,
      title: "Recrutement Facilité",
      desc: "Accédez à un vivier de talents qualifiés, motivés et immédiatement opérationnels pour votre unité commerciale."
    },
    {
      icon: <Briefcase className="w-6 h-6 text-brand-accent group-hover:scale-110 transition-transform" />,
      title: "Solutions Alternance",
      desc: "Bénéficiez des aides de l'État et formez vos futurs collaborateurs à vos méthodes de travail dès aujourd'hui."
    },
    {
      icon: <Search className="w-6 h-6 text-brand-accent group-hover:scale-110 transition-transform" />,
      title: "Sourcing sur-mesure",
      desc: "Nous effectuons une pré-sélection rigoureuse pour vous proposer les profils les plus adaptés à vos besoins spécifiques."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-brand-accent group-hover:scale-110 transition-transform" />,
      title: "Performance Co-construite",
      desc: "Un accompagnement tripartite régulier pour assurer la montée en puissance de votre apprenti au sein de votre équipe."
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Partenariat Entreprises"
          subtitle="CONSTRUIRE L'AVENIR ENSEMBLE"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: customEase }}
            className="bg-white p-10 rounded-[40px] border-2 border-brand-primary/15 shadow-xl"
          >
            <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-primary mb-6 leading-tight">
              Recrutez les <span className="text-brand-secondary italic">Talents</span> de demain
            </h3>
            <p className="text-lg text-gray-700 font-normal leading-relaxed mb-8">
              Parce que la réussite d'une entreprise dépend de la qualité de ses équipes, Elixir Business School se positionne comme votre partenaire stratégique. Nous formons des apprenants aux compétences affutées, prêts à s'investir dans votre croissance.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div 
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-brand-primary text-white p-6 rounded-3xl shadow-lg border-2 border-brand-accent/30 italic cursor-pointer group"
              >
                <div className="text-brand-accent font-black text-4xl mb-1 group-hover:scale-105 transition-transform">92%</div>
                <div className="text-xs uppercase font-extrabold tracking-widest text-amber-100/80">Satisfaction Partenaires</div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-brand-primary text-white p-6 rounded-3xl shadow-lg border-2 border-brand-accent/30 italic cursor-pointer group"
              >
                <div className="text-brand-accent font-black text-4xl mb-1 group-hover:scale-105 transition-transform">250+</div>
                <div className="text-xs uppercase font-extrabold tracking-widest text-amber-100/80">Entreprises de Confiance</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: customEase }}
            className="p-8 bg-brand-primary rounded-[48px] border-2 border-brand-accent/30 shadow-2xl relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/30 blur-3xl rounded-full" />
             <div className="relative z-10 p-8 text-white border border-brand-accent/20 rounded-[36px] bg-white/5 backdrop-blur-sm">
                <h4 className="text-2xl font-extrabold mb-8 italic text-brand-accent">Pourquoi nous choisir ?</h4>
                <div className="space-y-6">
                  {benefits.map((b, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ x: 6 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex space-x-4 p-3 rounded-2xl hover:bg-white/10 transition-colors duration-300 group cursor-pointer"
                    >
                      <div className="w-12 h-12 bg-brand-primary/80 border border-brand-accent/30 rounded-2xl flex items-center justify-center shrink-0 shadow-md group-hover:bg-brand-secondary group-hover:scale-110 transition-all duration-300">
                        {b.icon}
                      </div>
                      <div>
                        <h5 className="font-extrabold text-lg mb-1 text-white group-hover:text-brand-accent transition-colors">{b.title}</h5>
                        <p className="text-sm text-white/80 font-normal leading-relaxed">{b.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
             </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: customEase }}
          className="bg-brand-primary p-12 rounded-[48px] border-2 border-brand-accent/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-white relative overflow-hidden"
        >
          <div>
            <h3 className="text-3xl font-extrabold mb-2 italic text-brand-accent">Vous avez un besoin de recrutement ?</h3>
            <p className="text-amber-100/80 font-normal text-base">Nos conseillers relations entreprises vous répondent sous 24h.</p>
          </div>
          <Link
            to="/contact"
            className="bg-brand-secondary hover:bg-white hover:text-brand-primary text-white px-10 py-5 rounded-2xl font-extrabold shadow-xl flex items-center gap-3 transition-all hover:scale-105 group shrink-0"
          >
             <span>Nous confier un poste</span>
             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
