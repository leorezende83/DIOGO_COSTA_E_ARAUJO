import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SolutionsSection, SolutionItem } from './components/SolutionsSection';
import { DifferentiatorsSection } from './components/DifferentiatorsSection';
import { ClientsSection } from './components/ClientsSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { SolutionDetailModal } from './components/SolutionDetailModal';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string | undefined>(undefined);
  const [selectedSolutionForDetail, setSelectedSolutionForDetail] = useState<SolutionItem | null>(null);

  const handleOpenQuote = (serviceName?: string) => {
    setSelectedServiceForQuote(serviceName);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteModalOpen(false);
    setSelectedServiceForQuote(undefined);
  };

  const handleOpenSolutionDetail = (solution: SolutionItem) => {
    setSelectedSolutionForDetail(solution);
  };

  const handleCloseSolutionDetail = () => {
    setSelectedSolutionForDetail(null);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-amber-500/20 selection:text-amber-900">
      {/* Top Header com logo em destaque */}
      <Header onOpenQuote={handleOpenQuote} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section com foto de Terceirização de Mão de Obra */}
        <Hero onOpenQuote={() => handleOpenQuote()} />

        {/* 2. Seção Sobre o Grupo */}
        <AboutSection onOpenQuote={() => handleOpenQuote()} />

        {/* 3. Seção Nossas Soluções (8 atividades) */}
        <SolutionsSection
          onSelectSolution={handleOpenSolutionDetail}
          onOpenQuote={handleOpenQuote}
        />

        {/* 4. Diferenciais Competitivos */}
        <DifferentiatorsSection />

        {/* 5. Seção Clientes (Referência Dioclean) */}
        <ClientsSection />
      </main>

      {/* 6. Rodapé e Conversão */}
      <Footer onOpenQuote={() => handleOpenQuote()} />

      {/* Botão Flutuante de Contato WhatsApp ("Fale conosco") */}
      <a
        href="https://wa.me/5521966388329?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20o%20Grupo%20Costa%20e%20Araujo%20sobre%20terceiriza%C3%A7%C3%A3o%20de%20servi%C3%A7os."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-full bg-slate-900 hover:bg-amber-700 active:scale-95 text-white font-semibold text-xs sm:text-sm shadow-xl hover:shadow-2xl transition-all duration-300 group border border-amber-400/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
        aria-label="Falar com o Grupo Costa e Araujo no WhatsApp"
      >
        <MessageCircle className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
        <span>Fale conosco</span>
      </a>

      {/* Modals */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        initialService={selectedServiceForQuote}
        onClose={handleCloseQuote}
      />

      <SolutionDetailModal
        solution={selectedSolutionForDetail}
        onClose={handleCloseSolutionDetail}
        onOpenQuote={handleOpenQuote}
      />
    </div>
  );
}
