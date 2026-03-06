import React from 'react';
import { motion } from 'motion/react';
import { Award, Heart, Sparkles, Users } from 'lucide-react';

export default function Studio() {
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
            Nossa Essência
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl font-serif"
          >
            O Estúdio
          </motion.h1>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-serif leading-tight">Um olhar atento desde os 15 anos.</h2>
            <div className="space-y-6 text-deep-black/70 leading-relaxed font-light">
              <p>
                O Espaço Caíque Kenson nasceu de uma paixão verdadeira pela estética e pelo cuidado com a beleza. Desde muito jovem, Caíque demonstrava um olhar atento para maquiagem e design de sobrancelhas.
              </p>
              <p>
                Com apenas 15 anos já ajudava amigas e familiares a aprimorar maquiagem e sobrancelhas. Com o passar do tempo, esse talento natural se transformou em profissão.
              </p>
              <p>
                Ao longo dos anos investiu em diversos cursos e especializações na área da beleza. Hoje possui um espaço próprio onde atende clientes e também compartilha conhecimento através de cursos.
              </p>
              <p className="text-gold font-medium italic">
                "Seu objetivo é simples: valorizar a beleza natural e elevar a autoestima de cada pessoa atendida."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-full overflow-hidden border-[15px] border-white shadow-2xl">
              <img 
                src="creenshotstudio11.png" 
                alt="Caíque Kenson" 
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold rounded-full flex items-center justify-center text-white shadow-lg -rotate-12">
              <span className="text-xs font-bold tracking-widest text-center">15 ANOS DE <br /> EXPERIÊNCIA</span>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: <Heart className="text-gold" />, title: "Paixão", desc: "Cuidado genuíno em cada procedimento realizado." },
            { icon: <Sparkles className="text-gold" />, title: "Técnica", desc: "Especialização constante nas melhores tendências." },
            { icon: <Users className="text-gold" />, title: "Autoestima", desc: "Nosso foco é fazer você se sentir incrível." },
          ].map((value, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 bg-white rounded-3xl border border-black/5 text-center space-y-4 hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-beige flex items-center justify-center mx-auto mb-6">
                {value.icon}
              </div>
              <h3 className="text-2xl font-serif">{value.title}</h3>
              <p className="text-sm text-deep-black/50 leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
