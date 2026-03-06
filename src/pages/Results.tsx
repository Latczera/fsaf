import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X } from 'lucide-react';

const GALLERY_ITEMS = [
  { id: 1, title: "Maquiagem Social", category: "Maquiagem", img: "creenshomakeupt11.png" },
  { id: 2, title: "Design de Sobrancelhas", category: "Sobrancelhas", img: "creenshomicrot11.png" },
  { id: 3, title: "Extensão de Cílios", category: "Cílios", img: "creenshotcilius11.png" },
  { id: 4, title: "Alongamento em Gel", category: "Unhas", img: "creenshotunha11.png" },
  { id: 5, title: "Micropigmentação Shadow", category: "Micropigmentação", img: "creenshot12.png" },
  { id: 6, title: "Maquiagem Noiva", category: "Maquiagem", img: "creenshotnoiva11.png" },
  { id: 7, title: "Antes e Depois", category: "Transformação", img: "creenshoantesdepois11t11.png" },
  { id: 8, title: "Revitalização Labial", category: "Estética", img: "creenshotantes depois11.png" },
  { id: 9, title: "Design com Henna", category: "Sobrancelhas", img: "creenshohennat11.png" },
];

const categories = ["Todos", "Maquiagem", "Sobrancelhas", "Cílios", "Unhas", "Micropigmentação"];

export default function Results() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedImage, setSelectedImage] = useState<null | typeof GALLERY_ITEMS[0]>(null);

  const filteredItems = activeCategory === "Todos" 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4 block"
          >
            Galeria de Transformações
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl font-serif"
          >
            Nossos Resultados
          </motion.h1>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-xs tracking-widest transition-all ${
                activeCategory === cat 
                  ? 'bg-deep-black text-white shadow-lg' 
                  : 'bg-white text-deep-black border border-black/5 hover:border-gold'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-square rounded-[2rem] overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-deep-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center p-6">
                    <Maximize2 className="text-white mx-auto mb-4" size={32} />
                    <h3 className="text-white font-serif text-2xl">{item.title}</h3>
                    <p className="text-white/60 text-xs tracking-widest uppercase mt-2">{item.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-deep-black/95 flex items-center justify-center p-6"
              onClick={() => setSelectedImage(null)}
            >
              <button className="absolute top-10 right-10 text-white hover:text-gold transition-colors">
                <X size={40} />
              </button>
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={selectedImage.img} 
                  alt={selectedImage.title} 
                  className="w-full h-auto max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="mt-8 text-center">
                  <h3 className="text-white font-serif text-4xl mb-2">{selectedImage.title}</h3>
                  <p className="text-gold tracking-[0.3em] uppercase text-sm">{selectedImage.category}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
