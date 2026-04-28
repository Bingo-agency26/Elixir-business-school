import SectionHeading from '../components/SectionHeading';
import { motion } from 'motion/react';
import { Briefcase, Handshake, TrendingUp, Search } from 'lucide-react';

export default function Business() {
  const benefits = [
    {
      icon: <Handshake />,
      title: "Recrutement Facilité",
      desc: "Accédez à un vivier de talents qualifiés, motivés et immédiatement opérationnels pour votre unité commerciale."
    },
    {
      icon: <Briefcase />,
      title: "Solutions Alternance",
      desc: "Bénéficiez des aides de l'État et formez vos futurs collaborateurs à vos méthodes de travail dès aujourd'hui."
    },
    {
      icon: <Search />,
      title: "Sourcing sur-mesure",
      desc: "Nous effectuons une pré-sélection rigoureuse pour vous proposer les profils les plus adaptés à vos besoins spécifiques."
    },
    {
      icon: <TrendingUp />,
      title: "Performance Co-construite",
      desc: "Un accompagnement tripartite régulier pour assurer la montée en puissance de votre apprenti au sein de votre équipe."
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Partenariat Entreprises"
          subtitle="CONSTRUIRE L'AVENIR ENSEMBLE"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h3 className="text-4xl font-bold text-brand-text mb-6 leading-tight">
              Recrutez les <span className="text-brand-secondary italic">Talents</span> de demain
            </h3>
            <p className="text-lg text-brand-text/60 font-light leading-relaxed mb-8">
              Parce que la réussite d'une entreprise dépend de la qualité de ses équipes, Elixir Business School se positionne comme votre partenaire stratégique. Nous formons des apprenants aux compétences affutées, prêts à s'investir dans votre croissance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-brand-surface p-6 rounded-3xl shadow-sm border border-brand-border italic">
                <div className="text-brand-secondary font-bold text-3xl mb-2">92%</div>
                <div className="text-xs uppercase tracking-widest text-brand-text/40">Satisfaction Partenaires</div>
              </div>
              <div className="bg-brand-surface p-6 rounded-3xl shadow-sm border border-brand-border italic">
                <div className="text-brand-secondary font-bold text-3xl mb-2">250+</div>
                <div className="text-xs uppercase tracking-widest text-brand-text/40">Entreprises Confiance</div>
              </div>
            </div>
          </div>
          <div className="p-8 bg-brand-text rounded-[60px] relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary-soft/30 blur-3xl rounded-full" />
             <div className="relative z-10 p-8 text-white border border-white/10 rounded-[40px] bg-white/5 backdrop-blur-sm">
                <h4 className="text-xl font-bold mb-6 italic text-brand-accent">Pourquoi nous choisir ?</h4>
                <div className="space-y-6">
                  {benefits.map((b, i) => (
                    <div key={i} className="flex space-x-4">
                      <div className="text-brand-accent shrink-0">{b.icon}</div>
                      <div>
                        <h5 className="font-bold mb-1 text-white">{b.title}</h5>
                        <p className="text-sm text-white/50 font-light">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>

        <div className="bg-brand-secondary-soft p-12 rounded-[48px] border border-brand-secondary-soft/50 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-3xl font-bold text-brand-text mb-2 italic">Vous avez un besoin de recrutement ?</h3>
            <p className="text-brand-text/50 font-light">Nos conseillers relations entreprises vous répondent sous 24h.</p>
          </div>
          <button className="bg-brand-text text-white px-10 py-5 rounded-full font-bold hover:bg-brand-secondary-hover transition-all shadow-xl">
             Nous confier un poste
          </button>
        </div>
      </div>
    </main>
  );
}
