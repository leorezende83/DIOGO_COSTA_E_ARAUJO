import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { logoCostaEAraujo } from '../assets/images';

interface HeaderProps {
  onOpenQuote: (serviceName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-amber-900/10 py-2'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/60 py-2.5 sm:py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Brand Logo - Tamanho duplicado para máximo destaque */}
          <a
            href="#"
            className="flex items-center gap-4 group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 rounded-lg p-1"
          >
            <img
              src={logoCostaEAraujo}
              alt="Grupo Costa e Araujo - Terceirização de Serviços"
              className="h-20 sm:h-28 md:h-32 w-auto object-contain rounded-md transition-transform group-hover:scale-102"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700">
            <a
              href="#sobre"
              className="hover:text-amber-700 transition-colors whitespace-nowrap py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-amber-600 after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              Sobre o Grupo
            </a>
            <a
              href="#solucoes"
              className="hover:text-amber-700 transition-colors whitespace-nowrap py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-amber-600 after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              Nossas Soluções
            </a>
            <a
              href="#diferenciais"
              className="hover:text-amber-700 transition-colors whitespace-nowrap py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-amber-600 after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              Diferenciais
            </a>
            <a
              href="#clientes"
              className="hover:text-amber-700 transition-colors whitespace-nowrap py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-amber-600 after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              Clientes
            </a>
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/5521966388329?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20equipe%20do%20Grupo%20Costa%20e%20Araujo."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold text-slate-800 bg-amber-50 hover:bg-amber-100 border border-amber-200/80 rounded-lg transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 text-amber-700" />
              <span>Fale conosco</span>
            </a>

            <button
              onClick={() => onOpenQuote()}
              className="inline-flex items-center justify-center px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-amber-700 active:bg-amber-800 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2"
            >
              Solicitar Orçamento
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenQuote()}
              className="sm:hidden px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 rounded-md"
            >
              Orçamento
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3 text-sm font-medium text-slate-700">
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-amber-50 hover:text-amber-800 text-slate-900"
            >
              Sobre o Grupo
            </a>
            <a
              href="#solucoes"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-amber-50 hover:text-amber-800 text-slate-900"
            >
              Nossas Soluções
            </a>
            <a
              href="#diferenciais"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-amber-50 hover:text-amber-800 text-slate-900"
            >
              Diferenciais
            </a>
            <a
              href="#clientes"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-amber-50 hover:text-amber-800 text-slate-900"
            >
              Clientes
            </a>
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full text-center py-2.5 px-4 text-sm font-semibold text-white bg-slate-900 hover:bg-amber-700 rounded-lg shadow-sm"
              >
                Solicitar Orçamento Gratuito
              </button>
              <a
                href="https://wa.me/5521966388329?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20equipe%20do%20Grupo%20Costa%20e%20Araujo."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2 px-4 text-sm font-medium text-slate-800 bg-amber-50 hover:bg-amber-100 rounded-lg border border-amber-200/80"
              >
                <MessageCircle className="w-4 h-4 text-amber-700" />
                <span>Fale conosco no WhatsApp</span>
              </a>
              <a
                href="tel:2137410040"
                className="flex items-center justify-center gap-2 py-2 px-4 text-sm font-medium text-slate-700 bg-slate-100 rounded-lg"
              >
                <Phone className="w-4 h-4 text-slate-500" />
                <span>(21) 3741-0040</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
