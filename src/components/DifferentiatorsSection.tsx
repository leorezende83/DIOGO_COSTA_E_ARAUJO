import React from 'react';
import {
  TrendingDown,
  UserCheck,
  ShieldAlert,
  FileCheck2,
  Award,
  CheckCircle2,
} from 'lucide-react';

export const DifferentiatorsSection: React.FC = () => {
  return (
    <section id="diferenciais" className="py-20 sm:py-28 bg-[#faf8f5] border-t border-amber-900/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-bold tracking-wider text-amber-700 uppercase mb-2 flex items-center justify-center gap-2">
            <span className="w-6 h-0.5 bg-amber-600 inline-block" />
            <span>Por que escolher o Grupo Costa e Araujo</span>
            <span className="w-6 h-0.5 bg-amber-600 inline-block" />
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
            Padrão Corporativo com Gestão Humana e Transparência
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Terceirizar é delegar responsabilidade com a convicção de que seu condomínio ou empresa está amparado por uma gestão idônea, atenta e rigorosa.
          </p>
        </div>

        {/* Grid de 4 Pilares */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pilar 1 */}
          <div className="p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-amber-400 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 border border-amber-200/60 flex items-center justify-center mb-5 group-hover:bg-amber-600 group-hover:text-white transition-colors">
              <TrendingDown className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Economia Real e Eficiência
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Corte imediato de custos com rescisões, recrutamento, reposição de uniformes, EPIs e horas extras imprevistas.
            </p>
          </div>

          {/* Pilar 2 */}
          <div className="p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-amber-400 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 border border-amber-200/60 flex items-center justify-center mb-5 group-hover:bg-amber-600 group-hover:text-white transition-colors">
              <UserCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Seleção & Treinamento Rigorosos
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Checagem minuciosa de certidões, perfil comportamental e capacitação prática continuada para cada posto.
            </p>
          </div>

          {/* Pilar 3 */}
          <div className="p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-amber-400 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 border border-amber-200/60 flex items-center justify-center mb-5 group-hover:bg-amber-600 group-hover:text-white transition-colors">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Supervisão Operacional Ativa
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Fiscais de rota atuando in loco para auditoria contínua de postos, conferência de uniforme e suporte operacional.
            </p>
          </div>

          {/* Pilar 4 */}
          <div className="p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-amber-400 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 border border-amber-200/60 flex items-center justify-center mb-5 group-hover:bg-amber-600 group-hover:text-white transition-colors">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Zero Risco Trabalhista
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Encargos fiscais e previdenciários rigorosamente em dia, com fornecimento proativo de certidões negativas aos clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
