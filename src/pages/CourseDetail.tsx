import { useParams, Link } from 'react-router-dom';
import { COURSES } from '../constants';
import { motion } from 'motion/react';
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
      <div className="min-h-screen flex items-center justify-center bg-brand-bg">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-brand-text mb-4">Formation non trouvée</h2>
          <Link to="/formations" className="text-brand-secondary font-bold hover:underline">
            Retour au catalogue
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-32 pb-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <Link 
          to="/formations" 
          className="inline-flex items-center text-brand-text/50 hover:text-brand-secondary mb-12 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Retour aux formations
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-8">
            <div className="flex flex-wrap gap-2 mb-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-secondary-soft text-brand-secondary text-[10px] font-bold uppercase tracking-widest">
                {course.level}
              </div>
              {course.certifications?.map((cert, i) => (
                <div key={i} className="inline-flex items-center px-3 py-1 rounded-full bg-brand-accent-soft text-brand-accent-dark text-[10px] font-bold uppercase tracking-widest">
                  {cert}
                </div>
              ))}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-brand-text mb-8 leading-[1.1]">
              {course.title}
            </h1>
            <p className="text-xl text-brand-text/60 font-light max-w-3xl leading-relaxed">
              {course.fullDescription || course.description}
            </p>
          </div>
        </div>

        {/* Quick Info Bar */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-24 bg-white p-8 rounded-[32px] border border-brand-border shadow-sm">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-brand-bg rounded-2xl flex items-center justify-center text-brand-secondary">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-brand-muted font-bold">Durée</div>
              <div className="font-bold text-brand-text">{course.duration}</div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-brand-bg rounded-2xl flex items-center justify-center text-brand-secondary">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-brand-muted font-bold">Volume</div>
              <div className="font-bold text-brand-text">{course.totalHours || "Varies"}</div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-brand-bg rounded-2xl flex items-center justify-center text-brand-secondary">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-brand-muted font-bold">Diplôme</div>
              <div className="font-bold text-brand-text truncate max-w-[120px]">{course.level}</div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-brand-bg rounded-2xl flex items-center justify-center text-brand-secondary">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-brand-muted font-bold">Format</div>
              <div className="font-bold text-brand-text">Alternance</div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-brand-bg rounded-2xl flex items-center justify-center text-brand-secondary">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-brand-muted font-bold">Rythme</div>
              <div className="font-bold text-brand-text">{course.rhythm || "3j/2j"}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-24">
            {/* Objectives */}
            <section>
              <h2 className="text-3xl font-bold text-brand-text mb-8 flex items-center italic">
                <BookOpen className="w-8 h-8 mr-4 text-brand-secondary" />
                Objectifs de la formation
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {course.objectives.map((obj, i) => (
                  <div key={i} className="flex items-start space-x-4 group p-6 bg-white rounded-3xl border border-brand-border hover:shadow-md transition-all">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent-dark shrink-0 mt-1" />
                    <span className="text-brand-text/70 font-light leading-relaxed group-hover:text-brand-text transition-colors">
                      {obj}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Detailed Program Table */}
            {course.detailedProgram && (
              <section>
                <h2 className="text-3xl font-bold text-brand-text mb-8 flex items-center italic">
                  <Users className="w-8 h-8 mr-4 text-brand-secondary" />
                  Programme Détaillé
                </h2>
                <div className="overflow-x-auto bg-white rounded-3xl border border-brand-border shadow-sm">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-brand-bg/50">
                        {course.detailedProgram.headers.map((header, i) => (
                          <th key={i} className="p-6 text-[10px] uppercase tracking-widest font-bold text-brand-muted border-b border-brand-border">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {course.detailedProgram.rows.map((row, i) => (
                        <tr key={i} className="hover:bg-brand-bg/20 transition-colors">
                          {row.map((cell, j) => (
                            <td key={j} className="p-6 text-sm text-brand-text/70 font-light border-b border-brand-border last:border-0">
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
                <h2 className="text-3xl font-bold text-brand-text mb-8 flex items-center italic">
                  <FileText className="w-8 h-8 mr-4 text-brand-secondary" />
                  Programme d'Enseignement
                </h2>
                <div className="space-y-8">
                  {course.program.map((p, i) => (
                    <div key={i} className="bg-white p-8 rounded-3xl border border-brand-border shadow-sm">
                      <h3 className="text-xl font-bold text-brand-text mb-4 italic">
                        {p.title}
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {p.items.map((item, j) => (
                          <li key={j} className="flex items-center space-x-2 text-sm text-brand-text/60 font-light">
                            <span className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
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
                <section className="bg-white p-8 rounded-[40px] border border-slate-100">
                  <h3 className="text-xl font-bold text-brand-text mb-6 flex items-center italic">
                    <AlertCircle className="w-5 h-5 mr-3 text-brand-secondary" />
                    Pré-requis
                  </h3>
                  <ul className="space-y-4">
                    {course.prerequisites.map((pre, i) => (
                      <li key={i} className="flex items-start space-x-3 text-sm text-brand-text/60 font-light">
                        <div className="w-1.5 h-1.5 bg-brand-accent rounded-full mt-1.5 shrink-0" />
                        <span>{pre}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
              {course.evaluation && (
                <section className="bg-white p-8 rounded-[40px] border border-slate-100">
                  <h3 className="text-xl font-bold text-brand-text mb-6 flex items-center italic">
                    <Award className="w-5 h-5 mr-3 text-brand-secondary" />
                    Modalités d'évaluation
                  </h3>
                  <p className="text-sm text-brand-text/60 font-light leading-relaxed">
                    {course.evaluation}
                  </p>
                </section>
              )}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-12">
            {/* Stats Card */}
            {(course.statistics || course.salary) && (
              <div className="bg-white p-8 rounded-[32px] border border-brand-border shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-secondary/5 rounded-full -mr-12 -mt-12" />
                <h3 className="text-xl font-bold text-brand-text mb-6 flex items-center italic">
                  <TrendingUp className="w-5 h-5 mr-3 text-brand-secondary" />
                  Chiffres clés
                </h3>
                <div className="space-y-6">
                  {course.salary && (
                    <div className="pb-6 border-b border-brand-border">
                      <div className="text-3xl font-bold text-brand-accent-dark mb-1">
                        {course.salary}
                      </div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-brand-muted">
                        Salaire moyen constaté
                      </div>
                    </div>
                  )}
                  {course.statistics?.map((stat, i) => (
                    <div key={i} className="pb-6 border-b border-brand-border last:border-0 last:pb-0">
                      <div className="text-3xl font-bold text-brand-secondary mb-1">
                        {stat.value}
                      </div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-brand-muted">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Admission Info */}
            <div className="bg-brand-text p-8 rounded-[32px] text-white">
              <h3 className="text-xl font-bold mb-6 italic text-brand-accent">Rejoindre la formation</h3>
              <div className="space-y-6 mb-8">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-2">Processus</div>
                  <div className="text-sm font-light leading-relaxed">
                    Dossier de candidature + Entretien de motivation + Tests de positionnement si requis.
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-2">Alternance</div>
                  <div className="text-sm font-light leading-relaxed">
                    Accompagnement personnalisé à la recherche d'entreprise avec nos partenaires.
                  </div>
                </div>
              </div>
              <Link 
                to="/contact"
                className="block w-full py-4 bg-brand-secondary text-white rounded-2xl text-center font-bold hover:bg-brand-secondary-hover transition-all shadow-lg shadow-brand-secondary/20"
              >
                Postuler maintenant
              </Link>
            </div>
            
            {/* Outcomes */}
            <div className="bg-white p-8 rounded-[32px] border border-brand-border shadow-sm">
              <h3 className="text-xl font-bold text-brand-text mb-6 italic">Débouchés métiers</h3>
              <div className="flex flex-wrap gap-2">
                {course.outcomes.map((job, i) => (
                  <span key={i} className="px-3 py-1.5 bg-brand-bg rounded-lg text-xs font-bold text-brand-text/60 border border-brand-border">
                    {job}
                  </span>
                ))}
              </div>
            </div>

            {/* Pursuit of Studies */}
            {course.pursuitOfStudies && (
              <div className="bg-brand-primary p-12 rounded-[48px] text-white relative h-full">
                <h2 className="text-2xl font-bold mb-4 italic">Et après ?</h2>
                <p className="text-white/60 text-sm font-light mb-8 leading-relaxed">
                  {course.pursuitOfStudies.description}
                </p>
                <div className="space-y-3">
                  {course.pursuitOfStudies.examples.map((ex, i) => (
                    <div key={i} className="flex items-center space-x-3 text-xs font-bold uppercase tracking-widest text-white/80">
                      <div className="w-1.5 h-1.5 bg-brand-secondary rounded-full" />
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
