import React from 'react';
import {
  ShieldCheck,
  Video,
  Sparkles,
  LifeBuoy,
  Briefcase,
  Car,
  Trees,
  Wrench,
  ArrowRight,
  Check,
  Award,
} from 'lucide-react';

export interface SolutionItem {
  id: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  benefits: string[];
  fullDetails: string;
  coverage: string;
}

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: 'portaria',
    title: 'Portaria & Controle de Acesso',
    tagline: 'Segurança preventiva e recepção cordial',
    category: 'Segurança Patrimonial',
    description:
      'Controle rigoroso de entradas e saídas de moradores, visitantes, entregadores e veículos com procedimentos padronizados e atendimento humanizado.',
    image: '/src/assets/images/service_portaria_access_1793912933307.jpg',
    icon: <ShieldCheck className="w-5 h-5 text-amber-600" />,
    benefits: [
      'Triagem e identificação biométrica/digital',
      'Protocolo rigoroso de entregas e correspondências',
      'Postura preventiva e comunicação constante com a gestão',
      'Equipes treinadas em resolução de crises e atendimento cordial',
    ],
    fullDetails:
      'Nossos porteiros passam por capacitação técnica contínua em controle de acesso informatizado, postura profissional e regimento interno. Substituição ágil para manter a continuidade do posto.',
    coverage: 'Residencial, Comercial e Corporativo',
  },
  {
    id: 'monitoramento',
    title: 'Monitoramento Eletrônico & Segurança Integrada',
    tagline: 'Tecnologia em vigilância e resposta imediata',
    category: 'Sistemas & CFTV',
    description:
      'Central de monitoramento conectada a câmeras HD, sensores de intrusão, botões de pânico e ronda virtual para blindagem do perímetro.',
    image: '/src/assets/images/service_security_monitoring_1793912933690.jpg',
    icon: <Video className="w-5 h-5 text-amber-600" />,
    benefits: [
      'Central de videomonitoramento com operadores capacitados',
      'Câmeras IP com visão noturna e inteligência analítica',
      'Ronda virtual periódica e checagem de rotas críticas',
      'Apoio operacional para verificação preventiva',
    ],
    fullDetails:
      'Integração total de CFTV com inteligência artificial para detecção de anomalias perimétricas. Gravação em nuvem com backup redundante e acesso pelo síndico ou gestor.',
    coverage: 'Condomínios, Galpões e Centros Empresariais',
  },
  {
    id: 'limpeza',
    title: 'Limpeza & Conservação Patrimonial',
    tagline: 'Higienização profunda e valorização de ambientes',
    category: 'Facilities & Conservação',
    description:
      'Higienização profunda e manutenção diária de halls, vidros, garagens e pisos nobres com cronograma técnico e insumos de padrão hospitalar.',
    image: '/src/assets/images/service_cleaning_team_1793912932867.jpg',
    icon: <Sparkles className="w-5 h-5 text-amber-600" />,
    benefits: [
      'Cronogramas detalhados de limpeza diária, periódica e pesada',
      'Uso de lavadoras industriais e polidoras de alta performance',
      'Produtos ecológicos certificados e hipoalergênicos',
      'EPIs completos e rigoroso cumprimento das normas regulamentadoras',
    ],
    fullDetails:
      'Equipes treinadas para preservar materiais nobres como granito, porcelanato, vidros e esquadrias de alumínio. Estoque de produtos monitorado e reposto pontualmente.',
    coverage: 'Condomínios, Escritórios, Indústrias e Clínicas',
  },
  {
    id: 'guardiao-piscina',
    title: 'Guardião de Piscina',
    tagline: 'Segurança aquática e prevenção de acidentes',
    category: 'Área de Lazer & Saúde',
    description:
      'Profissionais certificados em salvamento aquático e primeiros socorros para vigilância preventiva, aplicação de normas de segurança e tranquilidade aos banhistas.',
    image: '/src/assets/images/service_pool_lifeguard_1793914511773.jpg',
    icon: <LifeBuoy className="w-5 h-5 text-amber-600" />,
    benefits: [
      'Salva-vidas habilitados e credenciados pelo Corpo de Bombeiros',
      'Vigilância constante da piscina e primeiros socorros imediatos',
      'Orientação de conduta e fiscalização do regulamento da piscina',
      'Inspeção preventiva dos equipamentos de resgate e boias salva-vidas',
    ],
    fullDetails:
      'Essencial para condomínios residenciais e clubes com áreas de piscina, garantindo o cumprimento das legislações vigentes e proteção integral para famílias e crianças.',
    coverage: 'Condomínios Residenciais, Clubes e Hotéis',
  },
  {
    id: 'apoio-administrativo',
    title: 'Apoio Administrativo',
    tagline: 'Eficiência nas rotinas e organização de escritório',
    category: 'Administração & Escritório',
    description:
      'Colaboradores capacitados para recepção corporativa, atendimento telefônico, secretariado, triagem de correspondências e suporte operacional ao dia a dia.',
    image: '/src/assets/images/service_administrative_support_1793914512623.jpg',
    icon: <Briefcase className="w-5 h-5 text-amber-600" />,
    benefits: [
      'Recepcionistas e secretárias com postura executiva',
      'Gestão de correspondências, encomendas e controle de malotes',
      'Apoio em rotinas de faturamento, arquivamento e cadastros',
      'Excelente comunicação interpessoal e domínio de sistemas de escritório',
    ],
    fullDetails:
      'Suporte direto à equipe interna do cliente, síndicos ou gestores patrimoniais, assumindo rotinas de escritório com agilidade, discrição e pontualidade.',
    coverage: 'Empresas, Clínicas, Escritórios e Condomínios Comerciais',
  },
  {
    id: 'motoristas',
    title: 'Motoristas',
    tagline: 'Condução segura, pontualidade e sigilo profissional',
    category: 'Mobilidade & Transporte',
    description:
      'Condutores profissionais com curso de direção defensiva para transporte executivo, frotas corporativas, traslados e logística de equipes com discrição absoluta.',
    image: '/src/assets/images/service_executive_driver_1793914512663.jpg',
    icon: <Car className="w-5 h-5 text-amber-600" />,
    benefits: [
      'Motoristas habilitados (categorias B, C, D e E) com histórico checado',
      'Treinamento em direção defensiva, etiqueta corporativa e primeiros socorros',
      'Checklist diário de pneus, fluidos e manutenção preventiva do veículo',
      'Disponibilidade para rotas executivas, eventos e transporte corporativo',
    ],
    fullDetails:
      'Profissionais discretos e pontuais, treinados para otimizar itinerários e oferecer uma condução tranquila para executivos, funcionários e convidados.',
    coverage: 'Corporações, Eventos e Gestão de Frotas',
  },
  {
    id: 'jardinagem',
    title: 'Jardinagem & Manutenção de Áreas Verdes',
    tagline: 'Paisagismo impecável e sustentabilidade',
    category: 'Áreas Externas',
    description:
      'Poda técnica, adubação orgânica, corte de gramados e revitalização constante de jardins para manter a harmonia visual e o valor do empreendimento.',
    image: '/src/assets/images/service_gardening_landscaping_1793912934484.jpg',
    icon: <Trees className="w-5 h-5 text-amber-600" />,
    benefits: [
      'Poda estética e fitossanitária de arbustos e árvores',
      'Adubação equilibrada e controle sustentável de pragas',
      'Sistemas de irrigação programada e conservação do solo',
      'Equipamentos modernos a bateria e combustão próprios',
    ],
    fullDetails:
      'Cuidado especializado com plantas ornamentais, canteiros e gramados extensos. Cronograma mensal alinhado com o clima da região para manutenção do vigor vegetal.',
    coverage: 'Condomínios Clubes, Parques Empresariais e Chácaras',
  },
  {
    id: 'zeladoria',
    title: 'Zeladoria & Apoio Operacional',
    tagline: 'Gestão preventiva e apoio direto ao síndico',
    category: 'Apoio Operacional',
    description:
      'Inspeções prediais diárias, fiscalização do regimento interno, acompanhamento de prestadores terceiros e resolução de pequenos reparos.',
    image: '/src/assets/images/service_zeladoria_maintenance_1793912934258.jpg',
    icon: <Wrench className="w-5 h-5 text-amber-600" />,
    benefits: [
      'Checklist diário de bombas, iluminação, portões e elevadores',
      'Acompanhamento e fiscalização de prestadores terceiros',
      'Comunicação proativa e alinhamento diário com a administração',
      'Gestão inteligente de resíduos e descarte adequado',
    ],
    fullDetails:
      'O zelador Costa e Araujo atua como o braço direito da administração predial, identificando irregularidades precocemente e reduzindo custos com manutenções corretivas.',
    coverage: 'Edifícios Residenciais e Torres Comerciais',
  },
];

