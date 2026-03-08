
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, Database, Code, Heart, Zap, 
  MousePointerClick, Layers, TrendingUp, 
  ShoppingCart, Send, MapPin, Mail,
  Github, Linkedin, Instagram 
} from 'lucide-react';

// --- COMPONENTE: HERO ---
const Hero = () => (
  <section className="relative min-h-screen bg-[#0a0a0a] text-white flex flex-col justify-center px-8 md:px-24 overflow-hidden">
    <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full z-0" />
    <div className="z-10 max-w-4xl">
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-blue-400 font-mono tracking-widest text-sm uppercase mb-4 block">
        Senior Tech Solutions
      </motion.span>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-5xl md:text-7xl font-bold leading-tight mb-8">
        Construindo o futuro com <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">código e empatia.</span>
      </motion.h1>
      <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed">
        Especialistas em transformar dados complexos em produtos digitais de alta performance. Lógica rigorosa e visão humana.
      </p>
      <div className="flex gap-6">
        <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all">Iniciar Projeto</button>
      </div>
    </div>
  </section>
);

// --- COMPONENTE: PROCESSO ---
const Processo = () => {
  const etapas = [
    { titulo: "Discovery Analítico", desc: "Mergulho nos dados para definir a arquitetura ideal.", icon: <Database size={32} className="text-blue-400"/> },
    { titulo: "Desenvolvimento Sênior", desc: "Código limpo com Next.js e automações em Python.", icon: <Code size={32} className="text-emerald-400"/> },
    { titulo: "Visão Humana", desc: "Design focado na experiência real e acessibilidade.", icon: <Heart size={32} className="text-pink-400"/> },
    { titulo: "Otimização", desc: "Ajustes baseados em métricas de performance real.", icon: <Zap size={32} className="text-yellow-400"/> }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] px-8 md:px-24">
      <h2 className="text-4xl font-bold text-white mb-16 text-center">O Ciclo de <span className="text-blue-400">Inteligência</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {etapas.map((e, i) => (
          <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all">
            <div className="mb-6">{e.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-4">{e.titulo}</h3>
            <p className="text-gray-400 text-sm">{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- COMPONENTE: EXPERTISE (E-COMMERCE) ---
const Expertise = () => (
  <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#111] px-8 md:px-24">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold text-white mb-6">Máquinas de <span className="text-emerald-400">Vender.</span></h2>
        <p className="text-gray-400 text-lg mb-8">
          Integração de ecossistemas de Dropshipping e análise de dados para escala real.
        </p>
      </div>
      <div className="md:w-1/2 grid grid-cols-2 gap-4">
        <div className="p-6 bg-white/5 rounded-xl border border-white/10 text-white text-sm">
          <TrendingUp className="mb-2 text-purple-400"/> Data-Driven Sales
        </div>
        <div className="p-6 bg-white/5 rounded-xl border border-white/10 text-white text-sm">
          <Layers className="mb-2 text-blue-400"/> Automação Dropshipping
        </div>
      </div>
    </div>
  </section>
);

// --- COMPONENTE: CONTATO ---
const Contato = () => (
  <section className="py-24 bg-[#0a0a0a] px-8 md:px-24 border-t border-white/5">
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div className="text-white">
        <h2 className="text-4xl font-bold mb-6">Vamos conversar?</h2>
        <div className="space-y-4 text-gray-400">
          <p className="flex items-center gap-3"><MapPin size={18}/> Rio de Janeiro, Brasil</p>
          <p className="flex items-center gap-3"><Mail size={18}/> contato@auralogic.tech</p>
        </div>
      </div>
      <form className="space-y-6 bg-white/5 p-8 rounded-3xl border border-white/10">
        <input className="w-full bg-transparent border-b border-gray-700 py-3 text-white outline-none focus:border-blue-400" placeholder="Seu Nome" />
        <input className="w-full bg-transparent border-b border-gray-700 py-3 text-white outline-none focus:border-blue-400" placeholder="Seu E-mail" />
        <textarea className="w-full bg-transparent border-b border-gray-700 py-3 text-white outline-none focus:border-blue-400" placeholder="Seu Desafio" rows={3} />
        <button className="w-full bg-blue-600 py-4 rounded-xl font-bold text-white hover:bg-blue-500 transition-all flex items-center justify-center gap-2">
          Enviar <Send size={18}/>
        </button>
      </form>
    </div>
  </section>
);

// --- COMPONENTE: FOOTER ---
const Footer = () => (
  <footer className="bg-[#050505] py-12 px-8 md:px-24 text-gray-500 text-sm border-t border-white/5">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2 text-white font-bold">
        <Terminal size={20} className="text-blue-500"/> AURALOGIC
      </div>
      <div className="flex gap-6">
        <Linkedin size={20} className="hover:text-white cursor-pointer"/>
        <Github size={20} className="hover:text-white cursor-pointer"/>
      </div>
      <p>© 2026 Aura Logic. Feito no Rio de Janeiro.</p>
    </div>
  </footer>
);

export default function Home() {
  return (
    <main className="selection:bg-blue-500/30">
      <Hero />
      <Processo />
      <Expertise />
      <Contato />
      <Footer />
    </main>
  );
}
