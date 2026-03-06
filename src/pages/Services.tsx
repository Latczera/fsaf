import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES, NAIL_SERVICES, CONTACT_INFO } from '../constants';
import { Scissors, Sparkles, Eye, Heart, Star, Plus, Trash2, MessageCircle, X } from 'lucide-react';

interface SelectedService {
  name: string;
  price: string;
}

export default function Services() {
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>([]);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const toggleService = (name: string, price: string) => {
    const exists = selectedServices.find(s => s.name === name);
    if (exists) {
      setSelectedServices(selectedServices.filter(s => s.name !== name));
    } else {
      setSelectedServices([...selectedServices, { name, price }]);
      setIsPanelOpen(true);
    }
  };

  const removeService = (name: string) => {
    setSelectedServices(selectedServices.filter(s => s.name !== name));
  };

  const calculateTotal = () => {
    return selectedServices.reduce((total, service) => {
      const priceValue = parseFloat(service.price.replace('R$', '').replace(',', '.').trim());
      return total + (isNaN(priceValue) ? 0 : priceValue);
    }, 0);
  };

  const handleWhatsAppBooking = () => {
    const servicesList = selectedServices.map(s => `• ${s.name} (${s.price})`).join('\n');
    const message = `Olá, gostaria de agendar um atendimento no Espaço Caíque Kenson.\n\nServiços selecionados:\n${servicesList}\n\nTotal aproximado: R$ ${calculateTotal().toFixed(2).replace('.', ',')}\n\nPoderia me informar os horários disponíveis?`;
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-32 pb-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4 block"
          >
            Menu de Beleza
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl font-serif"
          >
            Nossos Serviços
          </motion.h1>
          <p className="mt-4 text-deep-black/50 font-light italic">Selecione os serviços desejados para agendar pelo WhatsApp.</p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-32 mb-32">
          {SERVICES.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex items-center space-x-4 mb-10">
                <div className="h-[1px] w-12 bg-gold" />
                <h2 className="text-3xl font-serif italic">{category.category}</h2>
              </div>
              
              <div className="space-y-8">
                {category.items.map((item, i) => {
                  const isSelected = selectedServices.some(s => s.name === item.name);
                  return (
                    <div key={i} className="group">
                      <div className="flex justify-between items-end mb-2">
                        <div className="flex flex-col">
                          <h3 className={`text-lg font-medium tracking-wide transition-colors ${isSelected ? 'text-gold' : 'group-hover:text-gold'}`}>
                            {item.name}
                          </h3>
                          {item.detail && (
                            <p className="text-[10px] text-deep-black/40 uppercase tracking-widest">{item.detail}</p>
                          )}
                        </div>
                        <div className="flex-grow border-b border-dotted border-black/10 mx-4 mb-1" />
                        <div className="flex items-center space-x-4">
                          <span className="text-gold font-serif text-xl">{item.price}</span>
                          <button 
                            onClick={() => toggleService(item.name, item.price)}
                            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                              isSelected 
                                ? 'bg-gold text-white rotate-45' 
                                : 'bg-beige text-deep-black hover:bg-gold hover:text-white'
                            }`}
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Nails Special Section */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-deep-black text-white rounded-[3rem] overflow-hidden mb-32"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 lg:p-20">
              <div className="flex items-center space-x-4 mb-6">
                <Star className="text-gold" size={20} />
                <span className="text-gold font-medium tracking-[0.3em] uppercase text-xs">Seção Especial</span>
              </div>
              <h2 className="text-5xl font-serif mb-12">Cuidados com as Unhas</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
                {NAIL_SERVICES.map((item, i) => {
                  const isSelected = selectedServices.some(s => s.name === item.name);
                  return (
                    <div key={i} className="flex justify-between items-center border-b border-white/10 pb-2 group">
                      <div className="flex flex-col">
                        <span className={`text-sm transition-colors ${isSelected ? 'text-gold' : 'text-white/80 group-hover:text-gold'}`}>{item.name}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-gold font-serif">{item.price}</span>
                        <button 
                          onClick={() => toggleService(item.name, item.price)}
                          className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                            isSelected 
                              ? 'bg-gold text-white rotate-45' 
                              : 'bg-white/10 text-white hover:bg-gold hover:text-white'
                          }`}
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Special Package */}
              <div className="mt-16 p-8 bg-white/5 rounded-3xl border border-white/10">
                <h4 className="text-gold font-serif text-2xl mb-4">Pacote Mensal</h4>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-white/60">4 mãos + 2 pés</p>
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl font-serif text-white">R$ 180</span>
                    <button 
                      onClick={() => toggleService("Pacote Mensal (4 mãos + 2 pés)", "R$ 180")}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        selectedServices.some(s => s.name === "Pacote Mensal (4 mãos + 2 pés)") 
                          ? 'bg-gold text-white rotate-45' 
                          : 'bg-white/10 text-white hover:bg-gold hover:text-white'
                      }`}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=1000" 
                alt="Nail Care" 
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-deep-black to-transparent" />
            </div>
          </div>
        </motion.section>
      </div>

      {/* Floating Cart Panel */}
      <AnimatePresence>
        {selectedServices.length > 0 && (
          <>
            {/* Floating Bubble (Mobile/Minimized) */}
            {!isPanelOpen && (
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                onClick={() => setIsPanelOpen(true)}
                className="fixed bottom-8 right-8 z-40 w-16 h-16 bg-deep-black text-white rounded-full shadow-2xl flex items-center justify-center group"
              >
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gold rounded-full flex items-center justify-center text-[10px] font-bold">
                  {selectedServices.length}
                </div>
                <Scissors size={24} className="group-hover:rotate-12 transition-transform" />
              </motion.button>
            )}

            {/* Side Panel */}
            {isPanelOpen && (
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-50 shadow-[-20px_0_50px_rgba(0,0,0,0.1)] flex flex-col"
              >
                <div className="p-8 border-b border-black/5 flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-serif">Seu atendimento</h2>
                    <p className="text-[10px] tracking-widest uppercase text-deep-black/40 mt-1">Serviços selecionados</p>
                  </div>
                  <button onClick={() => setIsPanelOpen(false)} className="text-deep-black/40 hover:text-deep-black transition-colors">
                    <X size={24} />
                  </button>
                </div>

                <div className="flex-grow overflow-y-auto p-8 space-y-6">
                  {selectedServices.map((service, i) => (
                    <motion.div 
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      key={service.name} 
                      className="flex justify-between items-center group"
                    >
                      <div>
                        <h4 className="text-sm font-medium">{service.name}</h4>
                        <span className="text-gold font-serif">{service.price}</span>
                      </div>
                      <button 
                        onClick={() => removeService(service.name)}
                        className="text-deep-black/20 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                      >
                        <Trash2 size={16} />
                      </button>
                    </motion.div>
                  ))}
                </div>

                <div className="p-8 bg-beige/30 border-t border-black/5 space-y-6">
                  <div className="flex justify-between items-end">
                    <span className="text-xs tracking-widest uppercase font-bold text-deep-black/40">Total aproximado</span>
                    <span className="text-3xl font-serif text-gold">R$ {calculateTotal().toFixed(2).replace('.', ',')}</span>
                  </div>
                  
                  <button 
                    onClick={handleWhatsAppBooking}
                    className="w-full bg-deep-black text-white py-5 rounded-full text-xs tracking-widest font-bold hover:bg-gold transition-all flex items-center justify-center space-x-3 shadow-xl"
                  >
                    <MessageCircle size={18} />
                    <span>AGENDAR PELO WHATSAPP</span>
                  </button>
                  <p className="text-[10px] text-center text-deep-black/40 italic">O valor final será confirmado no atendimento.</p>
                </div>
              </motion.div>
            )}
            
            {/* Overlay */}
            {isPanelOpen && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsPanelOpen(false)}
                className="fixed inset-0 bg-deep-black/20 backdrop-blur-sm z-40"
              />
            )}
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
