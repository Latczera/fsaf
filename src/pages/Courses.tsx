import React from 'react';
import { motion } from 'motion/react';
import { COURSES } from '../constants';
import { GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Courses() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4 block"
          >
            Formação Profissional
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl font-serif"
          >
            Nossos Cursos
          </motion.h1>
          <p className="mt-8 text-deep-black/60 max-w-2xl mx-auto font-light">
            Cursos desenvolvidos para quem deseja iniciar ou se especializar na área da beleza, com técnicas exclusivas e suporte completo.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {COURSES.map((course, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white p-10 rounded-[2.5rem] border border-black/5 hover:border-gold/30 hover:shadow-2xl transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <GraduationCap size={80} />
              </div>
              
              <div className="w-14 h-14 rounded-2xl bg-beige flex items-center justify-center mb-8 group-hover:bg-gold group-hover:text-white transition-colors">
                <CheckCircle2 size={24} />
              </div>
              
              <h3 className="text-2xl font-serif mb-6 leading-tight group-hover:text-gold transition-colors">
                {course}
              </h3>
              
              <ul className="space-y-3 mb-10 text-sm text-deep-black/50">
                <li className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-gold rounded-full" />
                  <span>Certificado incluso</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-gold rounded-full" />
                  <span>Material de apoio</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-gold rounded-full" />
                  <span>Prática assistida</span>
                </li>
              </ul>

              <a 
                href={`https://wa.me/5515998424844?text=${encodeURIComponent(`Olá, tenho interesse no curso de ${course}. Poderia me passar mais informações?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full border border-black/10 text-xs tracking-widest font-bold group-hover:bg-deep-black group-hover:text-white transition-all text-center block"
              >
                QUERO FAZER ESTE CURSO
              </a>
            </motion.div>
          ))}
        </div>

        {/* Why Study With Us */}
        <div className="bg-nude/20 rounded-[3rem] p-12 lg:p-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif mb-8">Por que escolher nossa formação?</h2>
              <div className="space-y-8">
                {[
                  { title: "Metodologia Prática", desc: "Foco total no aprendizado prático para garantir sua segurança profissional." },
                  { title: "Suporte Pós-Curso", desc: "Acompanhamento para tirar dúvidas mesmo após a conclusão das aulas." },
                  { title: "Técnicas Exclusivas", desc: "Aprenda o que há de mais moderno no mercado internacional." },
                ].map((item, i) => (
                  <div key={i} className="flex space-x-6">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                      <span className="text-gold font-serif font-bold">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-serif text-xl mb-2">{item.title}</h4>
                      <p className="text-sm text-deep-black/50 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&q=80&w=1000" 
                  alt="Training" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-xl p-8 text-center">
                <p className="text-[10px] font-bold tracking-widest leading-tight">VAGAS <br /> LIMITADAS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
