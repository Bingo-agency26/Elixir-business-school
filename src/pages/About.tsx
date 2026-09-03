import SectionHeading from '../components/SectionHeading';
import { ShieldCheck, Zap, Heart, Globe } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <ShieldCheck className="w-9 h-9 text-brand-accent group-hover:text-white transition-colors duration-300" />,
      title: "Intégrité & Rigueur",
      desc: "Nous maintenons des standards académiques élevés pour garantir la valeur de votre diplôme."
    },
    {
      icon: <Zap className="w-9 h-9 text-brand-accent group-hover:text-white transition-colors duration-300" />,
      title: "Agilité & Innovation",
      desc: "Nos programmes évoluent en temps réel avec les tendances du marché mondial."
    },
    {
      icon: <Heart className="w-9 h-9 text-brand-accent group-hover:text-white transition-colors duration-300" />,
      title: "Engagement & Passion",
      desc: "Chaque étudiant bénéficie d'une attention particulière pour révéler son plein potentiel."
    },
    {
      icon: <Globe className="w-9 h-9 text-brand-accent group-hover:text-white transition-colors duration-300" />,
      title: "Ouverture d'Esprit",
      desc: "Nous formons des profils curieux, capables de s'adapter à des environnements variés."
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="L'excellence comme signature"
          subtitle="NOTRE HISTOIRE & VISION"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl relative border-2 border-brand-primary/15 group">
            <img
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop"
              alt="Atmosphère d'excellence Elixir Business School"
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors duration-500" />
          </div>

          <div className="bg-white p-10 rounded-[40px] border-2 border-brand-primary/15 shadow-xl">
            <h3 className="text-4xl font-extrabold text-brand-primary mb-8 leading-tight italic">
              Bienvenue chez <br />
              <span className="text-brand-secondary">Elixir Business School</span>
            </h3>
            <div className="space-y-6 text-lg text-gray-700 font-normal leading-relaxed">
              <p>
                Fondée sur la conviction que la formation est le socle de toute ascension sociale et professionnelle, Elixir Business School s'impose comme un centre de formation de référence au cœur de l'écosystème commercial moderne.
              </p>
              <p>
                Nous ne sommes pas seulement une école ; nous sommes un incubateur de talents. Notre approche pédagogique fusionne l'expertise académique de pointe avec les réalités du terrain vécues par nos intervenants professionnels.
              </p>
            </div>
            <div className="mt-12 p-8 border-l-4 border-brand-accent bg-brand-primary text-white shadow-lg rounded-tr-3xl rounded-br-3xl italic">
              "L'éducation n'est pas la préparation à la vie ; l'éducation est la vie elle-même."
            </div>
          </div>
        </div>

        {/* Values section avec micro-interactions GPU CSS */}
        <section className="py-24 bg-brand-primary rounded-[56px] text-white px-12 relative overflow-hidden shadow-2xl border-2 border-brand-accent/30">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-secondary/20 blur-[120px] rounded-full" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">Nos Valeurs Fondamentales</h3>
              <p className="text-amber-100/70 text-lg font-light max-w-2xl mx-auto">
                Ce qui nous anime au quotidien pour offrir une expérience éducative inédite et rigoureuse.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="bg-white/10 border-2 border-brand-accent/30 p-8 rounded-3xl backdrop-blur-md shadow-xl hover:shadow-2xl hover:border-brand-accent hover:bg-brand-secondary/40 hover:-translate-y-2.5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] text-center group cursor-pointer flex flex-col items-center justify-between"
                >
                  <div>
                    <div className="w-16 h-16 bg-brand-primary/80 rounded-2xl border border-brand-accent/30 flex justify-center items-center mb-6 shadow-md group-hover:scale-125 group-hover:rotate-[6deg] group-hover:bg-brand-secondary transition-all duration-300">
                      {v.icon}
                    </div>
                    <h4 className="font-extrabold text-xl mb-4 italic text-white group-hover:text-brand-accent transition-colors">{v.title}</h4>
                    <p className="text-white/80 text-sm leading-relaxed font-light">
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
