import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, MessageCircle, Send, Calculator } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  initialService?: string;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  initialService,
  onClose,
}) => {
  const [entityType, setEntityType] = useState('Condomínio Residencial');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [staffCount, setStaffCount] = useState('1 a 2 postos');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [cityNeighborhood, setCityNeighborhood] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setSelectedServices([initialService]);
    } else {
      setSelectedServices(['Portaria & Controle de Acesso', 'Limpeza & Conservação Patrimonial']);
    }
    setIsSubmitted(false);
  }, [initialService, isOpen]);

  if (!isOpen) return null;

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== srv));
      }
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleOnlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setIsSubmitted(true);
  };

  const buildWhatsAppMessage = () => {
    const text = `*SOLICITAÇÃO DE ORÇAMENTO - GRUPO COSTA E ARAUJO*
---------------------------------------
*Tipo de Empreendimento:* ${entityType}
*Serviços de Interesse:* ${selectedServices.join(', ')}
*Estimativa de Postos:* ${staffCount}
*Responsável:* ${name || 'Não informado'}
*Telefone/WhatsApp:* ${phone || 'Não informado'}
*E-mail:* ${email || 'Não informado'}
*Localização:* ${cityNeighborhood || 'Não informada'}
*Observações:* ${notes || 'Sem observações adicionais'}`;

    return encodeURIComponent(text);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 animate-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-7 border-b border-amber-900/10 flex items-center justify-between bg-[#faf8f5] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shadow-xs">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 leading-tight">
                Solicitar Orçamento Personalizado
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Proposta técnica e comercial sem compromisso para seu empreendimento
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-6">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4 animate-in fade-in">
              <div className="w-16 h-16 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">
                Solicitação Recebida com Sucesso!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Agradecemos pelo contato, <strong className="text-slate-900">{name}</strong>. Nossa equipe técnica e comercial entrará em contato em breve no número <strong className="text-slate-900">{phone}</strong>.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/5521966388329?text=${buildWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-amber-700 text-white text-sm font-semibold transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Enviar pelo WhatsApp Agora</span>
                </a>
                <button
                  onClick={onClose}
                  className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold transition-all cursor-pointer"
                >
                  Fechar Janela
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleOnlineSubmit} className="space-y-6">
              {/* Tipo de Empreendimento */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  1. Tipo de Empreendimento
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    'Condomínio Residencial',
                    'Condomínio Comercial',
                    'Empresa / Escritório',
                    'Indústria / Galpão',
                    'Escola / Clínica',
                    'Outro Segmento',
                  ].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setEntityType(type)}
                      className={`px-3 py-2 text-xs font-medium rounded-xl border text-center transition-all cursor-pointer ${
                        entityType === type
                          ? 'border-amber-600 bg-amber-50 text-amber-900 font-bold shadow-xs'
                          : 'border-slate-200 text-slate-600 hover:border-slate-300 bg-white'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Serviços Desejados com as novas atividades incluídas */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  2. Atividades e Serviços Necessários (selecione um ou mais)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Portaria & Controle de Acesso',
                    'Monitoramento Eletrônico & Segurança Integrada',
                    'Limpeza & Conservação Patrimonial',
                    'Guardião de Piscina',
                    'Apoio Administrativo',
                    'Motoristas',
                    'Jardinagem & Manutenção de Áreas Verdes',
                    'Zeladoria & Apoio Operacional',
                  ].map((service) => {
                    const isChecked = selectedServices.includes(service);
                    return (
                      <div
                        key={service}
                        onClick={() => toggleService(service)}
                        className={`flex items-center gap-3 p-2.5 rounded-xl border cursor-pointer transition-all ${
                          isChecked
                            ? 'border-amber-600 bg-amber-50/60 text-slate-900 font-medium'
                            : 'border-slate-200 hover:border-slate-300 text-slate-600 bg-white'
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center shrink-0 text-white ${
                            isChecked ? 'bg-amber-600' : 'border border-slate-300 bg-white'
                          }`}
                        >
                          {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                        <span className="text-xs sm:text-sm">{service}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Estimativa de Postos */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  3. Estimativa de Colaboradores ou Postos
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['1 a 2 postos', '3 a 5 postos', 'Mais de 5 postos'].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setStaffCount(opt)}
                      className={`px-3 py-2 text-xs font-medium rounded-xl border text-center transition-all cursor-pointer ${
                        staffCount === opt
                          ? 'border-amber-600 bg-amber-50 text-amber-900 font-bold'
                          : 'border-slate-200 text-slate-600 hover:border-slate-300 bg-white'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dados de Contato */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  4. Seus Dados de Contato
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-slate-600 mb-1">
                      Seu Nome ou Cargo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Carlos (Síndico / Gestor)"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-600 mb-1">
                      WhatsApp / Telefone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(21) 99999-9999"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-600 mb-1">
                      E-mail Institucional
                    </label>
                    <input
                      type="email"
                      placeholder="gestao@empresa.com.br"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-600 mb-1">
                      Bairro / Cidade
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Niterói / RJ"
                      value={cityNeighborhood}
                      onChange={(e) => setCityNeighborhood(e.target.value)}
                      className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-600"
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <label className="block text-xs text-slate-600 mb-1">
                    Detalhes Adicionais (opcional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Horários, particularidades do posto ou dúvidas gerais..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-600 resize-none"
                  />
                </div>
              </div>

              {/* Botões de Ação */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3 border-t border-slate-100">
                <a
                  href={`https://wa.me/5521966388329?text=${buildWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-800 bg-amber-50 hover:bg-amber-100 border border-amber-300 rounded-xl transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Enviar pelo WhatsApp</span>
                </a>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-bold text-white bg-slate-900 hover:bg-amber-700 active:bg-amber-800 rounded-xl shadow-xs transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Solicitar Proposta Formal</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
