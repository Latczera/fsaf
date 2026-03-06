import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-deep-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex flex-col">
              <span className="text-2xl font-serif tracking-widest text-white">
                CAÍQUE KENSON
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">Beauty & Aesthetic</span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Beleza que transforma autoestima. Com mais de 15 anos de experiência, elevando a estética ao nível da arte.
            </p>
            <div className="flex space-x-4">
              <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-serif text-lg mb-6">Navegação</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/estudio" className="hover:text-white transition-colors">O Estúdio</Link></li>
              <li><Link to="/servicos" className="hover:text-white transition-colors">Serviços</Link></li>
              <li><Link to="/cursos" className="hover:text-white transition-colors">Cursos</Link></li>
              <li><Link to="/resultados" className="hover:text-white transition-colors">Resultados</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-serif text-lg mb-6">Contato</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-gold shrink-0 mt-1" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-gold shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-gold shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter/CTA */}
          <div>
            <h4 className="text-gold font-serif text-lg mb-6">Horário de Atendimento</h4>
            <div className="text-sm text-white/60 space-y-2">
              <p>Segunda a Sábado</p>
              <p className="text-white font-medium">09:00 — 19:00</p>
              <p className="pt-4 italic">Agende seu momento de beleza.</p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 text-center text-xs text-white/30">
          <p>© {new Date().getFullYear()} Espaço Caíque Kenson. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
