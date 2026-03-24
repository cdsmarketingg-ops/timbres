/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  CheckCircle2, 
  Zap, 
  Music, 
  Layers, 
  Smartphone, 
  Keyboard, 
  Users, 
  Gift, 
  MessageCircle, 
  ChevronDown,
  Star,
  ShieldCheck,
  Download,
  Video
} from 'lucide-react';
import { motion, AnimatePresence, useInView, animate } from 'motion/react';

const Section = ({ children, className = "", id }: { children: React.ReactNode, className?: string, key?: React.Key, id?: string }) => (
  <section id={id} className={`py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string, key?: React.Key }) => (
  <div className={`glass rounded-2xl p-8 transition-all duration-300 hover:border-gold/50 ${className}`}>
    {children}
  </div>
);

const Counter = ({ value, duration = 2, decimals = 0, prefix = "", suffix = "" }: { value: number, duration?: number, decimals?: number, prefix?: string, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => setCount(latest),
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}{decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}{suffix}
    </span>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 md:py-6 flex justify-between items-center text-left hover:text-gold transition-colors gap-4"
      >
        <span className="text-base md:text-lg font-medium">{question}</span>
        <ChevronDown className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-4 md:pb-6 text-sm md:text-base text-white/60 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://scripts.converteai.net/1b23d824-f7d5-46ac-8edc-700038ffb33d/players/69c2f9b1f5a026a3bac0931f/v4/player.js";
    s.async = true;
    document.head.appendChild(s);
  }, []);

  return (
    <div className="min-h-screen selection:bg-gold selection:text-black">
      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col items-center justify-center text-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#3a1510_0%,transparent_60%)] opacity-40" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-4 md:px-6"
        >
          <span className="text-gold font-mono text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase mb-4 block">Som Profissional ao seu Alcance</span>
          <h1 className="text-4xl md:text-7xl font-serif italic font-bold mb-6 leading-tight max-w-4xl mx-auto">
            Transforme seu Teclado em uma <span className="gold-gradient">Máquina de Elite</span>
          </h1>
          <p className="text-base md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Acesse timbres de pianos caros e sintetizadores lendários usando apenas o seu celular. A revolução sonora que você esperava chegou.
          </p>
          
          <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10 mb-8 md:mb-12 bg-black/20">
            <div dangerouslySetInnerHTML={{ __html: '<vturb-smartplayer id="vid-69c2f9b1f5a026a3bac0931f" style="display: block; margin: 0 auto; width: 100%; "></vturb-smartplayer>' }} />
          </div>

          <button 
            onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-premium px-8 md:px-10 py-4 md:py-5 rounded-full text-black font-bold text-base md:text-lg uppercase tracking-wider w-full md:w-auto"
          >
            Quero Som Profissional Agora
          </button>
        </motion.div>
      </header>

      {/* O que é o Pack */}
      <Section className="text-center">
        <h2 className="text-2xl md:text-5xl font-serif italic mb-6 md:mb-8">O Que é o SoundPack Premium?</h2>
        <p className="text-base md:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed mb-10 md:mb-16">
          Um pacote exclusivo com os melhores timbres do mundo, incluindo Nord Stage, Korg e Yamaha. Desenvolvido para tecladistas que buscam excelência sem investir milhares de reais em equipamentos pesados.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            { icon: <Music className="w-6 h-6 md:w-8 md:h-8" />, title: "Som Profissional", desc: "Timbres de nível internacional em qualquer lugar." },
            { icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />, title: "Criatividade", desc: "Novas texturas para suas composições e arranjos." },
            { icon: <Smartphone className="w-6 h-6 md:w-8 md:h-8" />, title: "Configuração Rápida", desc: "Mude seus presets em segundos pelo celular." },
            { icon: <Layers className="w-6 h-6 md:w-8 md:h-8" />, title: "Biblioteca Completa", desc: "Pianos, pads, cordas e leads em um só lugar." }
          ].map((item, i) => (
            <Card key={i} className="flex flex-col items-center text-center p-6 md:p-8">
              <div className="text-gold mb-4 md:mb-6">{item.icon}</div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{item.title}</h3>
              <p className="text-white/50 text-xs md:text-sm leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <div className="bg-premium-gray py-8 md:py-12 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 items-center">
          <div className="text-center">
            <span className="text-3xl md:text-4xl font-bold text-gold">
              <Counter value={3500} prefix="+" />
            </span>
            <p className="text-white/50 uppercase tracking-widest text-[10px] md:text-xs mt-2">Tecladistas Satisfeitos</p>
          </div>
          <div className="text-center">
            <span className="text-3xl md:text-4xl font-bold text-gold">
              <Counter value={2.49} decimals={2} prefix="+" />
            </span>
            <p className="text-white/50 uppercase tracking-widest text-[10px] md:text-xs mt-2">GB de Sons Puros</p>
          </div>
          <div className="text-center">
            <span className="text-3xl md:text-4xl font-bold text-gold">
              <Counter value={100} suffix="%" />
            </span>
            <p className="text-white/50 uppercase tracking-widest text-[10px] md:text-xs mt-2">Qualidade Digital</p>
          </div>
        </div>
      </div>

      {/* Categorias Grid */}
      <Section>
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-serif italic mb-4">Explore sua Nova Paleta Sonora</h2>
          <p className="text-sm md:text-base text-white/60">Timbres meticulosamente sampleados para máxima fidelidade.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {[
            { title: "Pianos Acústicos", desc: "Corpo, profundidade e resposta dinâmica real.", img: "https://eliabcamposteclas.com/wp-content/uploads/2026/03/pianos.jpg" },
            { title: "Pianos Elétricos", desc: "Rhodes e Wurlitzer com caráter vintage.", img: "https://eliabcamposteclas.com/wp-content/uploads/2026/03/pianos_electricos.jpg" },
            { title: "Strings & Cordas", desc: "Arranjos modernos e cinematográficos.", img: "https://eliabcamposteclas.com/wp-content/uploads/2026/03/strings.jpg" },
            { title: "Atmospheric Pads", desc: "Texturas ricas para criar ambientes imersivos.", img: "https://eliabcamposteclas.com/wp-content/uploads/2026/03/pads.jpg" },
            { title: "Leads & Synths", desc: "Sintetizadores icônicos para solos marcantes.", img: "https://eliabcamposteclas.com/wp-content/uploads/2026/03/leads_synths.jpg" },
            { title: "Fantasy Bells", desc: "Efeitos brilhantes e texturas criativas.", img: "https://eliabcamposteclas.com/wp-content/uploads/2026/03/fantasy_bells.jpg" }
          ].map((cat, i) => (
            <div key={i} className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
              <img 
                src={cat.img} 
                alt={cat.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-6 md:p-8 flex flex-col justify-end">
                <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">{cat.title}</h3>
                <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ Cards */}
      <Section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        <Card className="text-center p-6 md:p-8">
          <Smartphone className="w-8 h-8 md:w-10 md:h-10 text-gold mx-auto mb-4 md:mb-6" />
          <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Funciona no Celular?</h3>
          <p className="text-white/60 text-xs md:text-sm">Sim! Compatível com Android e iOS. Você recebe um módulo exclusivo para cada sistema.</p>
        </Card>
        <Card className="text-center p-6 md:p-8">
          <Keyboard className="w-8 h-8 md:w-10 md:h-10 text-gold mx-auto mb-4 md:mb-6" />
          <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Funciona no meu Teclado?</h3>
          <p className="text-white/60 text-xs md:text-sm">Sim! Em qualquer teclado ou controlador que possua conexão MIDI/USB.</p>
        </Card>
        <Card className="text-center p-6 md:p-8 sm:col-span-2 md:col-span-1">
          <Users className="w-8 h-8 md:w-10 md:h-10 text-gold mx-auto mb-4 md:mb-6" />
          <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Para quem é este Pack?</h3>
          <p className="text-white/60 text-xs md:text-sm">Tecladistas que buscam som profissional sem carregar equipamentos pesados e caros.</p>
        </Card>
      </Section>

      {/* O que vai receber */}
      <Section className="bg-premium-gray/50 rounded-3xl border border-white/5 px-4 md:px-12">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-serif italic mb-4">O Que Você Vai Receber?</h2>
          <p className="text-sm md:text-base text-white/60">Um ecossistema completo para sua evolução musical.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
          <div className="text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <Download className="w-6 h-6 md:w-8 md:h-8 text-gold" />
            </div>
            <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Pack de Timbres</h4>
            <p className="text-white/50 text-xs md:text-sm">Biblioteca completa com pianos, pads, leads e muito mais.</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <Video className="w-6 h-6 md:w-8 md:h-8 text-gold" />
            </div>
            <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Videoaula Exclusiva</h4>
            <p className="text-white/50 text-xs md:text-sm">Treinamento passo a passo para configurar e usar o app corretamente.</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-gold" />
            </div>
            <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Suporte VIP</h4>
            <p className="text-white/50 text-xs md:text-sm">Acesso direto via WhatsApp para tirar qualquer dúvida técnica.</p>
          </div>
        </div>
      </Section>

      {/* Demonstração */}
      <Section className="text-center px-4 md:px-6">
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-5xl font-serif italic mb-4">Veja na Prática</h2>
          <p className="text-sm md:text-base text-white/60">Assista à demonstração real dos timbres em ação.</p>
        </div>
        <div className="max-w-4xl mx-auto aspect-video rounded-2xl md:rounded-3xl overflow-hidden border border-gold/20 shadow-2xl shadow-gold/5">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/p4Jf-RGqIsg" 
            title="Demonstração SoundPack Premium" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
        </div>
      </Section>

      {/* Bônus */}
      <Section className="px-4 md:px-12">
        <div className="flex items-center justify-center gap-2 md:gap-4 mb-10 md:mb-12">
          <Gift className="w-6 h-6 md:w-8 md:h-8 text-gold" />
          <h2 className="text-2xl md:text-3xl font-serif italic text-center">Presentes Exclusivos (Bônus)</h2>
          <Gift className="w-6 h-6 md:w-8 md:h-8 text-gold" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Card className="flex flex-col md:flex-row gap-6 md:gap-8 items-center bg-gold/5 p-6 md:p-8">
            <img src="https://eliabcamposteclas.com/wp-content/uploads/2026/03/ChatGPT-Image-24-de-mar.-de-2026-12_27_37.jpg" alt="Bônus 1" className="w-32 h-32 md:w-48 md:h-48 rounded-xl object-cover" referrerPolicy="no-referrer" />
            <div className="text-center md:text-left">
              <span className="text-gold font-mono text-[10px] md:text-xs uppercase tracking-widest mb-2 block">Grátis</span>
              <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Timbres de Metais & Órgãos</h4>
              <p className="text-white/60 text-xs md:text-sm leading-relaxed">Sons potentes e realistas para ampliar sua versatilidade em qualquer estilo musical.</p>
            </div>
          </Card>
          <Card className="flex flex-col md:flex-row gap-6 md:gap-8 items-center bg-gold/5 p-6 md:p-8">
            <img src="https://eliabcamposteclas.com/wp-content/uploads/2026/03/ChatGPT-Image-24-de-mar.-de-2026-12_29_50.jpg" alt="Bônus 2" className="w-32 h-32 md:w-48 md:h-48 rounded-xl object-cover" referrerPolicy="no-referrer" />
            <div className="text-center md:text-left">
              <span className="text-gold font-mono text-[10px] md:text-xs uppercase tracking-widest mb-2 block">Grátis</span>
              <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Pads Contínuos (Infinite)</h4>
              <p className="text-white/60 text-xs md:text-sm leading-relaxed">Ambientes perfeitos para worship, intros e transições suaves em todos os tons.</p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Professor */}
      <Section className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="w-full md:w-1/2 px-4 md:px-0">
          <div className="relative">
            <div className="absolute -inset-4 border border-gold/20 rounded-2xl" />
            <img 
              src="https://eliabcamposteclas.com/wp-content/uploads/2026/03/eliab.jpg" 
              alt="Eliab Campos" 
              className="w-full rounded-2xl relative z-10 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <span className="text-gold font-mono text-xs md:text-sm tracking-widest uppercase mb-4 block">Seu Mentor</span>
          <h2 className="text-3xl md:text-6xl font-serif italic mb-6 md:mb-8">Eliab Campos</h2>
          <p className="text-base md:text-lg text-white/70 leading-relaxed mb-6">
            Tecladista com mais de 15 anos de experiência, dedicado a democratizar o acesso a timbres profissionais. 
          </p>
          <p className="text-sm md:text-base text-white/60 leading-relaxed">
            Minha missão é elevar o nível sonoro de tecladistas em todo o mundo, permitindo que qualquer pessoa toque com a qualidade das grandes produções sem depender de equipamentos caros.
          </p>
        </div>
      </Section>

      {/* Prova Social */}
      <Section className="overflow-hidden px-0 md:px-6">
        <div className="text-center mb-10 md:mb-16 px-6">
          <h2 className="text-2xl md:text-5xl font-serif italic mb-4">O Que Estão Dizendo</h2>
          <p className="text-sm md:text-base text-white/60">Centenas de tecladistas já transformaram seu som.</p>
        </div>

        <div className="relative">
          {/* Gradient Overlays for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-10 md:w-20 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-10 md:w-20 bg-gradient-to-l from-black to-transparent z-10" />
          
          <div className="flex overflow-hidden">
            <motion.div 
              className="flex gap-4 md:gap-6 whitespace-nowrap"
              animate={{ x: [0, -1920] }}
              transition={{ 
                duration: 40, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {[
                "https://eliabcamposteclas.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-11-at-12.13.09-1.jpeg",
                "https://eliabcamposteclas.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-11-at-12.13.09.jpeg",
                "https://eliabcamposteclas.com/wp-content/uploads/2025/08/COMENTARIO-POSITIVO-AEVO-PRO-3.png",
                "https://eliabcamposteclas.com/wp-content/uploads/2025/08/COMENTARIO-POSITIVO-AEVO-PRO-1.png",
                "https://eliabcamposteclas.com/wp-content/uploads/2025/08/COMENTARIO-POSITIVO-AEVO-PRO-2.png"
              ].map((img, i) => (
                <div key={i} className="w-[260px] md:w-[400px] flex-shrink-0 rounded-xl md:rounded-2xl overflow-hidden border border-white/10 glass">
                  <img 
                    src={img} 
                    alt={`Depoimento ${i + 1}`} 
                    className="w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {[
                "https://eliabcamposteclas.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-11-at-12.13.09-1.jpeg",
                "https://eliabcamposteclas.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-11-at-12.13.09.jpeg",
                "https://eliabcamposteclas.com/wp-content/uploads/2025/08/COMENTARIO-POSITIVO-AEVO-PRO-3.png",
                "https://eliabcamposteclas.com/wp-content/uploads/2025/08/COMENTARIO-POSITIVO-AEVO-PRO-1.png",
                "https://eliabcamposteclas.com/wp-content/uploads/2025/08/COMENTARIO-POSITIVO-AEVO-PRO-2.png"
              ].map((img, i) => (
                <div key={`dup-${i}`} className="w-[260px] md:w-[400px] flex-shrink-0 rounded-xl md:rounded-2xl overflow-hidden border border-white/10 glass">
                  <img 
                    src={img} 
                    alt={`Depoimento ${i + 1}`} 
                    className="w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Oferta Final */}
      <Section id="offer" className="text-center px-4 md:px-6">
        <Card className="max-w-3xl mx-auto py-10 md:py-16 px-6 md:px-8 border-gold/30 bg-gold/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 hidden md:block">
            <Star className="w-12 h-12 text-gold/20" />
          </div>
          
          <span className="bg-gold text-black px-4 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 md:mb-8 inline-block">
            Oferta por Tempo Limitado
          </span>
          
          <h2 className="text-3xl md:text-6xl font-serif italic mb-6 md:mb-8">Invista no seu Som</h2>
          
          <ul className="text-left max-w-md mx-auto space-y-3 md:space-y-4 mb-10 md:mb-12">
            {[
              "Pacote Completo de Sons Premium",
              "Videoaulas Passo a Passo",
              "2 Bônus Exclusivos Inclusos",
              "Acesso Vitalício",
              "Suporte VIP via WhatsApp",
              "Garantia Incondicional de 30 Dias"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-white/80 text-sm md:text-base">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-gold shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="mb-8 md:mb-10">
            <span className="text-white/40 line-through text-lg md:text-xl block mb-2">De R$ 197,00</span>
            <div className="flex items-center justify-center gap-2">
              <span className="text-xl md:text-2xl font-bold text-gold">R$</span>
              <span className="text-5xl md:text-7xl font-bold gold-gradient">37,90</span>
            </div>
            <p className="text-white/40 text-[10px] md:text-sm mt-4">Acesso imediato após a confirmação</p>
          </div>
          
          <button className="btn-premium w-full md:w-auto px-10 md:px-16 py-5 md:py-6 rounded-full text-black font-bold text-lg md:text-xl uppercase tracking-widest mb-6">
            Quero Garantir Minha Vaga
          </button>
          
          <div className="flex items-center justify-center gap-2 text-white/40 text-[10px] md:text-xs">
            <ShieldCheck className="w-4 h-4" />
            <span>Pagamento 100% Seguro & Criptografado</span>
          </div>
        </Card>
      </Section>
      
      {/* Garantia */}
      <Section className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-premium-gray/30 rounded-3xl border border-white/5">
        <div className="w-full md:w-1/3 flex justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full" />
            <img 
              src="https://eliabcamposteclas.com/wp-content/uploads/2024/03/selo-garantia.png" 
              alt="Garantia de 30 Dias" 
              className="w-48 h-48 md:w-64 md:h-64 relative z-10 object-contain"
              onError={(e) => {
                // Fallback if the specific URL fails
                (e.target as HTMLImageElement).src = "https://eliabcamposteclas.com/wp-content/uploads/2026/03/Selo_de_Garantia_de_30_Dias_PNG_Transparente_Sem_Fundo.png";
              }}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-2xl md:text-5xl font-serif italic mb-6">Risco Zero: <span className="text-gold">30 Dias de Garantia</span></h2>
          <p className="text-base md:text-lg text-white/70 leading-relaxed mb-6">
            Eu confio tanto na qualidade dos meus timbres que estou disposto a tirar todo o risco das suas costas. 
          </p>
          <p className="text-sm md:text-white/60 leading-relaxed">
            Se por qualquer motivo você achar que o SoundPack Premium não é para você, basta me enviar um único e-mail ou mensagem no WhatsApp dentro de 30 dias e eu devolvo cada centavo do seu investimento. Sem perguntas, sem burocracia e continuamos amigos.
          </p>
        </div>
      </Section>

      {/* FAQ Accordion */}
      <Section className="max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-serif italic text-center mb-16">Dúvidas Frequentes</h2>
        <div className="space-y-2">
          <FAQItem 
            question="O acesso é vitalício?" 
            answer="Sim! Uma vez adquirido, o pacote é seu para sempre. Você pode baixar e usar quantas vezes quiser."
          />
          <FAQItem 
            question="Como recebo o material?" 
            answer="Imediatamente após a compra, você receberá um e-mail com os dados de acesso à nossa plataforma exclusiva."
          />
          <FAQItem 
            question="Preciso de um computador?" 
            answer="Não! Todo o sistema foi desenhado para rodar diretamente no seu celular ou tablet (Android ou iOS)."
          />
          <FAQItem 
            question="E se eu não gostar?" 
            answer="Você tem 30 dias de garantia incondicional. Se não ficar satisfeito, devolvemos 100% do seu investimento sem perguntas."
          />
        </div>
      </Section>

      {/* WhatsApp CTA */}
      <div className="fixed bottom-8 right-8 z-50">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-[#25D366] p-4 rounded-full shadow-2xl flex items-center gap-3 group"
        >
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 text-white font-bold whitespace-nowrap">Falar com Suporte</span>
          <MessageCircle className="w-8 h-8 text-white fill-current" />
        </motion.button>
      </div>

      <footer className="py-12 text-center border-t border-white/5 text-white/30 text-sm">
        <p>&copy; 2026 Eliab Campos Teclas. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
