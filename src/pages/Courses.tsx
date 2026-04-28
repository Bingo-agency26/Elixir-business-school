import SectionHeading from '../components/SectionHeading';
import CourseCard from '../components/CourseCard';
import { COURSES } from '../constants';
import { motion } from 'motion/react';

export default function Courses() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 bg-brand-bg">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <SectionHeading
            title="Catalogue des Formations d'Excellence"
            subtitle="Votre futur commence ici"
          />
          <p className="text-lg text-brand-text/60 font-light leading-relaxed">
            Découvrez nos programmes spécialisés, conçus pour allier théorie académique et pratique professionnelle intensive. Chaque formation est une promesse de montée en compétences et de réussite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {COURSES.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-brand-primary rounded-[40px] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary-soft/40 blur-[100px] rounded-full" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-serif font-bold mb-6">Besoin d'un conseil personnalisé ?</h3>
              <p className="text-white/60 font-light mb-8">
                Nos conseillers en formation sont là pour vous aider à choisir le parcours le plus adapté à votre projet professionnel et à vos ambitions.
              </p>
              <button className="bg-brand-accent text-brand-primary px-8 py-4 rounded-full font-bold hover:bg-brand-accent-hover transition-all shadow-lg shadow-brand-accent-dark/20">
                Prendre rendez-vous
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <div className="text-4xl font-serif font-bold text-brand-accent mb-2">100%</div>
                <div className="text-xs uppercase tracking-widest text-white/40">Alternance garantie</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <div className="text-4xl font-serif font-bold text-brand-accent mb-2">RNCP</div>
                <div className="text-xs uppercase tracking-widest text-white/40">Titres certifiés</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
