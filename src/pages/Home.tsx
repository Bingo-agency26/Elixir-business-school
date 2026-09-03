import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import CourseCard from '../components/CourseCard';
import { COURSES } from '../constants';
import { Target, Users, TrendingUp, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const features = [
    {
      icon: <Target className="w-6 h-6 text-brand-secondary group-hover:scale-110 transition-transform" />,
      title: "Excellence Académique",
      text: "Un programme rigoureux conçu par des experts du secteur pour répondre aux exigences du marché."
    },
    {
      icon: <Users className="w-6 h-6 text-brand-secondary group-hover:scale-110 transition-transform" />,
      title: "Accompagnement Sur-mesure",
      text: "Un suivi individuel pour chaque apprenant, de l'inscription jusqu'à l'insertion professionnelle."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-brand-secondary group-hover:scale-110 transition-transform" />,
      title: "Employabilité Maximale",
      text: "Notre priorité est votre réussite durable. 95% de nos diplômés trouvent un emploi sous 6 mois."
    },
    {
      icon: <Award className="w-6 h-6 text-brand-secondary group-hover:scale-110 transition-transform" />,
      title: "Réseau Premium",
      text: "Accédez à un réseau d'entreprises partenaires de premier plan pour votre alternance et futur emploi."
    }
  ];

  return (
    <main>
      <Hero />

      {/* Philosophy Section */}
      <section className="py-24 px-6 bg-white overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-[48px] overflow-hidden shadow-2xl relative group border-2 border-brand-primary/15">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                  alt="Corporate Strategy Meeting"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-primary text-white p-8 sm:p-10 rounded-[36px] shadow-2xl border-2 border-brand-accent/30">
                <div className="text-4xl font-extrabold mb-1 text-brand-accent">10+</div>
                <div className="text-xs uppercase tracking-widest font-black text-amber-100">Années d'excellence</div>
              </div>
            </div>

            <div>
              <SectionHeading
                title="L'Ambition au cœur de notre pédagogie"
                subtitle="Notre Vision"
                align="left"
              />
              <p className="text-lg text-gray-700 font-normal leading-relaxed mb-8">
                Chez Elixir Business School, nous croyons que l'éducation est le plus puissant levier de transformation. Notre mission est de former les leaders agiles de demain, capables de naviguer avec brio dans un monde commercial en constante mutation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="space-y-3 p-5 rounded-2xl border-2 border-brand-primary/10 bg-white hover:border-brand-secondary hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-brand-primary/5 rounded-xl flex items-center justify-center group-hover:bg-brand-primary group-hover:text-brand-accent transition-all duration-300">
                      {feature.icon}
                    </div>
                    <h4 className="font-extrabold text-lg text-brand-primary group-hover:text-brand-secondary transition-colors">{feature.title}</h4>
                    <p className="text-sm text-gray-600 font-normal leading-relaxed">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-24 px-6 bg-[#F1F5F9] border-y border-gray-200 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading
            title="Nos Formations de Prestige"
            subtitle="Catalogue des programmes"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES.slice(0, 3).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              to="/formations"
              className="inline-flex items-center text-brand-primary font-black text-base uppercase tracking-wider hover:text-brand-secondary transition-colors group px-8 py-4 bg-white rounded-full border-2 border-brand-primary/15 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <span>Voir tout le catalogue</span>
              <ArrowRight className="ml-2 w-5 h-5 text-brand-accent group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden bg-brand-primary text-white border-t-2 border-brand-accent/30">
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
              Prêt à accélérer votre <span className="text-brand-accent italic">évolution</span> ?
            </h2>
            <p className="text-xl text-amber-100/90 font-normal mb-12 max-w-2xl mx-auto leading-relaxed">
              Rejoignez une communauté d'apprenants déterminés et formez-vous auprès des meilleurs. Votre carrière mérite un cadre exceptionnel.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-brand-accent hover:bg-white text-brand-primary hover:text-brand-primary px-8 py-4 sm:px-10 sm:py-5 rounded-2xl font-black text-base shadow-2xl hover:scale-105 transition-all text-center uppercase tracking-wider"
              >
                Déposer ma candidature
              </Link>
              <Link
                to="/formations"
                className="w-full sm:w-auto border-2 border-white/40 text-white px-8 py-4 sm:px-10 sm:py-5 rounded-2xl font-black text-base hover:bg-white/10 hover:border-white transition-all hover:scale-105 text-center uppercase tracking-wider"
              >
                Découvrir nos formations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
