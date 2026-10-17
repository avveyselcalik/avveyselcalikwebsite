import React from 'react';
import { principles } from '../data/firmData';
import { Scale, Lock, MessageCircle, FileText } from 'lucide-react';

export const Principles: React.FC = () => {
  const getPrincipleIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Scale className="w-5 h-5 text-[#202326]" />;
      case 1:
        return <MessageCircle className="w-5 h-5 text-[#202326]" />;
      case 2:
      default:
        return <Lock className="w-5 h-5 text-[#202326]" />;
    }
  };

  return (
    <section
      id="mesleki-yaklasim"
      className="py-16 md:py-24 bg-[#FFFFFF] border-b border-[#E2E0D8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Contextual Editorial Stance (5 cols) */}
          <div className="lg:col-span-5 text-left">
            <div className="mb-3.5 inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#202326]" />
              <span className="font-semibold tracking-wider text-[#666B70] uppercase text-[11px]">
                ÇALIŞMA DİSİPLİNİ
              </span>
            </div>

            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#202326] mb-4 text-balance">
              Mesleki Yaklaşım
            </h2>

            <p className="text-sm sm:text-base text-[#666B70] leading-relaxed font-normal mb-8">
              Hukuki uyuşmazlıkların çözümünde ezbere yaklaşımlar yerine, her somut olayın kendi dinamikleri ve ilgili kanun hükümleri çerçevesinde belirlenen bir yol haritası izlenir.
            </p>

            {/* Legal Framework Quotation Card */}
            <div className="p-6 rounded-2xl bg-[#F8F7F4] border border-[#E2E0D8] space-y-3">
              <span className="text-[10px] uppercase tracking-widest text-[#666B70] font-semibold block">
                1136 SAYILI AVUKATLIK KANUNU MADDE 34
              </span>
              <p className="font-serif-display italic text-base sm:text-lg text-[#202326] leading-snug">
                "Avukatlar, yüklendikleri görevleri bu görevin kutsallığına yakışır bir şekilde özen, doğruluk ve onur içinde yerine getirmekle yükümlüdür."
              </p>
              <div className="pt-2 text-xs text-[#666B70] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#202326]" />
                <span>Mesleki Bağımsızlık ve Sır Saklama İlkesi</span>
              </div>
            </div>
          </div>

          {/* Right Column: Numbered Editorial Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            {principles.map((principle, idx) => (
              <div
                key={principle.number}
                className="group p-6 sm:p-7 rounded-2xl bg-[#F8F7F4] hover:bg-[#F2EFEB] border border-[#E2E0D8] transition-all text-left flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-7"
              >
                {/* Number Badge */}
                <div className="flex items-center gap-3 shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-[#FFFFFF] border border-[#E2E0D8] group-hover:border-[#202326]/30 flex items-center justify-center font-serif-display text-xl font-bold text-[#202326] shadow-2xs transition-colors">
                    {principle.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    {getPrincipleIcon(idx)}
                    <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#202326]">
                      {principle.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#666B70] leading-relaxed">
                    {principle.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Note on Transparency & Ethics */}
            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2E0D8] text-xs text-[#666B70] text-left flex items-center justify-between">
              <span>Müvekkil-avukat ilişkisinde dürüstlük, sadakat ve şeffaflık esastır.</span>
              <span className="font-semibold text-[#202326] shrink-0 hidden sm:inline">Mardin Barosu</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
