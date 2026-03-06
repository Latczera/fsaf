import React from 'react';
import { motion } from 'motion/react';
import { CONTACT_INFO } from '../constants';
import { MapPin, Phone, Mail, Instagram, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4 block"
          >
            Fale Conosco
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl font-serif"
          >
            Contato
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <h2 className="text-4xl font-serif">Vamos conversar?</h2>
              <p className="text-deep-black/60 leading-relaxed font-light max-w-md">
                Estamos prontos para realçar sua beleza. Entre em contato para agendamentos, dúvidas sobre cursos ou orçamentos personalizados.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white border border-black/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all shadow-sm">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-xs tracking-widest mb-1 uppercase">Endereço</h4>
                  <p className="text-sm text-deep-black/60">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white border border-black/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all shadow-sm">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-xs tracking-widest mb-1 uppercase">WhatsApp</h4>
                  <p className="text-sm text-deep-black/60">{CONTACT_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white border border-black/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all shadow-sm">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-xs tracking-widest mb-1 uppercase">Email</h4>
                  <p className="text-sm text-deep-black/60">{CONTACT_INFO.email}</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="pt-8 flex items-center space-x-6">
              <span className="text-xs tracking-widest font-bold text-deep-black/40 uppercase">Siga-nos:</span>
              <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="text-deep-black hover:text-gold transition-colors">
                <Instagram size={24} />
              </a>
            </div>

            {/* WhatsApp Button */}
            <a 
              href={`https://wa.me/${CONTACT_INFO.phone.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-[#25D366] text-white px-10 py-5 rounded-full text-sm tracking-widest font-bold hover:shadow-xl transition-all"
            >
              <MessageCircle size={20} />
              <span>AGENDAR VIA WHATSAPP</span>
            </a>
          </motion.div>

          {/* Map / Form Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white p-10 rounded-[3rem] border border-black/5 shadow-xl">
              <h3 className="text-2xl font-serif mb-8">Envie uma mensagem</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest font-bold uppercase text-deep-black/40 ml-2">Nome</label>
                    <input type="text" className="w-full bg-beige/30 border border-black/5 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-gold transition-colors" placeholder="Seu nome completo" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest font-bold uppercase text-deep-black/40 ml-2">Telefone</label>
                    <input type="tel" className="w-full bg-beige/30 border border-black/5 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-gold transition-colors" placeholder="(15) 00000-0000" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] tracking-widest font-bold uppercase text-deep-black/40 ml-2">Serviço de Interesse</label>
                  <select className="w-full bg-beige/30 border border-black/5 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-gold transition-colors appearance-none">
                    <option>Maquiagem</option>
                    <option>Sobrancelhas</option>
                    <option>Cílios</option>
                    <option>Unhas</option>
                    <option>Cursos</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] tracking-widest font-bold uppercase text-deep-black/40 ml-2">Mensagem</label>
                  <textarea rows={4} className="w-full bg-beige/30 border border-black/5 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-gold transition-colors" placeholder="Como podemos te ajudar?"></textarea>
                </div>
                <button className="w-full bg-deep-black text-white py-5 rounded-full text-xs tracking-widest font-bold hover:bg-gold transition-all flex items-center justify-center space-x-3">
                  <Send size={16} />
                  <span>ENVIAR MENSAGEM</span>
                </button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video rounded-[3rem] overflow-hidden border border-black/5 shadow-inner grayscale hover:grayscale-0 transition-all duration-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.168516527503!2d-48.41492472467389!3d-23.49045897881182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5999827083073%3A0x7d2879644369796!2sR.%20Jo%C3%A3o%20S%C3%A1tiro%20de%20Almeida%20Leme%2C%20342%20-%20Centro%2C%20Angatuba%20-%20SP%2C%2018240-000!5e0!3m2!1spt-BR!2sbr!4v1709731000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>

        {/* Final Message */}
        <div className="mt-32 text-center">
          <p className="text-2xl font-serif italic text-deep-black/80">
            “Transformar autoestima vai muito além da estética. É cuidado, técnica e dedicação.”
          </p>
        </div>
      </div>
    </div>
  );
}
