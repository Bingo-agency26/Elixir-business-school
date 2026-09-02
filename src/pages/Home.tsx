import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import CourseCard from '../components/CourseCard';
import { COURSES } from '../constants';
import { motion } from 'motion/react';
import { Target, Users, TrendingUp, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Excellence Académique",
      text: "Un programme rigoureux conçu par des experts du secteur pour répondre aux exigences du marché."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Accompagnement Sur-mesure",
      text: "Un suivi individuel pour chaque apprenant, de l'inscription jusqu'à l'insertion professionnelle."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Employabilité Maximale",
      text: "Notre priorité est votre réussite durable. 95% de nos diplômés trouvent un emploi sous 6 mois."
    },
    {
      icon: <Award className="w-6 h-6" />,
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
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="aspect-square rounded-[60px] overflow-hidden shadow-2xl relative group border border-gray-100">
                <motion.img
                  whileHover={{ scale: 1.025 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                  alt="Corporate Strategy Meeting"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-text text-white p-8 sm:p-10 rounded-[40px] shadow-2xl">
                <div className="text-4xl font-serif font-bold mb-1">10+</div>
                <div className="text-xs uppercase tracking-widest font-bold opacity-70">Années d'excellence</div>
              </div>
            </motion.div>

            <div>
              <SectionHeading
                title="L'Ambition au cœur de notre pédagogie"
                subtitle="Notre Vision"
                align="left"
              />
              <p className="text-lg text-brand-text/70 font-light leading-relaxed mb-8">
                Chez Elixir Business School, nous croyons que l'éducation est le plus puissant levier de transformation. Notre mission est de former les leaders agiles de demain, capables de naviguer avec brio dans un monde commercial en constante mutation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-3 p-4 rounded-2xl hover:bg-gray-50/80 transition-colors"
                  >
                    <div className="text-brand-secondary">{feature.icon}</div>
                    <h4 className="font-bold text-lg text-brand-text">{feature.title}</h4>
                    <p className="text-sm text-brand-text/60 font-light">
                      {feature.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-24 px-6 bg-gray-50/50 border-y border-gray-100 relative">
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
              className="inline-flex items-center text-brand-secondary font-bold hover:text-brand-accent transition-colors group"
            >
              Voir tout le catalogue
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 premium-gradient opacity-95" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
              Prêt à accélérer votre <span className="text-brand-accent italic">évolution</span> ?
            </h2>
            <p className="text-xl text-white/70 font-light mb-12 max-w-2xl mx-auto">
              Rejoignez une communauté d'apprenants déterminés et formez-vous auprès des meilleurs. Votre carrière mérite un cadre exceptionnel.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-brand-surface text-brand-primary px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold hover:bg-brand-accent hover:text-white transition-all shadow-xl hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                Déposer ma candidature
              </Link>
              <Link
                to="/formations"
                className="w-full sm:w-auto border-2 border-white/30 text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold hover:bg-white/10 hover:border-white transition-all hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                Découvrir nos formations
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
