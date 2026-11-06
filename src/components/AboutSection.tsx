import React from 'react';
import {
  TrendingDown,
  Users,
  Shield,
  Award,
  XCircle,
  CheckCircle2,
  X,
  Check,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';
import { illustrationOutsourcingBenefits } from '../assets/images';

interface AboutSectionProps {
  onOpenQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuote }) => {
  return (
    <section id="sobre" className="py-20 sm:py-28 bg-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bloco Superior: Sobre o Grupo & Proposta de Valor */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-bold tracking-wider text-amber-700 uppercase mb-3 flex items-center justify-center gap-2">
            <span className="w-6 h-0.5 bg-amber-600 inline-block" />
            <span>Sobre o Grupo Costa e Araujo</span>
            <span className="w-6 h-0.5 bg-amber-600 inline-block" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight leading-[1.2] text-balance">
            Soluções Sob Medida, Resultados Sustentáveis
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed text-pretty">
            O <strong className="text-slate-900 font-semibold">Grupo Costa e Araujo</strong> combina metodologia de ponta, supervisão ativa e tecnologia para transformar a rotina ambientes corporativos, condomínios, residências, escolas e hospitais. Entregamos redução comprovada de custos operacionais com mão de obra criteriosamente treinada, eliminação de passivos trabalhistas e atendimento personalizado com presença constante.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-700 font-medium">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900">
              <TrendingDown className="w-4 h-4 text-amber-700" />
              <span>Redução de Custos com Rescisões e Insumos</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900">
              <Users className="w-4 h-4 text-amber-700" />
              <span>Mão de Obra Treinada e Supervisionada</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900">
              <ShieldCheck className="w-4 h-4 text-amber-700" />
              <span>Blindagem Jurídica e Fiscal CLT</span>
            </div>
          </div>
        </div>

        {/* QUADRO COMPARATIVO DE GESTÃO (Exato conforme referência do cliente) */}
        <div className="rounded-3xl bg-[#09111e] border border-amber-500/20 text-white p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          {/* Ambient gold glow */}
          <div
            className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          {/* Header do Comparativo */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 relative z-10">
            <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">
              COMPARATIVO DE GESTÃO
            </span>
            <h3 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
              Contratação Própria vs. Terceirização padrão Grupo Costa e Araújo
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              Descubra por que dezenas de condomínios e empresas migraram para nosso modelo especializado.
            </p>
          </div>

          {/* Cards Comparativos Lado a Lado */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 relative z-10 items-stretch">
            {/* Card Esquerdo: Modelo Tradicional */}
            <div className="rounded-2xl sm:rounded-3xl bg-[#111927]/90 border border-red-900/40 p-6 sm:p-8 flex flex-col justify-between transition-all hover:border-red-700/60">
              <div>
                <div className="flex items-center gap-3 pb-5 border-b border-red-900/30 mb-6">
                  <div className="w-9 h-9 rounded-full bg-red-950 text-red-400 border border-red-800/60 flex items-center justify-center shrink-0">
                    <X className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-100">
                    Modelo Tradicional <span className="text-xs font-normal text-slate-400 block sm:inline">(Funcionários Próprios CLT)</span>
                  </h4>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                    <div className="text-red-400 font-bold shrink-0 mt-0.5 text-base">✕</div>
                    <span>
                      <strong className="text-white font-medium">Passivos trabalhistas acumulados:</strong> Risco direto de ações jurídicas, aviso prévio e multas rescisórias de 40% do FGTS.
                    </span>
                  </li>

                  <li className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                    <div className="text-red-400 font-bold shrink-0 mt-0.5 text-base">✕</div>
                    <span>
                      <strong className="text-white font-medium">Desespero em caso de faltas ou licenças médicas:</strong> Posto desguarnecido sem reposição e sobrecarga da portaria ou limpeza.
                    </span>
                  </li>

                  <li className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                    <div className="text-red-400 font-bold shrink-0 mt-0.5 text-base">✕</div>
                    <span>
                      <strong className="text-white font-medium">Gastos ocultos constantes:</strong> Compra de insumos, uniformes novos, maquinário e reposição contínua de EPIs.
                    </span>
                  </li>

                  <li className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                    <div className="text-red-400 font-bold shrink-0 mt-0.5 text-base">✕</div>
                    <span>
                      <strong className="text-white font-medium">Desgaste na gestão de pessoas:</strong> Tempo precioso de síndicos e diretores consumido com conflitos operacionais e escalas.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-red-900/20 text-xs text-red-300/80 font-medium flex items-center gap-2">
                <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>Alto custo invisível e risco patrimonial constante.</span>
              </div>
            </div>

            {/* Card Direito: Modelo Inteligente (RECOMENDADO) */}
            <div className="rounded-2xl sm:rounded-3xl bg-[#0f1d33] border-2 border-amber-500/60 p-6 sm:p-8 flex flex-col justify-between relative shadow-xl shadow-amber-950/20 hover:border-amber-400 transition-all">
              {/* Badge RECOMENDADO em destaque dourado */}
              <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 font-extrabold text-[11px] tracking-wider uppercase px-4 py-1 rounded-full shadow-md">
                RECOMENDADO
              </div>

              <div>
                <div className="flex items-center gap-3 pb-5 border-b border-amber-500/20 mb-6">
                  <div className="w-9 h-9 rounded-full bg-amber-500/20 text-amber-400 border border-amber-400/50 flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    Modelo Inteligente Grupo Costa e Araújo <span className="text-xs font-normal text-amber-300 block sm:inline">(Outsourcing Especializado)</span>
                  </h4>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-sm text-slate-200 leading-relaxed">
                    <div className="text-amber-400 font-bold shrink-0 mt-0.5 text-base">✓</div>
                    <span>
                      <strong className="text-white font-medium">Previsibilidade orçamentária total:</strong> Valor mensal fixo em contrato com nota fiscal, sem surpresas de férias, 13º ou rescisões.
                    </span>
                  </li>

                  <li className="flex items-start gap-3 text-sm text-slate-200 leading-relaxed">
                    <div className="text-amber-400 font-bold shrink-0 mt-0.5 text-base">✓</div>
                    <span>
                      <strong className="text-white font-medium">Substituição imediata de colaboradores:</strong> Equipe reserva e supervisor volante em alerta para garantir posto sempre coberto.
                    </span>
                  </li>

                  <li className="flex items-start gap-3 text-sm text-slate-200 leading-relaxed">
                    <div className="text-amber-400 font-bold shrink-0 mt-0.5 text-base">✓</div>
                    <span>
                      <strong className="text-white font-medium">Fornecimento integral de infraestrutura:</strong> Equipamentos profissionais, reposição periódica de EPIs e uniformes novos inclusos.
                    </span>
                  </li>

                  <li className="flex items-start gap-3 text-sm text-slate-200 leading-relaxed">
                    <div className="text-amber-400 font-bold shrink-0 mt-0.5 text-base">✓</div>
                    <span>
                      <strong className="text-white font-medium">Blindagem jurídica comprovada:</strong> Certidões negativas mensais e respaldo ético e legal do Grupo Costa e Araújo & Dioclean.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-amber-500/20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="text-xs text-amber-300 font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Tranquilidade absoluta para síndicos e gestores.</span>
                </div>

                <button
                  onClick={onOpenQuote}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs shadow-md transition-all cursor-pointer"
                >
                  <span>Migrar para o Modelo Inteligente</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Faixa Inferior com Ilustração Conceitual de Eficiência e Blindagem */}
          <div className="mt-10 pt-8 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
            <div className="md:col-span-4 rounded-2xl overflow-hidden border border-amber-500/30 bg-slate-900 shadow-md">
              <img
                src={illustrationOutsourcingBenefits}
                alt="Ilustração de blindagem jurídica, crescimento de eficiência e gestão de facilities"
                className="w-full h-44 sm:h-48 object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="md:col-span-8 space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wide">
                <TrendingUp className="w-4 h-4" />
                <span>Otimização Operacional Comprovada</span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                Mais de 10 Anos Eliminando Dores de Cabeça Trabalhistas
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Ao terceirizar com o Grupo Costa e Araújo, seu empreendimento ganha padrão institucional, equipe capacitada em conformidade com a NR-6 e o conforto de ter uma empresa sólida gerenciando toda a operação diária.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
