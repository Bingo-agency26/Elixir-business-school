import SectionHeading from '../components/SectionHeading';
import CourseCard from '../components/CourseCard';
import { COURSES } from '../constants';
import { Link } from 'react-router-dom';

export default function Courses() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 bg-[#F1F5F9]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <SectionHeading
            title="Catalogue des Formations d'Excellence"
            subtitle="Votre futur commence ici"
          />
          <p className="text-lg text-gray-700 font-normal leading-relaxed">
            Découvrez nos programmes spécialisés, conçus pour allier théorie académique et pratique professionnelle intensive. Chaque formation est une promesse de montée en compétences et de réussite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="mt-24 p-12 bg-brand-primary rounded-[48px] border-2 border-brand-accent/30 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/40 blur-[100px] rounded-full" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-extrabold mb-6 text-white italic">Besoin d'un conseil personnalisé ?</h3>
              <p className="text-gray-200 font-normal text-base mb-8 leading-relaxed">
                Nos conseillers en formation sont là pour vous aider à choisir le parcours le plus adapté à votre projet professionnel et à vos ambitions.
              </p>
              <Link
                to="/contact"
                className="bg-brand-accent hover:bg-white text-brand-primary px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-wider transition-all shadow-xl hover:scale-105 inline-flex items-center"
              >
                Prendre rendez-vous
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 border-2 border-brand-accent/40 p-6 rounded-3xl hover:bg-white/15 transition-colors">
                <div className="text-4xl font-black text-brand-accent mb-2">100%</div>
                <div className="text-xs uppercase font-black tracking-widest text-white">Alternance garantie</div>
              </div>
              <div className="bg-white/10 border-2 border-brand-accent/40 p-6 rounded-3xl hover:bg-white/15 transition-colors">
                <div className="text-4xl font-black text-brand-accent mb-2">RNCP</div>
                <div className="text-xs uppercase font-black tracking-widest text-white">Titres certifiés</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
