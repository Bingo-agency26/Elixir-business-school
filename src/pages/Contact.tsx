import React, { useState, FormEvent } from 'react';
import SectionHeading from '../components/SectionHeading';
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

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
      console.error("EmailJS Error:", err);
      setStatus('error');
      setErrorMessage(err?.text || "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Parlons de votre Avenir"
          subtitle="NOUS CONTACTER"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h3 className="text-3xl font-extrabold text-brand-primary mb-8 leading-tight italic">
              À votre écoute pour <br />
              votre <span className="text-brand-secondary underline decoration-brand-accent/60 decoration-4 underline-offset-8">Succès</span>.
            </h3>
            <p className="text-lg text-gray-700 font-normal leading-relaxed mb-12">
              Une question sur une formation, les modalités d'alternance ou le processus d'admission ? Nos experts vous répondent sous 24h.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6 p-4 rounded-3xl bg-white border-2 border-brand-primary/10 shadow-md hover:shadow-xl hover:border-brand-secondary hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                <div className="w-14 h-14 bg-brand-primary rounded-2xl shadow-md flex items-center justify-center shrink-0 group-hover:bg-brand-secondary group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-6 h-6 text-brand-accent group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-brand-primary font-black mb-1">Téléphone</h4>
                  <a href="tel:0759069817" className="text-xl font-extrabold text-brand-primary group-hover:text-brand-secondary transition-colors">07 59 06 98 17</a>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-4 rounded-3xl bg-white border-2 border-brand-primary/10 shadow-md hover:shadow-xl hover:border-brand-secondary hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                <div className="w-14 h-14 bg-brand-primary rounded-2xl shadow-md flex items-center justify-center shrink-0 group-hover:bg-brand-secondary group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-6 h-6 text-brand-accent group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-brand-primary font-black mb-1">Email</h4>
                  <a href="mailto:contact@elixirbusiness-school.fr" className="text-xl font-extrabold text-brand-primary group-hover:text-brand-secondary transition-colors">contact@elixirbusiness-school.fr</a>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-4 rounded-3xl bg-white border-2 border-brand-primary/10 shadow-md hover:shadow-xl hover:border-brand-secondary hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                <div className="w-14 h-14 bg-brand-primary rounded-2xl shadow-md flex items-center justify-center shrink-0 group-hover:bg-brand-secondary group-hover:scale-110 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-brand-accent group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-brand-primary font-black mb-1">Adresse</h4>
                  <p className="text-lg font-extrabold text-brand-primary">16 rue Saint Antoine du T, 31000 Toulouse</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white p-10 rounded-[48px] shadow-2xl border-2 border-brand-primary/15 relative overflow-hidden">
              <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                {status === 'success' && (
                  <div className="p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-emerald-900 flex items-center space-x-3 text-sm font-bold shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Votre demande a été envoyée avec succès ! Notre équipe vous répondra sous 24h.</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 rounded-2xl bg-red-50 border-2 border-red-300 text-red-900 flex items-center space-x-3 text-sm font-bold shadow-sm">
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                    <span>{errorMessage || "Une erreur est survenue lors de l'envoi du message."}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstname" className="text-xs uppercase tracking-widest font-black text-brand-primary ml-2">Prénom</label>
                    <input
                      id="firstname"
                      type="text"
                      required
                      value={formData.firstname}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl bg-[#F8FAFC] border-2 border-gray-200 text-brand-primary font-medium focus:border-brand-secondary focus:bg-white outline-none transition-all"
                      placeholder="Jean"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastname" className="text-xs uppercase tracking-widest font-black text-brand-primary ml-2">Nom</label>
                    <input
                      id="lastname"
                      type="text"
                      required
                      value={formData.lastname}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl bg-[#F8FAFC] border-2 border-gray-200 text-brand-primary font-medium focus:border-brand-secondary focus:bg-white outline-none transition-all"
                      placeholder="Dupont"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs uppercase tracking-widest font-black text-brand-primary ml-2">Email Professionnel</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl bg-[#F8FAFC] border-2 border-gray-200 text-brand-primary font-medium focus:border-brand-secondary focus:bg-white outline-none transition-all"
                      placeholder="jean.dupont@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs uppercase tracking-widest font-black text-brand-primary ml-2">Numéro de Téléphone</label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl bg-[#F8FAFC] border-2 border-gray-200 text-brand-primary font-medium focus:border-brand-secondary focus:bg-white outline-none transition-all"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs uppercase tracking-widest font-black text-brand-primary ml-2">Sujet</label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl bg-[#F8FAFC] border-2 border-gray-200 text-brand-primary font-medium focus:border-brand-secondary focus:bg-white outline-none transition-all cursor-pointer"
                  >
                    <option>Demande d'informations</option>
                    <option>Candidature Formation</option>
                    <option>Partenariat Entreprise</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest font-black text-brand-primary ml-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl bg-[#F8FAFC] border-2 border-gray-200 text-brand-primary font-medium focus:border-brand-secondary focus:bg-white outline-none transition-all resize-none"
                    placeholder="Comment pouvons-nous vous aider ?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-primary hover:bg-brand-secondary text-white py-5 rounded-2xl font-black text-sm uppercase tracking-wider flex items-center justify-center space-x-2 shadow-xl hover:scale-[1.02] transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <span>Envoyer ma demande</span>
                      <Send className="w-4 h-4 text-brand-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
