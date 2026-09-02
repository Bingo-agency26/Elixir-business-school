import React, { useState, FormEvent } from 'react';
import SectionHeading from '../components/SectionHeading';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { sendContactEmail } from '../lib/email';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    subject: "Demande d'informations",
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      await sendContactEmail(formData);
      setStatus('success');
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        subject: "Demande d'informations",
        message: '',
      });
    } catch (err: any) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setErrorMessage(err?.text || 'Une erreur est survenue lors de l’envoi. Veuillez réespayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

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
                  <a href="tel:0759069817" className="text-xl font-bold text-brand-text hover:text-brand-secondary transition-colors">07 59 06 98 17</a>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-brand-surface rounded-2xl shadow-sm flex items-center justify-center shrink-0 border border-brand-border">
                  <Mail className="w-6 h-6 text-brand-secondary" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-brand-text/40 font-bold mb-1">Email</h4>
                  <a href="mailto:contact@elixirbusiness-school.fr" className="text-xl font-bold text-brand-text hover:text-brand-secondary transition-colors">contact@elixirbusiness-school.fr</a>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-brand-surface rounded-2xl shadow-sm flex items-center justify-center shrink-0 border border-brand-border">
                  <MapPin className="w-6 h-6 text-brand-secondary" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-brand-text/40 font-bold mb-1">Adresse</h4>
                  <p className="text-lg font-bold text-brand-text">16 rue Saint Antoine du T, 31000 Toulouse</p>
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
              
              <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center space-x-3 text-sm font-medium"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Votre demande a été envoyée avec succès ! Notre équipe vous répondra sous 24h.</span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 flex items-center space-x-3 text-sm font-medium"
                  >
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                    <span>{errorMessage || "Une erreur est survenue lors de l'envoi du message."}</span>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstname" className="text-[10px] uppercase tracking-widest font-bold text-brand-text/60 ml-2">Prénom</label>
                    <input
                      id="firstname"
                      type="text"
                      required
                      value={formData.firstname}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-brand-border focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 outline-none transition-all"
                      placeholder="Jean"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastname" className="text-[10px] uppercase tracking-widest font-bold text-brand-text/60 ml-2">Nom</label>
                    <input
                      id="lastname"
                      type="text"
                      required
                      value={formData.lastname}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-brand-border focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 outline-none transition-all"
                      placeholder="Dupont"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] uppercase tracking-widest font-bold text-brand-text/60 ml-2">Email Professionnel</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-brand-border focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 outline-none transition-all"
                      placeholder="jean.dupont@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-[10px] uppercase tracking-widest font-bold text-brand-text/60 ml-2">Numéro de Téléphone</label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-brand-border focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 outline-none transition-all"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-[10px] uppercase tracking-widest font-bold text-brand-text/60 ml-2">Sujet</label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-brand-border focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 outline-none transition-all cursor-pointer"
                  >
                    <option>Demande d'informations</option>
                    <option>Candidature Formation</option>
                    <option>Partenariat Entreprise</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-[10px] uppercase tracking-widest font-bold text-brand-text/60 ml-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-brand-border focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 outline-none transition-all resize-none"
                    placeholder="Comment pouvons-nous vous aider ?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-text text-white py-5 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-brand-secondary-hover hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-xl group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <span>Envoyer ma demande</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
