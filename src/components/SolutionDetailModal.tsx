import React from 'react';
import { X, CheckCircle2, ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react';
import { SolutionItem } from './SolutionsSection';

interface SolutionDetailModalProps {
  solution: SolutionItem | null;
  onClose: () => void;
  onOpenQuote: (serviceName?: string) => void;
}

export const SolutionDetailModal: React.FC<SolutionDetailModalProps> = ({
  solution,
  onClose,
  onOpenQuote,
}) => {
  if (!solution) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header com Foto */}
        <div className="relative h-56 sm:h-64 w-full bg-slate-900 shrink-0">
          <img
            src={solution.image}
            alt={solution.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title on image */}
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
              {solution.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              {solution.title}
            </h3>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider text-amber-700">
              Visão Geral do Serviço
            </h4>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              {solution.fullDetails}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider text-amber-700">
              O que está incluído no escopo operacional
            </h4>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {solution.benefits.map((b, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-50/40 border border-amber-900/10"
                >
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-4">
            <div>
              <div className="text-xs font-semibold text-slate-500">Segmentos recomendados:</div>
              <div className="text-xs sm:text-sm text-slate-900 font-bold">{solution.coverage}</div>
            </div>
            <div className="text-right shrink-0">
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-800 bg-amber-100/70 px-2.5 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-700" /> Pessoal Treinado
              </span>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="p-6 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row items-center justify-end gap-3 shrink-0">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors cursor-pointer"
          >
            Fechar
          </button>
          <a
            href={`https://wa.me/5521966388329?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20espec%C3%ADfico%20para%20${encodeURIComponent(
              solution.title
            )}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-800 bg-white border border-slate-200 hover:bg-slate-100 rounded-xl transition-all"
          >
            <MessageCircle className="w-4 h-4 text-amber-700" />
            <span>Fale conosco via WhatsApp</span>
          </a>
          <button
            onClick={() => {
              onClose();
              onOpenQuote(solution.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-bold text-white bg-slate-900 hover:bg-amber-700 rounded-xl shadow-xs transition-all cursor-pointer"
          >
            <span>Solicitar Orçamento</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
