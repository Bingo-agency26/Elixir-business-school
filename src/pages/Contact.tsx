import SectionHeading from '../components/SectionHeading';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Parlons de votre Avenir"
          subtitle="NOUS CONTACTER"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h3 className="text-3xl font-bold text-brand-text mb-8 leading-tight italic">
              À votre écoute pour <br />
              votre <span className="text-brand-secondary underline decoration-brand-secondary/30 decoration-4 underline-offset-8">Succès</span>.
            </h3>
            <p className="text-lg text-brand-text/60 font-light leading-relaxed mb-12">
              Une question sur une formation, les modalités d'alternance ou le processus d'admission ? Nos experts vous répondent.
            </p>

            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-brand-surface rounded-2xl shadow-sm flex items-center justify-center shrink-0 border border-brand-border">
                  <Phone className="w-6 h-6 text-brand-secondary" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-brand-text/40 font-bold mb-1">Téléphone</h4>
                  <p className="text-xl font-bold text-brand-text">+33 1 23 45 67 89</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-brand-surface rounded-2xl shadow-sm flex items-center justify-center shrink-0 border border-brand-border">
                  <Mail className="w-6 h-6 text-brand-secondary" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-brand-text/40 font-bold mb-1">Email</h4>
                  <p className="text-xl font-bold text-brand-text">contact@elixir-business-school.fr</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-brand-surface rounded-2xl shadow-sm flex items-center justify-center shrink-0 border border-brand-border">
                  <MapPin className="w-6 h-6 text-brand-secondary" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-brand-text/40 font-bold mb-1">Adresse</h4>
                  <p className="text-lg font-bold text-brand-text">123 Avenue de la Réussite, 75000 Paris</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-brand-surface p-10 rounded-[48px] shadow-sm border border-brand-border relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary-soft rounded-full translate-x-1/2 -translate-y-1/2" />
              
              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-brand-text/40 ml-2">Prénom</label>
                    <input
                      type="text"
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-brand-border focus:border-brand-secondary outline-none transition-all"
                      placeholder="Jean"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-brand-text/40 ml-2">Nom</label>
                    <input
                      type="text"
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-brand-border focus:border-brand-secondary outline-none transition-all"
                      placeholder="Dupont"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-text/40 ml-2">Email Professionnel</label>
                  <input
                    type="email"
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-brand-border focus:border-brand-secondary outline-none transition-all"
                    placeholder="jean.dupont@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-text/40 ml-2">Sujet</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-white border border-brand-border focus:border-brand-secondary outline-none transition-all appearance-none cursor-pointer">
                    <option>Demande d'informations</option>
                    <option>Candidature Formation</option>
                    <option>Partenariat Entreprise</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-text/40 ml-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-brand-border focus:border-brand-secondary outline-none transition-all resize-none"
                    placeholder="Comment pouvons-nous vous aider ?"
                  />
                </div>

                <button className="w-full bg-brand-text text-white py-5 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-brand-secondary-hover transition-all shadow-xl group">
                  <span>Envoyer ma demande</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
