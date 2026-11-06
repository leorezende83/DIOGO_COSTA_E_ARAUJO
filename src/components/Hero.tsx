import React from 'react';
import { ArrowRight, CheckCircle2, MessageCircle, Users } from 'lucide-react';
import { heroBrazilianWorkforce } from '../assets/images';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative pt-36 sm:pt-44 lg:pt-48 pb-12 overflow-hidden bg-gradient-to-b from-[#111827] via-[#1a2333] to-[#253347] text-white">
      {/* Subtle warm golden ambient lighting */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 0%, rgba(197, 160, 89, 0.4) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      {/* Main Content Container */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Subtle trust tag com tons dourados */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold mb-6 shadow-xs animate-in fade-in duration-500">
          <Users className="w-4 h-4 text-amber-400" />
          <span>Especialistas em Terceirização de Mão de Obra & Facilities</span>
        </div>

        {/* Headline Centralizada */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight text-balance max-w-4xl mx-auto leading-[1.15]">
          Excelência e Gestão Integrada em Terceirização
        </h1>

        {/* Subtítulo */}
        <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-200 font-normal max-w-2xl mx-auto leading-relaxed text-balance">
          Soluções completas em facilities, controle de acesso e conservação patrimonial para condomínios e empresas.
        </p>

        {/* Call To Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-bold text-slate-950 bg-gradient-to-r from-[#d6b46e] via-[#c5a059] to-[#b8934a] hover:from-[#dfbe7b] hover:to-[#c5a059] active:scale-[0.99] rounded-xl shadow-lg hover:shadow-amber-500/20 transition-all cursor-pointer group"
          >
            <span>Solicitar Orçamento</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <a
            href="https://wa.me/5521966388329?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20terceiriza%C3%A7%C3%A3o%20de%20m%C3%A3o%20de%20obra%20do%20Grupo%20Costa%20e%20Araujo."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Fale conosco via WhatsApp</span>
          </a>
        </div>

        {/* Unboxed Quiet Metadata / Trust Indicators */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-300 font-medium">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400" /> Mão de Obra Rigorosamente Qualificada
          </span>
          <span aria-hidden="true" className="text-white/30">·</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400" /> Supervisão Operacional Ativa
          </span>
          <span aria-hidden="true" className="text-white/30">·</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400" /> Reposição Ágil de Postos
          </span>
        </div>
      </div>

      {/* Hero Workforce Image */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-amber-500/20 bg-slate-900">
          <img
            src={heroBrazilianWorkforce}
            alt="Equipe profissional de terceirização de mão de obra do Grupo Costa e Araujo - Rio de Janeiro"
            className="w-full h-[280px] sm:h-[420px] md:h-[500px] lg:h-[600px] object-cover object-top sm:object-center"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Quick Stats Grid - Posicionado logo abaixo da foto para nunca cobrir a imagem no mobile */}
        <div className="mt-6 sm:mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center">
          <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-amber-900/10 hover:border-amber-400/40 transition-colors">
            <div className="text-xl sm:text-2xl font-bold text-slate-900 tabular-nums">Pronta</div>
            <div className="text-xs text-slate-600 font-medium mt-0.5">Resposta Operacional</div>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-amber-900/10 hover:border-amber-400/40 transition-colors">
            <div className="text-xl sm:text-2xl font-bold text-slate-900 tabular-nums">100%</div>
            <div className="text-xs text-slate-600 font-medium mt-0.5">Conformidade Legal & CLT</div>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-amber-900/10 hover:border-amber-400/40 transition-colors">
            <div className="text-xl sm:text-2xl font-bold text-amber-700 tabular-nums">-25%</div>
            <div className="text-xs text-slate-600 font-medium mt-0.5">Custos Operacionais</div>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-amber-900/10 hover:border-amber-400/40 transition-colors">
            <div className="text-xl sm:text-2xl font-bold text-slate-900 tabular-nums">Gestão</div>
            <div className="text-xs text-slate-600 font-medium mt-0.5">Supervisionada de Pessoal</div>
          </div>
        </div>
      </div>
    </section>
  );
};
