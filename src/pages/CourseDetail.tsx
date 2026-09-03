import { useParams, Link } from 'react-router-dom';
import { COURSES } from '../constants';
import { 
  ArrowLeft, 
  Clock, 
  GraduationCap, 
  MapPin, 
  CheckCircle2, 
  BookOpen, 
  Users, 
  Briefcase, 
  TrendingUp,
  Award,
  Calendar,
  AlertCircle,
  FileText
} from 'lucide-react';

export default function CourseDetail() {
  const { slug } = useParams();
  const course = COURSES.find(c => c.slug === slug);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F1F5F9]">
        <div className="text-center p-8 bg-white rounded-3xl border-2 border-brand-primary/15 shadow-xl">
          <h2 className="text-4xl font-extrabold text-brand-primary mb-4">Formation non trouvée</h2>
          <Link to="/formations" className="text-brand-secondary font-black hover:underline uppercase text-sm tracking-wider">
            Retour au catalogue
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-6">
        <Link 
          to="/formations" 
          className="inline-flex items-center text-brand-primary font-black uppercase text-xs tracking-wider bg-white px-5 py-2.5 rounded-full border-2 border-brand-primary/15 hover:border-brand-secondary hover:text-brand-secondary mb-12 transition-all shadow-sm group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          <span>Retour aux formations</span>
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16 bg-white p-10 rounded-[40px] border-2 border-brand-primary/15 shadow-xl">
          <div className="lg:col-span-12">
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-primary text-brand-accent text-xs font-black uppercase tracking-wider border border-brand-accent/30 shadow-xs">
                {course.level}
              </div>
              {course.certifications?.map((cert, i) => (
                <div key={i} className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-secondary text-white text-xs font-black uppercase tracking-wider shadow-xs">
                  {cert}
                </div>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-brand-primary mb-6 leading-tight">
              {course.title}
            </h1>
            <p className="text-xl text-gray-700 font-normal max-w-4xl leading-relaxed">
              {course.fullDescription || course.description}
            </p>
          </div>
        </div>

        {/* Quick Info Bar */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16 bg-white p-8 rounded-3xl border-2 border-brand-primary/15 shadow-lg">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-brand-primary text-brand-accent rounded-2xl flex items-center justify-center shrink-0 shadow-md">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-brand-primary font-black">Durée</div>
              <div className="font-extrabold text-gray-900 text-sm">{course.duration}</div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-brand-primary text-brand-accent rounded-2xl flex items-center justify-center shrink-0 shadow-md">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-brand-primary font-black">Volume</div>
              <div className="font-extrabold text-gray-900 text-sm">{course.totalHours || "Variable"}</div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-brand-primary text-brand-accent rounded-2xl flex items-center justify-center shrink-0 shadow-md">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-brand-primary font-black">Diplôme</div>
              <div className="font-extrabold text-gray-900 text-sm truncate max-w-[120px]">{course.level}</div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-brand-primary text-brand-accent rounded-2xl flex items-center justify-center shrink-0 shadow-md">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-brand-primary font-black">Format</div>
              <div className="font-extrabold text-gray-900 text-sm">Alternance / Initiale</div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-brand-primary text-brand-accent rounded-2xl flex items-center justify-center shrink-0 shadow-md">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-brand-primary font-black">Rythme</div>
              <div className="font-extrabold text-gray-900 text-sm">{course.rhythm || "3j / 2j"}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-16">
            {/* Objectives */}
            <section>
              <h2 className="text-3xl font-extrabold text-brand-primary mb-8 flex items-center italic">
                <BookOpen className="w-8 h-8 mr-4 text-brand-secondary" />
                Objectifs de la formation
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {course.objectives.map((obj, i) => (
                  <div key={i} className="flex items-start space-x-4 group p-6 bg-white rounded-3xl border-2 border-brand-primary/10 hover:border-brand-secondary shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <CheckCircle2 className="w-5 h-5 text-brand-secondary shrink-0 mt-1" />
                    <span className="text-gray-800 font-normal leading-relaxed text-sm">
                      {obj}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Detailed Program Table */}
            {course.detailedProgram && (
              <section>
                <h2 className="text-3xl font-extrabold text-brand-primary mb-8 flex items-center italic">
                  <Users className="w-8 h-8 mr-4 text-brand-secondary" />
                  Programme Détaillé
                </h2>
                <div className="overflow-x-auto bg-white rounded-3xl border-2 border-brand-primary/15 shadow-lg">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-brand-primary text-white">
                        {course.detailedProgram.headers.map((header, i) => (
                          <th key={i} className="p-6 text-xs uppercase tracking-wider font-black border-b border-brand-primary/20">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {course.detailedProgram.rows.map((row, i) => (
                        <tr key={i} className="hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                          {row.map((cell, j) => (
                            <td key={j} className="p-6 text-sm text-gray-800 font-medium">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* Program Items (Legacy fallback) */}
            {course.program && !course.detailedProgram && (
              <section>
                <h2 className="text-3xl font-extrabold text-brand-primary mb-8 flex items-center italic">
                  <FileText className="w-8 h-8 mr-4 text-brand-secondary" />
                  Programme d'Enseignement
                </h2>
                <div className="space-y-8">
                  {course.program.map((p, i) => (
                    <div key={i} className="bg-white p-8 rounded-3xl border-2 border-brand-primary/15 shadow-md">
                      <h3 className="text-2xl font-extrabold text-brand-primary mb-4 italic">
                        {p.title}
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {p.items.map((item, j) => (
                          <li key={j} className="flex items-center space-x-3 text-sm text-gray-700 font-medium">
                            <span className="w-2 h-2 bg-brand-secondary rounded-full shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Prerequisites & Evaluation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {course.prerequisites && (
                <section className="bg-white p-8 rounded-3xl border-2 border-brand-primary/15 shadow-md">
                  <h3 className="text-xl font-extrabold text-brand-primary mb-6 flex items-center italic">
                    <AlertCircle className="w-5 h-5 mr-3 text-brand-secondary" />
                    Pré-requis
                  </h3>
                  <ul className="space-y-4">
                    {course.prerequisites.map((pre, i) => (
                      <li key={i} className="flex items-start space-x-3 text-sm text-gray-700 font-medium">
                        <div className="w-2 h-2 bg-brand-secondary rounded-full mt-1.5 shrink-0" />
                        <span>{pre}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
              {course.evaluation && (
                <section className="bg-white p-8 rounded-3xl border-2 border-brand-primary/15 shadow-md">
                  <h3 className="text-xl font-extrabold text-brand-primary mb-6 flex items-center italic">
                    <Award className="w-5 h-5 mr-3 text-brand-secondary" />
                    Modalités d'évaluation
                  </h3>
                  <p className="text-sm text-gray-700 font-medium leading-relaxed">
                    {course.evaluation}
                  </p>
                </section>
              )}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-12">
            {/* Stats Card */}
            {(course.statistics || course.salary) && (
              <div className="bg-white p-8 rounded-3xl border-2 border-brand-primary/15 shadow-lg relative overflow-hidden">
                <h3 className="text-xl font-extrabold text-brand-primary mb-6 flex items-center italic">
                  <TrendingUp className="w-5 h-5 mr-3 text-brand-secondary" />
                  Chiffres clés
                </h3>
                <div className="space-y-6">
                  {course.salary && (
                    <div className="pb-6 border-b border-gray-100">
                      <div className="text-3xl font-black text-brand-primary mb-1">
                        {course.salary}
                      </div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-brand-primary">
                        Salaire moyen constaté
                      </div>
                    </div>
                  )}
                  {course.statistics?.map((stat, i) => (
                    <div key={i} className="pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                      <div className="text-3xl font-black text-brand-secondary mb-1">
                        {stat.value}
                      </div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-brand-primary">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Admission Info */}
            <div className="bg-brand-primary p-8 rounded-3xl text-white border-2 border-brand-accent/30 shadow-2xl">
              <h3 className="text-2xl font-extrabold mb-6 italic text-brand-accent">Rejoindre la formation</h3>
              <div className="space-y-6 mb-8">
                <div>
                  <div className="text-xs uppercase tracking-widest text-amber-100 font-black mb-2">Processus</div>
                  <div className="text-sm font-normal text-white leading-relaxed">
                    Dossier de candidature + Entretien de motivation + Tests de positionnement si requis.
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-amber-100 font-black mb-2">Alternance</div>
                  <div className="text-sm font-normal text-white leading-relaxed">
                    Accompagnement personnalisé à la recherche d'entreprise avec nos partenaires.
                  </div>
                </div>
              </div>
              <Link 
                to="/contact"
                className="block w-full py-4 bg-brand-accent hover:bg-white text-brand-primary rounded-2xl text-center font-black uppercase text-xs tracking-wider transition-all shadow-xl hover:scale-105"
              >
                Postuler maintenant
              </Link>
            </div>
            
            {/* Outcomes */}
            <div className="bg-white p-8 rounded-3xl border-2 border-brand-primary/15 shadow-md">
              <h3 className="text-xl font-extrabold text-brand-primary mb-6 italic">Débouchés métiers</h3>
              <div className="flex flex-wrap gap-2">
                {course.outcomes.map((job, i) => (
                  <span key={i} className="px-3 py-1.5 bg-[#F1F5F9] rounded-xl text-xs font-bold text-brand-primary border border-gray-200">
                    {job}
                  </span>
                ))}
              </div>
            </div>

            {/* Pursuit of Studies */}
            {course.pursuitOfStudies && (
              <div className="bg-brand-primary p-8 rounded-3xl text-white border-2 border-brand-accent/30 shadow-xl">
                <h3 className="text-2xl font-extrabold mb-4 italic text-brand-accent">Et après ?</h3>
                <p className="text-white font-normal text-sm mb-6 leading-relaxed">
                  {course.pursuitOfStudies.description}
                </p>
                <div className="space-y-3">
                  {course.pursuitOfStudies.examples.map((ex, i) => (
                    <div key={i} className="flex items-center space-x-3 text-xs font-black uppercase tracking-wider text-amber-100">
                      <div className="w-2 h-2 bg-brand-accent rounded-full shrink-0" />
                      <span>{ex}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
