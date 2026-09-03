import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-brand-text pt-20 pb-10 px-6 border-t border-brand-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 relative z-10">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center space-x-3 mb-6">
            <Logo className="h-10 sm:h-12 w-auto" />
            <span className="font-sans font-bold text-xl tracking-tight uppercase">
              ELIXIR <span className="font-light opacity-60">BUSINESS SCHOOL</span>
            </span>
          </Link>
          <p className="text-brand-text/40 text-sm leading-relaxed mb-6 font-light">
            Une école d'excellence dédiée à la réussite professionnelle et à l'ambition des futurs leaders du commerce et du marketing.
          </p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Instagram Elixir Business School" className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center hover:bg-brand-secondary-hover hover:text-white transition-colors group">
              <Instagram className="w-5 h-5 text-brand-text/40 group-hover:text-white transition-colors" />
            </a>
            <a href="#" aria-label="LinkedIn Elixir Business School" className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center hover:bg-brand-secondary-hover hover:text-white transition-colors group">
              <Linkedin className="w-5 h-5 text-brand-text/40 group-hover:text-white transition-colors" />
            </a>
            <a href="#" aria-label="Facebook Elixir Business School" className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center hover:bg-brand-secondary-hover hover:text-white transition-colors group">
              <Facebook className="w-5 h-5 text-brand-text/40 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-brand-secondary mb-6">Formations</h4>
          <ul className="space-y-4 text-sm text-brand-text/40">
            <li><Link to="/formations" className="hover:text-brand-secondary transition-colors">BTS MCO</Link></li>
            <li><Link to="/formations" className="hover:text-brand-secondary transition-colors">Marketing Digital</Link></li>
            <li><Link to="/formations" className="hover:text-brand-secondary transition-colors">Management Commercial</Link></li>
            <li><Link to="/formations" className="hover:text-brand-secondary transition-colors">Vente & Relation Client</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-brand-secondary mb-6">L'École</h4>
          <ul className="space-y-4 text-sm text-brand-text/40">
            <li><Link to="/a-propos" className="hover:text-brand-secondary transition-colors">À Propos</Link></li>
            <li><Link to="/admission" className="hover:text-brand-secondary transition-colors">Admission</Link></li>
            <li><Link to="/entreprises" className="hover:text-brand-secondary transition-colors">Entreprises</Link></li>
            <li><Link to="/contact" className="hover:text-brand-secondary transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-brand-secondary mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-brand-text/40">
            <li className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-brand-secondary shrink-0" />
              <span>16 rue Saint Antoine du T, 31000 Toulouse</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-brand-secondary shrink-0" />
              <a href="tel:0759069817" className="hover:text-brand-secondary transition-colors">07 59 06 98 17</a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-brand-secondary shrink-0" />
              <a href="mailto:contact@elixirbusiness-school.fr" className="hover:text-brand-secondary transition-colors">contact@elixirbusiness-school.fr</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-brand-border flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        <p className="text-brand-text/20 text-[10px] uppercase tracking-widest text-center md:text-left">
          &copy; {currentYear} Elixir Business School. Tous droits réservés.
        </p>
        <div className="flex space-x-8 text-[10px] uppercase tracking-widest text-brand-text/20">
          <Link to="/mentions-legales" className="hover:text-brand-secondary">Mentions Légales</Link>
          <Link to="/confidentialite" className="hover:text-brand-secondary">Politique de Confidentialité</Link>
        </div>
      </div>
    </footer>
  );
}
