import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Award, Users, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
/// <reference types="vite/client" />

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="caique.png" 
            alt="Beauty Studio" 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-beige via-beige/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
              Bem-vindo ao Luxo & Estética
            </span>
            <h1 className="text-6xl md:text-8xl font-serif mb-6 leading-tight">
              Espaço <br />
              <span className="italic">Caíque Kenson</span>
            </h1>
            <p className="text-lg text-deep-black/70 mb-10 leading-relaxed font-light">
              Beleza, técnica e dedicação em cada detalhe. Com mais de 15 anos de experiência, transformamos sua autoestima através de procedimentos estéticos refinados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/servicos" 
                className="bg-deep-black text-white px-10 py-4 rounded-full text-sm tracking-widest hover:bg-gold transition-all flex items-center justify-center group"
              >
                VER SERVIÇOS
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contato" 
                className="border border-deep-black text-deep-black px-10 py-4 rounded-full text-sm tracking-widest hover:bg-deep-black hover:text-white transition-all text-center"
              >
                AGENDAR AGORA
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Diferenciais */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Award className="text-gold" />, title: "15+ Anos", desc: "De experiência na área" },
              { icon: <Sparkles className="text-gold" />, title: "Técnicas Modernas", desc: "Procedimentos de última geração" },
              { icon: <Users className="text-gold" />, title: "Personalizado", desc: "Atendimento focado em você" },
              { icon: <CheckCircle2 className="text-gold" />, title: "Cursos", desc: "Formação profissionalizante" },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center space-y-4 p-8 rounded-2xl bg-beige/30 border border-black/5 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif">{item.title}</h3>
                <p className="text-sm text-deep-black/50">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="espaco.jpg" 
                  alt="Caíque Kenson" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-nude rounded-3xl -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <span className="text-gold font-medium tracking-[0.3em] uppercase text-xs">Nossa História</span>
              <h2 className="text-5xl font-serif leading-tight">Paixão verdadeira pela estética e pelo cuidado.</h2>
              <p className="text-deep-black/70 leading-relaxed font-light">
                O Espaço Caíque Kenson nasceu de uma paixão verdadeira pela estética e pelo cuidado com a beleza. Desde muito jovem, Caíque demonstrava um olhar atento para maquiagem e design de sobrancelhas.
              </p>
              <p className="text-deep-black/70 leading-relaxed font-light">
                Hoje possui um espaço próprio onde atende clientes e também compartilha conhecimento através de cursos. Seu objetivo é simples: valorizar a beleza natural e elevar a autoestima de cada pessoa atendida.
              </p>
              <Link 
                to="/estudio" 
                className="inline-flex items-center text-gold font-medium tracking-widest text-sm hover:translate-x-2 transition-transform"
              >
                CONHEÇA MAIS <ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-deep-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4 block">Excelência em Serviços</span>
            <h2 className="text-5xl font-serif">O que fazemos de melhor</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Maquiagem", img: "creenshot11.png", desc: "Técnicas para noivas e eventos sociais." },
              { title: "Sobrancelhas", img: "creenshot12.png", desc: "Design personalizado e micropigmentação." },
              { title: "Estética Avançada", img: "creenshot estetica11.png", desc: "Nanoblading e revitalização labial." },
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-3xl aspect-[3/4]"
              >
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-2xl font-serif mb-2">{service.title}</h3>
                  <p className="text-sm text-white/60 mb-6">{service.desc}</p>
                  <Link to="/servicos" className="text-gold text-xs tracking-widest font-bold">VER MAIS</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-nude/30 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-5xl font-serif mb-8 italic">“Beleza que transforma autoestima.”</h2>
          <p className="text-lg text-deep-black/60 mb-12 font-light">
            Agende seu horário e descubra o poder da sua beleza natural com quem entende de verdade.
          </p>
          <Link 
            to="/contato" 
            className="bg-deep-black text-white px-12 py-5 rounded-full text-sm tracking-widest hover:bg-gold transition-all inline-block"
          >
            FALAR NO WHATSAPP
          </Link>
        </div>
      </section>
    </div>
  );
}
