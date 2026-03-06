import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../constants';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
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
            Voz de quem confia
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl font-serif"
          >
            Depoimentos
          </motion.h1>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-12 rounded-[3rem] border border-black/5 relative shadow-sm hover:shadow-2xl transition-all group"
            >
              <div className="absolute -top-6 left-12 w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                <Quote size={20} />
              </div>
              
              <div className="flex space-x-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              
              <p className="text-lg font-serif italic mb-10 leading-relaxed text-deep-black/80">
                “{item.text}”
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-nude flex items-center justify-center text-gold font-bold">
                  {item.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-widest">{item.name.toUpperCase()}</h4>
                  <p className="text-xs text-deep-black/40">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { label: "Clientes Satisfeitas", value: "2.000+" },
            { label: "Anos de Mercado", value: "15+" },
            { label: "Procedimentos", value: "5.000+" },
          ].map((stat, i) => (
            <div key={i} className="p-12 bg-beige/50 rounded-[2rem]">
              <h3 className="text-5xl font-serif text-gold mb-2">{stat.value}</h3>
              <p className="text-xs tracking-[0.2em] uppercase font-bold text-deep-black/40">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
