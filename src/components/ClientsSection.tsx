import React, { useState } from 'react';
import { Building2, CheckCircle2, ShieldCheck, Star, Users } from 'lucide-react';

interface ClientItem {
  name: string;
  category: string;
  location: string;
  servicesProvided: string[];
  tag: string;
}

const CLIENTS_LIST: ClientItem[] = [
  {
    name: 'Condomínio Ilhas do Sol',
    category: 'Condomínios',
    location: 'Região Metropolitana - RJ',
    servicesProvided: ['Portaria & Controle de Acesso', 'Limpeza & Conservação', 'Zeladoria'],
    tag: 'Condomínio Residencial',
  },
  {
    name: 'Concessionária Moto Hayasa',
    category: 'Empresas & Concessionárias',
    location: 'São Gonçalo, Campo Grande e Penha - RJ',
    servicesProvided: ['Limpeza Técnica Especializada', 'Apoio Administrativo', 'Segurança Patrimonial'],
    tag: 'Rede de Concessionárias',
  },
  {
    name: 'Condomínio Seaway',
    category: 'Condomínios',
    location: 'São Francisco - Niterói / RJ',
    servicesProvided: ['Portaria & Controle de Acesso', 'Conservação Predial', 'Jardinagem'],
    tag: 'Condomínio de Alto Padrão',
  },
  {
    name: 'Condomínio Belas Artes',
    category: 'Condomínios',
    location: 'Volta Redonda / RJ',
    servicesProvided: ['Portaria & Recepção', 'Limpeza Geral', 'Apoio Operacional'],
    tag: 'Condomínio Residencial',
  },
  {
    name: 'Armazém Náutico',
    category: 'Empresas & Concessionárias',
    location: 'Região Litorânea - RJ',
    servicesProvided: ['Conservação de Áreas Amplas', 'Portaria & Vigilância', 'Apoio Operacional'],
    tag: 'Complexo Náutico & Comercial',
  },
  {
    name: 'Condomínio Topázio',
    category: 'Condomínios',
    location: 'Várzea das Moças - RJ',
    servicesProvided: ['Portaria & Controle de Acesso', 'Manutenção de Áreas Verdes', 'Zeladoria'],
    tag: 'Condomínio Residencial',
  },
  {
    name: 'Juliana Ribeiro Fisioterapia',
    category: 'Saúde & Lazer',
    location: 'Niterói / RJ',
    servicesProvided: ['Higienização Especializada', 'Recepção & Apoio Administrativo'],
    tag: 'Clínica & Saúde',
  },
  {
    name: 'Academia Central do Corpo',
    category: 'Saúde & Lazer',
    location: 'Niterói / RJ',
    servicesProvided: ['Limpeza Contínua de Alto Fluxo', 'Recepção & Controle de Catracas'],
    tag: 'Centro de Esporte & Fitness',
  },
];

export const ClientsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const categories = ['Todos', 'Condomínios', 'Empresas & Concessionárias', 'Saúde & Lazer'];

  const filteredClients =
    activeCategory === 'Todos'
      ? CLIENTS_LIST
      : CLIENTS_LIST.filter((client) => client.category === activeCategory);

  return (
    <section id="clientes" className="py-20 sm:py-28 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-bold tracking-wider text-amber-700 uppercase mb-2 flex items-center justify-center gap-2">
            <span className="w-6 h-0.5 bg-amber-600 inline-block" />
            <span>Nossos Clientes & Parceiros</span>
            <span className="w-6 h-0.5 bg-amber-600 inline-block" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
            Empreendimentos que Confiam no Nosso Padrão
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Parcerias sólidas construídas com pontualidade, transparência e excelência em serviços terceirizados para condomínios, empresas e centros comerciais.
          </p>

          {/* Interactive Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-100/90 rounded-2xl max-w-xl mx-auto border border-slate-200/80">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Clientes com Visual Corporativo Elegante */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredClients.map((client, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200/90 hover:border-amber-400 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold group-hover:bg-amber-600 group-hover:text-white transition-colors">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60">
                    {client.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-800 transition-colors leading-snug">
                  {client.name}
                </h3>

                <p className="text-xs text-slate-500 mt-1">
                  {client.location}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-200/70 space-y-1.5">
                  <span className="block text-[11px] font-semibold text-slate-600 uppercase tracking-wide">
                    Serviços Prestados:
                  </span>
                  {client.servicesProvided.map((srv, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{srv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1 text-amber-700 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" /> Padrão Homologado
                </span>
                <span className="text-slate-600 font-medium">Contrato Ativo</span>
              </div>
            </div>
          ))}
        </div>

        {/* Banner de Confiança e Prova Social */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-amber-500/20">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/30 text-amber-400 flex items-center justify-center shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Seu condomínio ou empresa com a mesma segurança e tranquilidade
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Supervisão operacional contínua, substituição ágil e conformidade trabalhista total.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/5521966388329?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20refer%C3%AAncias%20comerciais%20e%20um%20or%C3%A7amento%20para%20meu%20empreendimento."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition-all"
          >
            Solicitar Proposta para seu Posto
          </a>
        </div>
      </div>
    </section>
  );
};
