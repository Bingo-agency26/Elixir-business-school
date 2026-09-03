import SectionHeading from '../components/SectionHeading';
import { motion } from 'motion/react';
import { CheckCircle2, FileText, UserCheck, Calendar, ArrowRight, GraduationCap, Globe, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Admission() {
  const steps = [
    {
      stepNumber: "01",
      icon: <FileText className="w-8 h-8 text-brand-accent" />,
      title: "Dossier de candidature",
      desc: "Complétez votre formulaire en ligne avec votre CV et lettre de motivation en quelques clics."
    },
    {
      stepNumber: "02",
      icon: <UserCheck className="w-8 h-8 text-brand-accent" />,
      title: "Entretien individuel",
      desc: "Échangez avec nos responsables d'admission sur votre parcours et vos ambitions professionnelles."
    },
    {
      stepNumber: "03",
      icon: <Calendar className="w-8 h-8 text-brand-accent" />,
      title: "Réponse sous 48h",
      desc: "Nous nous engageons sur une réactivité maximale avec une réponse définitive sous 48 heures."
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
      icon: <GraduationCap className="w-8 h-8 text-brand-accent" />,
      title: "Étudiants résidants en France",
      desc: "Les étudiants en France peuvent soumettre leur dossier en ligne. L'admission est évaluée sur des critères académiques et professionnels. Un entretien individuel approfondira vos motivations pour valider votre adéquation avec notre programme.",
      cta: "Candidater maintenant",
      href: "/contact"
    },
    {
      icon: <Globe className="w-8 h-8 text-brand-accent" />,
      title: "Étudiants Internationaux",
      desc: "Nous accueillons les candidatures internationales avec une attention particulière à l'excellence académique. Chaque dossier est minutieusement examiné et les candidats sélectionnés bénéficient d’un entretien personnalisé à distance.",
      cta: "Candidater maintenant",
      href: "/contact"
    },
    {
      icon: <User className="w-8 h-8 text-brand-accent" />,
      title: "Accompagnement individuel",
      desc: "Nous vous accompagnons individuellement dans votre recherche d'alternance. Notre suivi sur-mesure vous garantit un soutien rigoureux pour décrocher l'opportunité idéale en entreprise.",
      cta: "Contacter un conseiller",
      href: "/contact"
    }
  ];

  return (
    <main className="pt-32 pb-24 px-6 bg-[#F1F5F9] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Rejoindre l'Excellence"
          subtitle="Processus d'Admission"
        />

        {/* Processus d'admission en 3 étapes avec numérotation ultra-lisible */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border-2 border-brand-primary/15 shadow-xl hover:shadow-2xl hover:border-brand-secondary transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
                  <div className="w-14 h-14 bg-brand-primary rounded-2xl flex items-center justify-center shrink-0 shadow-md">
                    {step.icon}
                  </div>
                  {/* Badge numéro étape sombre et doré à très haut contraste */}
                  <span className="text-xl font-black text-brand-accent bg-brand-primary px-5 py-2 rounded-2xl border-2 border-brand-accent/40 shadow-md tracking-wider">
                    ÉTAPE {step.stepNumber}
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-brand-primary mb-3">{step.title}</h3>
                <p className="text-gray-700 font-normal leading-relaxed text-base">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Modalités d'admission avec cadres contrastés et boutons visibles */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-2 bg-brand-secondary rounded-full" />
            <h2 className="text-3xl font-extrabold text-brand-primary">
              Modalités <span className="bg-brand-primary text-brand-accent px-4 py-1.5 rounded-xl border border-brand-accent/30 shadow-md">d'admission</span>
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
                className="bg-white p-8 rounded-3xl border-2 border-brand-primary/15 shadow-lg hover:shadow-2xl hover:border-brand-secondary transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center mb-6 shrink-0 shadow-md">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-extrabold text-brand-primary mb-4">{item.title}</h3>
                  <p className="text-gray-700 font-normal leading-relaxed text-sm mb-8">
                    {item.desc}
                  </p>
                </div>
                <Link
                  to={item.href}
                  className="w-full py-4 px-6 bg-brand-primary hover:bg-brand-secondary text-white font-bold text-xs tracking-wider uppercase rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-[1.02] group"
                >
                  <span>{item.cta}</span>
                  <ArrowRight className="w-4 h-4 text-brand-accent group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section Documents Requis & Accompagnement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="bg-brand-primary p-12 rounded-[40px] text-white shadow-2xl border-2 border-brand-accent/30">
            <h3 className="text-3xl font-extrabold mb-8 italic text-brand-accent">Documents requis</h3>
            <ul className="space-y-6">
              {documents.map((doc, index) => (
                <li key={index} className="flex items-center space-x-4 border-b border-white/15 pb-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-accent shrink-0" />
                  <span className="text-lg font-medium text-white">{doc}</span>
                </li>
              ))}
            </ul>
            <div className="mt-12 bg-white/10 p-8 rounded-3xl border border-brand-accent/30 italic text-amber-100">
              "La sélection repose sur votre potentiel, votre motivation et la cohérence de votre projet professionnel avec l'ADN d'Elixir Business School."
            </div>
          </div>

          <div className="bg-white p-10 rounded-[40px] border-2 border-brand-primary/15 shadow-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="aspect-[16/9] rounded-[32px] overflow-hidden mb-10 shadow-lg border-2 border-brand-primary/10"
            >
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
                alt="Mentorat et accompagnement Elixir Business School"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-primary mb-6 leading-tight">
              Un accompagnement de <br />
              <span className="text-brand-secondary">Premier Rang</span>
            </h3>
            <p className="text-lg text-gray-700 font-normal leading-relaxed mb-8">
              Notre équipe d'admission vous accompagne personnellement dans chaque étape : de l'affinage de votre projet pro jusqu'à la mise en relation avec nos entreprises partenaires.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-primary text-brand-accent rounded-2xl flex items-center justify-center shrink-0 font-extrabold text-lg shadow-md">
                  01
                </div>
                <div>
                  <h4 className="font-extrabold text-brand-primary text-xl mb-1">Orientation</h4>
                  <p className="text-gray-600 font-normal text-sm">Diagnostic de votre parcours pour choisir la meilleure voie d'études.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-primary text-brand-accent rounded-2xl flex items-center justify-center shrink-0 font-extrabold text-lg shadow-md">
                  02
                </div>
                <div>
                  <h4 className="font-extrabold text-brand-primary text-xl mb-1">Coach de Carrière</h4>
                  <p className="text-gray-600 font-normal text-sm">Optimisation de votre CV et préparation intensive aux entretiens.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-primary text-brand-accent rounded-2xl flex items-center justify-center shrink-0 font-extrabold text-lg shadow-md">
                  03
                </div>
                <div>
                  <h4 className="font-extrabold text-brand-primary text-xl mb-1">Placement en Alternance</h4>
                  <p className="text-gray-600 font-normal text-sm">Accès à nos Job Datings exclusifs et mise en relation directe avec notre réseau.</p>
                </div>
              </div>
            </div>

            <Link 
              to="/contact" 
              className="w-full sm:w-auto bg-brand-primary hover:bg-brand-secondary text-white px-10 py-5 rounded-2xl font-extrabold shadow-xl flex items-center justify-center gap-3 group hover:scale-105 transition-all text-base inline-flex"
            >
              <span>Démarrer ma candidature</span>
              <ArrowRight className="w-5 h-5 text-brand-accent group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