interface SolutionsSectionProps {
  onSelectSolution: (solution: SolutionItem) => void;
  onOpenQuote: (serviceName?: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  onSelectSolution,
  onOpenQuote,
}) => {
  return (
    <section id="solucoes" className="py-20 sm:py-28 bg-[#faf8f5] border-y border-amber-900/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header split da Seção: Título à esquerda, Texto à direita */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-amber-900/10">
          <div className="max-w-xl">
            <span className="text-xs font-bold tracking-wider text-amber-700 uppercase flex items-center gap-2">
              <span className="w-6 h-0.5 bg-amber-600 inline-block" />
              <span>Nosso Portfólio de Terceirização</span>
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Serviços Especializados para sua Infraestrutura
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Equipes capacitadas e processos padronizados para garantir eficiência operacional e tranquilidade ao gestor.
            </p>
          </div>
        </div>

        {/* Grid de Cards Modulares Arredondados com os 8 Serviços */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOLUTIONS_DATA.map((solution) => (
            <div
              key={solution.id}
              className="group flex flex-col justify-between bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-amber-400/60 transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Imagem do Card */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-semibold text-slate-800 shadow-xs flex items-center gap-1.5 border border-slate-100">
                    {solution.icon}
                    <span className="text-[11px]">{solution.category}</span>
                  </div>
                </div>

                {/* Conteúdo Textual */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors leading-snug">
                    {solution.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {solution.description}
                  </p>

                  {/* Lista rápida de benefícios */}
                  <div className="mt-4 space-y-1.5 border-t border-slate-100 pt-3">
                    {solution.benefits.slice(0, 2).map((benefit, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer com Ações */}
              <div className="p-5 sm:p-6 pt-0 flex items-center justify-between border-t border-slate-100/80 mt-auto">
                <button
                  onClick={() => onSelectSolution(solution)}
                  className="text-xs font-semibold text-slate-600 hover:text-amber-700 transition-colors cursor-pointer py-1"
                >
                  Detalhes
                </button>

                <button
                  onClick={() => onOpenQuote(solution.title)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-amber-700 rounded-lg transition-all cursor-pointer shadow-xs"
                >
                  <span>Cotar</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Card Destaque: Gestão Integrada de Múltiplos Postos */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-slate-900 via-[#182030] to-slate-900 text-white p-8 sm:p-10 border border-amber-500/30 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-400/30 mb-3">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Contratos Integrados & Faturamento Unificado</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Necessita de uma solução combinada para seu empreendimento?
              </h3>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Agrupamos portaria, limpeza, apoio administrativo, zeladoria e guardião de piscina sob uma única gestão, com gerente de contas dedicado, supervisão operacional e proposta personalizada.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={() => onOpenQuote('Pacote Integrado Completo')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-[#d6b46e] via-[#c5a059] to-[#b8934a] hover:from-[#dfbe7b] hover:to-[#c5a059] rounded-xl transition-all cursor-pointer shadow-md"
              >
                <span>Solicitar Proposta Completa</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/5521966388329?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20um%20pacote%20integrado%20de%20terceiriza%C3%A7%C3%A3o%20de%20servi%C3%A7os."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all"
              >
                <span>Fale conosco via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
