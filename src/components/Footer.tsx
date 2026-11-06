import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';

interface FooterProps {
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  return (
    <footer id="contato" className="bg-[#0b1320] text-slate-300 pt-16 pb-12 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bloco de Conversão / Chamada Rápida */}
        <div className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-[#182335] to-slate-900 p-8 sm:p-12 text-white shadow-xl overflow-hidden mb-16 border border-amber-500/30">
          <div
            className="absolute -right-10 -bottom-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-semibold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Atendimento Consultivo Especializado</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Pronto para elevar o padrão de segurança e conservação do seu patrimônio?
            </h3>

            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Solicite uma visita técnica sem compromisso ou receba um estudo de viabilidade e redução de custos operacionais.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-[#d6b46e] via-[#c5a059] to-[#b8934a] hover:from-[#dfbe7b] hover:to-[#c5a059] active:scale-[0.99] transition-all shadow-md cursor-pointer"
              >
                <span>Solicitar Orçamento Agora</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/5521966388329?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20o%20Grupo%20Costa%20e%20Araujo."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Fale conosco via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé Principal reestruturado em 3 Colunas Equilibradas (Sem a coluna de clientes e com a lista exata dos 8 serviços) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800 items-start">
          {/* Coluna 1: Marca & Apresentação (Logo com tamanho duplicado: h-28 sm:h-36 md:h-40) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="inline-block p-2 rounded-xl bg-white shadow-md">
              <img
                src="/assets/aistudio/2-_LOGO_COSTA_E_ARAUJO_8690f1cc.jpeg"
                alt="Grupo Costa e Araujo - Terceirização de Serviços"
                className="h-24 sm:h-32 md:h-36 w-auto object-contain rounded-md"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Excelência e gestão integrada em terceirização para condomínios, empresas, clínicas e indústrias. Mão de obra qualificada, supervisão ativa e total respaldo jurídico-trabalhista.
            </p>

            <div className="pt-1 text-xs text-slate-500">
              CNPJ regularizado · Certidões negativas de débitos (CND) disponíveis e auditadas mensalmente.
            </div>
          </div>

          {/* Coluna 2: Nossas Soluções (Exatamente as 8 funções da seção) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-amber-400 border-b border-slate-800 pb-2">
              Serviços Prestados
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="#solucoes" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Portaria & Controle de Acesso
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Monitoramento Eletrônico & Segurança Integrada
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Limpeza & Conservação Patrimonial
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Guardião de Piscina
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Apoio Administrativo
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Motoristas
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Jardinagem & Manutenção de Áreas Verdes
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Zeladoria & Apoio Operacional
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Fale conosco com os dados oficiais corrigidos */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-amber-400 border-b border-slate-800 pb-2">
              Fale conosco
            </h4>

            <div className="space-y-3.5 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Rua Jornalista Ari Guanabara, 69<br />
                  Serra Grande - Itaipu, Niterói/RJ
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                <a href="tel:2137410040" className="hover:text-white transition-colors font-medium">
                  (21) 3741-0040
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/5521966388329"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors font-medium"
                >
                  (21) 96638-8329 (WhatsApp)
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                <a href="mailto:contato@dioclean.com.br" className="hover:text-white transition-colors font-medium">
                  contato@dioclean.com.br
                </a>
              </div>

              <div className="flex items-start gap-3 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>Atendimento comercial e visitas técnicas mediante agendamento prévio.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Linha Final de Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Grupo Costa e Araujo - Terceirização de Serviços. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 transition-colors">Política de Privacidade</span>
            <span>·</span>
            <span className="hover:text-slate-400 transition-colors">Termos de Prestação</span>
            <span>·</span>
            <span className="hover:text-slate-400 transition-colors">Código de Conduta</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
