import SectionHeading from '../components/SectionHeading';
import { motion } from 'motion/react';
import { CheckCircle2, FileText, UserCheck, Calendar, ArrowRight, GraduationCap, Globe, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Admission() {
  const steps = [
    {
      stepNumber: "01",
      icon: <FileText className="w-7 h-7 text-brand-secondary" />,
      title: "Dossier de candidature",
      desc: "Complétez votre formulaire en ligne avec votre CV et lettre de motivation."
    },
    {
      stepNumber: "02",
      icon: <UserCheck className="w-7 h-7 text-brand-secondary" />,
      title: "Entretien individuel",
      desc: "Échangez avec nos responsables sur votre parcours et votre projet professionnel."
    },
    {
      stepNumber: "03",
      icon: <Calendar className="w-7 h-7 text-brand-secondary" />,
      title: "Réponse sous 48h",
      desc: "Nous nous engageons sur une réactivité maximale pour votre admission."
    }
  ];

  const documents = [
    "Curriculum Vitae à jour",
    "Lettre de motivation personnalisée",
    "Copies des derniers diplômes obtenus",
    "Relevés de notes des 2 dernières années",
    "Pièce d'identité en cours de validité"
  ];

  const modalites = [
    {
      icon: <GraduationCap className="w-8 h-8 text-brand-secondary" />,
      title: "Étudiants résidants en France",
      desc: "Les étudiants en France peuvent soumettre leur dossier en ligne, évalué sur des critères académiques et professionnels. Un entretien personnel approfondira les motivations et objectifs de chaque candidat, assurant l'alignement avec les valeurs et exigences de notre programme.",
      cta: "Candidater",
      href: "/contact"
    },
    {
      icon: <Globe className="w-8 h-8 text-brand-secondary" />,
      title: "Étudiants Internationaux",
      desc: "Nous traitons les candidatures internationales avec une attention particulière à l'excellence académique et professionnelle. Chaque dossier est minutieusement examiné, et les candidats retenus sont invités à un entretien pour évaluer leur compatibilité avec nos programmes.",
      cta: "Candidater",
      href: "/contact"
    },
    {
      icon: <User className="w-8 h-8 text-brand-secondary" />,
      title: "Accompagnement individuel",
      desc: "Nous accompagnons individuellement nos étudiants dans leur recherche d'alternance. Notre processus inclut un suivi rigoureux et un soutien sur mesure, garantissant que chaque étudiant trouve une alternance en adéquation avec ses ambitions professionnelles et son parcours académique.",
      cta: "Contacter un conseiller",
      href: "/contact"
    }
  ];

  return (
    <main className="pt-32 pb-24 px-6 bg-brand-bg min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Rejoindre l'Excellence"
          subtitle="Processus d'Admission"
        />

        {/* Processus d'admission en 3 étapes avec numéros bien visibles */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-md hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-brand-secondary-soft rounded-2xl flex items-center justify-center shrink-0">
                    {step.icon}
                  </div>
                  <span className="text-xl font-extrabold text-brand-secondary bg-brand-secondary-soft px-4 py-1.5 rounded-full border border-brand-secondary/20 shadow-xs">
                    {step.stepNumber}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-brand-text mb-3">{step.title}</h3>
                <p className="text-brand-text/70 font-light leading-relaxed text-base">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Modalités d'admission avec cadres/cartes distinctes */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-1 bg-brand-secondary rounded-full" />
            <h2 className="text-3xl font-bold text-brand-text">
              Modalités <span className="bg-brand-secondary text-white px-3 py-1 rounded-md">d'admission</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {modalites.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-brand-secondary-soft rounded-2xl flex items-center justify-center mb-6 shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-text mb-4">{item.title}</h3>
                  <p className="text-brand-text/70 font-light leading-relaxed text-sm mb-8">
                    {item.desc}
                  </p>
                </div>
                <Link
                  to={item.href}
                  className="w-full py-3.5 px-6 bg-brand-text hover:bg-brand-secondary text-white font-bold text-xs tracking-wider uppercase rounded-xl flex items-center justify-center gap-2 transition-all shadow-md group"
                >
                  <span>{item.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section Documents Requis & Accompagnement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="bg-brand-text p-12 rounded-[48px] text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-8 italic text-white">Documents requis</h3>
            <ul className="space-y-6">
              {documents.map((doc, index) => (
                <li key={index} className="flex items-center space-x-4 border-b border-white/10 pb-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-secondary shrink-0" />
                  <span className="text-lg font-light">{doc}</span>
                </li>
              ))}
            </ul>
            <div className="mt-12 bg-white/5 p-8 rounded-3xl border border-white/10 italic text-white/70">
              "La sélection repose sur votre potentiel, votre motivation et la cohérence de votre projet professionnel avec l'ADN d'Elixir Business School."
            </div>
          </div>

          <div className="relative group">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="aspect-[16/9] rounded-[40px] overflow-hidden mb-12 shadow-xl border border-brand-border"
            >
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
                alt="Personalized Mentorship at Elixir Business School"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <h3 className="text-4xl font-bold text-brand-text mb-6 leading-tight">
              Un accompagnement de <br />
              <span className="text-brand-secondary">Premier Rang</span>
            </h3>
            <p className="text-lg text-brand-text/60 font-light leading-relaxed mb-8">
              Notre équipe d'admission vous accompagne personnellement dans chaque étape. De l'affinage de votre projet pro jusqu'à la mise en relation avec nos partenaires pour votre alternance.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-secondary-soft rounded-2xl flex items-center justify-center shrink-0">
                  <span className="text-brand-secondary font-bold">01.</span>
                </div>
                <div>
                  <h4 className="font-bold text-brand-text text-xl mb-2">Orientation</h4>
                  <p className="text-brand-text/50 font-light text-sm">Diagnostic de votre parcours pour choisir la meilleure voie.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-secondary-soft rounded-2xl flex items-center justify-center shrink-0">
                  <span className="text-brand-secondary font-bold">02.</span>
                </div>
                <div>
                  <h4 className="font-bold text-brand-text text-xl mb-2">Coach de Carrière</h4>
                  <p className="text-brand-text/50 font-light text-sm">Amélioration de vos outils de prospection professionnelle.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-secondary-soft rounded-2xl flex items-center justify-center shrink-0">
                  <span className="text-brand-secondary font-bold">03.</span>
                </div>
                <div>
                  <h4 className="font-bold text-brand-text text-xl mb-2">Placement</h4>
                  <p className="text-brand-text/50 font-light text-sm">Accès à nos Job Datings exclusifs et notre réseau d'entreprises.</p>
                </div>
              </div>
            </div>

            <Link 
              to="/contact" 
              className="mt-12 w-full sm:w-auto bg-brand-text text-white px-10 py-5 rounded-full font-bold shadow-xl flex items-center justify-center group hover:bg-brand-secondary transition-all inline-flex"
            >
              <span>Démarrer ma candidature</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
